import type { ReactNode } from "react";
import { Container } from "./Container";

/** Standard vertical rhythm for every band on the site. */
export function Section({
  children,
  className = "",
  id,
  label,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  label?: string;
}) {
  return (
    <section id={id} aria-label={label} className={`py-20 md:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** Tracked uppercase section label sitting above a heading. */
export function SectionLabel({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p className={`label ${tone === "dark" ? "text-bone/60" : "text-stone-ink"}`}>
      {children}
    </p>
  );
}
