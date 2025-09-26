import Link from "next/link";
import { Button } from "./button";

export function RealitySection() {
  return (
    <section className="relative w-full h-[50vh] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/tower-crane.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-white max-w-4xl px-8 text-center">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Fast forward to tomorrow <br /> our vision is your reality.
        </h1>
        <p className="text-sm md:text-lg text-neutral-200 max-w-2xl mb-8">
          Commodo elementum parturi ent mauris montes dignissim, leo orci efficitur. 
          Sodales erat nisl sed augue vel consectetur, nulla adipiscing ex. Erat facilisi id 
          sociosqu aptent class malesuada, hendrerit ornare condimentum vitae.
        </p>
         <Link href='/contact'>
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-sm bg-amber-500 lg:px-6 px-3 py-6 font-bold text-black text-base hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40"
              >
                <span
                  className="pointer-events-none absolute inset-0 left-0 w-0 bg-[#0B2653] transition-[width] duration-400 ease-out group-hover:w-full"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-300 group-hover:text-white uppercase">
                  Discover More
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
    </section>
  );
}