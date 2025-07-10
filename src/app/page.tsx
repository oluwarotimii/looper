import { HomePage } from "./components/home";

const url = process.env.NEXT_PUBLIC_SITE_URL || "https://uselooper.vercel.app";
export const metadata = {
  title: "Looper | Rescue Surplus Food and Save Money",
  description:
    "Looper helps you rescue surplus food from restaurants, stores, and more — reducing waste while saving money.",
  openGraph: {
    title: "Looper | Rescue Surplus Food and Save Money",
    description:
      "Discover affordable, quality food from local restaurants and stores. Reduce food waste and support sustainability.",
    url,
    type: "website",
    images: [
      {
        url: `${url}/vegetables-basket.jpg`,
        width: 1200,
        height: 630,
        alt: "Basket of vegetables",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Looper | Rescue Surplus Food and Save Money",
    description:
      "Discover affordable, quality food from local restaurants and stores. Reduce food waste and support sustainability.",
    images: [`${url}/vegetables-basket.jpg`],
  },
};

export default function Home() {
  return <HomePage />;
}
