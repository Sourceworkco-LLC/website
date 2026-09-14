/**
 * Generates public/capability-statement.pdf as a placeholder so the download
 * button on /government is wired to a real file. Replace the PDF with the
 * designed capability statement when it is ready; this script is only here so
 * the placeholder can be regenerated if it is ever lost.
 *
 * Usage: node scripts/make-placeholder-pdf.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const lines = [
  ["SOURCEWORK LLC", 28, 0, 720],
  ["CAPABILITY STATEMENT", 16, 0, 688],
  ["Complex Requirements. Real Outcomes.", 12, 0, 656],
  ["This is a placeholder document.", 12, 0, 600],
  ["The designed capability statement replaces this file at", 12, 0, 580],
  ["public/capability-statement.pdf, same path, same link.", 12, 0, 560],
  ["Nashville, Tennessee", 12, 0, 500],
  ["ryan@sourceworkco.com", 12, 0, 480],
  ["sourceworkco.com", 12, 0, 460],
];

const content =
  lines
    .map(
      ([text, size, , y]) =>
        `BT /F1 ${size} Tf 72 ${y} Td (${String(text).replace(/([()\\])/g, "\\$1")}) Tj ET`,
    )
    .join("\n") + "\n";

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}endstream`,
];

let pdf = "%PDF-1.4\n";
const offsets = [];

objects.forEach((body, index) => {
  offsets.push(Buffer.byteLength(pdf));
  pdf += `${index + 1} 0 obj\n${body}\nendobj\n`;
});

const xrefOffset = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
pdf += offsets.map((offset) => `${String(offset).padStart(10, "0")} 00000 n \n`).join("");
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

mkdirSync(join(root, "public"), { recursive: true });
writeFileSync(join(root, "public", "capability-statement.pdf"), pdf, "latin1");
console.log("Wrote public/capability-statement.pdf");
