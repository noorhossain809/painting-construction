// app/components/TeamSection.tsx
"use client";

import ContactForm from "@/components/ui/contactForm";
import ContactSupport from "@/components/ui/ContactSupport";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const team: TeamMember[] = [
  {
    name: "Jhon Castellon",
    role: "ENGINEERING OFFICER",
    image: "/assets/our-team/team1.jpg",
  },
  {
    name: "Fiorella Ibáñez",
    role: "MARKETING MANAGER",
    image: "/assets/our-team/team2.jpg",
  },
  {
    name: "Zosé Corpio",
    role: "TECHNOLOGY OFFICER",
    image: "/assets/our-team/team3.jpg",
  },
  {
    name: "Kyle Frederick",
    role: "FIELD OFFICER",
    image: "/assets/our-team/team4.jpg",
  },
];

export default function TeamSection() {
  return (
    <div min-h-screen bg-background>
      <div className="relative h-[48vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/assets/mobile-engineers_1098-15445.jpg"
          alt="before-after"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(15, 36, 56, 0.35)" }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto max-w-7xl px-4">
            <div className=" text-white text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight uppercase">
                Our Team
              </h1>
              <p className="text-muted">Home/our-team</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-16">
        <div className="container mx-auto text-center">
          {/* Heading */}
          <p className="text-yellow-500 font-semibold uppercase tracking-wide">
            Leadership Team
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0a2850]">
            Expert Dedicated <span className="text-yellow-500">Team</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Pro Painting & Construction is a general term meaning the art and
            science to form objects systems organizations.
          </p>

          {/* Team Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative w-full h-[320px] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-yellow-500 py-4">
                  <h3 className="text-[#0a2850] font-bold text-lg">
                    {member.name}
                  </h3>
                  <p className="text-white text-sm uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       <div
        id="contact"
        className="py-10 bg-[url('/assets/contact-us-bg.png')] bg-cover bg-center bg-no-repeat bg-sky-100"
      >
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <ContactSupport />
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
