import Link from "next/link";
import { Container } from "./Container";
import { IntakeForm } from "./forms/IntakeForm";
import { requirementFormShort } from "@/content/forms";
import { cta, site } from "@/content/site";

/** The primary conversion block. Four fields, one of them optional. */
export function HomeIntake() {
  return (
    <section className="border-t rule bg-bone py-20 md:py-28" aria-label="Send us a requirement">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="heading text-[clamp(1.875rem,4.5vw,3rem)]">
              Have something that needs to get done?
            </h2>
            <p className="measure mt-6 text-obsidian/80">
              Send the solicitation, the RFQ, the SOW, the specs, or just
              describe the job. We will tell you whether Sourcework is the right
              party to pursue it.
            </p>

            <ul className="mt-10 space-y-3 border-t rule pt-6 text-sm text-obsidian/75">
              <li>Acknowledged the same business day.</li>
              <li>A straight answer on fit, including no.</li>
              <li>
                Need the full intake?{" "}
                <Link
                  href={cta.rfq.href}
                  className="text-obsidian underline underline-offset-4 hover:text-evergreen"
                >
                  Add solicitation details
                </Link>
                , or{" "}
                <a
                  href={cta.email.href}
                  className="text-obsidian underline underline-offset-4 hover:text-evergreen"
                >
                  email {site.email}
                </a>
                .
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border border-obsidian/45 p-6 md:p-8">
              <IntakeForm
                formType="requirement"
                groups={requirementFormShort}
                submitLabel="Send requirement"
                successTitle="Received."
                successBody={`You will get a reply from ${site.email} confirming whether we are pursuing it and what we need to price it.`}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
