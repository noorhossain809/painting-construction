"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { PROJECTS } from "../data/projects";

import { motion, AnimatePresence, useReducedMotion, Variants } from "framer-motion";

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
  const prefersReducedMotion = useReducedMotion();

  const filtered = useMemo(() => {
    if (activeTab === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeTab);
  }, [activeTab]);

  /**
   * Animation variants
   * - container: fades up, staggers children
   * - item: subtle pop + settle with a tiny overshoot
   * - exit: fade + down translation so exit doesn't feel abrupt
   */
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.04,
      duration: 0.52,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // ✅ type-safe
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.32, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] },
  },
};

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.996 },
    visible: {
      opacity: 1,
      y: [6, 0], // tiny overshoot then settle
      scale: 1,
      transition: { duration: 0.46, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, y: 6, transition: { duration: 0.26 } },
  };

  // If reduced motion is preferred, render static grid (no framer-motion transitions)
  if (prefersReducedMotion) {
    return (
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[48vh] md:h-[64vh] overflow-hidden">
          <Image
            src="/assets/before-after.jpg"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((p) => (
                <Link key={p.slug} href={`our-work/${p.slug}`}>
                  <article className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md">
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

                    <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/5" />
                  </article>
                </Link>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[48vh] md:h-[64vh] overflow-hidden">
        <Image
          src="/assets/before-after.jpg"
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

          {/* Animated area: keyed by activeTab so AnimatePresence mounts/unmounts on change */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={0}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filtered.map((p) => (
                <motion.div
                  key={p.slug}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className=""
                >
                  <Link href={`our-work/${p.slug}`}>
                    <motion.article
                      layout
                      whileHover={{ translateY: -6, boxShadow: "0 12px 30px rgba(8,15,35,0.12)" }}
                      className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow"
                    >
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

                      <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/5" />
                    </motion.article>
                  </Link>
                </motion.div>
              ))}

              {filtered.length === 0 && (
                <motion.div
                  key="empty"
                  className="col-span-full text-center text-sm text-muted-foreground py-16"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                >
                  No projects yet for this category.
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </div>
  );
}
