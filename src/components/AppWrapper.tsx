"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import QuickQuoteModal from "./QuickQuoteModal";
import { Toaster } from "sonner";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <Navbar onGetQuoteClick={() => setIsQuoteModalOpen(true)} />
      {children}
      <Footer />
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
      <Toaster richColors position="top-right" />
    </>
  );
}
