import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ConnectWithUs({ className }: { className?: string }) {
  return (
    <Card className={`bg-card border-0 rounded-lg px-4 ${className}`}>
      <CardHeader className="p-0">
        <CardTitle className="text-2xl font-archivo">
          Connect with us
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-4 p-0">
        <Link
          href="#"
          className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors"
        >
          <FaWhatsapp className="h-6 w-6" />
        </Link>
        <Link
          href="#"
          className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors"
        >
          <FaInstagram className="h-6 w-6" />
        </Link>
      </CardContent>
    </Card>
  );
}
