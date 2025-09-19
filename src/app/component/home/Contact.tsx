import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Upload } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-[url('/assets/contact-us-bg.png')] bg-cover bg-center bg-no-repeat bg-sky-100">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B2653] mb-4">
            Get Your <span className="text-yellow-500">Free Quote</span>
          </h2>
          <p className="md:text-xl text-base text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your space? Contact us today for a free, no-obligation estimate on your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-card">
              <CardContent className="lg:p-6 md:p-4 p-2 flex flex-col md:justify-start justify-center md:items-start items-center">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="lg:w-12 w-10 lg:h-12 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Call Us</h4>
                    <p className="md:text-base text-sm text-muted-foreground">Mon-Fri: 7AM-6PM</p>
                  </div>
                </div>
                <a href="tel:+1234567890" className="text-primary font-bold lg:text-xl md:text-lg text-base hover:text-primary-glow transition-colors">
                  +9175398168
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="lg:p-6 md:p-4 p-2 flex flex-col md:justify-start justify-center md:items-start items-center">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="lg:w-12 w-10 lg:h-12 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Email Us</h4>
                    <p className="md:text-base text-sm text-muted-foreground">Quick response guaranteed</p>
                  </div>
                </div>
                <a href="mailto:mrh_nyc@yahoo.com" className="text-primary font-medium hover:text-primary-glow transition-colors">
                  mrh_nyc@yahoo.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="lg:p-6 md:p-4 p-2 flex flex-col md:justify-start justify-center md:items-start items-center">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="lg:w-12 w-10 h-10 lg:h-12 bg-green-800 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Service Area</h4>
                    <p className="md:text-base text-sm text-muted-foreground">30+ mile radius</p>
                  </div>
                </div>
                <p className="text-foreground">
                  4017, ave D, Brooklyn New York, 11203
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="lg:p-6 md:p-4 p-2 flex flex-col md:justify-start justify-center md:items-start items-center">
                <div className="flex items-center space-x-4">
                  <div className="lg:w-12 w-10 h-10 lg:h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Emergency Service</h4>
                    <p className="text-sm md:text-base text-muted-foreground">24/7 for urgent repairs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-construction">
              <CardContent className="p-8">
                <form className="space-y-6">
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
                    <Input type="email" placeholder="john@example.com" className="border-input" />
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
                        <SelectItem value="interior-painting">Interior Painting</SelectItem>
                        <SelectItem value="exterior-painting">Exterior Painting</SelectItem>
                        <SelectItem value="renovation">Renovation & Remodeling</SelectItem>
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

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Upload Photos (Optional)
                    </label>
                    <div className="border-2 border-dashed border-input rounded-lg p-6 text-center">
                      <Upload className="mx-auto text-muted-foreground mb-2" size={24} />
                      <p className="text-muted-foreground text-sm">
                        Drag & drop photos or <span className="text-primary cursor-pointer">browse files</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        JPG, PNG up to 10MB each
                      </p>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex justify-end sm:flex-row gap-4">
                     <Button
            size="lg"
            className="group relative overflow-hidden rounded-md bg-amber-500 lg:px-6 px-3 lg:py-6 py-3 text-white text-base hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40"
          >
            {/* the black wipe */}
            <span
              className="pointer-events-none absolute inset-0 left-0 w-0 bg-[#0B2653] transition-[width] duration-400 ease-out group-hover:w-full"
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