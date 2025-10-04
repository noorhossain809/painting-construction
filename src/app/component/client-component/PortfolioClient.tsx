"use client";

import { useMemo, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  motion,
  AnimatePresence,
  Variants,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/app/data/projects";

// Types and Constants
type Category =
  | "all"
  | "industrial"
  | "interior"
  | "education"
  | "office"
  | "retail"
  | "building"
  | "civil"
  | "residential";

const CATEGORIES: { label: string; value: Category }[] = [
  { label: "All Projects", value: "all" },
  { label: "Industrial", value: "industrial" },
  { label: "Residential", value: "residential" },
  { label: "Interior", value: "interior" },
  { label: "Education", value: "education" },
  { label: "Office", value: "office" },
  { label: "Retail", value: "retail" },
  { label: "Buildings", value: "building" },
];

// Animation Variants
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
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.32, ease: [0.33, 1, 0.68, 1] },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.996 },
  visible: {
    opacity: 1,
    y: [6, 0],
    scale: 1,
    transition: { duration: 0.46, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: 6, transition: { duration: 0.26 } },
};

export default function PortfolioClient({ projects }: { projects: Project[] }) {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const filtered = useMemo(() => {
    if (activeTab === "all") return projects;
    return projects.filter((p) => p.category === activeTab);
  }, [activeTab, projects]);


  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
      <Tabs
        value={activeTab}
        onValueChange={(v) => setActiveTab(v as Category)}
        className="w-full"
      >
        <div className=" -mx-4 mb-8 border-b bg-muted/40 backdrop-blur supports-[backdrop-filter]:bg-muted/60">
          <div className="container mx-auto max-w-7xl px-4">
            <TabsList className="w-full justify-start gap-1 overflow-x-auto rounded-none bg-transparent p-0">
              {CATEGORIES.map((c) => (
                <TabsTrigger
                  key={c.value}
                  value={c.value}
                  className="p-2 data-[state=active]:bg-yellow-400 data-[state=active]:text-black font-semibold uppercase"
                >
                  {c.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filtered.map((p) => (
              <motion.div key={p.id} variants={itemVariants}>
                <Link href={`/our-work/${p.id}`}>
                  <motion.article
                    layout
                    whileHover={{
                      translateY: -6,
                      boxShadow: "0 12px 30px rgba(8,15,35,0.12)",
                    }}
                    className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow h-full"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={p.image}
                        alt={p.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <Badge variant="secondary" className="capitalize">
                        {p.category}
                      </Badge>
                      <h3 className="mt-2 text-base font-semibold leading-tight line-clamp-2">
                        {p.title}
                      </h3>
                    </div>
                  </motion.article>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </div>
  );
}
