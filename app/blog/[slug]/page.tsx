import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { client, urlFor } from "@/lib/sanity";


const BLOG_POST_QUERY = `
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    author,
    publishedAt,
    body,
    seoTitle,
    metaDescription
  }
`;
const RELATED_BLOGS_QUERY = `
  *[_type == "blog" && defined(slug.current)]
  | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    publishedAt
  }
`;
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null;

      return (
        <figure className="my-12">
          <div className="overflow-hidden rounded-2xl border border-gold/10">
            <img
              src={urlFor(value).width(1400).fit("max").url()}
              alt={value.alt || ""}
              className="w-full object-cover"
            />
          </div>

          {value.caption && (
            <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.15em] text-sandstone/40">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },

  block: {
    h2: ({ children }: any) => (
      <h2 className="mt-14 mb-6 font-[var(--font-cormorant)] text-3xl font-medium leading-tight text-sandstone md:text-4xl">
        {children}
      </h2>
    ),

    h3: ({ children }: any) => (
      <h3 className="mt-10 mb-5 font-[var(--font-cormorant)] text-2xl font-medium text-sandstone md:text-3xl">
        {children}
      </h3>
    ),

    normal: ({ children }: any) => (
      <p className="mb-7 text-base leading-8 text-sandstone/75 md:text-lg md:leading-9">
        {children}
      </p>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="my-10 border-l-2 border-gold pl-6 font-[var(--font-cormorant)] text-xl italic leading-8 text-sandstone/80 md:text-2xl">
        {children}
      </blockquote>
    ),
  },

  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-sandstone">
        {children}
      </strong>
    ),

    em: ({ children }: any) => (
      <em className="font-[var(--font-cormorant)] text-sandstone/90">
        {children}
      </em>
    ),

    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold underline decoration-gold/40 underline-offset-4 transition hover:text-gold/80"
      >
        {children}
      </a>
    ),
  },
};

export default async function BlogPostPage({ params }: any) {
  const { slug } = params;

  const blog = await client.fetch(BLOG_POST_QUERY, { slug });

  if (!blog) {
    notFound();
  }
const relatedBlogs = await client.fetch(RELATED_BLOGS_QUERY);
  return (
    <main className="min-h-screen bg-obsidian text-sandstone">

      <article className="mx-auto max-w-5xl px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">

        {/* CATEGORY */}
        {blog.category && (
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-gold">
            {blog.category.replaceAll("-", " ")}
          </p>
        )}

        {/* TITLE */}
        <h1 className="max-w-4xl font-[var(--font-cormorant)] text-5xl font-medium leading-[0.98] tracking-tight text-sandstone md:text-7xl lg:text-8xl">
          {blog.title}
        </h1>

        {/* EXCERPT */}
        {blog.excerpt && (
          <p className="mt-7 max-w-3xl text-base leading-7 text-sandstone/65 md:text-xl md:leading-9">
            {blog.excerpt}
          </p>
        )}

        {/* AUTHOR + DATE */}
        <div className="mt-8 flex flex-wrap items-center gap-4 border-b border-gold/15 pb-8 text-xs uppercase tracking-[0.14em] text-sandstone/45">
          {blog.author && (
            <span>
              By {blog.author}
            </span>
          )}

          {blog.author && blog.publishedAt && (
            <span className="text-gold/50">•</span>
          )}

          {blog.publishedAt && (
            <span>
              {new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          )}
        </div>

        {/* FEATURED IMAGE */}
        {blog.mainImage && (
          <figure className="mt-10 overflow-hidden rounded-3xl border border-gold/10">
            <img
              src={urlFor(blog.mainImage)
                .width(1800)
                .height(1100)
                .fit("crop")
                .url()}
              alt={blog.title}
              className="w-full object-cover"
            />
          </figure>
        )}

        {/* ARTICLE CONTENT */}
        {blog.body && (
          <div className="mx-auto mt-14 max-w-3xl md:mt-20">
            <PortableText
              value={blog.body}
              components={portableTextComponents}
            />
          </div>
        )}

        {/* END DIVIDER */}
        <div className="mx-auto mt-16 max-w-3xl border-t border-gold/15 pt-8">
          <p className="text-xs uppercase tracking-[0.25em] text-gold/60">
            Manav Stays & Hospitality
          </p>

          <p className="mt-3 text-sm leading-6 text-sandstone/45">
            Discover Udaipur through authentic stays, local experiences and
            thoughtful hospitality.
          </p>
        </div>
{/* MORE FROM MANAV STAYS */}
<section className="mt-20 border-t border-gold/15 pt-14 md:mt-28 md:pt-20">
  <div className="mb-10">
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
      Continue Exploring
    </p>

    <h2 className="font-[var(--font-cormorant)] text-4xl font-medium text-sandstone md:text-5xl">
      More from Manav Stays
    </h2>

    <p className="mt-3 max-w-2xl text-sm leading-6 text-sandstone/50 md:text-base">
      Discover more places, experiences and travel inspiration from Udaipur
      and Rajasthan.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {relatedBlogs
      .filter((item: any) => item._id !== blog._id)
      .slice(0, 3)
      .map((item: any) => (
        <a
          key={item._id}
          href={`/blog/${item.slug.current}`}
          className="group overflow-hidden rounded-2xl border border-gold/20 bg-[#151515] transition-all duration-500 hover:-translate-y-1 hover:border-gold/40"
        >
          {item.mainImage && (
            <div className="overflow-hidden">
              <img
                src={urlFor(item.mainImage)
                  .width(1000)
                  .height(650)
                  .fit("crop")
                  .url()}
                alt={item.title}
                className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )}

          <div className="p-6">
            {item.category && (
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-gold/80">
                {item.category.replaceAll("-", " ")}
              </p>
            )}

            <h3 className="font-[var(--font-cormorant)] text-2xl font-medium leading-tight text-sandstone">
              {item.title}
            </h3>

            {item.excerpt && (
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-sandstone/55">
                {item.excerpt}
              </p>
            )}

            {item.publishedAt && (
              <p className="mt-5 border-t border-gold/10 pt-4 text-[10px] uppercase tracking-[0.15em] text-sandstone/35">
                {new Date(item.publishedAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            )}
          </div>
        </a>
      ))}
  </div>
</section>
      </article>
    
    </main>
  );
}