import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function decodeFile(src, dest) {
  const b64 = await readFile(src, "utf8");
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, Buffer.from(b64.replace(/\s/g, ""), "base64"));
}

async function decodeDir(srcDir, destDir) {
  let entries = [];
  try {
    entries = await readdir(srcDir);
  } catch {
    return;
  }
  await mkdir(destDir, { recursive: true });
  for (const name of entries) {
    if (!name.endsWith(".b64")) continue;
    await decodeFile(path.join(srcDir, name), path.join(destDir, name.slice(0, -4)));
  }
}

await decodeDir(path.join(root, "encoded/images"), path.join(root, "public/images"));
await decodeDir(path.join(root, "encoded"), path.join(root, "public"));
