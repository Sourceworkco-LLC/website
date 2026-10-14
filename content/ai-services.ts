/**
 * AI services copy, for /ai-services.
 *
 * A focused offering for local service businesses, separate from the
 * government procurement work that is the company's core. Kept in its own
 * module so the service line can be edited, repriced, or retired without
 * touching the rest of the site.
 *
 * The two standing rules in content/site.ts apply here as well: nothing
 * claims a capability, relationship, or past performance that Sourcework has
 * not established, and no number is invented. Everything below describes what
 * is offered, not what has already been delivered for someone else.
 *
 * Copy rules for this file: no em dashes anywhere, and the word "steer" never
 * appears in copy. (This line states the rule; it is not page copy.)
 */

import { site } from "./site";

export const aiServices = {
  label: "AI Services",
  /** Page masthead. */
  title: "Stop losing jobs to missed calls and slow follow up. Let AI handle the busywork.",
  intro:
    "Sourcework builds practical AI systems for HVAC, plumbing, roofing, med spas, dental and ortho, and remodeling companies. The systems answer fast, follow up until the job is booked, and keep reviews coming in. You stay on the tools. We handle the tech.",
  /** Three plain facts under the masthead. No metrics we cannot stand behind. */
  facts: [
    { label: "Free audit", value: "5 minute video, no obligation" },
    { label: "Live in 7 to 10 days", value: "for most Starter builds" },
    { label: "Nashville based", value: "built for local teams" },
  ],
  primaryCta: { label: "Get your free AI audit", href: "#audit" },
  secondaryCta: { label: "See packages and pricing", href: "#packages" },
} as const;

/** Where the money leaks. The problem framing that sets up the audit. */
export const leaks = {
  label: "Where the money leaks",
  heading: "Most shops do not have a marketing problem. They have a response problem.",
  intro:
    "A customer with a busted AC, a leaking pipe, or a sore tooth does not wait. They call the next company on the list. These are the leaks we fix first.",
  items: [
    {
      title: "Missed calls turn into missed jobs",
      body: "Calls during a job, after hours, and on weekends go to voicemail. Most callers never leave one. They book with whoever answers first.",
    },
    {
      title: "Estimates go cold in 48 hours",
      body: "You did the hard part and got in the door. Then the quote sits. Without steady follow up, the job goes to the competitor who stayed in touch.",
    },
    {
      title: "Reviews happen by accident",
      body: "Happy customers mean to leave a review and forget. Meanwhile a competitor with a system collects them every week and wins the next search.",
    },
  ],
} as const;

/** The free audit: the entry point for the whole service line. */
export const audit = {
  label: "Start here",
  heading: "The free 5 minute AI audit",
  intro:
    "No call required to get it. Tell us where to send it, we review your business the way a customer would, and we send a short video with clear next steps. Straightforward and useful even if you never buy.",
  steps: [
    {
      step: "01",
      title: "Request the audit",
      body: "Fill out the short form at the bottom of this page. Business name, website, and the best email for the video. That is all we need to start.",
    },
    {
      step: "02",
      title: "We test like a customer",
      body: "We check your call flow, website contact paths, follow up process, and review presence. We look for the specific spots where a ready buyer would drop off.",
    },
    {
      step: "03",
      title: "You get a 5 minute video",
      body: "Plain language. What is working, what is leaking, and what to fix first. If a package would help, we will say which one and why. If not, we will say that too.",
    },
  ],
  deliverable: {
    heading: "What you receive",
    body: "A short video link by email, plus a one page summary you can share with a partner or office manager.",
    items: [
      "Missed call and after hours findings",
      "Lead response speed snapshot",
      "Estimate follow up gap check",
      "Review collection review",
      "Top 3 fixes ranked by impact",
    ],
    note: "Typical turnaround is 2 to 3 business days.",
  },
  /** What the audit examines, shown alongside the steps. */
  checks: [
    { title: "Missed calls after hours", body: "What happens when a customer calls at 7 pm or on a Saturday." },
    { title: "Speed to lead", body: "How fast new web leads get a real reply." },
    { title: "Estimate follow up", body: "How many touches happen after you send a quote." },
    { title: "Reviews and rebooking", body: "Whether happy customers are asked at the right moment." },
    { title: "Website capture", body: "Whether visitors can book or only browse." },
  ],
} as const;

/**
 * Packages. Setup is a one time build, testing, and launch fee; monthly covers
 * hosting, monitoring, tweaks, and support. Prices are published deliberately:
 * a local owner should not have to book a call to find out what this costs.
 */
export const packages = {
  label: "Packages",
  heading: "Pick the level of help you want",
  intro:
    "Simple pricing. No long term contract pitch. Setup covers build, testing, and launch. Monthly covers hosting, monitoring, tweaks, and support. Partner content can stand alone or run alongside Starter or Growth.",
  tiers: [
    {
      name: "Starter",
      title: "Never Miss a Lead",
      description:
        "For shops losing jobs because the phone rings at the wrong time. This is the fastest win for most teams.",
      monthly: "$350",
      setup: "Plus $1,200 one time setup",
      featured: false,
      features: [
        "Missed call text back in under 60 seconds",
        "After hours AI assistant that can book and capture details",
        "Website contact and booking capture, wired to your calendar flow",
        "Instant lead alerts so your team can jump in live",
        "Monthly snapshot of calls, leads, and bookings",
      ],
      note: "Best first step for most single location shops.",
    },
    {
      name: "Growth",
      title: "Follow-Up Machine",
      description:
        "For teams sending estimates and losing too many to silence. Starter plus a follow up system that does not forget.",
      monthly: "$500",
      setup: "Plus $2,000 one time setup",
      featured: true,
      badge: "Most popular",
      features: [
        "Everything in Starter",
        "Estimate follow up on day 1, 3, 7, and 14 by text and email",
        "No show and cancellation rebooking flows",
        "Review requests timed to job completion",
        "Past customer reactivation campaign each quarter",
        "Monthly performance video, plus new AI tools worth adding",
      ],
      note: "One extra booked job per month typically covers it.",
    },
    {
      name: "Partner",
      title: "Done-For-You Content",
      description:
        "For owners who know content matters and never have time to do it. We plan, write, and schedule it for you.",
      monthly: "$1,500",
      setup: "No setup fee. Month to month.",
      featured: false,
      features: [
        "2 search focused blog posts per month",
        "Weekly Google Business Profile posts",
        "Monthly customer newsletter, written and sent",
        "12 post social calendar with captions",
        "Seasonal offer and campaign copy support",
      ],
      note: "Works on its own or alongside Starter or Growth.",
    },
  ],
  footnote:
    "Need something custom, like a website rebuild or a CRM cleanup with the AI build? Ask in the form and we will scope it plainly.",
} as const;

/** Who the offering fits, and the signals that say it is a match. */
export const whoItFits = {
  label: "Who it fits",
  heading: "Built for local service businesses that live on calls and booked jobs",
  intro:
    "If your best customers find you, call you, and expect a fast answer, this was built for you. If you rely only on walk in traffic or long bid cycles, it is probably not the right fit.",
  trades: [
    { title: "HVAC", body: "Seasonal spikes, after hours breakdowns, and maintenance plan renewals that need timely reminders." },
    { title: "Plumbing", body: "Emergency calls that cannot wait, plus estimate follow up for repipes, water heaters, and remodel work." },
    { title: "Roofing", body: "Storm leads, inspection bookings, and long follow up cycles while homeowners talk to insurance." },
    { title: "Med spas", body: "Consult bookings, no show recovery, and review collection that keeps the schedule full." },
    { title: "Dental and ortho", body: "New patient capture after hours, appointment reminders, and rebooking for patients who go quiet." },
    { title: "Remodeling", body: "Higher ticket estimates that need patient, professional follow up without feeling pushy." },
  ],
  signals: [
    "You miss calls during jobs",
    "Estimates take days to chase",
    "Reviews are hit or miss",
    "Content never gets done",
    "You want more booked jobs, not more apps",
  ],
} as const;

/** How the engagement runs, start to steady state. */
export const aiProcess = {
  label: "How it works",
  heading: "Simple process, clear timeline",
  intro:
    "We keep it practical. You approve the key pieces, we build and test, then we tune based on real leads, not guesses.",
  steps: [
    {
      step: "01",
      title: "Audit and pick a package",
      body: "Start with the free audit. We show the leaks and recommend the smallest package that fixes them. You decide with clear pricing in front of you.",
    },
    {
      step: "02",
      title: "Build in 7 to 10 days",
      body: "We write the messages in your voice, connect your calendar and lead sources, and test every path. You review and approve before anything goes live.",
    },
    {
      step: "03",
      title: "Launch, measure, tune",
      body: "You get a monthly snapshot of calls captured, leads followed up, reviews earned, and jobs booked. We adjust timing and wording as we learn what your customers respond to.",
    },
  ],
} as const;

export const aiFaq = {
  label: "Questions",
  heading: "Practical answers, up front",
  intro:
    "If you do not see your question here, ask it in the form. You will get a direct answer by email.",
  items: [
    {
      question: "Will this sound like a robot to my customers?",
      answer:
        "No. We write short, plain messages in your voice and you approve them first. The goal is fast, helpful, and human. For anything sensitive, the system hands off to your team right away.",
    },
    {
      question: "Do I need to change my phone system or website?",
      answer:
        "Usually not. Most builds work with what you already have. If a small change would help a lot, we will flag it in the audit and explain the tradeoff before you spend anything.",
    },
    {
      question: "How long until I see results?",
      answer:
        "Missed call text back helps the first week because it catches calls you were already getting. Follow up and review systems build over 30 to 60 days as more estimates and completed jobs move through them.",
    },
    {
      question: "Is there a long term contract?",
      answer:
        "Starter and Growth are month to month after setup. Partner content is month to month with no setup fee. Clear pricing, no surprises.",
    },
    {
      question: "Who owns the content and the data?",
      answer:
        "You do. Your customer list, your reviews, and any content we create for your business belong to your business. We build the systems, you keep the assets.",
    },
    {
      question: "Can you also help with a website or CRM cleanup?",
      answer:
        "Yes. Many clients start with Starter or Growth and add a focused cleanup once the lead flow is stable. Mention it in the form and we will scope it separately with a flat quote.",
    },
  ],
} as const;

export const aiContact = {
  label: "Contact",
  heading: "Request your free audit or ask about a package",
  intro:
    "Use the form for the fastest reply. It reaches Sourcework directly, with your details attached.",
  nextHeading: "What happens next",
  nextBody:
    "Send the form and we will confirm receipt by email. For audit requests, we will send your video within 2 to 3 business days. For package questions, we will reply with next steps and a clear timeline.",
  assurances: [
    "No phone tag required to get started",
    "Direct reply from Sourcework, not a call center",
    "Clear pricing before any commitment",
  ],
  /** Keeps the government work as the stated core, which it is. */
  positioning: `${site.legalName}, ${site.location.replace("TN", "Tennessee")}. Government contracting is our core work. These AI services are a focused offering for local service businesses.`,
} as const;
