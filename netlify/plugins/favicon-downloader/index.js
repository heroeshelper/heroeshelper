import { writeFile } from 'node:fs/promises'
import { Readable } from 'node:stream'

export const onPreBuild = async function () {
    const response = await fetch(`${process.env.VITE_ASSET_LOCATION}/favicon.ico`)
    const stream = Readable.fromWeb(response.body)
    await writeFile('./public/favicon.ico', stream)
}