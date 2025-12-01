Business Search Scraper API

A Node.js + Express backend that scrapes business information from bizfileonline.sos.ca.gov using Playwright, Cheerio, and the Puppeteer Stealth plugin to bypass bot-detection systems.

This API accepts a search term, performs a real-time browser scrape, extracts business details, and exports the results to a CSV file.

🚀 Features

Scrapes live business data from BizFileOnline

Uses Playwright + Stealth plugin to avoid bot detection

Parses HTML using Cheerio

Supports up to 500 records

Automatically retries or skips invalid/missing records

Exports results to CSV

Returns JSON for API usage

Fast, lightweight, and fully automated

📁 Project Structure
/src
  /router
    index.ts
  /controllers
    searchTerm.ts     <-- Main scraper logic
/server.ts           <-- Express server
package.json
README.md
/csv
  scraped-data.csv     <-- Generated automatically

🔧 Tech Stack
Tool	Purpose
Node.js	Runtime environment
Express.js	Backend routing & API
Playwright (chromium)	Headless browser automation
puppeteer-extra-plugin-stealth	Avoid bot-detection
Cheerio	HTML parsing
csv-writer	CSV export
TypeScript	Type safety
📦 Installation

Make sure you have Node.js (v18+) installed.

git clone <your-repo-link>
cd <project-folder>
npm install

🔑 Environment Variables

No environment variables are required for the basic scraper.

(You may add .env later for proxies / scaling / deployment.)

▶️ Run the Server

Development mode (with auto-reload):

npm run dev


Production build:

npm run build
npm start

🛠️ API Endpoint
GET /api/search?term=YOUR_QUERY
Example:
/api/search?term=apple

Response Example:
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

📄 CSV Output

After each request, results are saved to:

/csv/scraped-data.csv

This allows partial results to be saved even if a timeout or browser error occurs.

🔍 Error Handling

This project includes:

Timeouts

Element-not-found handling

Skips invalid rows instead of crashing

Always closes browser

Always generates partial CSV output

🧠 Bypassing Bot Detection

This scraper uses:

✔ Playwright Chromium
✔ Puppeteer-extra Stealth plugin
✔ Realistic user-agent
✔ Human-like delays
✔ Full browser (non-headless mode optional)

These significantly reduce detection by Incapsula & similar firewalls.

🧪 Development Notes

Headless mode is disabled for easier debugging.

You may enable it for production:

chromium.launch({ headless: true })

CSV files overwrite automatically each run.