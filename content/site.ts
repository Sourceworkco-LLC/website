/**
 * Single source of truth for site copy and structured content.
 *
 * There is no CMS. Everything a non-developer is likely to edit lives here as
 * typed constants, so a copy change is a one-line edit with type checking
 * behind it. Page components read from this file and never hardcode strings.
 *
 * HARD RULE: no telephone number appears anywhere on this site, including in
 * this file, in schema markup, and in metadata.
 */

export const site = {
  name: "Sourcework",
  legalName: "Sourcework LLC",
  domain: "sourceworkco.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sourceworkco.com",
  email: "ryan@sourceworkco.com",
  location: "Nashville, TN",
  tagline: "Complex Requirements. Real Outcomes.",
  promise: "From Requirement to Result.",
  description:
    "Sourcework connects government and business requirements with the right products, technology, and specialized partners to deliver real outcomes.",
} as const;

export const nav = [
  { href: "/solutions", label: "Solutions" },
  { href: "/government", label: "Government" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** The four capability pillars, in brand board order. */
export const capabilities = [
  {
    slug: "government-procurement",
    title: "Government Procurement",
    items: ["Products", "Equipment", "Technology", "Services"],
    summary:
      "We respond to federal, state, and local requirements as a single accountable party. Requirement review, sourcing, quoting, compliant submission, award management, delivery, and invoicing run through one point of contact, so a contracting officer is never left reconciling four vendors to close one line item.",
  },
  {
    slug: "technology-and-ai",
    title: "Technology & AI",
    items: ["Software", "Automation", "Implementation", "Training"],
    summary:
      "Software selection, automation, CRM, and AI implementation for commercial and public sector customers. We scope against the outcome rather than the license count, handle deployment and integration, and train the people who have to live with the system after we leave.",
  },
  {
    slug: "specialized-services",
    title: "Specialized Services",
    items: ["Facilities", "Logistics", "Field Operations", "Support Services"],
    summary:
      "Facilities support, logistics, field operations, and sustainment work delivered through vetted operators. We carry the coordination burden: scheduling, site access, compliance documentation, and reporting, so performance is verifiable against the statement of work.",
  },
  {
    slug: "strategic-partnerships",
    title: "Strategic Partnerships",
    items: ["Vetted Suppliers", "Trusted Operators", "National Reach", "Long-Term Impact"],
    summary:
      "A qualified supplier and subcontractor network built for depth rather than breadth. Partners are vetted on past performance, capacity, and compliance posture before they touch a requirement, which is what makes responsive quoting and national fulfillment possible.",
  },
] as const;

/** Align, Source, Implement, Deliver. Genuinely sequential, so numbered. */
export const processSteps = [
  {
    step: "01",
    title: "Align",
    body: "We read the requirement the way the evaluator will read it, then confirm scope, constraints, timeline, and the standard the work will be measured against.",
  },
  {
    step: "02",
    title: "Source",
    body: "We identify qualified products, suppliers, and operators against that requirement, verify capacity and compliance, and price the work for the acquisition vehicle in play.",
  },
  {
    step: "03",
    title: "Implement",
    body: "We submit compliant, and on award we manage mobilization: purchase orders, schedules, documentation, and the coordination between every party on the delivery.",
  },
  {
    step: "04",
    title: "Deliver",
    body: "Performance is documented against the statement of work, invoiced cleanly, and supported after acceptance. Accountability stays with us through closeout.",
  },
] as const;

/** How we work with agencies, the /solutions subsection. */
export const engagement = [
  {
    title: "Requirement intake",
    body: "Solicitation, SOW, or an informal scope. We confirm what is actually being bought before anything is priced.",
  },
  {
    title: "Sourcing and quoting",
    body: "Qualified sources identified, capacity verified, pricing structured for the acquisition method and delivery window.",
  },
  {
    title: "Compliant bid submission",
    body: "Submission built to the instructions: required representations, certifications, formatting, and deadlines, without exception.",
  },
  {
    title: "Award management",
    body: "Kickoff, purchase orders, schedule, and documentation. One point of contact from award through delivery.",
  },
  {
    title: "Fulfillment and invoicing",
    body: "Delivery documented against the line items, invoiced through the required system, supported through closeout.",
  },
] as const;

/**
 * Federal registration snapshot. Values marked "To be provided" are
 * placeholders, replace them in this file as registrations are issued.
 */
export const snapshot = [
  { label: "Legal name", value: "Sourcework LLC" },
  { label: "UEI", value: "To be provided" },
  { label: "CAGE code", value: "To be provided" },
  { label: "NAICS codes", value: "To be provided" },
  { label: "PSC codes", value: "To be provided" },
  { label: "SAM.gov registration", value: "In process" },
  { label: "Business size", value: "Small Business" },
  { label: "State of registration", value: "Tennessee" },
  { label: "Place of performance", value: "Nashville, Tennessee. National delivery." },
] as const;

/** Contract vehicles and engagement paths on /government. */
export const vehicles = [
  {
    title: "RFQ",
    body: "Requests for quotation on commercial products, equipment, and services. Send the line items and the delivery window and we will quote against them.",
  },
  {
    title: "RFP",
    body: "Solicitations requiring a technical and price response. We build to the instructions and carry performance accountability as prime.",
  },
  {
    title: "Simplified acquisitions",
    body: "Micro-purchase and simplified acquisition threshold buys where speed and clean documentation decide the award.",
  },
  {
    title: "Subcontracting",
    body: "Teaming and subcontract inquiries from primes who need sourcing depth, specialized field capacity, or a technology implementation partner.",
  },
] as const;

export const values = [
  "People",
  "Technology",
  "Partnerships",
  "Execution",
  "Results",
] as const;
