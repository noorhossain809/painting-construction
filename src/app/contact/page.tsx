import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactSupport from "@/components/ui/ContactSupport";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <div min-h-screen bg-background>
      <section className="relative h-[48vh] md:h-[70vh] overflow-hidden">
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
                Contact Us
              </h1>
              <p className="text-muted">Home/contact</p>
            </div>
          </div>
        </div>
      </section>
      {/* Decorative blueprint overlay (optional) */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/assets/blueprint-pattern.svg')] bg-[length:900px] bg-[right_-120px_top_-60px] bg-no-repeat opacity-[0.12]" />
      <div className="container mx-auto my-16">
        <section className="grid gap-6 md:grid-cols-4 mt-10">
          {/* {contacts.map((item, index) => (
        <Card key={index} className="rounded-2xl shadow-sm border p-6">
          <CardContent className="flex flex-col items-start space-y-3 p-0">
            {item.icon}
            <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
            <div className="text-sm text-gray-600 space-y-1">
              {item.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      ))} */}

          <Card className="border rounded-2xl shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Call Us</h3>
                  <p className="text-muted-foreground">Mon-Fri: 7AM-6PM</p>
                </div>
              </div>
              <a
                href="tel:+9175398168"
                className="text-primary font-bold text-xl hover:text-primary-glow transition-colors"
              >
                9175398168
              </a>
            </CardContent>
          </Card>

          <Card className="border rounded-2xl shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Email Us</h3>
                  <p className="text-muted-foreground">
                    Quick response guaranteed
                  </p>
                </div>
              </div>
              <a
                href="mailto:mrh_nyc@yahoo.com"
                className="text-primary font-medium hover:text-primary-glow transition-colors"
              >
                mrh_nyc@yahoo.com
              </a>
            </CardContent>
          </Card>

          <Card className="border rounded-2xl shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Service Area</h3>
                  <p className="text-muted-foreground">
                    4017, ave D, Brooklyn NY 11203
                  </p>
                </div>
              </div>
              <p className="text-foreground">
                Metropolitan Area & Surrounding Counties
              </p>
            </CardContent>
          </Card>

          <Card className="border rounded-2xl shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">
                    Emergency Service
                  </h3>
                  <p className="text-muted-foreground">
                    24/7 for urgent repairs
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <section
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
              <Card className="border-0 shadow-construction">
                <CardContent className="px-8 py-2">
                  <form className="space-y-2">
                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          placeholder="John Smith"
                          className="border-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <Input
                          placeholder="(123) 456-7890"
                          className="border-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="border-input"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="w-full">
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Type *
                      </label>
                      <Select>
                        <SelectTrigger className="w-full border-input">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="interior-painting">
                            Interior Painting
                          </SelectItem>
                          <SelectItem value="exterior-painting">
                            Exterior Painting
                          </SelectItem>
                          <SelectItem value="renovation">
                            Renovation & Remodeling
                          </SelectItem>
                          <SelectItem value="drywall">
                            Drywall & Plastering
                          </SelectItem>
                          <SelectItem value="flooring">
                            Flooring & Tiling
                          </SelectItem>
                          <SelectItem value="custom">Custom Project</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Details
                      </label>
                      <Textarea
                        placeholder="Tell us about your project - size, timeline, specific requirements, etc."
                        className="min-h-32 border-input"
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end sm:flex-row gap-4">
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
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
