import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { EMAIL_ID, PHONE_NUMBER, INSTAGRAM_URL } from "@/lib/constants";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground rounded-md m-4">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-y-8 gap-x-12">
          {/* About Section */}
          <div className="lg:col-span-3 col-span-1">
            <div className="relative h-32 w-32 mb-4">
              <Image
                src="/logo/vertical.png"
                alt="Uptiza Logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            <p className="text-muted-foreground mb-4 max-w-">
              Providing top-tier heavy equipment solutions with a focus on
              safety and customer satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/fleet"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <div className="flex items-center space-x-2 h-5">
                  <div>Dubai</div>
                  <Separator orientation="vertical" />
                  <div>Abudhabi</div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  {PHONE_NUMBER}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <a
                  href={`mailto:${EMAIL_ID}`}
                  className="hover:text-primary transition-colors"
                >
                  {EMAIL_ID}
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-2 col-span-1">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href={`httpshttps://wa.me/${PHONE_NUMBER.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaWhatsapp className="h-6 w-6" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="mt-8" />
        <div className="mt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Uptiza. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
