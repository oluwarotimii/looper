"use client";
import Head from "next/head";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HowItWorks } from "./components/howitworks";
import { Impact } from "./components/impact";
import { Landing } from "./components/landing";
import { PartnerWithUs } from "./components/partner";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Looper | Rescue Surplus Food and Save Money</title>
        <meta name="description" content="Looper helps you rescue surplus food from restaurants, stores, and more — reducing waste while saving money." />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Looper | Rescue Surplus Food and Save Money" />
        <meta property="og:description" content="Discover affordable, quality food from local restaurants and stores. Reduce food waste and support sustainability." />
        <meta property="og:image" content="./vegetables-basket.jpg" />
        <meta property="og:url" content="./vegetables-basket.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Looper | Rescue Surplus Food and Save Money" />
        <meta name="twitter:description" content="Discover affordable, quality food from local restaurants and stores. Reduce food waste and support sustainability." />
        <meta name="twitter:image" content="./vegetables-basket.jpg" />
      </Head>

      <Header />
      <Landing />
      <Impact />
      <HowItWorks />
      <Testimonials />
      <PartnerWithUs />
      <Footer />
    </div>
  );
}
