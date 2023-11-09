import { JSDOM } from "jsdom";
import { NextApiRequest, NextApiResponse } from "next";

const getDownload = async () => {
  const response = await fetch("https://www.npmjs.com/package/puppeteer");
  const html = await response.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const downloads = document.querySelector("._9ba9a726")?.textContent;
  console.log(downloads);
  return downloads;
};
export default getDownload;
