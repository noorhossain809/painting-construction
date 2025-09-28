import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/app/data/projects";
import {
  MapPin,
  ArrowLeft,
  Building2,
  Ruler,
  CalendarDays,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ContactSupport from "@/components/ui/ContactSupport";
import Link from "next/link";

interface Props  {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const project = PROJECTS.find((p) => p.id === params?.id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Our Work | Pro Painting Construction`,
    description: project.description,
  };
}

type Fact = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

const PortfolioDetails = async(props: Props) => {
  const params = await props.params;
  const { id } = params;

  const project = PROJECTS.find((p) => p.id === id);

  const facts: Fact[] = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: project?.location || "N/A",
    },
    {
      icon: <Building2 className="h-5 w-5" />,
      label: "Sector",
      value: project?.category || "N/A",
    },
    {
      icon: <Ruler className="h-5 w-5" />,
      label: "Scope Of Work",
      value: "12000+",
    },
    {
      icon: <CalendarDays className="h-5 w-5" />,
      label: "Completion Date",
      value: project?.completedDate || "N/A",
    },
  ];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/assets/before-after.jpg"
          fill
          alt={project?.title || ""}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col justify-center items-center text-white">
              <Badge className="mb-6 bg-primary/90 backdrop-blur text-primary-foreground px-4 py-2 text-sm font-medium">
                {project?.type}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {project?.title}
              </h1>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-8">
                {project?.description}
              </p>
              <Link href="/our-work">
                <Button
                  variant="outline"
                  className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Portfolio
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
            <div className="relative w-full overflow-hidden rounded-[28px]">
              <Carousel
                opts={{ loop: true, align: "start" }}
                className="w-full"
              >
                {/* Make items edge-to-edge */}
                <CarouselContent className="-ml-0">
                  {project.gallery.map((img, index) => (
                    <CarouselItem key={index} className="pl-0">
                      {/* Panoramic aspect & fill image */}
                      <div className="relative aspect-[21/10]">
                        <Image
                          src={img}
                          alt={`${project.title} image ${index + 1}`}
                          fill
                          sizes="100vw"
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Circular arrows like the mockup */}
                <CarouselPrevious
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2
                   h-12 w-12 rounded-full bg-white/10 text-white
                   shadow-lg ring-1 ring-black/10
                   hover:bg-white hover:shadow-xl
                   focus-visible:ring-2 focus-visible:ring-primary
                   disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <CarouselNext
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2
                   h-12 w-12 rounded-full bg-white/10 text-white
                   shadow-lg ring-1 ring-black/10
                   hover:bg-white hover:shadow-xl
                   focus-visible:ring-2 focus-visible:ring-primary
                   disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </Carousel>
            </div>
            {/* Copy blocks */}
            <div className="mt-8 md:mt-12">
              {/* The Challenge Section */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  The Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Our Solution Section */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Our Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Results Section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Results & Outcome
                </h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {project.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: facts card */}
          <div className="space-y-4 flex flex-col justify-center items-center">
            <ContactSupport />
            <Card className="rounded-2xl bg-yellow-400/10 border border-muted/50 shadow-sm p-6  w-full max-w-sm md:p-7">
              <ul className="divide-y">
                {facts.map((f, i) => (
                  <li key={i} className="py-5 first:pt-0 last:pb-0">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-50 text-yellow-500">
                        {f.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {f.label}
                        </p>
                        <p className="mt-1 font-semibold text-foreground">
                          {f.value}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
