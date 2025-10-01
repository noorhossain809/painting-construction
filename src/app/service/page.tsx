import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Our Painting & Construction Services in New York | Pro Painting Construction",
  description:
    "Explore our wide range of expert services in New York City, including residential & commercial painting, full-scale remodeling, waterproofing, and more. Contact us for a free quote.",
};

import ServicesPageClient from "../component/client-component/ServicesPageClient";

export default function ServicesPage() {
  return (
    <div>
      <ServicesPageClient />
    </div>
  );
}

