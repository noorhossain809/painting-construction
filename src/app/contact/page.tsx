
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ui/contactForm";
import ContactSupport from "@/components/ui/ContactSupport";
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
              <div className="absolute right-5 bottom-5">
                <p className="text-gray-200">Home/contact</p>
            </div>
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
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
