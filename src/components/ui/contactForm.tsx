import React from "react";
import { Card, CardContent } from "./card";
import { Input } from "./input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Textarea } from "./textarea";
import { Button } from "./button";

const ContactForm = () => {
  return (
    <div className="">
      <Card className="border-0 shadow-construction">
        <CardContent className="px-8 py-2">
          <form className="space-y-2">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input placeholder="John Smith" className="border-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <Input placeholder="(123) 456-7890" className="border-input" />
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
                  <SelectItem value="drywall">Drywall & Plastering</SelectItem>
                  <SelectItem value="flooring">Flooring & Tiling</SelectItem>
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
                  className="pointer-events-none absolute inset-0 left-0 w-0 bg-[#0a2850] transition-[width] duration-400 ease-out group-hover:w-full"
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
  );
};

export default ContactForm;
