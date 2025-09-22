// Define the structure for a single blog post
type BlogPost = {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
};


export type Project = {
  slug: string; // URL slug, e.g., "school-gym-court"
  title: string; // Display title
  type: string; // Display type label, e.g., "Education"
  category:
    | "industrial"
    | "Residential"
    | "education"
    | "office"
    | "retail"
    | "aviation"
    | "civil"
    | "building"
    | "residential";
  description: string;
  location: string;
  duration: string;
  completedDate: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  gallery: string[];
  testimonial?: {
    text: string;
    author: string;
    rating: number;
  };
};

export type Service = {
  title: string;
  image: string; // public path
  id?: string;
  featured?: boolean; // shows description + link if true
  description?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "school-gym-court",
    title: "School Gym & Court",
    type: "Education",
    category: "education",
    description:
      "Resurfacing of school gym flooring and outdoor basketball court.",
    location: "Reno, NV",
    duration: "4 weeks",
    completedDate: "May 2024",
    image: "/assets/school.jpeg",
    challenge:
      "Aging floors with cracks and faded lines created safety issues.",
    solution:
      "Installed new shock-absorbing flooring and resurfaced the outdoor court with UV-resistant coatings.",
    results: [
      "Improved student safety",
      "Modernized court aesthetics",
      "Non-slip finish for better grip",
    ],
    gallery: ["/assets/school(2).jpeg", "/assets/school(3).jpeg", "/assets/school(4).jpeg", "/assets/school(5).jpeg"],
    testimonial: {
      text: "The kids love the new gym—it feels brand new!",
      author: "Principal Johnson",
      rating: 5,
    },
  },
  {
    slug: "Residential",
    title: "Residential House Expansion",
    type: "Residential",
    category: "Residential",
    description:
      "Major expansion of logistics Residential Houses for increased capacity.",
    location: "Sacramento, CA",
    duration: "10 weeks",
    completedDate: "May 2024",
    image: "/assets/suburban-house-sunny-sky-symbolizing-american-dream-challenges-rising-mortga_871349-9972.jpg",
    challenge:
      "Needed to double warehouse space while keeping operations live.",
    solution:
      "Phased construction with modular steel frames and rapid flooring install.",
    results: [
      "Doubled storage capacity",
      "Zero downtime in operations",
      "Energy-efficient lighting upgrade",
    ],
    gallery: ["/assets/painting/interior-residential-house0.jpeg","/assets/painting/interior-residential-house.jpeg", "/assets/painting/interior-residential-house2.jpeg", "/assets/painting/interior-residential-house3.jpeg"],
    testimonial: {
      text: "Flawless execution—operations never stopped once.",
      author: "Logistics Manager",
      rating: 5,
    },
  },
  {
    slug: "distribution-hub",
    title: "Distribution Hub Expansion",
    type: "Industrial",
    category: "industrial",
    description:
      "Major expansion of logistics distribution hub for increased capacity.",
    location: "Sacramento, CA",
    duration: "12 weeks",
    completedDate: "April 2024",
    image: "/assets/disribution-hub/industrial-park-factory-building-warehouse.jpg",
    challenge:
      "Needed to double warehouse space while keeping operations live.",
    solution:
      "Phased construction with modular steel frames and rapid flooring install.",
    results: [
      "Doubled storage capacity",
      "Zero downtime in operations",
      "Energy-efficient lighting upgrade",
    ],
    gallery: ["/assets/disribution-hub/industrial-park-factory-building-warehouse.jpg", 
      "/assets/disribution-hub/industrial-park-factory-building-warehouse (1).jpg",
      "/assets/disribution-hub/industrial-park-factory-building-warehouse_1417-1909.jpg",
      "/assets/disribution-hub/industrial-park-factory-building-warehouse_1417-1910.jpg",
      "/assets/disribution-hub/industrial-park-factory-building-warehouse_1417-1911.jpg",
      "/assets/disribution-hub/industrial-park-factory-building-warehouse_1417-1921.jpg",
      "/assets/disribution-hub/modern-industrial-warehouse-exterior-blue-sky_1417-29448.jpg",
    ],
    testimonial: {
      text: "Flawless execution—operations never stopped once.",
      author: "Logistics Manager",
      rating: 5,
    },
  },
  {
    slug: "office-block-a",
    title: "Corporate Office Block A",
    type: "Office",
    category: "office",
    description:
      "Renovation of 5-story corporate headquarters with sustainable materials.",
    location: "Seattle, WA",
    duration: "10 weeks",
    completedDate: "Feb 2024",
    image: "/assets/corporate-office/view-modern-office.jpg",
    challenge: "Outdated design didn’t reflect brand or sustainability goals.",
    solution:
      "Used reclaimed wood, green wall installations, and open plan designs.",
    results: [
      "LEED Gold certified",
      "40% reduction in energy use",
      "Employee satisfaction up 30%",
    ],
    gallery: [
      "/assets/corporate-office/view-modern-office.jpg",
      "/assets/corporate-office/professional-team-doing-remodeling-work-building-converting-old-office-new-design_1167344-94475.jpg",
      "/assets/corporate-office/crane-aiding-office-space-construction-best-crane-image-photography_1020697-32680.jpg",
      "/assets/corporate-office/painter-man-painting-wall-with-paint-roller_255667-51725.jpg",
      "/assets/corporate-office/indian-apartment-repair-worker-paints-white-wall-with-roller_255667-72602.jpg",
      "/assets/corporate-office/full-shot-people-carrying-placard-together.jpg",

    ],
    testimonial: {
      text: "The new space is inspiring for our team.",
      author: "HR Director",
      rating: 4,
    },
  },
  {
    slug: "clinic-interior",
    title: "Community Clinic Interior",
    type: "Building",
    category: "building",
    description: "Interior modernization of a community healthcare clinic.",
    location: "Boise, ID",
    duration: "6 weeks",
    completedDate: "Jan 2024",
    image: "/assets/community-center/building-with-lot-windows-building-that-says-construction_976492-23264.jpg",
    challenge: "Outdated patient rooms and inefficient layout.",
    solution: "New exam rooms, patient-friendly lighting, and modern finishes.",
    results: [
      "Reduced patient wait times",
      "Better staff workflow",
      "More welcoming environment",
    ],
    gallery: [
      "/assets/community-center/building-with-lot-windows-building-that-says-construction_976492-23264.jpg",
      "/assets/community-center/construction-site-with-workers-scaffolding_535345-12022.jpg",
      "/assets/community-center/construction-site-with-workers-scaffolding_535345-12131.jpg",
      "/assets/community-center/construction-site-with-workers-scaffolding_535345-12889.jpg",
      "/assets/community-center/building-with-red-truck-parked-front-it_976492-22647.jpg",

    ],
    testimonial: {
      text: "Patients immediately noticed the difference.",
      author: "Clinic Director",
      rating: 5,
    },
  },
  {
    slug: "retail-lighting",
    title: "Retail Store Lighting Upgrade",
    type: "Retail",
    category: "retail",
    description: "Complete relighting for a flagship retail store.",
    location: "San Diego, CA",
    duration: "3 weeks",
    completedDate: "March 2024",
    image: "/assets/retail-store/evening-view-cold-chain-logistics-facility-wallpaper_1270829-88248.jpg",
    challenge: "Store lighting was dull, reducing product appeal.",
    solution: "Installed energy-efficient LED spotlights and ambient lighting.",
    results: [
      "Sales increased by 18%",
      "Cut lighting costs by 40%",
      "Improved in-store customer experience",
    ],
    gallery: [
      "/assets/retail-store/evening-view-cold-chain-logistics-facility-wallpaper_1270829-88248.jpg",
      "/assets/retail-store/construction-site-with-workers-installing-doors-windows-new-building_741402-8443.jpg",
      "/assets/retail-store/supermarket-shop-chernobyl-exclusion-zone-with-ruins-abandoned-pripyat-city-zone-radioactivity-ghost-town_627829-11701.jpg",
      "/assets/retail-store/scaffolding-new-onestory-house-facade-works-building-bussiness-lowrise-private-building-plastering-wall-building-shop-building-metal-production-struct.jpg",
      "/assets/retail-store/wine-cellar-with-bar-wine-bottles-shelves_1072138-221508.jpg",
    ],
    testimonial: {
      text: "Our store finally shines—literally.",
      author: "Retail Manager",
      rating: 5,
    },
  },
  {
    slug: "cold-storage",
    title: "Cold Storage Facility",
    type: "Industrial",
    category: "industrial",
    description: "Built a state-of-the-art cold storage for food distribution.",
    location: "Fresno, CA",
    duration: "14 weeks",
    completedDate: "Dec 2023",
    image: "/assets/before-after.jpg",
    challenge: "Strict temperature control requirements for perishable goods.",
    solution: "High-insulation panels, backup generators, and smart sensors.",
    results: [
      "24/7 monitoring system",
      "Reduced energy usage by 25%",
      "Compliant with FDA standards",
    ],
    gallery: ["/assets/before-after.jpg", "/assets/before-after.jpg"],
    testimonial: {
      text: "Reliability and efficiency exceeded expectations.",
      author: "Operations Director",
      rating: 5,
    },
  },
  {
    slug: "warehouse-mezzanine",
    title: "Warehouse Mezzanine Build",
    type: "Industrial",
    category: "industrial",
    description:
      "Added mezzanine level to existing warehouse for extra storage.",
    location: "Salt Lake City, UT",
    duration: "8 weeks",
    completedDate: "Nov 2023",
    image: "/assets/before-after.jpg",
    challenge: "Need more capacity without acquiring new property.",
    solution: "Steel mezzanine with fire-rated access and lifts.",
    results: [
      "Storage increased by 35%",
      "Low construction downtime",
      "Improved operational efficiency",
    ],
    gallery: ["/assets/before-after.jpg", "/assets/before-after.jpg"],
    testimonial: {
      text: "Smart, cost-effective solution for our needs.",
      author: "Warehouse Manager",
      rating: 4,
    },
  },
  {
    slug: "community-center",
    title: "Community Center",
    type: "Civil",
    category: "civil",
    description:
      "New build of a community recreation center with multi-use hall.",
    location: "Denver, CO",
    duration: "20 weeks",
    completedDate: "Oct 2023",
    image: "/assets/before-after.jpg",
    challenge: "Needed versatile space for community events on a budget.",
    solution: "Hybrid steel-timber design, modular halls, and solar panels.",
    results: [
      "Energy self-sufficient building",
      "Flexible space for 1,000 people",
      "Community engagement increased",
    ],
    gallery: ["/assets/before-after.jpg", "/assets/before-after.jpg"],
    testimonial: {
      text: "Our neighborhood finally has a hub for everyone.",
      author: "City Council Rep",
      rating: 5,
    },
  },
  {
    slug: "modern-kitchen-renovation",
    title: "Modern Kitchen Renovation",
    type: "Residential",
    category: "building", 
    description:
      "Complete kitchen remodel with custom cabinets and quartz finishes.",
    location: "Seattle, WA",
    duration: "6 weeks",
    completedDate: "Aug 2023",
    image: "/assets/modern-kitchen-renovation-cabinets-countertops-installed_857340-10731.jpg",
    challenge: "Outdated 1980s kitchen layout was cramped and dark.",
    solution:
      "Custom cabinetry, quartz countertops, new lighting, and open layout.",
    results: [
      "25% increase in home value",
      "40% more storage space",
      "Energy-efficient LED fixtures",
    ],
    gallery: ["/assets/modern-kitchen-renovation-cabinets-countertops-installed_857340-11254.jpg", "/assets/modern-kitchen-renovation-cabinets-countertops-installed_857340-10731.jpg"],
    testimonial: {
      text: "This renovation changed how we live in our home.",
      author: "Sarah & Mike Johnson",
      rating: 5,
    },
  },
];

export const services: Service[] = [
  {
    title: "Residential & Commercial Painting",
    image: "/assets/painting/residential-commercial-painting.jpg",
    id: "residential-commercial-painting",
    featured: true,
    description:
      "Professional interior and exterior painting solutions for homes and businesses that enhance beauty and long-lasting protection.",
  },
  {
    title: "Interior Design & Decorative Painting",
    image: "/assets/painting/interior-design-decorative-Bh2vMzn8.jpg",
    id: "interior-decorative-painting",
    featured: true,
    description:
      "Transform your living or office spaces with custom wall textures, accent walls, and decorative finishes that reflect your style.",
  },
  {
    title: "General Construction & Remodeling",
    image: "/assets/painting/building-construction.jpg",
    id: "building-maintenance-repairs",
    featured: true,
    description:
      "Full-scale renovation projects transforming spaces with modern design and quality construction.",
  },
  {
    title: "Building Maintenance & Repairs",
    image: "/assets/painting/building-maintenance-repairs-C547MHdJ.jpg",
    id: "building-maintenance-repairs",
    featured: true,
    description:
      "Ongoing building maintenance including painting touch-ups, minor construction, and preventive repairs for lasting value.",
  },
  {
    title: "Industrial Painting & Coatings",
    image: "/assets/painting/industrial-painting-coatings-xhJznG8F.jpg",
    id: "industrial-painting-coatings",
    featured: true,
    description:
      "Heavy-duty painting and coating services for factories, warehouses, and industrial structures that meet safety and durability standards.",
  },

  {
    title: "Exterior Painting & Waterproofing",
    image: "/assets/painting/exterior-painting-waterproofing-BhwDUGxh.jpg",
    id: "exterior-painting-waterproofing",
    featured: true,
    description:
      "Protect your property from weather damage with expert exterior painting and waterproof coating services built to last.",
  },
  {
    title: "Drywall Installation & Repair",
    image: "/assets/painting/drywall-installation-repair-DbMNHWHJ.jpg",
    id: "drywall-installation-repair",
    featured: true,
    description:
      "Seamless drywall installation, patching, and finishing for flawless walls and ceilings in both residential and commercial projects.",
  },
  {
    title: "Flooring Installation & Renovation",
    image: "/assets/painting/flooring-installation-renovation.jpg",
    id: "flooring-installation-renovation",
    featured: true,
    description:
      "Upgrade your interiors with premium flooring solutions including tiles, hardwood, laminate, and epoxy finishes.",
  },
  {
    title: "Building Renovation & Remodeling",
    image: "/assets/painting/building-renovation-remodeling-BKVZko9u.jpg",
    id: "building-renovation-remodeling",
    featured: true,
    description:
      "Complete renovation services to modernize your property, from kitchen and bathroom upgrades to full-scale remodeling.",
  },
  {
    title: "Plastering & Wall Finishing",
    image: "/assets/painting/plastering-wall-finishing.jpg",
    id: "plastering-wall-finishing",
    featured: true,
    description:
      "High-quality plastering, skimming, and wall finishing services that create a smooth foundation for paint or wallpaper.",
  },
  {
    title: "Roof Painting & Waterproof Coating",
    image: "/assets/painting/roof-painting-waterproof-W-tuBKxd.jpg",
    id: "roof-painting-waterproofing",
    featured: true,
    description:
      "Extend the life of your roof with protective roof painting and waterproofing solutions designed for durability and energy efficiency.",
  },
];


// Array of 10 blog post data objects
export const blogPosts: BlogPost[] = [
  {
    image: '/assets/painting/interior-residential-house.jpeg',
    category: 'Exterior Painting',
    date: 'September 22, 2025',
    title: 'Choosing the Best Exterior Paint for New York\'s Four Seasons',
    description: 'From freezing winters to humid summers, NY weather is tough on exteriors. Pro Painting Construction guides you on durable paints that resist cracking, fading, and moisture. Protect your home\'s curb appeal year-round.'
  },
  {
    image: '/assets/nyc-apartment-interior.jpeg',
    category: 'Interior Painting',
    date: 'September 18, 2025',
    title: 'Interior Paint Ideas to Maximize Space in Your NYC Apartment',
    description: 'Make your New York apartment feel larger and brighter. We explore paint colors and techniques that create an illusion of space, perfect for city living. Let Pro Painting Construction transform your compact home.'
  },
  {
    image: '/assets/brownstone-renovation.jpg',
    category: 'Historic Restoration',
    date: 'September 12, 2025',
    title: 'A Guide to Brooklyn Brownstone Facade Restoration',
    description: 'Restoring a historic brownstone requires expertise. Learn about the proper techniques for brick repointing, lintel repair, and choosing historically accurate paint colors. Trust our specialists to preserve your home\'s charm.'
  },
  {
    image: '/assets/modern-kitchen-renovation-cabinets-countertops-installed_857340-10731.jpg',
    category: 'Home Renovation',
    date: 'September 5, 2025',
    title: 'The Complete Guide to Kitchen & Bath Remodeling in New York',
    description: 'Renovating a kitchen or bath offers the highest ROI for your NY property. Our guide covers budgeting, materials, and navigating co-op board approvals. Start your dream remodel with Pro Painting Construction.'
  },
  {
    image: '/assets/working-with-blueprint.jpg',
    category: 'Commercial Services',
    date: 'August 29, 2025',
    title: 'High-Impact Commercial Painting for NYC Storefronts',
    description: 'In a city of millions, your storefront needs to stand out. Discover how a professional paint job can increase foot traffic and brand recognition. Pro Painting Construction helps your NY business shine.'
  },
  {
    image: '/assets/basement-waterproofing.jpeg',
    category: 'Waterproofing',
    date: 'August 22, 2025',
    title: 'Basement Waterproofing: A Crucial Step for NY Homeowners',
    description: 'Prevent costly water damage from melting snow and heavy rains. Learn about interior and exterior basement waterproofing solutions to keep your lower level dry and mold-free. Protect your NY home from the ground up.'
  },
  // {
  //   image: '/images/building-permits.jpg',
  //   category: 'Project Management',
  //   date: 'August 15, 2025',
  //   title: 'Navigating NYC Building Permits: How We Save You Time & Headaches',
  //   description: 'The NYC Dept. of Buildings can be complex. Pro Painting Construction’s team handles the permits and paperwork, ensuring your renovation project stays compliant, on schedule, and stress-free.'
  // },
  // {
  //   image: '/images/lead-paint.jpg',
  //   category: 'Safety & Compliance',
  //   date: 'August 8, 2025',
  //   title: 'Lead Paint Safety: Our EPA-Certified Process for Older NY Homes',
  //   description: 'Renovating a pre-1978 home? Lead paint is a serious hazard. Learn about our EPA-certified, lead-safe practices that keep your family safe during a renovation. Trust Pro Painting Construction for a responsible remodel.'
  // },
  // {
  //   image: '/images/winter-damage.jpg',
  //   category: 'Foundation Repair',
  //   date: 'August 1, 2025',
  //   title: 'Protecting Your Foundation from New York\'s Freeze-Thaw Cycle',
  //   description: 'The constant freezing and thawing in NY winters can crack foundations. Learn to spot the signs of damage and understand the repair process. We ensure your home’s structural integrity for years to come.'
  // },
  // {
  //   image: '/images/energy-efficient.jpg',
  //   category: 'Green Building',
  //   date: 'July 25, 2025',
  //   title: 'Energy-Efficient Remodeling to Lower Your NY Utility Bills',
  //   description: 'Combat high energy costs with smart construction. We explore the best insulation, windows, and siding materials that will keep your New York home comfortable year-round and reduce your monthly bills.'
  // }
];