// app/component/home/AboutBlock.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export default function AboutBlock() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-construction-dark mb-6">
              Why Choose <span className="bg-yellow-500 p-1">Pro</span>
              Painting&Construction?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-construction-dark mb-2">
                    Expert Craftsmanship
                  </h4>
                  <p className="text-muted-foreground">
                    Our skilled professionals bring decades of experience to
                    every project.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-construction-dark mb-2">
                    Quality Materials
                  </h4>
                  <p className="text-muted-foreground">
                    We use only the finest materials and latest techniques for
                    lasting results.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-construction-dark mb-2">
                    On-Time Delivery
                  </h4>
                  <p className="text-muted-foreground">
                    We respect your schedule and complete projects on time,
                    every time.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
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

              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-amber-100">
                  <PhoneCall className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">
                    call support center 24x7
                  </div>
                  <div className="text-xl font-semibold tracking-wide text-slate-900">
                    +1 809 120 6705
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-card">
              <Image
                src="/assets/painting-service-C5IAPIDk.jpg"
                width={1000}
                height={500}
                alt="Professional painting service"
                className="w-full h-72 object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-card">
              <Image
                src="/assets/renovation-before-after-B9xiNvR6.jpg"
                width={1000}
                height={500}
                alt="Before and after renovation"
                className="w-full h-72 object-cover hover:scale-105 transform transition-smooth duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
