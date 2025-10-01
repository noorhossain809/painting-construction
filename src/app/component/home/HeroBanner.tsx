// app/component/home/HeroBanner.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Pagination,
  Navigation,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Slide =
  | {
      kind: "video";
      mp4: string;
      webm?: string;
      poster?: string;
      title: string;
      subtitle?: string;
    }
  | {
      kind: "image";
      src: string;
      title: string;
      subtitle?: string;
    };

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // controls delay between words
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const slides: Slide[] = [
  {
    kind: "video",
    mp4: "/videos/construction.mp4",
    title: "Expert Painting & Construction Services in New York, USA",
    subtitle:
      "From residential buildings to commercial complexes, we build with trust and quality.",
  },
  {
    kind: "video",
    mp4: "/videos/painting.mp4",
    title: "Professional Painting for Homes & Offices",
    subtitle:
      "Transform your space with our premium painting services and skilled professionals.",
  },
  {
    kind: "image",
    src: "/assets/construct-planning.jpg",
    title: "Your Vision, Our Blueprint",
    subtitle: "Meticulous planning and on-time project delivery guaranteed.",
  },
];

export default function HeroBanner() {
  return (
    <section className="relative mx-auto max-h-screen overflow-hidden">
      <div
        className="custom-prev absolute left-6 top-1/2 z-20 -translate-y-1/2 cursor-pointer"
        aria-hidden="true"
      >
        <button
          aria-label="Previous slide"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-black/30 backdrop-blur-sm transition hover:scale-105"
        >
          {/* left arrow */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M15 18l-6-6 6-6"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div
        className="custom-next absolute right-6 top-1/2 z-20 -translate-y-1/2 cursor-pointer"
        aria-hidden="true"
      >
        <button
          aria-label="Next slide"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-black/30 backdrop-blur-sm transition hover:scale-105"
        >
          {/* right arrow */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M9 6l6 6-6 6"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation, Keyboard]}
        slidesPerView={1}
        loop
        effect="fade"
        speed={900}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        // Link Swiper navigation to our custom DOM elements by selector
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        keyboard={{ enabled: true }}
        className="relative"
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-[75vh] md:h-[90vh]">
              {/* Background (video or image) */}
              {s.kind === "video" ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={s.poster}
                >
                  {s.webm ? <source src={s.webm} type="video/webm" /> : null}
                  <source src={s.mp4} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={s.src}
                  alt={s.title}
                  fill
                  priority={idx === 0}
                  className="object-cover"
                />
              )}

              {/* Overlays */}
              <div className="absolute inset-0" />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(15, 36, 56, 0.6)" }}
              />

              {/* Content */}
              <div className="relative z-10 grid h-full place-items-center px-6 py-24 text-center text-white md:px-12 lg:px-20">
                <div className="max-w-4xl">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
                    className=""
                  >
                    <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-yellow-400">
                      PRO PAINTING CONSTRUCTION
                    </p>
                  </motion.div>
                  <motion.h1
                    className="text-2xl font-bold leading-tight md:text-4xl lg:text-6xl"
                    variants={headingVariants}
                    initial="hidden"
                    animate="visible"
                    key={s.title} // ensures new animation on slide change
                  >
                    {s.title}
                  </motion.h1>

                  <motion.p
                    className="mx-auto mt-6 max-w-3xl text-sm md:text-base text-white/85 lg:text-lg"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                  >
                    {s.subtitle?.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        variants={child}
                        className="inline-block mr-1" // spacing between words
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
                    className="mt-10 flex items-center justify-center gap-4"
                  >
                    <Button asChild size="lg" className="rounded-full px-6">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="secondary"
                      className="rounded-full border border-white/30 bg-white/15 text-white hover:bg-white/25"
                    >
                      <Link href="/our-project">View Projects</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
