import type { Metadata } from "next";
import { InnerHero, Faq } from "@/components/page-parts";
import { CtaBand } from "@/components/sections";
import { PHONE_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Roofing FAQs",
  description:
    "Answers to common roofing questions about insurance claims, financing, project timelines, warranties, emergency service, and free quotes. Call (616) 207-3831.",
  alternates: { canonical: "/faqs" },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "Do you work with my insurance company?",
    a: "Yes. We work directly with insurance providers on storm and damage claims. We’ll inspect your roof, document the damage thoroughly, and help you through the claim so the process is as painless as possible.",
  },
  {
    q: "Do you offer financing?",
    a: "We do. Financing options are available so you can get the roof you need now and pay over time. We’ll go over the options with you when we provide your quote.",
  },
  {
    q: "How fast can I get a quote?",
    a: "We provide free quotes within 24 hours. For active leaks or storm damage, call us any time. We offer 24/7 emergency service and can get a temporary fix in place fast.",
  },
  {
    q: "What warranty do you offer?",
    a: "Every roof we install is backed by a 20-year workmanship warranty, in addition to the manufacturer warranties on the materials themselves. If something isn’t right with our work, we make it right.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most residential roof replacements are completed in one to three days, depending on the size and complexity of the roof and the weather. We’ll give you a clear timeline with your quote and keep you updated.",
  },
  {
    q: "What does 24/7 emergency service include?",
    a: "If water is getting into your home, call us any time. We’ll respond quickly to tarp or temporarily seal the affected area to stop the leak, then schedule the permanent repair and document everything for insurance.",
  },
  {
    q: "What roofing materials do you install?",
    a: "Asphalt shingle, cedar shake, metal, and TPO for installations, plus repairs on those materials and wood shake. We’ll help you choose what fits your home, climate, and budget.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We’re a licensed and insured roofing contractor and a BBB-accredited business, serving West Michigan since 2008.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Greater Grand Rapids, including Byron Center, Grandville, Kentwood, Caledonia, Hudsonville, Jenison, and Wayland. We also cover Traverse City and Charlevoix for larger projects.",
  },
];

export default function Page() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <InnerHero eyebrow="FAQs" title="Roofing questions, answered">
        Straight answers to what homeowners ask us most. Don’t see your question? Call or text {PHONE_DISPLAY} and we’re
        happy to help.
      </InnerHero>

      <section className="py-16 sm:py-20">
        <div className="wrap">
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
