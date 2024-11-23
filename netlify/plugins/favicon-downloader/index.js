import { writeFile } from 'node:fs/promises'
import { Readable } from 'node:stream'
import fs from "node:fs"

const publicDir = "./public"

const files = [
    "favicon.ico",
    "apple-touch-icon.png",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "favicon-192x192.png",
    "favicon-512x512.png"
]

export const onPreBuild = async function () {
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }

    for (const fileName of files) {
        const response = await fetch(`${process.env.VITE_ASSET_LOCATION}/${fileName}`);
        const stream = Readable.fromWeb(response.body);
        await writeFile(`${publicDir}/${fileName}`, stream);
    }
}