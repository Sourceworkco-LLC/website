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
   * No telephone number is published on this site. Confirmed decision: email
   * only. The wiring stays in place so it is a one-line change later. Set a
   * string here and the row appears in the government quick reference, on
   * /contact, and in the Organization schema. Null omits it everywhere.
   */
  phone: null as string | null,
  /** Named signatory. A quote from an unnamed company is a quote nobody owns. */
  contactName: "Ryan Boggs",
  contactTitle: "Founder",
  /** Primary brand line. The one thing to remember. */
  brandLine: "The work behind the work.",
  /** Secondary, and still true. Footer, collateral, campaigns. */
  tagline: "Complex Requirements. Real Outcomes.",
  belief: "Capability already exists. We find it and put it to work.",
  description:
    "The equipment, people, technology and freight behind a finished job rarely come from one place. Sourcework finds the capability, builds the commercial path, and puts it to work.",
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
  reference: { label: "View government profile", href: "/government" },
  explore: { label: "Explore capabilities", href: "/solutions" },
  email: { label: "Email Sourcework", href: "mailto:ryan@sourceworkco.com" },
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

/**
 * What Sourcework sources and coordinates.
 *
 * `blurb` is the single sentence used on the home grid. `detail` and `items`
 * belong to /solutions. Government procurement is the current primary market,
 * but these categories are written to outlive it.
 */
export const capabilities = [
  {
    slug: "products-and-equipment",
    title: "Products & Equipment",
    image: "products" as const,
    blurb: "Commercial products, materials and specialized equipment, sourced to specification.",
    items: ["Commercial products", "Industrial materials", "Specialized equipment", "Parts and consumables"],
    detail:
      "Most of what an agency or a contractor buys already exists somewhere. The work is finding the right version of it: the manufacturer who actually makes the part to spec, the distributor authorized to sell it, the lead time that fits the delivery date. We quote what we can deliver, and we say so when a specification and a schedule cannot both be met.",
  },
  {
    slug: "technology-and-digital",
    title: "Technology & Digital",
    image: "technology" as const,
    blurb: "Software, licensing, automation and the implementation that makes them usable.",
    items: ["Software", "Licensing", "Automation", "AI-enabled workflow", "Implementation", "Integration"],
    detail:
      "Technology arrives as a license, a contract, and a configuration problem. We source the first two and coordinate the third, including the integration and training work that decides whether anyone actually uses it. Scoped to the outcome, priced for the buying method, accountable past the purchase order.",
  },
  {
    slug: "logistics",
    title: "Logistics",
    image: "logistics" as const,
    blurb: "Freight, transportation and delivery coordination, to the site and the schedule.",
    items: ["Freight", "Transportation", "Delivery coordination", "Site scheduling"],
    detail:
      "A product that arrives late is a product that failed. We arrange freight, transportation, and site delivery as part of the job rather than as an afterthought, and we coordinate access, scheduling, and documentation so receiving is not a surprise on either end.",
  },
  {
    slug: "facilities-and-field-services",
    title: "Facilities & Field Services",
    image: "facilities" as const,
    blurb: "Qualified commercial providers for facility and field work, coordinated end to end.",
    items: ["Facilities support", "Field operations", "Site services", "Sustainment"],
    detail:
      "Field and facility work lives or dies on coordination: who is on site, when, with what credentials, and who documents it. We identify qualified providers, carry the scheduling and compliance paperwork, and report performance against the scope of work.",
  },
  {
    slug: "specialty-sourcing",
    title: "Specialty Sourcing",
    image: "specialty" as const,
    blurb: "When the obvious source is not the right source.",
    items: ["Obsolete and hard to find", "Long lead time", "Single source", "Short notice"],
    detail:
      "Obsolete parts. Single-source items. Something with a four-month lead time and a six-week deadline. These are the requests that go unanswered because they take real work to run down. They are the ones we want.",
  },
  {
    slug: "supplier-coordination",
    title: "Supplier Coordination",
    image: "products" as const,
    blurb: "One purchase order on your side. Many moving parts on ours.",
    items: ["Manufacturers", "Distributors", "Subcontractors", "Carriers"],
    detail:
      "A single line item can touch a manufacturer, a distributor, a carrier, and a field crew. You should not have to manage four relationships to close one. We hold the purchase orders, the schedule, and the accountability, and you hold one contract with us.",
  },
] as const;

/**
 * How the work runs. Genuinely sequential, so it is numbered.
 *
 * Kept to one line each: the home page carries the concept, /government
 * carries the detail. Do not grow these back into paragraphs.
 */
export const pipeline = [
  { step: "01", title: "Define", body: "We read the scope the way the evaluator will, and confirm what is actually being bought." },
  { step: "02", title: "Source", body: "We find the capability. Manufacturer, distributor, subcontractor, carrier, specialist." },
  { step: "03", title: "Validate", body: "Capacity, lead time, authorization to sell, compliance. Checked before anything is promised." },
  { step: "04", title: "Quote", body: "Priced for the buying method. Submitted complete, submitted on time." },
  { step: "05", title: "Execute", body: "Purchase orders, schedules, documentation, every party moving the same direction." },
  { step: "06", title: "Deliver", body: "Delivered against the line items, invoiced, supported through closeout." },
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

/** The brand moment. Used once, on the home page. Give it room. */
export const brandMoment = {
  heading: "Everything comes from somewhere.",
  items: ["The equipment.", "The materials.", "The technology.", "The expertise."],
  body: "Capability already exists. It is just scattered across companies that have never met.",
  close: "We find it and put it to work.",
} as const;

/** Why Sourcework. Three principles, no essay. */
export const principles = [
  {
    title: "Find the right source",
    body: "We do not start with a catalog. We start with the job, then go find who can actually do it.",
  },
  {
    title: "Verify before we commit",
    body: "Capacity, lead time, authorization, compliance. Confirmed before a number goes on paper.",
  },
  {
    title: "Own the outcome",
    body: "One contract, one point of contact, one party accountable through delivery and closeout.",
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
    body: "Products, equipment, technology, and specialized services against federal, state, and local work. Manufacturers, authorized distributors, subcontractors, freight providers, and specialty providers.",
  },
  {
    title: "What we ask for",
    body: "What you sell, where you deliver, and the brands you are authorized to represent. Government experience is useful, not required.",
  },
  {
    title: "How it works",
    body: "When something we are quoting matches what you supply, we come to you with the specification, the quantity, and the deadline.",
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
