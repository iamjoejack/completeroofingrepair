import Link from "next/link";
import Image from "next/image";
import { Icon } from "./icons";
import { InnerHero } from "./page-parts";
import { CtaBand } from "./sections";
import { BASE_URL, SITE, POSTS } from "@/lib/site";

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
  const post = POSTS.find((p) => p.slug === slug);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    image: post ? `${BASE_URL}${post.image}` : undefined,
    author: { "@type": "Organization", name: SITE.legalName },
    publisher: { "@type": "Organization", name: SITE.legalName },
    mainEntityOfPage: `${BASE_URL}/blog/${slug}`,
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: `${BASE_URL}/blog/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <InnerHero eyebrow={category} title={title} showCta={false} />

      <section className="py-16 sm:py-20">
        <article className="wrap mx-auto max-w-3xl">
          {post && (
            <Image
              src={post.image}
              alt={title}
              width={1200}
              height={675}
              priority
              className="mb-10 aspect-[16/9] w-full rounded-2xl object-cover shadow-sm"
            />
          )}

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
