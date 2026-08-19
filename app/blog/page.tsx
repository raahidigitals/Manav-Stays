import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";
import Footer from "@/components/Footer";


const BLOG_QUERY = `
  *[_type == "blog" && defined(slug.current)]
  | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    author,
    publishedAt
  }
`;

export default async function BlogPage() {
  const blogs = await client.fetch(BLOG_QUERY);

  return (
    <div className="min-h-screen bg-obsidian text-sandstone">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-40 md:px-10 md:pb-24 md:pt-48">         {/* HEADER */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-gold">
            Manav Stays
          </p>

          <h1 className="font-[var(--font-cormorant)] text-5xl font-medium tracking-tight text-sandstone md:text-7xl">
            Travel Journal
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-sandstone/65 md:text-lg">
            Discover Udaipur, explore Rajasthan and find inspiration for your
            next stay with Manav Stays.
          </p>
        </div>

        {/* BLOGS */}
        {blogs.length === 0 ? (
          <div className="border-t border-gold/20 pt-8">
            <p className="text-sm text-sandstone/60">
              No blogs published yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {blogs.map((blog: any) => (
              <Link
                key={blog._id}
                href={`/blog/${blog.slug.current}`}
                className="group overflow-hidden rounded-2xl border border-gold/20 bg-[#151515] shadow-[0_10px_40px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1 hover:border-gold/40"
              >

                {/* IMAGE */}
                {blog.mainImage && (
                  <div className="overflow-hidden">
                    <img
                      src={urlFor(blog.mainImage)
                        .width(1000)
                        .height(700)
                        .fit("crop")
                        .url()}
                      alt={blog.title}
                      className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* CONTENT */}
                <div className="p-6 md:p-7">

                  {/* CATEGORY */}
                  {blog.category && (
                    <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-gold/80">
                      {blog.category.replaceAll("-", " ")}
                    </p>
                  )}

                  {/* TITLE */}
                  <h2 className="font-[var(--font-cormorant)] text-3xl font-medium leading-tight text-sandstone">
                    {blog.title}
                  </h2>

                  {/* EXCERPT */}
                  {blog.excerpt && (
                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-sandstone/60">
                      {blog.excerpt}
                    </p>
                  )}

                  {/* DATE */}
                  {blog.publishedAt && (
                    <p className="mt-6 border-t border-gold/10 pt-4 text-[11px] uppercase tracking-[0.15em] text-sandstone/40">
                      {new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  )}

                </div>
              </Link>
            ))}

          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}