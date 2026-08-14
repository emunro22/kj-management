#!/usr/bin/env node
/**
 * Downloads the original media from the WordPress site into public/images/.
 *
 * Usage:  node scripts/fetch-wp-assets.mjs
 *
 * Everything lands in public/images/original/ under its WordPress filename,
 * then the confirmed assets are copied into the slots the components expect.
 * Anything still unmapped is listed at the end for you to place by eye.
 */

import { mkdir, writeFile, copyFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const BASE = 'https://kjmanagementaccountingsolutions.com/wp-content/uploads';
const ORIGINAL_DIR = 'public/images/original';
const IMAGES_DIR = 'public/images';
const ICONS_DIR = 'public/images/icons';

const FILES = [
  '2025/03/mjvn.jpg',
  '2025/03/dnhjxcbnxn.png',
  '2025/03/bzbzbazb.png',
  '2025/03/8B72D8A7-F25F-4DB0-883F-D459E0731B83.jpeg',
  '2025/03/00287664-9B2C-4D24-9687-6D426648C4AC.jpeg',
  '2025/03/extended_image_blended.jpeg',
  '2025/03/46AE3DF2-B672-4ACB-B6A9-919F76203A76.jpeg',
  '2025/03/07F96FB8-0FC7-4E13-99EF-D44824050E45.png',
  '2025/03/EA8BCD7C-D968-4B68-AC45-F7AB74936B52.png',
  '2025/02/4E4B2728-B40B-4AC4-BA7B-FD9C18C4E7EE.jpeg',
  '2025/02/1F529C3E-B73E-49C5-B8C7-943C915F3CDD.jpeg',
  '2025/02/D17B015E-9D51-4B32-B9B5-6DF94BE4A4B8.jpeg',
  '2025/02/2025-02-13_23-41.png',
  '2025/02/Video.png',
  '2025/02/11.jpg',
  '2025/02/upwork-logo-png-transparent.png',
  '2025/02/logo_accounta_b.png',
  '2025/02/accounting-concept-accounting-staff-is-summarizing-the-company-budget-.jpg',
  '2025/02/pngaaa.com-5441679.png',
  '2025/02/xero.jpg',
  '2025/02/upwork.jpg',
  '2025/02/Untitled-1.jpg',
  '2025/02/Virtual-Financial-Controller.svg',
  '2025/02/Management-Accounting.svg',
  '2025/02/Financial-Modelling-for-Investment.svg',
  '2025/02/Cash-Flow-Planning.svg',
  '2025/02/Budgeting-Forecasting.svg',
  '2025/02/Bookkeeping.svg',
  '2025/02/Annual-Accounts.svg',
  '2023/06/cropped-KJ-Logo-1.png',
  '2023/06/KJ-Logo-1.png',
  '2023/06/KJ-Logo.png',
  '2023/06/KJ-Management-Logo.png',
];

/**
 * Confirmed from the live pages' markup.
 * source filename -> destination inside public/images/
 */
const MAPPING = {
  'KJ-Management-Logo.png': 'logo-header.png',
  'KJ-Logo-1.png': 'logo-footer.png',
  'KJ-Logo.png': 'logo-mark.png',
  'cropped-KJ-Logo-1.png': 'favicon-source.png',
  'EA8BCD7C-D968-4B68-AC45-F7AB74936B52.png': 'about-founders.png',
  'upwork-logo-png-transparent.png': 'logo-upwork.png',
  'Video.png': 'video-poster.png',
  'xero.jpg': 'badge-xero.jpg',
  'upwork.jpg': 'badge-upwork.jpg',
  // Service icons keep their names, just moved into icons/
  'Management-Accounting.svg': 'icons/Management-Accounting.svg',
  'Annual-Accounts.svg': 'icons/Annual-Accounts.svg',
  'Cash-Flow-Planning.svg': 'icons/Cash-Flow-Planning.svg',
  'Budgeting-Forecasting.svg': 'icons/Budgeting-Forecasting.svg',
  'Financial-Modelling-for-Investment.svg': 'icons/Financial-Modelling-for-Investment.svg',
  'Bookkeeping.svg': 'icons/Bookkeeping.svg',
  'Virtual-Financial-Controller.svg': 'icons/Virtual-Financial-Controller.svg',
};

/** Slots the components read from that you still need to fill by eye. */
const UNRESOLVED_SLOTS = [
  ['hero.jpg', 'Homepage hero background — the couple at the laptop'],
  ['mission.jpg', '"Whether you\'re a start-up…" band background'],
  ['contact.jpg', 'Contact section background'],
  ['og.jpg', 'Social share card, 1200×630'],
  ['badge-acca.png', 'ACCA logo in the Trusted By strip'],
  ['badge-xero-silver.png', 'Xero Silver Partner badge'],
];

async function download(relPath) {
  const url = `${BASE}/${relPath}`;
  const dest = path.join(ORIGINAL_DIR, path.basename(relPath));

  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (asset migration)' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buffer);
  return { name: path.basename(relPath), bytes: buffer.length };
}

async function main() {
  await mkdir(ORIGINAL_DIR, { recursive: true });
  await mkdir(ICONS_DIR, { recursive: true });

  console.log(`Downloading ${FILES.length} files…\n`);

  const failed = [];
  for (const file of FILES) {
    try {
      const { name, bytes } = await download(file);
      console.log(`  ✓ ${name.padEnd(60)} ${(bytes / 1024).toFixed(0)} KB`);
    } catch (error) {
      failed.push(file);
      console.log(`  ✗ ${path.basename(file).padEnd(60)} ${error.message}`);
    }
  }

  console.log('\nMapping confirmed assets into place…\n');
  for (const [source, dest] of Object.entries(MAPPING)) {
    const from = path.join(ORIGINAL_DIR, source);
    if (!existsSync(from)) continue;
    await copyFile(from, path.join(IMAGES_DIR, dest));
    console.log(`  ${source}  →  ${dest}`);
  }

  if (failed.length) {
    console.log(`\n${failed.length} download(s) failed:`);
    failed.forEach((f) => console.log(`  - ${f}`));
  }

  console.log('\n──────────────────────────────────────────────');
  console.log('Still to place by hand (open public/images/original/ and pick):');
  for (const [slot, description] of UNRESOLVED_SLOTS) {
    console.log(`  ${slot.padEnd(24)} ${description}`);
  }

  const remaining = (await readdir(ORIGINAL_DIR)).filter(
    (f) => !Object.keys(MAPPING).includes(f),
  );
  console.log('\nUnmapped originals to choose from:');
  remaining.forEach((f) => console.log(`  ${f}`));
  console.log('──────────────────────────────────────────────');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
