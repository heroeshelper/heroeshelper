import { writeFile } from 'node:fs/promises'
import { Readable } from 'node:stream'
import fs from "node:fs"

const publicDir = "./public"

export const onPreBuild = async function () {
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }

    const response = await fetch(`${process.env.VITE_ASSET_LOCATION}/favicon.ico`)
    const stream = Readable.fromWeb(response.body)
    await writeFile(`${publicDir}/favicon.ico`, stream)
}