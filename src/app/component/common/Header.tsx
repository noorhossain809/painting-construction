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
import {
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  Menu as MenuIcon,
  X as XIcon,
} from "lucide-react";

// shadcn/ui extras for mobile
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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header>
      <nav className="fixed top-0 start-0 z-20 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-gray-600/50 dark:bg-gray-900/70">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-3 md:py-4">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 w-8"
              alt="Flowbite Logo"
            />
            <span className="whitespace-nowrap text-2xl font-semibold dark:text-white">
              Flowbite
            </span>
          </Link>

          {/* Right actions (desktop) */}
          <div className="hidden items-center gap-2 md:flex md:order-2">
            <Button className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700">
              Get started
            </Button>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:block md:order-1">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden focus:shadow-md"
                            href="#"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components built with
                              Tailwind CSS.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((c) => (
                        <ListItem key={c.title} href={c.href} title={c.title}>
                          {c.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/docs">Docs</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>List</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-4">
                      <li className="space-y-2">
                        <NavigationMenuLink asChild>
                          <Link href="#">
                            <div className="font-medium">Components</div>
                            <div className="text-muted-foreground">
                              Browse all components in the library.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#">
                            <div className="font-medium">Documentation</div>
                            <div className="text-muted-foreground">
                              Learn how to use the library.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#">
                            <div className="font-medium">Blog</div>
                            <div className="text-muted-foreground">
                              Read our latest blog posts.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-4">
                      <li className="space-y-2">
                        <NavigationMenuLink asChild>
                          <Link href="#">Components</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#">Documentation</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#">Blocks</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-3 py-2">
                      <li className="space-y-2">
                        <NavigationMenuLink asChild>
                          <Link href="#" className="flex items-center gap-2">
                            <CircleHelpIcon className="h-4 w-4" />
                            Backlog
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#" className="flex items-center gap-2">
                            <CircleIcon className="h-4 w-4" />
                            To Do
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#" className="flex items-center gap-2">
                            <CircleCheckIcon className="h-4 w-4" />
                            Done
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:ring-gray-700"
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
                    <img
                      src="https://flowbite.com/docs/images/logo.svg"
                      alt="logo"
                      className="h-6 w-6"
                    />
                    <span>Flowbite</span>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile menu as Accordion */}
                <div className="px-2 py-2">
                  <Accordion type="multiple" className="w-full">
                    <AccordionItem value="home">
                      <AccordionTrigger className="px-2">Home</AccordionTrigger>
                      <AccordionContent className="px-2">
                        <div className="rounded-md border p-3">
                          <Link href="#" onClick={() => setMobileOpen(false)}>
                            <div className="mb-1 text-sm font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Beautifully designed components built with Tailwind
                              CSS.
                            </p>
                          </Link>
                          <ul className="mt-3 space-y-2">
                            <MobileItem href="/docs" title="Introduction" onPick={() => setMobileOpen(false)}>
                              Re-usable components built using Radix UI and
                              Tailwind CSS.
                            </MobileItem>
                            <MobileItem
                              href="/docs/installation"
                              title="Installation"
                              onPick={() => setMobileOpen(false)}
                            >
                              How to install dependencies and structure your app.
                            </MobileItem>
                            <MobileItem
                              href="/docs/primitives/typography"
                              title="Typography"
                              onPick={() => setMobileOpen(false)}
                            >
                              Styles for headings, paragraphs, lists...etc
                            </MobileItem>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="components">
                      <AccordionTrigger className="px-2">
                        Components
                      </AccordionTrigger>
                      <AccordionContent className="px-2">
                        <ul className="space-y-2">
                          {components.map((c) => (
                            <MobileItem
                              key={c.title}
                              href={c.href}
                              title={c.title}
                              onPick={() => setMobileOpen(false)}
                            >
                              {c.description}
                            </MobileItem>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="docs">
                      <AccordionTrigger className="px-2">Docs</AccordionTrigger>
                      <AccordionContent className="px-2">
                        <Link
                          href="/docs"
                          className="block rounded-md border p-3"
                          onClick={() => setMobileOpen(false)}
                        >
                          Open documentation
                        </Link>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="list">
                      <AccordionTrigger className="px-2">List</AccordionTrigger>
                      <AccordionContent className="px-2">
                        <ul className="space-y-2">
                          <SimpleLink href="#" onPick={() => setMobileOpen(false)}>
                            <div className="font-medium">Components</div>
                            <div className="text-muted-foreground">
                              Browse all components in the library.
                            </div>
                          </SimpleLink>
                          <SimpleLink href="#" onPick={() => setMobileOpen(false)}>
                            <div className="font-medium">Documentation</div>
                            <div className="text-muted-foreground">
                              Learn how to use the library.
                            </div>
                          </SimpleLink>
                          <SimpleLink href="#" onPick={() => setMobileOpen(false)}>
                            <div className="font-medium">Blog</div>
                            <div className="text-muted-foreground">
                              Read our latest blog posts.
                            </div>
                          </SimpleLink>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="simple">
                      <AccordionTrigger className="px-2">Simple</AccordionTrigger>
                      <AccordionContent className="px-2">
                        <ul className="space-y-2">
                          <SimpleLink href="#" onPick={() => setMobileOpen(false)}>
                            Components
                          </SimpleLink>
                          <SimpleLink href="#" onPick={() => setMobileOpen(false)}>
                            Documentation
                          </SimpleLink>
                          <SimpleLink href="#" onPick={() => setMobileOpen(false)}>
                            Blocks
                          </SimpleLink>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="with-icon">
                      <AccordionTrigger className="px-2">
                        With Icon
                      </AccordionTrigger>
                      <AccordionContent className="px-2">
                        <ul className="space-y-2">
                          <SimpleLink
                            href="#"
                            className="flex items-center gap-2"
                            onPick={() => setMobileOpen(false)}
                          >
                            <CircleHelpIcon className="h-4 w-4" /> Backlog
                          </SimpleLink>
                          <SimpleLink
                            href="#"
                            className="flex items-center gap-2"
                            onPick={() => setMobileOpen(false)}
                          >
                            <CircleIcon className="h-4 w-4" /> To Do
                          </SimpleLink>
                          <SimpleLink
                            href="#"
                            className="flex items-center gap-2"
                            onPick={() => setMobileOpen(false)}
                          >
                            <CircleCheckIcon className="h-4 w-4" /> Done
                          </SimpleLink>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Mobile CTA */}
                  <div className="px-2 py-4">
                    <Button
                      className="w-full bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
                      onClick={() => setMobileOpen(false)}
                    >
                      Get started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      {/* Spacer so content isn’t hidden behind fixed nav */}
      <div className="h-16 md:h-[72px]" />
    </header>
  );
};

export default Header;

/* ----------------------- helpers ----------------------- */

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug text-muted-foreground line-clamp-2">
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

function SimpleLink({
  href,
  children,
  className,
  onPick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onPick?: () => void;
}) {
  return (
    <Link
      href={href}
      className={`block rounded-md border p-3 transition-colors hover:bg-muted/40 ${className ?? ""}`}
      onClick={onPick}
    >
      {children}
    </Link>
  );
}
