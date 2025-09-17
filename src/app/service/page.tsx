// app/component/home/ServicesSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Service, services } from "@/app/data/projects";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[48vh] md:h-[75vh] overflow-hidden">
        <Image
          src="/assets/low-angle-view-cranes-incomplete-buildings-against-clear-sky_1048944-29913653.jpg" // or "sandbox:/mnt/data/c49ceef7-229f-429e-ad17-b22dba1a879e.png"
          alt="before-after"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(15, 36, 56, 0.6)" }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto max-w-7xl px-4">
            <div className=" text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-center uppercase">
                Service
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Decorative blueprint overlay (optional) */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/assets/blueprint-pattern.svg')] bg-[length:900px] bg-[right_-120px_top_-60px] bg-no-repeat opacity-[0.12]" />

      <div className="relative mx-auto max-w-screen-2xl px-4 my-16">
        {/* Section header */}
        <div className="text-center">
          <div className="mb-2 text-sm font-semibold tracking-[0.18em] text-amber-500">
            OUR SERVICES
          </div>
          <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Our construction services
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600 md:text-lg">
            We specialize in a wide range of construction services, including
            residential, commercial, and industrial projects.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <ServiceCard key={idx} {...s} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center md:mt-14">
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-md bg-amber-500 px-6 py-6 text-white text-base hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40"
          >
            {/* the black wipe */}
            <span
              className="pointer-events-none absolute inset-0 left-0 w-0 bg-black transition-[width] duration-400 ease-out group-hover:w-full"
              aria-hidden="true"
            />
            {/* label stays above the wipe */}
            <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-300 group-hover:text-white">
              Get Free Quote
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Button>
        </div>
      </div>

      <section aria-labelledby="what-we-do" className="bg-sky-50 mt-10 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <div className="mb-2 text-sm sm:text-base font-semibold tracking-[0.18em] text-amber-500 uppercase">
              what we do
            </div>

            <h2
              id="what-we-do"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900"
            >
              Building the future on a <br className="hidden md:inline" />
              foundation of excellence
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-slate-600 text-sm sm:text-base md:text-lg">
              We specialize in a wide range of construction services, including
              residential, commercial, and industrial projects. From initial
              design to final inspection, we work closely with our clients to
              understand their unique needs and vision.
            </p>
          </div>

          {/* Grid: 1col on xs, 2col on sm, 4col on md+ */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center items-stretch">
            {[
              { value: "99%", label: "Buildings Control Approval Rate" },
              { value: "330+", label: "Active Construction Management" },
              { value: "250+", label: "Completed Projects Every Year" },
              { value: "3.254M", label: "Million Euros Turnover In 2020" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center rounded-2xl bg-[#020817] text-white p-6 sm:p-8 shadow-sm min-h-[180px]"
                role="region"
                aria-labelledby={`stat-${i}-label`}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold leading-none antialiased">
                  {stat.value}
                </div>
                <p
                  id={`stat-${i}-label`}
                  className="mt-3 text-center text-sm sm:text-base text-gray-300/90 font-medium"
                >
                  {stat.label.split(" <br /> ").map((line, idx) => (
                    <span key={idx} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* -------------------- Card -------------------- */

function ServiceCard({
  title,
  image,
  id = "#",
  featured,
  description,
}: Service) {
  return (
    <Link
      href={`/service/${id}`}
      className="group relative block overflow-hidden rounded-[28px] shadow-sm ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width:1024px) 25vw, (min-width:768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={featured}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/0" />
      </div>

      {/* Caption area anchored to bottom */}
      <div className="relative z-10 flex h-[440px] items-end p-6 md:p-7">
        <div className="w-full text-white">
          {/* Title row — stays visible at bottom */}
          <div className="flex items-center gap-3">
            <h3
              className="
    text-xl font-semibold drop-shadow-sm md:text-2xl
    leading-tight
    transform transition-all duration-1000 ease-out
    group-hover:translate-y-[-4px] group-hover:opacity-100
    opacity-90
  "
            >
              {title}
            </h3>
          </div>

          {/* sliding panel: hidden at rest, grows and fades in on hover */}
          {featured && description && (
            <div
              className="
                mt-3 max-w-[36ch] text-sm text-white/90 md:text-base
                overflow-hidden
                max-h-0 opacity-0 translate-y-4
                group-hover:max-h-[240px] group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-700 ease-out
              "
              aria-hidden={false}
            >
              <p className="leading-relaxed">{description}</p>

              <div className="mt-4 inline-flex items-center gap-2 text-amber-400">
                <span className="text-base font-semibold">View More</span>
                <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
