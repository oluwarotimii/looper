"use client";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HowItWorks } from "./components/howitworks";
import { Impact } from "./components/impact";
import { Landing } from "./components/landing";
import { MobileAppAd } from "./components/mobile-app-ad";
import { PartnerWithUs } from "./components/partner";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Landing />
      <Impact />
      <HowItWorks />
      <MobileAppAd />
      <Testimonials />
      <PartnerWithUs />
      <Footer />
    </div>
  );
}
