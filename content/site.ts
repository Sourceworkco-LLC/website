/**
 * Single source of truth for site copy and structured content.
 *
 * There is no CMS. Everything a non-developer edits lives here as typed
 * constants. Page components read from this file and never hardcode copy.
 *
 * TWO STANDING RULES FOR THIS FILE
 *
 * 1. Nothing here may claim a capability, relationship, certification, award,
 *    or past performance that Sourcework has not established. Credibility on
 *    this site comes from registered facts and from how the work is run, never
 *    from implied scale.
 * 2. Company data is never invented. Anything not yet issued is marked
 *    `pending` and renders as a visible placeholder, so a contracting officer
 *    sees an honest gap rather than a fabricated value.
 */

export const site = {
  name: "Sourcework",
  legalName: "Sourcework LLC",
  domain: "sourceworkco.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sourceworkco.com",
  email: "ryan@sourceworkco.com",
  location: "Nashville, TN",
  serviceArea: "Nationwide",
  /**
   * No telephone number is published on this site. That was set as a hard rule
   * at the start of the project and no number has been supplied since. Set a
   * string here and it appears in the government quick reference, on /contact,
   * and in the Organization schema. Leave it null and every one of those
   * surfaces omits the row instead of inventing a number.
   */
  phone: null as string | null,
  /** Named signatory. A quote from an unnamed company is a quote nobody owns. */
  contactName: "Ryan Boggs",
  contactTitle: "Founder",
  tagline: "Complex Requirements. Real Outcomes.",
  promise: "From Requirement to Result.",
  description:
    "Sourcework is a procurement and execution company. Send a requirement and we determine the commercial path to fill it, then stay accountable from sourcing through delivery.",
} as const;

export const nav = [
  { href: "/solutions", label: "Solutions" },
  { href: "/government", label: "Government" },
  { href: "/suppliers", label: "Suppliers" },
  { href: "/teaming", label: "Teaming" },
  { href: "/about", label: "About" },
] as const;

/** Procurement-specific calls to action. No vague conversation starters. */
export const cta = {
  requirement: { label: "Send us a requirement", href: "/rfq" },
  rfq: { label: "Submit an RFQ", href: "/rfq" },
  capabilities: { label: "Download capabilities", href: "/capability-statement.pdf" },
  supplier: { label: "Become a Sourcework supplier", href: "/suppliers" },
  teaming: { label: "Discuss teaming", href: "/teaming" },
  reference: { label: "Government quick reference", href: "/government" },
} as const;

/**
 * Federal registration, verified against the SAM.gov record. Update the
 * expiration when the registration is renewed.
 */
export const registration = {
  legalName: "Sourcework LLC",
  statusLabel: "Active SAM.gov registration",
  uei: "Z7AZH895XD63",
  cage: "24SS2",
  businessType: "Small Business",
  headquarters: "Nashville, Tennessee",
  serviceArea: "Nationwide",
  purpose: "All Awards",
  expires: "August 28, 2027",
  state: "Tennessee",
  /** Public SAM.gov entity search, prefilled with the UEI, so a buyer can
      verify the registration against the source rather than take our word. */
  verifyUrl: "https://sam.gov/search/?index=ei&q=Z7AZH895XD63",
} as const;

/**
 * The contracting officer quick reference. `pending: true` renders a visible
 * placeholder instead of a value: replace the `value` and drop the flag as each
 * item is issued. `copy: true` adds a one-click copy control.
 */
export const quickReference = [
  { label: "Legal name", value: registration.legalName },
  { label: "UEI", value: registration.uei, copy: true },
  { label: "CAGE code", value: registration.cage, copy: true },
  { label: "SAM.gov registration", value: "Active", status: true },
  { label: "Purpose of registration", value: registration.purpose },
  { label: "Registration expires", value: registration.expires },
  { label: "Business type", value: registration.businessType },
  { label: "Primary NAICS", value: "Not yet published", pending: true },
  { label: "Additional NAICS", value: "Not yet published", pending: true },
  { label: "PSC codes", value: "Not yet published", pending: true },
  { label: "Location", value: registration.headquarters },
  { label: "Service area", value: registration.serviceArea },
  { label: "State of registration", value: registration.state },
  { label: "Contact", value: site.email, href: `mailto:${site.email}` },
  { label: "Point of contact", value: `${site.contactName}, ${site.contactTitle}` },
] as const;

/** The four capability pillars. */
export const capabilities = [
  {
    slug: "government-procurement",
    title: "Government Procurement",
    items: ["Products", "Equipment", "Technology", "Services"],
    lede: "One requirement, one accountable party.",
    summary:
      "You issue a requirement. We determine the commercial path to fill it and carry it end to end: sourcing, quoting, compliant submission, award management, delivery, and invoicing. The alternative is reconciling four vendors to close one line item, and that work lands on your desk rather than ours.",
  },
  {
    slug: "technology-and-digital-solutions",
    title: "Technology & Digital Solutions",
    items: ["Software", "Licensing", "Automation", "AI & Workflow", "Implementation"],
    lede: "Sourced and coordinated, not resold and abandoned.",
    summary:
      "We source and coordinate commercial technology: software and licensing, workflow automation, AI-enabled systems, and the implementation work that puts them into service. Scoped against the outcome rather than the license count, priced for the acquisition method in play, and accountable through deployment rather than closed out at purchase.",
  },
  {
    slug: "specialized-services",
    title: "Specialized Services",
    items: ["Facilities", "Logistics", "Field Operations", "Support Services"],
    lede: "Coordination is the deliverable.",
    summary:
      "Facilities, logistics, field operations, and sustainment requirements fulfilled through qualified commercial providers. We carry the coordination: scheduling, site access, compliance documentation, and reporting, so performance is verifiable against the statement of work instead of asserted after the fact.",
  },
  {
    slug: "supplier-sourcing",
    title: "Supplier Sourcing",
    items: ["Manufacturers", "Distributors", "Subcontractors", "Specialty Providers"],
    lede: "Qualified per requirement, not pulled off a list.",
    summary:
      "Sources are identified and qualified against the requirement in front of us: capability, capacity, lead time, authorization to sell the product, and compliance with the solicitation terms, all confirmed before a quote is submitted. Manufacturers, distributors, and service providers who want to be considered can register with us directly.",
  },
] as const;

/**
 * The pipeline. Genuinely sequential, so it is numbered and ordered. This is
 * the core idea of the company and it appears on the home page, on /solutions,
 * and in the requirement intake.
 */
export const pipeline = [
  {
    step: "01",
    title: "Requirement",
    body: "Send the solicitation, the SOW, or a line-item list. We read it the way the evaluator will and confirm what is actually being bought, including the terms that decide the award.",
  },
  {
    step: "02",
    title: "Source",
    body: "We determine the commercial path: manufacturer, distributor, subcontractor, technology vendor, or specialty provider, sized to the requirement rather than to whoever is convenient.",
  },
  {
    step: "03",
    title: "Validate",
    body: "Every source is checked before it reaches a quote. Capability, capacity, lead time, authorization to sell the product, and compliance with the solicitation terms.",
  },
  {
    step: "04",
    title: "Quote",
    body: "Pricing structured for the acquisition method, with the representations, certifications, and formatting the instructions require. Submitted complete and on time, or not submitted.",
  },
  {
    step: "05",
    title: "Execute",
    body: "On award we manage mobilization: purchase orders, schedules, documentation, and the coordination between every party on the delivery.",
  },
  {
    step: "06",
    title: "Deliver",
    body: "Delivery documented against the line items, invoiced through the required system, supported through closeout. Accountability stays with us for the whole of it.",
  },
] as const;

/** How we work with agencies: from solicitation to closeout. */
export const engagement = [
  {
    title: "Requirement intake",
    body: "Solicitation, SOW, PWS, or an informal scope. We confirm what is being bought before anything is priced, and tell you quickly if we are not the right party.",
  },
  {
    title: "Sourcing and validation",
    body: "Commercial sources identified and checked against the requirement: capability, capacity, lead time, and authorization to sell what is specified.",
  },
  {
    title: "Compliant submission",
    body: "Built to the instructions. Required representations, certifications, formatting, and deadlines, without exception or improvisation.",
  },
  {
    title: "Award management",
    body: "Kickoff, purchase orders, schedule, and documentation. One point of contact from award through delivery.",
  },
  {
    title: "Fulfillment and closeout",
    body: "Delivery documented against the line items, invoiced through the required system, supported through acceptance and closeout.",
  },
] as const;

/** Contract vehicles and engagement paths on /government. */
export const vehicles = [
  {
    title: "RFQ",
    body: "Requests for quotation on commercial products, equipment, and services. Send the line items and the delivery window and we will quote against them.",
  },
  {
    title: "RFP",
    body: "Solicitations requiring a technical and price response. We respond to the instructions as written and carry performance accountability as prime.",
  },
  {
    title: "Simplified acquisitions",
    body: "Micro-purchase and simplified acquisition threshold buys, where a clean quote returned quickly is most of the decision.",
  },
  {
    title: "Subcontracting and teaming",
    body: "Inquiries from primes who need commercial sourcing, product fulfillment, technology sourcing, or logistics coordination on a scope they already hold.",
  },
] as const;

/** The three audiences the site routes, and where each one goes. */
export const pathways = [
  {
    audience: "Government buyers",
    title: "Send us a requirement",
    body: "Contracting officers, contract specialists, and purchasing agents. Send the solicitation or the line items and we take the analysis from there.",
    action: cta.requirement,
  },
  {
    audience: "Manufacturers and distributors",
    title: "Become a supplier",
    body: "We qualify sources against live requirements. Register your products, coverage, and the brands you are authorized to sell.",
    action: cta.supplier,
  },
  {
    audience: "Prime contractors",
    title: "Discuss teaming",
    body: "Procurement, commercial supplier identification, product fulfillment, technology sourcing, and logistics coordination on scope you already hold.",
    action: cta.teaming,
  },
] as const;

/** Where Sourcework contributes on a prime's scope. */
export const teamingRoles = [
  "Procurement and requirement analysis",
  "Commercial supplier identification and qualification",
  "Product fulfillment and delivery coordination",
  "Technology sourcing, licensing, and implementation support",
  "Logistics coordination",
  "Specialty and short-notice requirements",
] as const;

/** What Sourcework is looking for in a supplier registration. */
export const supplierCriteria = [
  {
    title: "What we source",
    body: "Products, equipment, technology, and specialized services against federal, state, and local requirements. Manufacturers, authorized distributors, subcontractors, freight providers, and specialty service providers.",
  },
  {
    title: "What we ask for",
    body: "What you sell, where you can deliver, the brands you are authorized to represent, and whether you have sold into government before. Government experience is useful, not required.",
  },
  {
    title: "How it works",
    body: "Registration puts you in front of requirements we are actively quoting. When one matches what you supply, we come to you with the specification, the quantity, and the deadline.",
  },
] as const;

/**
 * What a manufacturer or distributor wants to know before spending a day on a
 * six-figure quote. Stated without inventing terms we have not agreed.
 */
export const howWeBuy = [
  {
    title: "We tell you what the quote is for",
    body: "Every request says whether it supports a bid we are submitting or an award already in hand, and when the decision is expected. You will not spend a day on a quote without knowing which one it is.",
  },
  {
    title: "Purchase orders come from Sourcework LLC",
    body: "We are the buyer of record. Sourcework issues the purchase order, takes delivery or directs it, and carries the payment obligation. You are not chasing an agency for it.",
  },
  {
    title: "Terms are agreed before the order",
    body: "Payment terms, delivery, freight, and acceptance are stated on the purchase order and agreed with you before it is issued. No terms are assumed from a quote.",
  },
  {
    title: "One named point of contact",
    body: "Quotes, revisions, and purchase orders come from one person at Sourcework, not a shared inbox that nobody owns.",
  },
] as const;

export const values = [
  "People",
  "Technology",
  "Partnerships",
  "Execution",
  "Results",
] as const;
