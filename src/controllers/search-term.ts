import { Request, Response } from "express";
import { chromium } from "playwright";
import * as cheerio from "cheerio";
import { createObjectCsvWriter } from "csv-writer";
import path from "path";

type DataType = {
  entityInformation: string | null;
  initialFillingDate: string | null;
  status: string | null;
  entityType: string | null;
  formedIn: string | null;
  agent: string | null;
};

export async function searchTerm(req: Request, res: Response) {
  const term = req.query.term as string;
  const maxRecords = 500;
  const data: DataType[] = [];

  // Setup CSV writer
  const csvWriter = createObjectCsvWriter({
    path: path.join(__dirname, "../../csv/scraped-data.csv"),
    header: [
      { id: "entityInformation", title: "Entity Information" },
      { id: "initialFillingDate", title: "Initial Filling Date" },
      { id: "status", title: "Status" },
      { id: "entityType", title: "Entity Type" },
      { id: "formedIn", title: "Formed In" },
      { id: "agent", title: "Agent" },
    ],
  });

  let browser;

  try {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
      viewport: { width: 1280, height: 720 },
      locale: "en-US",
      permissions: ["geolocation"],
    });

    const page = await context.newPage();
    await page.goto("https://bizfileonline.sos.ca.gov/search/business", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(2000);

    await page.waitForSelector("input.search-input", { timeout: 10000 });
    await page.fill("input.search-input", term);
    await page.keyboard.press("Enter");
    await page.waitForSelector(".div-table-cell.interactive");

    const html = await page.content();
    const $ = cheerio.load(html);

    $(".table-wrapper tr.div-table-row").each(function () {
      if (data.length >= maxRecords) return;

      try {
        data.push({
          entityInformation: $(this).find("td:nth-child(1) span.cell")?.text()?.trim() || null,
          initialFillingDate: $(this).find("td:nth-child(2) span.cell")?.text()?.trim() || null,
          status: $(this).find("td:nth-child(3) span.cell")?.text()?.trim() || null,
          entityType: $(this).find("td:nth-child(4) span.cell")?.text()?.trim() || null,
          formedIn: $(this).find("td:nth-child(5) span.cell")?.text()?.trim() || null,
          agent: $(this).find("td:nth-child(6) span.cell")?.text()?.trim() || null,
        });
      } catch (rowError) {
        console.log("Row skipped due to error:", rowError);
      }
    });

    // Write CSV after scraping
    await csvWriter.writeRecords(data);

    return res.status(200).json({ message: "Scraping complete", data });
  } catch (error) {
    console.log("Scraper error:", error);
    if (data.length > 0) await csvWriter.writeRecords(data); // Save partial results
    return res.status(500).json({ error: error instanceof Error ? error.message : "Unknown error", data });
  } finally {
    if (browser) await browser.close();
  }
}
