import { FileText, Mail, MapPin, Phone, Search, Wrench } from "lucide-react";
import { EMAIL_ID, PHONE_NUMBER } from "./constants";

export const serviceProcessData = [
  {
    step: 1,
    icon: FileText,
    title: "Address Needs",
    description: "Understanding the client's needs.",
  },
  {
    step: 2,
    icon: Search,
    title: "Propose Solution",
    description: "Providing cost-effective solutions.",
  },
  {
    step: 3,
    icon: Wrench,
    title: "Inspect On-Site",
    description: "Ensuring safe and efficient operations.",
  },
];

// Equipment Data
export const equipmentData = [
  {
    id: "crane-20",
    name: "Hydraulic Cranes",
    type: "Hydraulic Cranes",
    description: "20 Ton",
    imageUrl: "/products/20Ton.png",
  },
  {
    id: "crane-50",
    name: "Hydraulic Cranes",
    type: "Hydraulic Cranes",
    description: "50 Ton",
    imageUrl: "/products/50Ton.png",
  },
  {
    id: "crane-80",
    name: "Hydraulic Cranes",
    type: "Hydraulic Cranes",
    description: "80 Ton",
    imageUrl: "/products/80Ton.png",
  },
  {
    id: "crane-100",
    name: "Hydraulic Cranes ",
    type: "Hydraulic Cranes",
    description: "100 Ton",
    imageUrl: "/products/100Ton.png",
  },
  {
    id: "crane-120",
    name: "Hydraulic Cranes ",
    type: "Hydraulic Cranes",
    description: "120 Ton",
    imageUrl: "/products/120Ton.png",
  },
  {
    id: "crane-150",
    name: "Hydraulic Cranes ",
    type: "Hydraulic Cranes",
    description: "150 Ton",
    imageUrl: "/products/150Ton.png",
  },
  {
    id: "crane-200",
    name: "Hydraulic Cranes ",
    type: "Hydraulic Cranes",
    description: "200 Ton",
    imageUrl: "/products/200Ton.png",
  },
  {
    id: "crane-300",
    name: "Hydraulic Cranes ",
    type: "Hydraulic Cranes",
    description: "300 Ton",
    imageUrl: "/products/300Ton.png",
  },
  {
    id: "crane-400",
    name: "Hydraulic Cranes ",
    type: "Hydraulic Cranes",
    description: "400 Ton",
    imageUrl: "/products/400Ton.png",
  },

  {
    id: "crane-500",
    name: "Hydraulic Cranes ",
    type: "Hydraulic Cranes",
    description: "500 Ton",
    imageUrl: "/products/500Ton.png",
  },
  {
    id: "forklift",
    name: "Forklifts",
    type: "Forklifts",
    description: "Upto 17 Ton", // Assuming max description
    imageUrl: "/products/Forklifts.png",
  },
  {
    id: "boom-loader-volvo",
    name: "Hiab Crane Volvo",
    type: "Boom Loader",
    description: "Upto 15 Ton", // Assuming max description
    imageUrl: "/products/Boom-Loader-Volvo.png",
  },
  {
    id: "boom-loader",
    name: "Boom Loader",
    type: "Boom Loader",
    description: "Upto 15 Ton", // Assuming max description
    imageUrl: "/products/Boom-Loader.png",
  },
  {
    id: "excavator-crawler",
    name: "Excavator",
    type: "Excavator",
    description: "Crawler",
    imageUrl: "/products/Excavator-Crawler.png",
  },
  {
    id: "excavator-mini",
    name: "Excavator",
    type: "Excavator",
    description: "Mini",
    imageUrl: "/products/Excavator-Mini.png",
  },
  {
    id: "excavator-wheel",
    name: "Excavator",
    type: "Excavator",
    description: "Wheeled",
    imageUrl: "/products/Excavator-Wheel.png",
  },
  {
    id: "trailer-flat-bed",
    name: "Trailer",
    type: "Trailer",
    description: "Flat Bed",
    imageUrl: "/products/Trailer-Flat-Bed.png",
  },
  {
    id: "trailer-low-bed",
    name: "Trailer",
    type: "Trailer",
    description: "Low Bed",
    imageUrl: "/products/Trailer-Low-Bed.png",
  },
];

// Contact data

export const contactInfo = [
  {
    icon: Mail,
    title: "Email Address",
    value: EMAIL_ID,
  },
  {
    icon: Phone,
    title: "Phone Number",
    value: PHONE_NUMBER,
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Dubai | Abudhabi",
  },
];
