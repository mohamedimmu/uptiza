"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

type NavbarProps = {
  onGetQuoteClick: () => void;
};

export default function Navbar({ onGetQuoteClick }: NavbarProps) {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about-us", label: "About us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div>
      <header className="bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between gap-4 h-16 w-full">
            {/* Logo */}
            <div className="flex items-center basis-1/4">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <Link href="/">
                    <Image
                      src="/logo/combination.png"
                      alt="Logo"
                      width={128}
                      height={41}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block basis-1/2">
              <div className="flex items-center justify-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors hover:text-primary ${
                      pathname === link.href
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center justify-end basis-1/4">
              <div className="hidden md:block">
                <Button
                  onClick={onGetQuoteClick}
                  className="bg-primary text-background hover:bg-primary/90 font-semibold"
                >
                  Get a Quote
                </Button>
              </div>
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="top">
                    <div className="grid gap-4 py-4">
                      {navLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                          <Link
                            href={link.href}
                            className={`text-lg font-medium transition-colors hover:text-primary ${
                              pathname === link.href
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      ))}
                      <SheetClose asChild>
                        <Button
                          onClick={onGetQuoteClick}
                          className="w-full bg-primary text-background hover:bg-primary/90 font-semibold"
                        >
                          Get a Quote
                        </Button>
                      </SheetClose>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
