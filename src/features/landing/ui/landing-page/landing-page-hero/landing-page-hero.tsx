"use client";
import { useRef } from "react";
import useParticleCanvas from "@/features/landing/lib/hooks/use-particle-canvas";
import LandingPageHeroBadge from "@/features/landing/ui/landing-page/landing-page-hero/landing-page-hero-badge";
import LandingPageHeroHeading from "@/features/landing/ui/landing-page/landing-page-hero/landing-page-hero-heading";
import LandingPageHeroSubtitle from "@/features/landing/ui/landing-page/landing-page-hero/landing-page-hero-subtitle";
import LandingPageHeroCTA from "@/features/landing/ui/landing-page/landing-page-hero/landing-page-hero-cta";
import LandingPageHeroStats from "@/features/landing/ui/landing-page/landing-page-hero/landing-page-hero-stats";
import LandingPageGradientOverlays from "@/features/landing/ui/landing-page/landing-page-hero/landing-page-gradient-overlays";

export function LandingPageHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticleCanvas(canvasRef);

  return (
    <section className="max-sm:pt-40 relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <LandingPageGradientOverlays />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          <LandingPageHeroBadge />
          <LandingPageHeroHeading />
          <LandingPageHeroSubtitle />
          <LandingPageHeroCTA />
          <LandingPageHeroStats />
        </div>
      </div>
    </section>
  );
}

export default LandingPageHero;
