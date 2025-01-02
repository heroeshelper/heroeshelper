import fs from "node:fs";

const file = "./public/sitemap.txt";
const baseUrl = "https://heroeshelper.net";

const urls = ["", "/heroes/list", "/heroes/line-up", "/about", "/cookies", "/changelog"];

const heroes = JSON.parse(fs.readFileSync("./src/shared/heroes/data/heroes.json"));

heroes.forEach(hero => urls.push(`/hero/${hero.id}-${hero.shortname}`));

fs.writeFileSync(file, urls.map(u => `${baseUrl}${u}`).join("\n"));

console.log(`Successfully generated sitemap with ${urls.length} urls.`);
