"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => <div className="min-h-[350px]" />,
});

export default function HeroClient() {
  return <Hero />;
}