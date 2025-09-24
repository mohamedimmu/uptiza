import { FileText, Mail, MapPin, Phone, Search, Wrench } from "lucide-react";
import { EMAIL_ID, PHONE_NUMBER } from "./constants";

export const serviceProcessData = [
  {
    step: 1,
    icon: FileText,
    title: "Consultation & Assessment",
    description:
      "Our experts work closely with you to understand your project requirements, site conditions, and timeline to recommend the most suitable equipment solutions.",
  },
  {
    step: 2,
    icon: Search,
    title: "Equipment Selection & Planning",
    description:
      "Select from our comprehensive fleet of hydraulic cranes, excavators, and specialized equipment. We provide detailed specifications and on-site inspection services.",
  },
  {
    step: 3,
    icon: Wrench,
    title: "Delivery & Project Success",
    description:
      "Safe and timely delivery, We ensure all safety protocols are followed and provide ongoing support throughout your project duration.",
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

export const coreValues = [
  {
    title: "Safety First",
    description:
      "Our top priority is the safety of our clients, our team, and the community. We adhere to the strictest safety protocols.",
  },
  {
    title: "Uncompromising Quality",
    description:
      "We provide only the highest quality, well-maintained equipment to ensure your project runs smoothly.",
  },
  {
    title: "Customer Partnership",
    description:
      "We work as a partner to our clients, providing expert advice and reliable service from start to finish.",
  },
  {
    title: "Expertise & Experience",
    description:
      "With decades of combined experience, our team has the knowledge to handle any lifting or transport challenge.",
  },
  {
    title: "Reliability & Timeliness",
    description:
      "We deliver on schedule with dependable service, ensuring your projects stay on track without delays.",
  },
  {
    title: "Innovation & Continuous Improvement",
    description:
      "We embrace new technologies and methods to improve efficiency, safety, and customer satisfaction.",
  },
];
