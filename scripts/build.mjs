import { copyFile, mkdir } from "node:fs/promises";

const source = new URL("../src/index.html", import.meta.url);
const output = new URL("../dist/", import.meta.url);

await mkdir(output, { recursive: true });
await copyFile(source, new URL("index.html", output));
