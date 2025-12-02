A Node.js + Express backend that scrapes bizfileonline.sos.ca.gov using Playwright, Cheerio, and the Puppeteer Stealth plugin to bypass bot-detection systems.

This API accepts a search term, performs a real-time browser scrape, extracts business details, and exports the results to a CSV file.

## 📎 Submission Deliverables

The following files required for the technical assessment are included:

### **📄 Sample Output CSV**
Download the sample scraped CSV output:  
👉 **[Sample output CSV](https://drive.google.com/file/d/19DuciJNZtF5Ft7SxfduMtmvUlfsPXBpn/view?usp=drive_link)**

### **🎥 Screen Recording (Coding Process + Output Demo)**  
Watch here:  
👉 **[Screen recording]()**

## 🚀 Features

- Uses Playwright + Stealth plugin to avoid bot detection
- Parses HTML using Cheerio
- Supports up to 500 records
- Automatically retries or skips invalid/missing records
- Exports results to CSV
- Returns JSON for API usage
- Reliable and fully automated scraping workflow

## 📁 Project Structure

```text
/src
  /router
    index.ts
  /controllers
    searchTerm.ts
  server.ts
package.json
README.md
/csv
  scraped-data.csv
```

## 🔧 Tech Stack

- Tool	Purpose
- Node.js	Runtime environment
- Express.js	Backend routing & API
- Playwright (chromium)	Headless browser automation
- puppeteer-extra-plugin-stealth	Avoid bot-detection
- Cheerio	HTML parsing
- csv-writer	CSV export
- TypeScript	Type safety
  
## 📦 Installation

- Make sure you have Node.js (v18+) installed.
```bash
git clone https://github.com/JulzOhern/technical-assesment.git
```
```bash
cd <project-folder>
```
```bash
npm install
```
Note: If you haven’t installed Chromium yet, run:
```bash
npx playwright install chromium
```

## 🔑 Environment Variables

- No environment variables are required for the basic scraper.
- (You may add .env later for proxies / scaling / deployment.)

## ▶️ Run the Server

- Development mode (with auto-reload):
- npm run dev

## Production build:

```bash
  npm run build
```
```base
  npm start
```

## 🛠️ API Endpoint

```http
GET /api/search?term=YOUR_QUERY
```
Example:
```http
GET /api/search?term=apple
```

Response Example:
```json
[
  {
    "entityInformation": "! ! ! APPLE IPAD & ANDROID TABLET TUTORING ! ! ! (3110952)",
    "initialFillingDate": "10/06/2009",
    "status": "Active",
    "entityType": "Stock Corporation - CA - General",
    "formedIn": "CALIFORNIA",
    "agent": "KOUROSH MASJEDI"
  },
]
```

## 📄 CSV Output

After each request, results are saved to:
- /csv/scraped-data.csv

This allows partial results to be saved even if a timeout or browser error occurs.

## 🔍 Error Handling

This project includes:

- Timeouts
- Element-not-found handling
- Skips invalid rows instead of crashing
- Always closes browser
- Always generates partial CSV output

## 🧠 Bypassing Bot Detection

This scraper uses:

✔ Playwright Chromium

✔ Puppeteer-extra Stealth plugin

✔ Realistic user-agent

✔ Human-like delays

✔ Full browser (non-headless mode optional)

These significantly reduce detection by Incapsula & similar firewalls.

## 🧪 Development Notes

- Headless mode is disabled for easier debugging.
- You may enable it for production:
- chromium.launch({ headless: true })
- CSV files overwrite automatically each run.
