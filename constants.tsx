import { ServiceCard, NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: ServiceCard[] = [
  {
    id: "battery",
    name: "Battery",
    image: "/images/1.jpeg",
    description:
      "Expert battery testing, charging, and premium replacement services.",
  },
  {
    id: "brakes",
    name: "Brakes",
    image: "/images/3.jpeg",
    description:
      "Precision brake diagnostics, pad replacement, and rotor resurfacing.",
  },
  {
    id: "electrical",
    name: "Electrical",
    image:
      "./images/2.jpeg",
    description:
      "Advanced troubleshooting for wiring, lighting, and computer systems.",
  },
  {
    id: "oil-change",
    name: "Oil Change",
    image:
      "./images/4.jpeg",
    description: "Fast, high-quality synthetic and conventional oil changes.",
  },
  {
    id: "steering",
    name: "Steering & Suspension",
    image:
      "./images/5.jpeg",
    description:
      "Smooth handling with professional shocks, struts, and steering repair.",
  },
  {
    id: "diagnostics",
    name: "Auto Engine Diagnostics",
    image:
      "./images/6.jpeg",
    description:
      "State-of-the-art computer scanning to pinpoint engine issues instantly.",
  },
  {
    id: "ac",
    name: "Air Conditioning",
    image:
      "./images/7.jpeg",
    description:
      "Recharging and repairing A/C systems to keep you cool year-round.",
  },
  {
    id: "body",
    name: "Body & Trim",
    image:
      "./images/8.jpeg",
    description:
      "Restoring your vehicle's exterior beauty with expert body work.",
  },
  {
    id: "exhaust",
    name: "Exhaust",
    image:
      "./images/9.jpeg",
    description: "Performance exhaust systems and emission control repairs.",
  },
  {
    id: "transmission",
    name: "Transmission",
    image:
      "./images/10.jpeg",
    description:
      "Comprehensive transmission fluid service and complete rebuilds.",
  },
  {
    id: "tires",
    name: "Tires",
    image:
      "./images/11.jpeg",
    description: "New tire sales, professional balancing, and laser alignment.",
  },
  {
    id: "tuneup",
    name: "Engine Tune-Up",
    image:
      "./images/12.jpeg",
    description:
      "Optimizing performance with spark plugs, filters, and fluid checks.",
  },
];
