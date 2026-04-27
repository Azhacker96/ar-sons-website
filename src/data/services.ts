import {
  Dumbbell,
  Heart,
  Droplets,
  Flame,
  Waves,
  Snowflake,
  Settings,
  Bike,
  type LucideIcon
} from "lucide-react";

export type ServiceCategory = "all" | "fitness" | "wellness" | "support";

export interface ServiceData {
  slug: string;
  category: "fitness" | "wellness" | "support";
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  images: string[];
}

export const categories = [
  { id: "all", label: "All Services" },
  { id: "fitness", label: "Fitness Equipment" },
  { id: "wellness", label: "Wellness" },
  { id: "support", label: "Support & Aftercare" },
];

export const services: ServiceData[] = [
  {
    slug: "cardio-equipment",
    category: "fitness",
    icon: Bike,
    title: "Cardio Equipment",
    description:
      "Premium treadmills, ellipticals, exercise bikes, recumbent bikes, rowing machines, and stair climbers from world-class brands.",
    longDescription:
      "Elevate your facility's cardiovascular training with our selection of industry-leading cardio equipment. We supply state-of-the-art machines designed for durability, user engagement, and biomechanical excellence.",
    tags: ["Treadmills", "Bikes", "Ellipticals", "Rowing"],
    features: [
      "Integration with fitness tracking apps",
      "Interactive touch-screen consoles",
      "Heavy-duty commercial warranties",
      "Ergonomic designs for maximum comfort",
      "Energy-efficient motor systems"
    ],
    images: ["/cardio-1.png", "/cardio-2.png", "/cardio-3.png"]
  },
  {
    slug: "strength-equipment",
    category: "fitness",
    icon: Dumbbell,
    title: "Strength Equipment",
    description:
      "Complete strength training solutions including power racks, Smith machines, cable towers, weight benches, and plate-loaded machines.",
    longDescription:
      "Build a world-class strength training floor with our comprehensive range of selectorized, plate-loaded, and free weight equipment. Designed for intense commercial environments and optimal biomechanics.",
    tags: ["Power Racks", "Benches", "Cable Towers", "Smith Machines"],
    features: [
      "Precision-welded heavy-gauge steel frames",
      "Premium upholstery for durability and comfort",
      "Smooth cable and pulley mechanisms",
      "Customizable frame and upholstery colors",
      "Space-efficient multi-gym designs"
    ],
    images: ["/strength-1.png", "/strength-2.png", "/strength-3.png"]
  },
  {
    slug: "gym-design-setup",
    category: "fitness",
    icon: Heart,
    title: "Gym Design & Setup",
    description:
      "End-to-end commercial gym design consultation, floor planning, equipment selection, and professional installation services.",
    longDescription:
      "Transform empty spaces into inspiring fitness destinations. Our turnkey gym design and setup service covers everything from initial 3D floor planning to final equipment installation and testing.",
    tags: ["Consultation", "Floor Planning", "Installation"],
    features: [
      "Detailed 2D and 3D floor plans",
      "Optimal equipment flow and spacing analysis",
      "Flooring selection and installation",
      "Professional delivery and assembly",
      "Post-installation safety checks"
    ],
    images: ["/design-1.png", "/design-2.png", "/design-3.png"]
  },
  {
    slug: "steam-sauna",
    category: "wellness",
    icon: Flame,
    title: "Steam & Sauna",
    description:
      "Authorized supplier of Tylo and Harvia steam and sauna solutions. From compact home units to full commercial installations.",
    longDescription:
      "Create the ultimate relaxation experience with our premium steam rooms and saunas. We partner with world-renowned brands like Tylo and Harvia to deliver authentic and luxurious wellness spaces.",
    tags: ["Tylo", "Harvia", "Commercial", "Residential"],
    features: [
      "Custom timber selections for saunas",
      "Energy-efficient steam generators",
      "Smart digital control panels",
      "Aromatherapy and chromotherapy integrations",
      "Comprehensive maintenance support"
    ],
    images: ["/steam-1.png", "/steam-2.png", "/steam-3.png"]
  },
  {
    slug: "swimming-pool-jacuzzi",
    category: "wellness",
    icon: Waves,
    title: "Swimming Pool & Jacuzzi",
    description:
      "Complete swimming pool and Jacuzzi services including pumps, filters, heaters, chemical balancing, and water treatment systems.",
    longDescription:
      "Ensure pristine water quality and optimal performance for your aquatic facilities. We provide top-tier equipment and maintenance services for commercial swimming pools and Jacuzzis.",
    tags: ["Pumps", "Filters", "Heaters", "Treatment"],
    features: [
      "High-performance filtration systems",
      "Energy-efficient heating solutions",
      "Automated chemical dosing systems",
      "Underwater lighting installations",
      "Routine water quality management"
    ],
    images: ["/pool-1.png", "/pool-2.png", "/pool-3.png"]
  },
  {
    slug: "cold-plunge-therapy",
    category: "wellness",
    icon: Snowflake,
    title: "Cold Plunge Therapy",
    description:
      "Modern cold plunge therapy systems for recovery and wellness. Professional installation and maintenance for commercial facilities.",
    longDescription:
      "Incorporate the latest in recovery technology with our commercial-grade cold plunge systems. Designed for precise temperature control and maximum hygiene.",
    tags: ["Recovery", "Therapy", "Commercial Setup"],
    features: [
      "Advanced water chilling technology",
      "Ozone and UV filtration for sanitation",
      "Durable, easy-to-clean interior surfaces",
      "Programmable temperature settings",
      "Compact footprints for easy integration"
    ],
    images: ["/plunge-1.png", "/plunge-2.png", "/plunge-3.png"]
  },
  {
    slug: "spare-parts-repairs",
    category: "support",
    icon: Settings,
    title: "Spare Parts & Repairs",
    description:
      "Genuine spare parts for all major fitness equipment brands. Expert repair services with quick turnaround time.",
    longDescription:
      "Minimize equipment downtime with our rapid-response repair services and extensive inventory of OEM spare parts. Our certified technicians have the expertise to fix issues quickly and correctly.",
    tags: ["Genuine Parts", "Quick Repair", "All Brands"],
    features: [
      "Large inventory of common replacement parts",
      "Factory-certified repair technicians",
      "Diagnostic and troubleshooting services",
      "Electronic board repairs",
      "Preventative maintenance advice"
    ],
    images: ["/parts-1.png", "/parts-2.png", "/parts-3.png"]
  },
  {
    slug: "aftercare-services",
    category: "support",
    icon: Droplets,
    title: "Aftercare Services",
    description:
      "Weekly and monthly maintenance packages to keep your equipment running at peak performance. Preventive and corrective care combined.",
    longDescription:
      "Protect your investment with our comprehensive aftercare service contracts. We offer tailored maintenance schedules to ensure your facility remains safe, operational, and looking its best.",
    tags: ["Weekly Plans", "Monthly Plans", "Preventive Care"],
    features: [
      "Regular lubrication and tension adjustments",
      "Thorough cleaning of internal components",
      "Wear-and-tear inspections",
      "Detailed service reporting",
      "Priority emergency call-outs"
    ],
    images: ["/aftercare-1.png", "/aftercare-2.png", "/aftercare-3.png"]
  },
];
