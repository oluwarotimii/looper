"use client";
import { Cta } from "./components/cta";
import { Footer } from "./components/footer";
import { Landing } from "./components/landing";
import { Products } from "./components/products";
import { Team } from "./components/team";

export default function Home() {

 


  return (
    <div className="">
      <Landing />
      <Products />
      <Cta />
      <Team />
      <Footer />
    </div>
  );
}
