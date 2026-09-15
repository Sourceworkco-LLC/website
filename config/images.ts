/**
 * Photography slots.
 *
 * Every image on the site is named here once, with its expected file and its
 * alt text. Components reference a slot key, never a path, so swapping a
 * photograph is a matter of dropping a file into /public/images under the
 * expected name. <Photo> renders the file when it exists and a composed
 * placeholder when it does not, so layout and rhythm hold either way.
 *
 * Art direction: muted, cinematic, industrial. Blue hour, working sites,
 * machinery in motion. No stock-photo handshakes, no people at laptops.
 */

export type ImageSlotKey =
  | "heroPort"
  | "products"
  | "technology"
  | "logistics"
  | "facilities"
  | "specialty"
  | "breakTerminal"
  | "aboutQuarry";

export type ImageSlot = {
  /** File expected at /public/images/<file>. */
  file: string;
  /** Empty alt is correct for purely decorative full-bleed imagery. */
  alt: string;
  /** What belongs in this slot, shown on the placeholder. */
  note: string;
};

export const images: Record<ImageSlotKey, ImageSlot> = {
  heroPort: {
    file: "hero-port-dusk.jpg",
    alt: "",
    note: "Container terminal at blue hour, gantry cranes over a berthed ship",
  },
  products: {
    file: "capability-products.jpg",
    alt: "Precision machinery forming metal on a production line",
    note: "Machinery, tooling, metal in production",
  },
  technology: {
    file: "capability-technology.jpg",
    alt: "Data center aisle lined with illuminated server racks",
    note: "Data center aisle, server racks",
  },
  logistics: {
    file: "capability-logistics.jpg",
    alt: "Gantry crane loading containers onto a truck chassis",
    note: "Crane, containers, truck chassis",
  },
  facilities: {
    file: "capability-facilities.jpg",
    alt: "Wheel loader charging a haul truck at an aggregate quarry",
    note: "Heavy equipment working a site",
  },
  specialty: {
    file: "capability-specialty.jpg",
    alt: "Close detail of machined components on a production line",
    note: "Close mechanical detail, hard to source parts",
  },
  breakTerminal: {
    file: "break-terminal.jpg",
    alt: "",
    note: "Full-bleed: terminal, crane, containers at dusk",
  },
  aboutQuarry: {
    file: "about-quarry.jpg",
    alt: "Aggregate quarry with loader and haul truck at work",
    note: "Extraction, raw material at the start of the chain",
  },
};
