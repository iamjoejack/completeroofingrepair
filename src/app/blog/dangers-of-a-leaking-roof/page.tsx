import type { Metadata } from "next";
import { BlogPost } from "@/components/blog-post";

export const metadata: Metadata = {
  title: "The Hidden Dangers of a Leaking Roof",
  description:
    "A roof leak is more than an annoyance. From mold and rot to electrical hazards and ruined insulation, here's why even a small leak deserves a fast response.",
  alternates: { canonical: "/blog/dangers-of-a-leaking-roof" },
};

export default function Page() {
  return (
    <BlogPost
      slug="dangers-of-a-leaking-roof"
      category="Repairs"
      title="The hidden dangers of a leaking roof"
    >
      <p>
        A roof leak is easy to underestimate. If it’s just a slow drip into a bucket during heavy rain, it can feel like
        a minor inconvenience you’ll get to eventually. But the damage a leak causes mostly happens where you can’t see
        it — and some of it is genuinely dangerous. Here’s what’s really at stake.
      </p>

      <h2>Mold and your health</h2>
      <p>
        Mold needs only moisture and a surface to grow on, and a leaking roof provides both. Within a day or two of
        getting wet, mold can begin colonizing damp drywall, insulation, and framing — often inside walls and ceilings
        where you won’t spot it until it spreads. Beyond the structural harm, mold can affect indoor air quality and
        aggravate allergies and respiratory issues for the people living there.
      </p>

      <h2>Structural rot</h2>
      <p>
        The bones of your roof and home — decking, rafters, joists, and wall framing — are mostly wood, and wood that
        stays wet rots. Over time, a persistent leak can weaken the very structure holding your roof up. Rotted decking
        has to be replaced before a new roof can go on, and in severe cases the damage reaches into the home’s framing,
        turning a roofing job into a much larger repair.
      </p>

      <h2>Electrical hazards</h2>
      <p>
        This is the danger people overlook most. Water from a roof leak can travel along framing and reach wiring,
        junction boxes, and light fixtures in your attic and ceilings. Water and electricity are a serious combination —
        risking short circuits, damaged wiring, and even fire. If a leak is anywhere near electrical components, treat it
        as urgent and keep the affected circuits off until it’s checked.
      </p>

      <h2>Ruined insulation and higher bills</h2>
      <p>
        Wet insulation stops insulating. When a leak saturates the insulation in your attic or walls, it compresses and
        loses its ability to keep conditioned air in — so your furnace and air conditioner work harder, and your energy
        bills climb. Soaked insulation usually has to be removed and replaced.
      </p>

      <h2>Damage to everything below</h2>
      <p>
        Left unchecked, water finds its way to ceilings, walls, flooring, and whatever you’re storing in the attic.
        Stained drywall, bubbling paint, warped floors, and damaged belongings are all common — and all avoidable with a
        prompt repair.
      </p>

      <h2>What to do if you have a leak</h2>
      <ul>
        <li>Move belongings and electronics away from the water.</li>
        <li>If water is near light fixtures or outlets, shut off power to that area and keep clear.</li>
        <li>Contain the drip and, if you can do so safely, place a tarp over the area outside.</li>
        <li>Call a roofer promptly — the faster the source is found and sealed, the less damage spreads.</li>
      </ul>

      <h2>We’re here 24/7</h2>
      <p>
        A leak doesn’t keep business hours, so neither do we. If water is getting into your home, call us any time —
        we’ll respond fast, stop the leak, and make the lasting repair, then document everything for your insurance.
      </p>
    </BlogPost>
  );
}
