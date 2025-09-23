"use client";

import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { services } from "@/app/data/projects";
import { ArrowLeft } from "lucide-react";

import ContactSupport from "@/components/ui/ContactSupport";

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const service = services.find((p) => p.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Service Not Found
          </h1>
          <Button onClick={() => router.push("/")} variant="default">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/assets/construction-business-concept.jpg"
          fill
          alt={service?.title || ""}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 opacity-100" style={{ backgroundColor: 'rgba(15, 36, 56, 0.6)' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex flex-col justify-center items-center text-white text-center">
              <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight">
                {service?.title}
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
                {service?.description}
              </p>
              <Button
                variant="outline"
                onClick={() => router.push("/")}
                className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
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
                alt={`${service.title} image`}
                fill
                sizes="100vw"
                className="object-cover rounded-2xl"
                priority
              />
            </div>
            {/* Copy blocks */}
            <div className="mt-8 md:mt-10 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Construction standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga harum quidem
                rerum facilis est et expedita distinctio.
              </p>
            </div>

            <div className="mt-6 md:mt-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {service.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
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
