// app/component/home/HeroBanner.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation, Keyboard } from "swiper/modules";
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

const slides: Slide[] = [
  {
    kind: "video",
    mp4: "/videos/construction.mp4",
    webm: "/videos/construction.webm",
    poster: "/images/hero-poster.jpg",
    title: "Building dreams with precision and excellence",
    subtitle:
      "We specialize in turning visions into reality with exceptional craftsmanship and meticulous attention to detail.",
  },
  {
    kind: "video",
    mp4: "/videos/painting.mp4",
    webm: "/videos/painting.webm",
    poster: "/images/hero-poster.jpg",
    title: "Building dreams with precision and excellence",
    subtitle:
      "We specialize in turning visions into reality with exceptional craftsmanship and meticulous attention to detail.",
  },
  {
    kind: "video",
    mp4: "/videos/construction_2.mp4",
    webm: "/videos/construction_2.webm",
    poster: "/images/hero-poster.jpg",
    title: "Building dreams with precision and excellence",
    subtitle:
      "We specialize in turning visions into reality with exceptional craftsmanship and meticulous attention to detail.",
  },
  {
    kind: "image",
    src: "/assets/construct-planning.jpg",
    title: "From blueprint to skyline",
    subtitle: "On time, on budget — no excuses.",
  },
];

export default function HeroBanner() {
  return (
    <section className="relative mx-auto max-h-screen overflow-hidden">
      {/* Custom nav buttons (we style them like the circular button in your image) */}
      <div
        className="custom-prev absolute left-6 top-1/2 z-20 -translate-y-1/2 cursor-pointer"
        aria-hidden="true"
      >
        <button
          aria-label="Previous slide"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-black/30 backdrop-blur-sm transition hover:scale-105"
        >
          {/* left arrow */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M9 6l6 6-6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
                <Image src={s.src} alt={s.title} fill priority={idx === 0} className="object-cover" />
              )}

              {/* Overlays */}
              <div className="absolute inset-0" />
              <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(15, 36, 56, 0.6)' }}
        />

              {/* Content */}
              <div className="relative z-10 grid h-full place-items-center px-6 py-24 text-center text-white md:px-12 lg:px-20">
                <div className="max-w-4xl">
                  <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-yellow-400">
                    WELCOME TO BUILTUP
                  </p>
                  <h1 className="text-2xl font-bold leading-tight md:text-4xl lg:text-6xl">{s.title}</h1>
                  {s.subtitle && (
                    <p className="mx-auto mt-6 max-w-3xl text-sm md:text-base text-white/85 lg:text-lg">{s.subtitle}</p>
                  )}
                  <div className="mt-10 flex items-center justify-center gap-4">
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
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
