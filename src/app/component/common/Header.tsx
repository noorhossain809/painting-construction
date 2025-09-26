"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { services } from "@/app/data/projects";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <nav className="absolute top-0 start-0 z-30 w-full transition-colors duration-300 bg-transparent">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-1 md:py-2">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/assets/propainting_construction_web_logo.png"
              width={100}
              height={60}
              alt="web-logo"
            />
          </Link>

          {/* Right actions (desktop) */}
          <div className="hidden items-center gap-2 md:flex md:order-2">
            <Link href="/contact">
              <Button
                size="lg"
                className="group relative w-full overflow-hidden rounded-md bg-amber-500 px-6 py-6 text-white text-base hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40"
              >
                {/* the black wipe */}
                <span
                  className="pointer-events-none absolute inset-0 left-0 w-0 bg-black transition-[width] duration-400 ease-out group-hover:w-full"
                  aria-hidden="true"
                />
                {/* label stays above the wipe */}
                <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-300 group-hover:text-white">
                  Contact Us
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

          {/* Desktop nav */}
          <div className="hidden md:block md:order-1">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Link href="/service">Services</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-4">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/service"
                            className="relative h-full w-full select-none rounded-md overflow-hidden no-underline outline-hidden focus:shadow-md"
                          >
                            <Image
                              src="/assets/before-after.jpg"
                              alt="shadcn/ui components preview"
                              fill
                              className="object-cover"
                              priority
                            />
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {services.slice(0, 3).map((service, indx) => (
                        <ListItem
                          key={indx}
                          href={`/service/${service.id}`}
                          title={service.title}
                        >
                          <div className="grid grid-cols-4 gap-0.5">
                            <div className="col-span-3">
                              <p>{service.description}</p>
                            </div>

                            <div className=" h-full w-full select-none overflow-hidden no-underline outline-hidden focus:shadow-md">
                              <Image
                                src={service.image} // replace with your actual image path
                                alt="shadcn/ui components preview"
                                width={80}
                                height={50}
                                className=""
                              />
                            </div>
                          </div>
                        </ListItem>
                      ))}

                      <li className="flex justify-end hover:text-yellow-500 hover:font-medium">
                        <Link href="service">
                          <div className="flex gap-1 items-center">
                            <p>See All</p>
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
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/our-location">Location</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Link href="/our-work">Our Works</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[100px] gap-4">
                      <li className="space-y-1">
                        <NavigationMenuLink asChild>
                          <Link href="our-work">Completed</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#">In Action</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[100px] gap-4">
                      <li className="space-y-2">
                        <NavigationMenuLink asChild>
                          <Link href="/about-us">About</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/our-team">Team</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/news" className="">
                      Newsroom
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile hamburger (Sheet) */}
          <div className="md:hidden md:order-2">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:ring-gray-700"
                >
                  {mobileOpen ? (
                    <XIcon className="h-6 w-6 transition-transform duration-300" />
                  ) : (
                    <MenuIcon className="h-6 w-6 transition-transform duration-300" />
                  )}
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[88%] p-0">
                <SheetHeader className="px-4 py-3 border-b">
                  <SheetTitle className="flex items-center gap-2">
                    <Link
                      href="/"
                      className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                      {/* <span className="whitespace-nowrap text-2xl font-semibold text-gray-900">
                        <span className="bg-yellow-500 p-[1px] rounded-md">
                          PPC
                        </span>{" "}
                        ProPaintingConstruction
                      </span> */}

                      <Image
                        src="/assets/propainting_construction_mobile_logo.png"
                        width={80}
                        height={60}
                        alt="web-logo"
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile menu as Accordion */}
                <div className="px-2 py-2">
                  <Accordion type="multiple" className="w-full">
                    <AccordionItem value="components">
                      <AccordionTrigger className="px-2">
                        <Link href="/service">Services</Link>
                      </AccordionTrigger>
                      <AccordionContent className="px-2">
                        <ul className="space-y-2">
                          {services.slice(0, 3).map((service) => (
                            <MobileItem
                              key={service.title}
                              href={`/service/${service.id}`}
                              title={service.title}
                              onPick={() => setMobileOpen(false)}
                            >
                              <div className="grid grid-cols-4 gap-0.5">
                                <div className="col-span-3">
                                  <p>{service.description}</p>
                                </div>
                                <div className=" h-full w-full select-none overflow-hidden no-underline outline-hidden focus:shadow-md">
                                  <Image
                                    src={service.image} // replace with your actual image path
                                    alt="shadcn/ui components preview"
                                    width={80}
                                    height={50}
                                    className=""
                                  />
                                </div>
                              </div>
                            </MobileItem>
                          ))}
                        </ul>
                        <div className="px-2 py-4">
                          <Link href={`/service`}>
                            <Button
                              size="lg"
                              className="group w-full relative overflow-hidden rounded-md bg-amber-500 px-6 py-6 text-white text-base hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40"
                            >
                              {/* the black wipe */}
                              <span
                                className="pointer-events-none absolute inset-0 left-0 w-0 bg-black transition-[width] duration-400 ease-out group-hover:w-full"
                                aria-hidden="true"
                              />
                              {/* label stays above the wipe */}
                              <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-300 group-hover:text-white">
                                See All
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
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="docs">
                      <AccordionTrigger className="px-2">
                        Location
                      </AccordionTrigger>
                      <AccordionContent className="px-2">
                        <Link
                          href="/"
                          className="block rounded-md border p-3"
                          onClick={() => setMobileOpen(false)}
                        >
                          Our Location
                        </Link>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="list">
                      <AccordionTrigger className="px-2">
                        <Link href="/our-work">Our Works</Link>
                      </AccordionTrigger>
                      <AccordionContent className="px-2">
                        <ul className="space-y-2">
                          <Link
                            href="/our-work"
                            className="block rounded-md border p-3"
                            onClick={() => setMobileOpen(false)}
                          >
                            Completed
                          </Link>
                          <Link
                            href="/"
                            className="block rounded-md border p-3"
                            onClick={() => setMobileOpen(false)}
                          >
                            In Action
                          </Link>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="simple">
                      <AccordionTrigger className="px-2">
                        <Link href="/about-us">About Us</Link>
                      </AccordionTrigger>
                      <AccordionContent className="px-2">
                        <ul className="space-y-2 ">
                          <Link
                            href="/about-us"
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-md border p-3 transition-colors hover:bg-muted/40"
                          >
                            About
                          </Link>
                          <Link
                            href="/our-team"
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-md border p-3 transition-colors hover:bg-muted/40"
                          >
                            Team
                          </Link>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="with-icon">
                      <AccordionTrigger className="px-2">
                        Newsroom
                      </AccordionTrigger>
                      <AccordionContent className="px-2">
                        <ul className="space-y-2 ">
                          <Link
                            href="/news"
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-md border p-3 transition-colors hover:bg-muted/40"
                          >
                            News
                          </Link>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Mobile CTA */}
                  <div className="px-2 py-4">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="group relative w-full overflow-hidden rounded-md bg-amber-500 px-6 py-6 text-white text-base hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40"
                      >
                        {/* the black wipe */}
                        <span
                          className="pointer-events-none absolute inset-0 left-0 w-0 bg-black transition-[width] duration-400 ease-out group-hover:w-full"
                          aria-hidden="true"
                        />
                        {/* label stays above the wipe */}
                        <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-300 group-hover:text-white">
                          Contact Us
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
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

/* ----------------------- helpers ----------------------- */

function ListItem({
  title,
  children,
  href,
  className = "",
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    // add `group` here so children can respond to hover
    <li className={`group ${className}`} {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={`block rounded-md border border-transparent p-3 transition-colors hover:text-yellow-500 
                      hover:border-yellow-400 hover:bg-muted/20`}
        >
          <div className="text-sm font-medium leading-none transition-colors ">
            {title}
          </div>
          <p className="text-sm leading-snug line-clamp-2 transition-colors text-muted-foreground ">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function MobileItem({
  title,
  children,
  href,
  onPick,
}: {
  title: string;
  children: React.ReactNode;
  href: string;
  onPick?: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        className="block rounded-md border p-3 transition-colors hover:bg-muted/40"
        onClick={onPick}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="text-sm leading-snug text-muted-foreground">{children}</p>
      </Link>
    </li>
  );
}
