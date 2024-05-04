import { GoHome } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { PiSignInLight } from "react-icons/pi";
import { PiFileTextThin } from "react-icons/pi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import {
  PiNumberCircleOne,
  PiNumberCircleTwo,
  PiNumberCircleThree,
  PiNumberCircleFour,
} from "react-icons/pi";
import { GiMetalScales } from "react-icons/gi";
import { GrVirtualMachine } from "react-icons/gr";
import { GiGearHammer, GiMetalBar } from "react-icons/gi";
import { SiBlueprint } from "react-icons/si";

// Navbar Link Constants
export const NAVBAR_DATA = {
  links: [
    {
      name: "Capabilities",
    },
    {
      name: "Industries",
    },
    {
      name: "Resources",
    },
    {
      name: "Company",
    },
    {
      name: "Supplier",
    },
  ],
};

// Hero Section Constants
export const HERO_DATA = {
  title: "The easiest way to source custom parts",
  description:
    "We guarantee consistent quality for complex prototypes and end-use parts, by partnering with hundreds of specialized manufacturers.",
  listItems: [
    "35+ surface finishes, 80+ metals & plastics",
    "Instant quotes for 1-1,000 parts",
    "Lead times from 1 business day",
  ],
  lockText: "Your files are secure and never shared",
  src: "/hero.webp",
  alt: "hero",
};

//  Capability Section Constants
export const CAPABILITY_DATA = {
  title: "Our manufacturing capabilities",
  description:
    "With hundreds of manufacturers in our network, we have a very broad range of manufacturing capabilities and support both one-off prototyping and low-volume production. We pride ourselves on being the go-to manufacturer for geometrically complex parts or highly cosmetic parts.",
  card_data: [
    {
      image: "/cnc_milling_capabilities.png",
      title: "CNC machining",
      description: "Milling, turning and post-processing",
      listItems: [
        "Tolerances down to ±.0008 in (0.020 mm)",
        "Lead times from 5 business days",
      ],
      linkText: "See our CNC machining services",
    },
    {
      image: "/3d_printing.png",
      title: "3D Printing",
      description: "FDM, SLA, SLS, MJF",
      listItems: [
        "± 0.3% with a lower limit of ± 0.3 mm (± 0.012 in)",
        "Lead times from 1 business day",
      ],
      linkText: "See our 3D printing services and materials",
    },
    {
      image: "/sheet_metal_fabrication.png",
      title: "Sheet metal fabrication",
      description: "Laser cutting, bending, post-processing",
      listItems: [
        "Tolerances down to ±.004 in (0.1 mm)",
        "Lead times from 5 business days",
      ],
      linkText: "See our sheet metal fabrication services",
    },
    {
      image: "/technologies.png",
      title: "Injection molding",
      description: "Prototypes and production tooling",
      listItems: ["Wide range of part complexities and sizes", "1 to 1M parts"],
      linkText: "See our injection molding capabilities",
    },
  ],
};

// Manufacturing Carousel Constants
export const MANUFACTURING_CAROUSEL_DATA = {
  title: "Meet our vetted network of specialized manufacturing partners",
};

// To see live changes click on the Capabilities link in the navbar
export const CAPABILITY_POPUP_DATA = {
  Image: {
    src: "/capabilities.webp",
    alt: "capabilities",
    title: "Capabilities",
    description: "Prototype and Production parts",
  },
  //  Sheet Metal Fabrication
  SheetMetalFabrication: {
    title: "Sheet Metal Fabrication",
    listItems: ["Laser Cut", "Laser Cut", "Wire Cut"],
  },
  //3D printing
  ThreeDPrinting: {
    title: "3D Printing ",
    listItems: ["3D Printing Service"],
  },
  // Gear Manufacturing
  GearManufacturing: {
    title: "Gear Manufacturing",
    listItems: ["Gear Manufacturing Service"],
  },
  // CNC Machining
  CNCMachining: {
    title: "CNC Machining",
    listItems: ["CNC Machining Service", "CNC Milling", "CNC Turning"],
  },
  // Additional Services
  AdditionalServices: {
    title: "Additional Services",
    listItems: [
      "Sheet Metal Fabrication Service",
      "Injection Molding  Service",
    ],
  },
};

// To see live changes click on the Company link in the navbar
export const COMPANY_DATA = {
  Image: {
    src: "/company_navbar.webp",
    alt: "company",
    title: "Company",
    description: "Learn about who we are and how it all started",
  },
  listItems: [
    {
      title: "About Us",
      description: "The Cad and Cart Story",
    },
    {
      title: "Become a partner",
      description: "How joining our manufacturing network grows your business",
    },
    {
      title: "Contact us",
      description: "We have office in the Pune, India",
    },
    {
      title: "Sustainability",
      description: "Reducing emissions in manufacturing",
    },
    {
      title: "Team",
      description: "Meet the team",
    },
  ],
};

// To see live changes click on the Resource link in the navbar
export const RESOURCE_POPUP_DATA = {
  Image: {
    src: "/resource_navbar.jpg",
    alt: "resource",
    title: "Resource",
    description: "Read the latest blogs from our team",
  },
  listItems: [
    {
      title: "Blogs",
      description: "Read the latest blogs from our team",
    },
    {
      title: "Case studies",
      description: "Success stories from our customers and partners",
    },
  ],
};

// To see live changes click on the User Icon link in the navbar
export const USER_POPUP_DATA = {
  Image: {
    src: "/user_navbar.jpg",
    alt: "user",
    title: "User",
    description: "Log in or create an account",
  },
  listItems: [
    {
      title: "Log in",
    },
    {
      title: "Create account",
    },
  ],
};

// TIMELINE Constants
export const TIMELINE = {
  animationsTexts: [
    "Why Order from Us?",
    "Our ordering process is Simple!",
    "Our ordering process is Easy",
    "Our ordering process is Fast",
    "Our ordering process is Secure",
    "Our ordering process is Reliable",
    "Our ordering process is Safe",
  ],
  title: "Our ordering process",
  steps: [
    {
      step: "Step 1",
      title: "Upload CAD file",
      description:
        "Securely upload your part design to our online quote builder. We accept all major CAD file formats.",
      buttonText: "Get Started",
      buttonLink: "/quote",
    },
    {
      step: "Step 2",
      title: "Confirm specs",
      description:
        "Configure your part specifications and select a lead time that suits your schedule",
      buttonText: "",
      buttonLink: "",
    },
    {
      step: "Step 3",
      title: "Receive instant quote",
      description:
        "Upload your CAD to our online quoting platform to receive an instant quote for your parts. No more waiting for days to receive a quote.",
      buttonText: "",
      buttonLink: "",
    },
    {
      step: "Step 4",
      title: "Production",
      description:
        "We select the best manufacturer for your order, and production begins immediately after you confirm your order. We guarantee consistent quality for complex prototypes and end-use parts.",
      buttonText: "",
      buttonLink: "",
    },
    {
      step: "Step 5",
      title: "Quality control",
      description:
        "We take full responsibility for making sure your parts are manufactured according to our standards and your specifications.",
      buttonText: "",
      buttonLink: "",
    },
    {
      step: "Step 6",
      title: "Delivery",
      description:
        "We deliver your parts to your door, anywhere in the world. We offer a range of shipping options to suit your needs.",
      buttonText: "",
      buttonLink: "",
    },
  ],
};

// Quote Homepage Cards Constants
export const QUOTE_CARDS = {
  title: "Get started with Cad & Cart",
  description: "Get an instant quote for your parts",
  card_data: [
    {
      title: "New Quote Request",
      description:
        "Start a new quote request with Cad & Cart by just uploading the CAD file.",
      buttonText: "Start Now",
      buttonLink: "/quote/upload",
    },
    {
      title: "Saved Quotes",
      description: "View and manage all your saved quotes and orders.",
      buttonText: "View Quotes",
      buttonLink: "/quote/saved",
    },
  ],
};

// Quote Navbar Constant

export const SIDEBAR_LINKS = [
  {
    name: "New Quote",
    icon: GoPlus,
    iconDiv: "p-2 rounded-md",
    href: "/quote/upload",
  },
  {
    name: "Home",
    icon: GoHome,
    iconDiv: "p-2 rounded-md",
    href: "/",
  },
  {
    name: "Quotes",
    iconDiv: "p-2 rounded-md",
    icon: PiFileTextThin,
    href: "/quote/quotes",
  },
  {
    name: "Cart",
    iconDiv: "p-2 rounded-md",
    icon: CiShoppingCart,
    href: "/quote/cart",
  },
  {
    name: "Help",
    iconDiv: "p-2 rounded-md",
    icon: IoIosHelpCircleOutline,
    href: "/quote/help",
  },
  {
    name: "Sign In",
    iconDiv: "p-2 rounded-md",
    icon: PiSignInLight,
    href: "/auth",
  },
  {
    name: "Settings",
    iconDiv: "p-2 rounded-md",
    icon: CiSettings,
    href: "/quote/settings/",
  },
];

// additional services
export const ADDITIONAL_SERVICES = {
  title: "Additional Services",
  cards: [
    {
      Icon: PiNumberCircleOne, // Icon from react-icons
      title: "On Demand Manufacturing",
      description: "Get things manufactured at the best market price.",
    },
    {
      Icon: PiNumberCircleTwo,
      title: "Designing As a Service",
      description: "Mechanical design services for SMEs and startups.",
    },
    {
      Icon: PiNumberCircleThree, // Icon from react-icons
      title: "Design Manufacture Sell",
      description:
        "Empowering startups to reach customers through online sales/",
    },
    {
      Icon: PiNumberCircleFour, // Icon from react-icons
      title: "Project Management Service",
      description:
        "Integrates Microsoft Projects Plan and cad models and drawings.",
    },
  ],
};

// QUTE HOME PAGE
export const QUOTE_HOME = {
  title: "Get Started with Cad & Cart",
  cards: [
    {
      Icon: GoPlus, // Icon from react-icons
      title: "Upload Instant Quote",
      description:
        "Start a new quote request with Cad & Cart by just uploading the CAD file.",
      buttonText: "Upload Now",
      buttonLink: "/quote/upload",
    },
    {
      Icon: GoHome, // Icon from react-icons
      title: "Home",
      description:
        "Want to explore the capabilities of Cad & Cart? Click here to explore.",
      buttonText: "Explore Now",
      buttonLink: "/quote/upload",
    },
    {
      Icon: PiFileTextThin, // Icon from react-icons
      title: "Saved Quotes",
      description:
        "View and manage all your saved quotes and orders with Cad & Cart.",
      buttonText: "View Quotes",
      buttonLink: "/quote/upload",
    },
    {
      Icon: CiShoppingCart, // Icon from react-icons
      title: "Orders",
      description:
        "Get a list of all your orders and track the status of your orders.",
      buttonText: "Order Now",
      buttonLink: "/quote/upload",
    },
    {
      Icon: IoIosHelpCircleOutline, // Icon from react-icons
      title: "Help",
      description:
        "Need help with your quote or order? Click here to get help from us.",
      buttonText: "Need Help?",
      buttonLink: "/quote/help",
    },
    {
      Icon: IoIosHelpCircleOutline, // Icon from react-icons
      title: "Settings",
      description:
        "Update your profile, address, and other settings with Cad & Cart.",
      buttonText: "Explore Settings",
      buttonLink: "/quote/settings",
    },
  ],
};

// QUOTE UPLOAD PAGE
export const QUOTE_UPLOAD = {
  TITLE: "Upload your CAD files to get an instant quote",
  TOAST_SUCCESS: "File uploaded successfully",
  TOAST_ERROR: "An error occurred while uploading the file",
  FILE_TYPES: "File types:",
  SUPPORTED_FILES: "STL, STEP, IGES, X_T, SLDPRT, PRT, SLDASM, ASM, IPT, IAM",
  TERMS_OF_USE:
    "Uploading weapons or parts subject to export control regulations such as ITAR, EAR beyond EAR99, or EU Dual Use is a violation of our",
  TERMS_LINK: "terms of use",
  PRIVACY_TITLE: "Privacy:",
  PRIVACY_POLICY: "All your files are secure with us.",
};

// OUR SERVICES
export const OUR_SERVICES = {
  title: "Our Services",
  subtitle: "More on Services we provide",
  description: "We provide a wide range of services for our customers.",
  cards: [
    {
      title: "CNC Machining",
      href: "/",
      icons: GrVirtualMachine,
    },
    {
      title: "Gear Manufacturing",
      href: "/",
      icons: GiGearHammer,
    },
    {
      title: "Sheet Metal Fabrication",
      href: "/",
      icons: GiMetalBar,
    },
    {
      title: "3D Printing",
      href: "/",
      icons: SiBlueprint,
    },
  ],
};
