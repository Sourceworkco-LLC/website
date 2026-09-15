/**
 * Intake form schemas.
 *
 * Every form on the site is described here and rendered by <IntakeForm>, so
 * adding a field is a one-line edit and every form behaves identically:
 * same validation, same delivery path, same failure handling.
 *
 * Required fields are kept to the minimum that makes a submission actionable.
 * On the requirement intake that is a description or an attached document,
 * plus a way to reply. Everything else is optional, because a buyer forwarding
 * a solicitation at 4:55pm should not be stopped by a form.
 */

export type FieldType =
  | "text"
  | "email"
  | "tel"
  | "url"
  | "date"
  | "number"
  | "textarea"
  | "file";

export type FormField = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  /** Renders at half width on wider screens. */
  half?: boolean;
  rows?: number;
  help?: string;
  accept?: string;
  multiple?: boolean;
  autoComplete?: string;
};

export type FormGroup = {
  legend: string;
  note?: string;
  fields: FormField[];
};

/** Shared upload limits. Vercel caps a serverless request body at 4.5 MB. */
export const uploadLimit = {
  maxFiles: 5,
  maxTotalBytes: 4 * 1024 * 1024,
  help: "Up to 5 files, 4 MB total. PDF, Word, Excel, images, or drawings. For larger packages, email them and reference this submission.",
  accept: ".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.png,.jpg,.jpeg,.zip,.dwg,.dxf",
};

/** Requirement and RFQ intake. The primary conversion path on the site. */
export const requirementForm: FormGroup[] = [
  {
    legend: "The requirement",
    note: "Paste the scope or attach the solicitation. Either is enough to start.",
    fields: [
      {
        name: "requirement",
        label: "What needs to be sourced or solved",
        type: "textarea",
        rows: 6,
        help: "Line items, specifications, scope of work, or a short description. Attach the documents below if that is faster.",
      },
      {
        name: "files",
        label: "Solicitation, RFQ, SOW or PWS, specifications, drawings",
        type: "file",
        multiple: true,
        accept: uploadLimit.accept,
        help: uploadLimit.help,
      },
    ],
  },
  {
    legend: "Where to reach you",
    fields: [
      { name: "name", label: "Name", type: "text", required: true, half: true, autoComplete: "name" },
      { name: "organization", label: "Agency or organization", type: "text", half: true, autoComplete: "organization" },
      { name: "email", label: "Email", type: "email", required: true, half: true, autoComplete: "email" },
      { name: "phone", label: "Phone", type: "tel", half: true, autoComplete: "tel" },
    ],
  },
  {
    legend: "Solicitation detail",
    note: "Optional. Fill in what you have and we will take the analysis from there.",
    fields: [
      { name: "solicitation", label: "Solicitation or RFQ number", type: "text", half: true },
      { name: "opportunityUrl", label: "SAM.gov opportunity URL", type: "url", half: true },
      { name: "quantity", label: "Quantity", type: "text", half: true },
      { name: "deliveryLocation", label: "Delivery location", type: "text", half: true },
      { name: "responseDeadline", label: "Response deadline", type: "date", half: true },
      { name: "deliveryDate", label: "Required delivery date", type: "date", half: true },
    ],
  },
];

/** Supplier and manufacturer registration. */
export const supplierForm: FormGroup[] = [
  {
    legend: "Company",
    fields: [
      { name: "company", label: "Company", type: "text", required: true, half: true, autoComplete: "organization" },
      { name: "website", label: "Website", type: "url", half: true, autoComplete: "url" },
      { name: "name", label: "Contact name", type: "text", required: true, half: true, autoComplete: "name" },
      { name: "email", label: "Email", type: "email", required: true, half: true, autoComplete: "email" },
      { name: "phone", label: "Phone", type: "tel", half: true, autoComplete: "tel" },
      { name: "coverage", label: "Geographic coverage", type: "text", half: true, help: "Regional, national, or the states you deliver to." },
    ],
  },
  {
    legend: "What you supply",
    fields: [
      {
        name: "products",
        label: "Products or services",
        type: "textarea",
        required: true,
        rows: 4,
        help: "Categories, product lines, or the services you perform.",
      },
      { name: "brands", label: "Brands represented", type: "text", help: "Include where you hold authorized dealer or distributor status." },
      { name: "capabilities", label: "Capabilities worth knowing about", type: "textarea", rows: 3, help: "Manufacturing, stocking depth, lead times, certifications, field capacity." },
    ],
  },
  {
    legend: "Government contracting",
    note: "Optional. Government experience is useful, not required.",
    fields: [
      { name: "govExperience", label: "Government contracting experience", type: "textarea", rows: 3, help: "Agencies sold to, prime or subcontract, or none yet." },
      { name: "naics", label: "NAICS codes", type: "text", half: true },
      { name: "cageUei", label: "CAGE or UEI", type: "text", half: true },
      {
        name: "files",
        label: "Line card or capability sheet",
        type: "file",
        multiple: true,
        accept: uploadLimit.accept,
        help: uploadLimit.help,
      },
    ],
  },
];

/** Teaming inquiries from prime contractors. */
export const teamingForm: FormGroup[] = [
  {
    legend: "Your company",
    fields: [
      { name: "company", label: "Company", type: "text", required: true, half: true, autoComplete: "organization" },
      { name: "website", label: "Website", type: "url", half: true, autoComplete: "url" },
      { name: "name", label: "Contact name", type: "text", required: true, half: true, autoComplete: "name" },
      { name: "email", label: "Email", type: "email", required: true, half: true, autoComplete: "email" },
      { name: "phone", label: "Phone", type: "tel", half: true, autoComplete: "tel" },
      { name: "cageUei", label: "CAGE or UEI", type: "text", half: true },
    ],
  },
  {
    legend: "The opportunity",
    fields: [
      { name: "opportunity", label: "Agency, program, or opportunity", type: "text", half: true },
      { name: "solicitation", label: "Solicitation number", type: "text", half: true },
      {
        name: "scope",
        label: "Where Sourcework would contribute",
        type: "textarea",
        required: true,
        rows: 5,
        help: "Procurement, supplier identification, product fulfillment, technology sourcing, logistics coordination, or specialty requirements.",
      },
      { name: "responseDeadline", label: "Response deadline", type: "date", half: true },
      {
        name: "files",
        label: "Solicitation or scope documents",
        type: "file",
        multiple: true,
        accept: uploadLimit.accept,
        help: uploadLimit.help,
      },
    ],
  },
];

/** General contact. Anything that is not a requirement, supplier, or teaming. */
export const contactForm: FormGroup[] = [
  {
    legend: "Contact",
    fields: [
      { name: "name", label: "Name", type: "text", required: true, half: true, autoComplete: "name" },
      { name: "organization", label: "Organization", type: "text", half: true, autoComplete: "organization" },
      { name: "email", label: "Email", type: "email", required: true, half: true, autoComplete: "email" },
      { name: "phone", label: "Phone", type: "tel", half: true, autoComplete: "tel" },
      { name: "message", label: "How can we help", type: "textarea", required: true, rows: 5 },
    ],
  },
];
