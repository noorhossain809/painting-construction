"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Upload } from "lucide-react";
import { Variants, motion } from "framer-motion";

const contactInfo = [
  {
    icon: Phone,
    iconBg: "bg-orange-400",
    title: "Call Us",
    subtitle: "Mon-Fri: 7AM-6PM",
    link: "tel:+1-917-539-8168",
    linkText: "+1 (917) 539-8168",
  },
  {
    icon: Mail,
    iconBg: "bg-blue-900",
    title: "Email Us",
    subtitle: "Quick response guaranteed",
    link: "mailto:mrh_nyc@yahoo.com",
    linkText: "mrh_nyc@yahoo.com",
  },
  {
    icon: MapPin,
    iconBg: "bg-green-800",
    title: "Service Area",
    subtitle: "30+ mile radius",
    text: "4017, ave D, Brooklyn New York, 11203",
  },
  {
    icon: Clock,
    iconBg: "bg-orange-500",
    title: "Emergency Service",
    subtitle: "24/7 for urgent repairs",
  },
];

const formFields = [
  {
    type: "input",
    label: "Full Name *",
    placeholder: "John Smith",
    name: "fullName",
  },
  {
    type: "input",
    label: "Phone Number *",
    placeholder: "(123) 456-7890",
    name: "phone",
  },
  {
    type: "input",
    label: "Email Address *",
    placeholder: "john@example.com",
    name: "email",
    inputType: "email",
  },
  {
    type: "select",
    label: "Project Type *",
    name: "projectType",
    options: [
      { value: "interior-painting", label: "Interior Painting" },
      { value: "exterior-painting", label: "Exterior Painting" },
      { value: "renovation", label: "Renovation & Remodeling" },
      { value: "drywall", label: "Drywall & Plastering" },
      { value: "flooring", label: "Flooring & Tiling" },
      { value: "custom", label: "Custom Project" },
    ],
  },
  {
    type: "textarea",
    label: "Project Details",
    placeholder:
      "Tell us about your project - size, timeline, specific requirements, etc.",
    name: "projectDetails",
  },
  {
    type: "file",
    label: "Upload Photos (Optional)",
    name: "photos",
  },
];

const headingContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const headingChild: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
};

const sentence = `Ready to transform your space? Contact us today for a free, no-obligation estimate on your next project.`;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // controls delay between words
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const infoContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const infoChild: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
};

const formContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
};

const formChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } },
};

const Contact = () => {
  const words = ["Get Your", "Free Quote"];
  return (
    <section
      id="contact"
      className="py-10 bg-[url('/assets/contact-us-bg.png')] bg-cover bg-center bg-no-repeat bg-sky-100"
    >
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#0B2653] mb-4"
            variants={headingContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={headingChild}
                className={
                  word === "Free Quote"
                    ? "text-yellow-500 p-1 inline-block"
                    : "inline-block"
                }
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className="md:text-xl text-base text-muted-foreground max-w-3xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            {sentence.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={child}
                className="inline-block mr-1" // spacing between words
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            variants={infoContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={infoChild}>
                  <Card className="border-0 shadow-card">
                    <CardContent className="lg:p-6 md:p-4 p-2 flex flex-col md:justify-start justify-center md:items-start items-center">
                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className={`lg:w-12 w-10 h-10 lg:h-12 ${item.iconBg} rounded-full flex items-center justify-center`}
                        >
                          <Icon className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">
                            {item.title}
                          </h4>
                          {item.subtitle && (
                            <p className="md:text-base text-sm text-muted-foreground">
                              {item.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-primary hover:text-primary-glow transition-colors"
                        >
                          {item.linkText}
                        </a>
                      ) : (
                        item.text && (
                          <p className="text-foreground">{item.text}</p>
                        )
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Quote Form */}
          <motion.div
            className="lg:col-span-2"
            variants={formContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={formChild}>
              <Card className="border-0 shadow-construction">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    {formFields.map((field, i) => (
                      <motion.div key={i} variants={formChild}>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {field.label}
                        </label>

                        {field.type === "input" && (
                          <Input
                            type={field.inputType || "text"}
                            placeholder={field.placeholder}
                            className="border-input"
                          />
                        )}

                        {field.type === "select" && (
                          <Select>
                            <SelectTrigger className="w-full border-input">
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              {field.type === "select" &&
                                field.options?.map((option) => (
                                  <SelectItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        )}

                        {field.type === "textarea" && (
                          <Textarea
                            placeholder={field.placeholder}
                            className="min-h-32 border-input"
                          />
                        )}

                        {field.type === "file" && (
                          <div className="border-2 border-dashed border-input rounded-lg p-6 text-center">
                            <Upload
                              className="mx-auto text-muted-foreground mb-2"
                              size={24}
                            />
                            <p className="text-muted-foreground text-sm">
                              Drag & drop photos or{" "}
                              <span className="text-primary cursor-pointer">
                                browse files
                              </span>
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              JPG, PNG up to 10MB each
                            </p>
                          </div>
                        )}
                      </motion.div>
                    ))}

                    {/* Submit Button */}
                    <motion.div
                      variants={formChild}
                      className="flex justify-end sm:flex-row gap-4"
                    >
                      <Button
                        size="lg"
                        className="group relative overflow-hidden rounded-md bg-amber-500 lg:px-6 px-3 lg:py-6 py-3 text-white text-base hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40"
                      >
                        <span
                          className="pointer-events-none absolute inset-0 left-0 w-0 bg-[#0B2653] transition-[width] duration-400 ease-out group-hover:w-full"
                          aria-hidden="true"
                        />
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
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        {/* <div className="mt-16">
  <div className="border-0 shadow-card overflow-hidden">
    <div className="h-64">
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.194793927504!2d-73.94097952348486!3d40.64179164191007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b584e308649%3A0x9bdfa40ff79aa49e!2s4017%20Avenue%20D%2C%20Brooklyn%2C%20NY%2011203%2C%20USA!5e1!3m2!1sen!2sbd!4v1758001045179!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  </div>
</div> */}
      </div>
    </section>
  );
};

export default Contact;
