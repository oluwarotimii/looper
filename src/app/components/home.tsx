"use client";
import { Aboutus } from "./about-us";
import { Footer } from "./footer";
import { Header } from "./header";
import { HowItWorks } from "./howitworks";
import { Impact } from "./impact";
import { Landing } from "./landing";
import { Logo } from "./logo";
import { PartnerWithUs } from "./partner";
import { Testimonials } from "./testimonials";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Landing />
      <Aboutus />
      <Impact />
      <HowItWorks />
      <Testimonials />
      <PartnerWithUs />
      <Footer />
    </div>
  );
};
