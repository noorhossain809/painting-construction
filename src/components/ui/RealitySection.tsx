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
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Fast forward to tomorrow: <br /> our vision is your reality.
        </h1>
        <p className="text-lg text-neutral-200 max-w-2xl mb-8">
          Commodo elementum parturi ent mauris montes dignissim, leo orci efficitur. 
          Sodales erat nisl sed augue vel consectetur, nulla adipiscing ex. Erat facilisi id 
          sociosqu aptent class malesuada, hendrerit ornare condimentum vitae.
        </p>
        <Button 
          size="lg"
          className="bg-amber-500 text-black font-bold hover:bg-amber-600 text-sm py-6 px-8 rounded-sm"
        >
          DISCOVER MORE
        </Button>
      </div>
    </section>
  );
}