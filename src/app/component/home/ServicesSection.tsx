// app/component/home/ServicesSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Service, services } from "@/app/data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-sky-50 py-16 md:py-24"
    >
      {/* Decorative blueprint overlay (optional) */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/assets/blueprint-pattern.svg')] bg-[length:900px] bg-[right_-120px_top_-60px] bg-no-repeat opacity-[0.12]" />

      <div className="relative mx-auto max-w-screen-2xl px-4">
        {/* Section header */}
        <div className="text-center">
          <div className="mb-2 text-sm font-semibold tracking-[0.18em] text-amber-500">
            OUR SERVICES
          </div>
          <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Our painting & construction services
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600 md:text-lg">
            We specialize in a wide range of painting & construction services,
            including residential, commercial, and industrial projects.
          </p>
        </div>

        {/* Cards */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full mt-10 px-4"
        >
          <CarouselContent>
            {services.map((s, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <ServiceCard key={index} {...s} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="absolute left-6 lg:-left-10 z-10 lg:z-0 top-1/2 -translate-y-1/2
                   h-12 w-12 rounded-full backdrop-blur-sm text-gray-950
                   shadow-lg ring-1 ring-black/10
                   hover:bg-white hover:shadow-xl
                   focus-visible:ring-2 focus-visible:ring-primary
                   disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <CarouselNext
            className="absolute right-6 lg:-right-10 z-10 lg:z-0 top-1/2 -translate-y-1/2
                   h-12 w-12 rounded-full backdrop-blur-sm text-gray-950
                   shadow-lg ring-1 ring-black/10
                   hover:bg-white hover:shadow-xl
                   focus-visible:ring-2 focus-visible:ring-primary
                   disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </Carousel>

        {/* CTA */}
        <div className="mt-10 flex justify-center md:mt-14">
          <Link href="/service">
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
                See More
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
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Card -------------------- */

function ServiceCard({ title, image, id, featured, description }: Service) {
  return (
    <Link
      href={`service/${id}`}
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
