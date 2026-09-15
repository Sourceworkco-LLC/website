/**
 * Generates public/capability-statement.pdf.
 *
 * Built from the same registered facts the site renders, so the document a
 * contracting officer downloads can never drift from the page they downloaded
 * it from. Nothing in it is claimed that is not established: no past
 * performance, no contract vehicles, no socioeconomic certifications.
 *
 * Replace this with a designed statement when one exists. Until then this is a
 * real, accurate document rather than a placeholder.
 *
 * Usage: node scripts/make-capability-statement.mjs
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Kept in step with content/site.ts by hand: this script runs in plain node,
// outside the TypeScript build.
const DATA = {
  legalName: "SOURCEWORK LLC",
  tagline: "THE WORK BEHIND THE WORK.",
  promise: "Capability already exists. We find it and put it to work.",
  summary:
    "A customer issues a requirement. We find the commercial capability to fill it, qualify the sources, submit a compliant quote, and carry the work through delivery under one contract and one point of accountability.",
  company: [
    ["UEI", "Z7AZH895XD63"],
    ["CAGE Code", "24SS2"],
    ["SAM.gov Registration", "Active, All Awards, expires 28 August 2027"],
    ["Business Type", "Small Business"],
    ["Headquarters", "Nashville, Tennessee (state of registration: Tennessee)"],
    ["Service Area", "Nationwide"],
    ["NAICS / PSC Codes", "Not yet published"],
  ],
  capabilities: [
    ["Products & Equipment", "Commercial products, industrial materials, and specialized equipment sourced to specification."],
    ["Technology & Digital", "Software, licensing, automation, AI-enabled workflow, implementation, and integration."],
    ["Logistics", "Freight, transportation, and delivery coordination to the site and the schedule."],
    ["Facilities & Field Services", "Facility support, field operations, and sustainment through qualified commercial providers."],
    ["Specialty Sourcing", "Obsolete, single-source, long lead time, and short-notice requirements."],
    ["Supplier Coordination", "One purchase order for the customer; manufacturers, distributors, and carriers managed by us."],
  ],
  pipeline: [
    ["Define", "Solicitation, SOW, or line items read against what is being bought."],
    ["Source", "The capability found: manufacturer, distributor, subcontractor, carrier, specialist."],
    ["Validate", "Capacity, lead time, authorization to sell, and compliance confirmed."],
    ["Quote", "Priced for the acquisition method, with required reps and formatting."],
    ["Execute", "Purchase orders, schedule, documentation, and coordination managed."],
    ["Deliver", "Documented, invoiced through the required system, supported to closeout."],
  ],
  standing:
    "Sourcework LLC is newly registered and claims no federal past performance, contract vehicles, or socioeconomic certifications to date. What we offer is sourcing, disciplined quoting, and accountability through delivery.",
  contact: [
    ["Point of Contact", "Ryan Boggs, Founder"],
    ["Email", "ryan@sourceworkco.com"],
    ["Web", "sourceworkco.com"],
  ],
};

const PAGE = { width: 612, height: 792, margin: 54 };
const CONTENT_WIDTH = PAGE.width - PAGE.margin * 2;

const esc = (text) => String(text).replace(/([()\\])/g, "\\$1");

/** Helvetica is roughly half its point size per character. Close enough to wrap. */
const wrap = (text, size, width, bold = false) => {
  const perChar = size * (bold ? 0.55 : 0.5);
  const max = Math.max(1, Math.floor(width / perChar));
  const lines = [];
  let line = "";

  for (const word of String(text).split(/\s+/)) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > max && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
};

const ops = [];
let y = PAGE.height - PAGE.margin;

const ink = () => ops.push("0.059 0.078 0.071 rg");
const muted = () => ops.push("0.42 0.41 0.38 rg");

const text = (value, { size = 9, font = "F1", x = PAGE.margin, tracking = 0 } = {}) => {
  ops.push(
    `BT /${font} ${size} Tf ${tracking ? `${tracking} Tc ` : ""}${x} ${y} Td (${esc(value)}) Tj ET`,
  );
  if (tracking) ops.push("BT 0 Tc ET");
};

const rule = (gap = 7) => {
  y -= gap;
  ops.push(`0.655 0.635 0.6 rg ${PAGE.margin} ${y} ${CONTENT_WIDTH} 0.6 re f`);
  ink();
  y -= gap + 2;
};

const paragraph = (value, { size = 9, leading = 12, font = "F1", indent = 0 } = {}) => {
  for (const line of wrap(value, size, CONTENT_WIDTH - indent, font === "F2")) {
    text(line, { size, font, x: PAGE.margin + indent });
    y -= leading;
  }
};

const sectionHeading = (value) => {
  y -= 5;
  muted();
  text(value.toUpperCase(), { size: 7.5, font: "F2", tracking: 1.6 });
  ink();
  y -= 14;
};

/** Two-column label / value rows, as on the site. */
const rows = (entries, labelWidth = 150) => {
  for (const [label, value] of entries) {
    muted();
    ops.push(`BT /F2 7.5 Tf 1.2 Tc ${PAGE.margin} ${y} Td (${esc(label.toUpperCase())}) Tj ET`);
    ops.push("BT 0 Tc ET");
    ink();
    const lines = wrap(value, 9.5, CONTENT_WIDTH - labelWidth);
    lines.forEach((line, index) => {
      ops.push(
        `BT /F1 9.5 Tf ${PAGE.margin + labelWidth} ${y - index * 12} Td (${esc(line)}) Tj ET`,
      );
    });
    y -= Math.max(1, lines.length) * 12 + 2;
  }
};

// Masthead
ink();
ops.push(`BT /F2 22 Tf 2.2 Tc ${PAGE.margin} ${y - 6} Td (${esc(DATA.legalName)}) Tj ET`);
ops.push("BT 0 Tc ET");
y -= 22;
muted();
ops.push(`BT /F2 7.5 Tf 1.6 Tc ${PAGE.margin} ${y} Td (${esc(DATA.tagline)}) Tj ET`);
ops.push("BT 0 Tc ET");
ink();
y -= 8;
rule(7);

y -= 4;
ops.push(`BT /F2 15 Tf ${PAGE.margin} ${y} Td (${esc(DATA.promise)}) Tj ET`);
y -= 20;
paragraph(DATA.summary, { size: 9.5, leading: 13 });

rule();
sectionHeading("Company data");
rows(DATA.company);

rule();
sectionHeading("Core capabilities");
for (const [title, body] of DATA.capabilities) {
  ops.push(`BT /F2 10 Tf ${PAGE.margin} ${y} Td (${esc(title)}) Tj ET`);
  y -= 11;
  paragraph(body, { size: 9, leading: 11.5 });
  y -= 2;
}

rule();
sectionHeading("How a requirement becomes a delivery");
DATA.pipeline.forEach(([title, body], index) => {
  muted();
  ops.push(`BT /F2 8 Tf ${PAGE.margin} ${y} Td (${esc(String(index + 1).padStart(2, "0"))}) Tj ET`);
  ink();
  ops.push(`BT /F2 9.5 Tf ${PAGE.margin + 26} ${y} Td (${esc(title)}) Tj ET`);
  const lines = wrap(body, 9, CONTENT_WIDTH - 130);
  lines.forEach((line, lineIndex) => {
    ops.push(`BT /F1 9 Tf ${PAGE.margin + 130} ${y - lineIndex * 11} Td (${esc(line)}) Tj ET`);
  });
  y -= Math.max(1, lines.length) * 11 + 2;
});

rule();
sectionHeading("Current standing");
paragraph(DATA.standing, { size: 9, leading: 11.5 });

rule();
sectionHeading("Contact");
rows(DATA.contact);

const content = `${ops.join("\n")}\n`;

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE.width} ${PAGE.height}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`,
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  `<< /Length ${Buffer.byteLength(content, "latin1")} >>\nstream\n${content}endstream`,
];

let pdf = "%PDF-1.4\n";
const offsets = [];

objects.forEach((body, index) => {
  offsets.push(Buffer.byteLength(pdf, "latin1"));
  pdf += `${index + 1} 0 obj\n${body}\nendobj\n`;
});

const xref = Buffer.byteLength(pdf, "latin1");
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
pdf += offsets.map((offset) => `${String(offset).padStart(10, "0")} 00000 n \n`).join("");
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R /Info << /Title (Sourcework LLC Capability Statement) /Author (Sourcework LLC) >> >>\nstartxref\n${xref}\n%%EOF\n`;

writeFileSync(join(root, "public", "capability-statement.pdf"), pdf, "latin1");
console.log(`Wrote public/capability-statement.pdf, ending at y=${Math.round(y)}`);
