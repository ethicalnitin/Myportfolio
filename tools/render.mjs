// Renders tools/resume.html to public/Nitin_Srivastava_Resume.pdf and
// tools/og-card.html to public/og.png with headless Chrome or Edge.
//   npm run render            (set CHROME_PATH if the browser isn't found)
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const browser = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].find((p) => p && existsSync(p));

if (!browser) {
  console.error("No Chrome or Edge found. Set CHROME_PATH to the browser executable.");
  process.exit(1);
}

const page = (name) => pathToFileURL(path.join(root, "tools", name)).href;
const out = (name) => path.join(root, "public", name);
// The virtual time budget gives web fonts time to load before capture.
const common = ["--headless=new", "--disable-gpu", "--no-first-run", "--hide-scrollbars", "--virtual-time-budget=10000"];

execFileSync(browser, [...common, "--no-pdf-header-footer", `--print-to-pdf=${out("Nitin_Srivastava_Resume.pdf")}`, page("resume.html")], {
  stdio: "inherit",
});
execFileSync(
  browser,
  [...common, "--window-size=1200,630", "--force-device-scale-factor=1", `--screenshot=${out("og.png")}`, page("og-card.html")],
  { stdio: "inherit" }
);
console.log("Rendered public/Nitin_Srivastava_Resume.pdf and public/og.png");
