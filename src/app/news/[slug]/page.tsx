// /app/blog/[slug]/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Mail,
  Search,
  MessageCircle,
} from "lucide-react";
import { blogPosts } from "@/app/data/projects";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import ContactSupport from "@/components/ui/ContactSupport";

// generateStaticParams function remains the same...
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log(slug);
  const currentPost = blogPosts.find((p) => p.slug === slug);

  if (!currentPost) {
    notFound();
  }

  // Get the 3 latest posts for the sidebar, excluding the current one
  const latestPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[48vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/assets/working-with-blueprint.jpg"
          alt="before-after"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 opacity-100" style={{ backgroundColor: 'rgba(15, 36, 56, 0.6)' }} />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto max-w-7xl px-4">
            <div className=" text-white text-center">
              <h1 className="text-4xl md:text-7xl font-bold mb-4 leading-tight uppercase">
                News Details
              </h1>
              <p className="text-muted">Home/news</p>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          {/* Main Content */}
          <main className="lg:col-span-2">
            <article className="prose prose-lg max-w-none prose-p:text-gray-600 prose-headings:text-gray-800">
              <h1 className="text-xl">{currentPost.title}</h1>
              <p>{currentPost.description}</p>

              {/* Render the first part of the content */}
              <p>{currentPost.content.substring(0, 500)}...</p>

              {/* Image with Caption */}
              <figure className="my-8">
                <Image
                  src={currentPost.image}
                  alt="Engineers working at a construction site"
                  width={800}
                  height={450}
                  className="rounded-lg"
                />
                <figcaption className="text-center text-sm text-gray-500 mt-2">
                  Team construction engineers working at construction site with
                  blueprint on table
                </figcaption>
              </figure>

              {/* Render the rest of the content */}
              <p>{currentPost.content.substring(500)}</p>
            </article>

            {/* Social Share Bar */}
            <div className="mt-12 flex flex-wrap gap-2">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800">
                <Facebook className="h-4 w-4 mr-2" /> Facebook
              </Button>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800">
                <Twitter className="h-4 w-4 mr-2" /> Twitter
              </Button>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800">
                <Mail className="h-4 w-4 mr-2" /> Email
              </Button>
            </div>
          </main>

          {/* Sidebar */}
          <div className="mt-12 lg:mt-0">
            <aside className="space-y-8">
              {/* Search Bar */}
              <div className="relative w-full max-w-sm">
                <Input placeholder="Search..." className="pr-12" />
                <Button
                  size="icon"
                  className="absolute top-0 right-0 h-full rounded-l-none bg-yellow-600 hover:bg-yellow-700"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              {/* Newsletter */}
              {/* <div className="bg-yellow-500 p-6 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-2 text-gray-800">Newsletter</h3>
        <p className="text-gray-700 mb-4 text-sm">
          Sign up our newsletter to get update information, news and free insight.
        </p>
        <Input placeholder="Email" className="mb-3 bg-white" />
        <Button className="w-full bg-gray-800 text-white hover:bg-gray-900">
          SIGN UP
        </Button>
      </div> */}

              <ContactSupport />

              {/* Latest Posts */}
              <div>
                <h3 className="text-2xl font-bold mb-4 border-b pb-2">
                  Latest Post
                </h3>
                <div className="space-y-4">
                  {latestPosts.map((post) => (
                    <Link
                      href={`/news/${post.slug}`}
                      key={post.slug}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold leading-tight group-hover:text-yellow-600 transition-colors">
                          {post.title}
                        </h4>
                        <div className="text-xs text-gray-500 mt-1 flex items-center">
                          <span>{post.date}</span>
                          <span className="mx-2">·</span>
                          <MessageCircle className="h-3 w-3 mr-1" />
                          <span>No Comments</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
