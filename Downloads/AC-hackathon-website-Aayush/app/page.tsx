/** @format */

import { Toaster } from "sonner";
import { Hero } from "@/components/hero";
import { MetaverseSection } from "@/components/metaverse-section";
import { AIImageGallery } from "@/components/ai-image-gallery";
import { Schedule } from "@/components/schedule";
import { PrizesSection } from "@/components/prizes-section";
import { ConferencePasses } from "@/components/conference-passes";
import Tempo from "@/components/tempo";
import Androidinfo from "@/components/androidinfo";
import { Navbar } from "@/components/navbar";
import Sponsers from "@/components/Sponsers";

export default function Home() {
  return (
    <main className="min-h-screen bg-purple-950 ">
      <Navbar />
      <div className="hero">
        <Hero />
      </div>
      <Androidinfo />
      <div id="sponsers">
        <Sponsers />
      </div>
      <MetaverseSection />
      <PrizesSection />
      <AIImageGallery />
      <Schedule />
      <Tempo />
      <div id="register">
        <ConferencePasses />
      </div>
      <Toaster />
    </main>
  );
}
