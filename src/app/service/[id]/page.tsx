import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { services } from "@/app/data/projects";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import ContactSupport from "@/components/ui/ContactSupport";
import Link from "next/link";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((p) => p.id === params.id);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} | Pro Painting Construction`,
    description: service.description,
  };
}

const ServiceDetailsPage = ({ params }: Props) => {
  const { id } = params;

  const service = services.find((p) => p.id === id);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/assets/construction-business-concept.jpg"
          fill
          alt={service?.alt}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 opacity-100"
          style={{ backgroundColor: "rgba(15, 36, 56, 0.6)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex flex-col justify-center items-center text-white text-center">
              <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
                {service?.title}
              </h1>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-8">
                {service?.description}
              </p>
              <Link href="/service">
                <Button
                  variant="outline"
                  className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: hero image with big rounded corners */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[21/10]">
              <Image
                src={service.image}
                alt={`${service.alt}`}
                fill
                sizes="100vw"
                className="object-cover rounded-2xl"
                priority
              />
            </div>
            {/* Copy blocks */}
            <div className="mt-8 md:mt-10 space-y-6 text-muted-foreground leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0B2653]">
                {service.details.heading}
              </h2>
              <p>{service.details.p1}</p>
              <p>{service.details.p2}</p>
            </div>
          </div>

          {/* Right: facts card */}
          <ContactSupport />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
