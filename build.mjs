import {build} from "esbuild";
import {mkdir, mkdtemp, rm, writeFile} from "node:fs/promises";
import path from "node:path";
import {pathToFileURL} from "node:url";
import {createElement} from "react";
import {renderToString} from "react-dom/server";

const options = {bundle:true, jsx:"automatic", define:{"process.env.NODE_ENV":'"production"'}, logLevel:"warning"};
await mkdir("assets", {recursive:true});
await build({...options, entryPoints:["src/client.tsx"], outfile:"assets/portfolio.js", platform:"browser", minify:true});
const temp = await mkdtemp(".portfolio-build-");
try {
  const file = path.resolve(temp, "render.mjs");
  await build({...options, entryPoints:["src/Portfolio.tsx"], outfile:file, format:"esm", platform:"node", external:["lucide-react","react","react/*","react-dom","react-dom/*"]});
  const {default: Portfolio} = await import(pathToFileURL(file).href);
  const markup = renderToString(createElement(Portfolio));
  const html = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Emmanuel Kebodi | Data Analyst</title>
<meta name="description" content="Explore four Excel, SQL and Power BI case studies and fourteen academic research studies by topic. View Emmanuel Kebodi’s CV, methods and project sources.">
<meta name="theme-color" content="#172b2b"><link rel="icon" href="assets/brand.svg"><link rel="stylesheet" href="styles.css">
<script defer src="assets/portfolio.js"></script></head><body><div id="portfolio">${markup}</div>
<noscript>Enable JavaScript to filter the collections and open study details. <a href="https://github.com/emmyk77">Explore the GitHub projects</a> or <a href="https://drive.google.com/drive/folders/1tBkJbSdl14W_DgniZ_lChsf41m_zfdBb">browse the academic research collection</a>.</noscript></body></html>`;
  await writeFile("index.html", html);
  const previous = {"cart.html":"cart-abandonment","clicker.html":"shop-clicker","wealth.html":"wealthsimple","getshop.html":"getshop-marketing"};
  for (const [name,id] of Object.entries(previous)) {
    const destination = "./index.html?project="+id+"#work";
    await writeFile(name,`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Project notes | Emmanuel Kebodi</title><meta http-equiv="refresh" content="0;url=${destination}"><a href="${destination}">Open this case study</a></html>\n`);
  }
} finally {
  await rm(temp, {recursive:true, force:true});
}
