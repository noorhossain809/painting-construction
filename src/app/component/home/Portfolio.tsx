import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/app/data/projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-yellow-500 p-1">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the dramatic transformations we&apos;ve created for homeowners
            and businesses throughout the area.
          </p>
        </div>

        {/* Featured Before/After */}
        <div className="mb-16">
          <Card className="p-0 overflow-hidden shadow-construction border-1">
            <div className="relative h-[420px]">
              {" "}
              {/* parent gets height + relative */}
              <Image
                src="/assets/before-after.jpg"
                alt="Before and after home transformation"
                fill
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-overlay opacity-50" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Complete Home Transformation
                </h3>
                <p className="text-lg opacity-90">
                  From weathered exterior to stunning curb appeal
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {PROJECTS.slice(0, 6).map((project, index) => (
            <Link href={`/our-work/${project.slug}`} key={index}>
              <Card
              key={index}
              className="group p-0 overflow-hidden hover:shadow-sky-50 transition-all duration-300 border-0 shadow "
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/our-work">
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
                View Full Portfolio
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
};

export default Portfolio;
