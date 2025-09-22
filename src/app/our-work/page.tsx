"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { PROJECTS } from "../data/projects";

type Category =
  | "all"
  | "industrial"
  | "education"
  | "office"
  | "retail"
  | "building";

const CATEGORIES: { label: string; value: Category }[] = [
  { label: "All Projects", value: "all" },
  { label: "Industrial", value: "industrial" },
  { label: "Education", value: "education" },
  { label: "Office", value: "office" },
  { label: "Retail", value: "retail" },
  { label: "Buildings", value: "building" },
];

export default function PortfolioDetail() {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const filtered = useMemo(() => {
    if (activeTab === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[48vh] md:h-[64vh] overflow-hidden">
        <Image
          src="/assets/before-after.jpg" // or "sandbox:/mnt/data/c49ceef7-229f-429e-ad17-b22dba1a879e.png"
          alt="before-after"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="max-w-3xl text-white">
              <Badge className="mb-5 bg-primary/90 text-primary-foreground px-3 py-1.5">
                badge type
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                project title
              </h1>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-6">
                project description
              </p>
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs + Grid */}
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <Tabs
          value={activeTab}
          onValueChange={(v) => setActiveTab(v as Category)}
          className="w-full"
        >
          <div className=" -mx-4 mb-8 border-b bg-muted/40 backdrop-blur supports-[backdrop-filter]:bg-muted/60">
            <div className="container mx-auto max-w-7xl px-4 bg-yellow-100">
              <TabsList className="w-full justify-start gap-1 overflow-x-auto rounded-none bg-yellow-100 p-0">
                {CATEGORIES.map((c) => (
                  <TabsTrigger
                    key={c.value}
                    value={c.value}
                    className="p-2 data-[state=active]:bg-yellow-400 font-[Teko] uppercase"
                  >
                    {c.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((p) => (
              <Link key={p.slug} href={`our-work/${p.slug}`}>
                <article className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md">
                  {/* Maintain consistent thumb height across mixed images */}
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <div className="mb-1 flex items-center gap-2">
                      <Badge variant="secondary" className="capitalize">
                        {p.category}
                      </Badge>
                    </div>
                    <h3 className="text-base font-semibold leading-tight line-clamp-2">
                      {p.title}
                    </h3>
                  </div>

                  {/* Subtle overlay on hover for a polished feel */}
                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/5" />
                </article>
              </Link>
            ))}
          </div>

          {/* Optional: empty state */}
          {filtered.length === 0 && (
            <div className="text-center text-sm text-muted-foreground py-16">
              No projects yet for this category.
            </div>
          )}
        </Tabs>
      </div>
    </div>
  );
}
