import type { Metadata } from "next";
import { BlogPost } from "@/components/blog-post";

export const metadata: Metadata = {
  title: "Does Homeowners Insurance Cover Roof Damage?",
  description:
    "What homeowners insurance typically covers on a roof, what it usually doesn't, and how to file a storm-damage claim the right way in Michigan.",
  alternates: { canonical: "/blog/does-home-insurance-cover-roof-damage" },
};

export default function Page() {
  return (
    <BlogPost
      slug="does-home-insurance-cover-roof-damage"
      category="Insurance"
      title="Does homeowners insurance cover roof damage?"
    >
      <p>
        It’s one of the first questions homeowners ask after a storm, and the honest answer is: it depends. Most
        homeowners policies do cover roof damage, but only under certain conditions, and the details matter. Here’s a
        plain-English guide to what’s usually covered, what isn’t, and how to give your claim the best chance.
      </p>

      <h2>What’s typically covered</h2>
      <p>
        Most standard policies cover roof damage caused by “sudden and accidental” events, things outside your control
        that happen at a specific moment. In Michigan, the common ones are:
      </p>
      <ul>
        <li><strong>Wind:</strong> shingles torn or lifted off in a storm</li>
        <li><strong>Hail:</strong> impact damage that bruises or cracks shingles</li>
        <li><strong>Fallen trees or limbs:</strong> impact damage from a storm</li>
        <li><strong>Weight of ice and snow:</strong> damage from heavy accumulation, in some cases</li>
        <li><strong>Fire</strong> and certain other named perils</li>
      </ul>
      <p>
        When the damage results from one of these covered events, your policy will often pay to repair or replace the
        roof, minus your deductible.
      </p>

      <h2>What’s usually not covered</h2>
      <p>
        The big exclusion is wear and tear. Insurance is designed to cover sudden accidents, not the gradual aging of
        your roof. If a roof fails simply because it reached the end of its lifespan, that’s considered a maintenance
        issue, not a covered loss. Claims are also commonly denied for:
      </p>
      <ul>
        <li>Damage from neglected maintenance or a problem that was ignored</li>
        <li>Roofs that were already in poor condition before the event</li>
        <li>Certain older roofs that may be covered for actual cash value rather than full replacement cost</li>
      </ul>

      <h2>How to file a storm-damage claim the right way</h2>
      <p>A few steps make a real difference in how smoothly a claim goes:</p>
      <ul>
        <li><strong>Document everything early.</strong> Take dated photos of the damage and any interior effects as soon as it’s safe.</li>
        <li><strong>Get a professional inspection.</strong> An experienced roofer can identify and document damage an untrained eye misses, then put it in terms an adjuster understands.</li>
        <li><strong>Don’t wait.</strong> Most policies require you to report damage promptly. Delays give insurers a reason to question the claim.</li>
        <li><strong>Make temporary repairs to prevent further damage.</strong> Tarping a leak, for example, is usually expected, so keep the receipts.</li>
        <li><strong>Work with a contractor who deals with insurers.</strong> A roofer who handles claims regularly can meet the adjuster, present the documentation, and help avoid a lowball outcome.</li>
      </ul>

      <h2>How we help</h2>
      <p>
        We work directly with insurance providers on storm-damage claims. We’ll inspect your roof, document the damage
        thoroughly, and help you through the process so it’s as painless as possible. And if water is actively getting
        in, our 24/7 emergency service can protect your home while the claim moves forward.
      </p>
      <p>
        <em>
          This article is general information, not insurance advice. Your coverage depends on your specific policy, so
          check with your insurer for the details that apply to you.
        </em>
      </p>
    </BlogPost>
  );
}
