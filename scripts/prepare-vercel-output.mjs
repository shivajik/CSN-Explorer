import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const appRoot = resolve(repoRoot, "artifacts/aurangabad-tours");
const buildOutput = resolve(appRoot, "dist/public");

async function mirrorOutput(targetDir) {
  await rm(targetDir, { recursive: true, force: true });
  await mkdir(targetDir, { recursive: true });
  await cp(buildOutput, targetDir, { recursive: true });
}

await mirrorOutput(resolve(repoRoot, "public"));
await mirrorOutput(resolve(appRoot, "public"));
