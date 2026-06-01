import Link from "next/link";
import { Icon } from "./icons";
import { InnerHero } from "./page-parts";
import { CtaBand } from "./sections";
import { BASE_URL, SITE } from "@/lib/site";

/* Shared article layout for blog posts. */
export function BlogPost({
  slug,
  category,
  title,
  children,
}: {
  slug: string;
  category: string;
  title: string;
  children: React.ReactNode;
}) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    author: { "@type": "Organization", name: SITE.legalName },
    publisher: { "@type": "Organization", name: SITE.legalName },
    mainEntityOfPage: `${BASE_URL}/blog/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <InnerHero eyebrow={category} title={title} showCta={false} />

      <section className="py-16 sm:py-20">
        <article className="wrap mx-auto max-w-3xl">
          <div className="prose-roof">{children}</div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <Link href="/blog" className="inline-flex items-center gap-1.5 font-semibold text-brand">
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
              Back to all posts
            </Link>
          </div>
        </article>
      </section>

      <CtaBand title="Questions about your roof?" subtitle="Free quote within 24 hours. Storm or leak emergency? We're here 24/7." />
    </>
  );
}
