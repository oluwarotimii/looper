import "./globals.css";
import "./fonts.css";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/GINGERBONE.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="overflow-x-hidden" >
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Original set with more varied positions and sizes */}
          <Image src="/svg/asian-bowl.svg" alt="asian bowl" width={60} height={60} className="absolute top-5 left-[10%] rotate-12" />
          <Image src="/svg/banana.svg" alt="banana" width={45} height={45} className="absolute top-[20%] right-[15%] -rotate-45" />
          <Image src="/svg/bowl.svg" alt="bowl" width={70} height={70} className="absolute bottom-[10%] left-[25%] rotate-90" />
          <Image src="/svg/bowl2.svg" alt="bowl2" width={50} height={50} className="absolute top-[30%] right-[5%] rotate-6" />
          <Image src="/svg/donut.svg" alt="donut" width={65} height={65} className="absolute bottom-[5%] left-[5%] -rotate-12" />
          <Image src="/svg/pizza.svg" alt="pizza" width={80} height={80} className="absolute top-[15%] right-[30%] rotate-180" />
          <Image src="/svg/prawn.svg" alt="prawn" width={40} height={40} className="absolute bottom-[20%] right-[10%] rotate-30" />
          <Image src="/svg/tacos.svg" alt="tacos" width={75} height={75} className="absolute top-[40%] left-[5%] -rotate-90" />

          {/* Additional instances for more distribution */}
          <Image src="/svg/asian-bowl.svg" alt="asian bowl" width={55} height={55} className="absolute top-[60%] left-[15%] rotate-45" />
          <Image src="/svg/banana.svg" alt="banana" width={35} height={35} className="absolute bottom-[30%] right-[25%] rotate-15" />
          <Image src="/svg/bowl.svg" alt="bowl" width={60} height={60} className="absolute top-[5%] left-[40%] -rotate-60" />
          <Image src="/svg/bowl2.svg" alt="bowl2" width={40} height={40} className="absolute bottom-[5%] right-[40%] rotate-20" />
          <Image src="/svg/donut.svg" alt="donut" width={50} height={50} className="absolute top-[70%] right-[5%] -rotate-30" />
          <Image src="/svg/pizza.svg" alt="pizza" width={70} height={70} className="absolute bottom-[15%] left-[45%] rotate-10" />
          <Image src="/svg/prawn.svg" alt="prawn" width={30} height={30} className="absolute top-[25%] left-[30%] -rotate-75" />
          <Image src="/svg/tacos.svg" alt="tacos" width={60} height={60} className="absolute bottom-[40%] left-[50%] rotate-50" />
          {/* Duplicated set for more distribution */}
          <Image src="/svg/asian-bowl.svg" alt="asian bowl" width={50} height={50} className="absolute top-[10%] left-[80%] rotate-90" />
          <Image src="/svg/banana.svg" alt="banana" width={40} height={40} className="absolute top-[5%] right-[5%] rotate-15" />
          <Image src="/svg/bowl.svg" alt="bowl" width={65} height={65} className="absolute bottom-[20%] left-[5%] -rotate-30" />
          <Image src="/svg/bowl2.svg" alt="bowl2" width={45} height={45} className="absolute top-[70%] right-[15%] rotate-45" />
          <Image src="/svg/donut.svg" alt="donut" width={60} height={60} className="absolute bottom-[30%] left-[70%] rotate-60" />
          <Image src="/svg/pizza.svg" alt="pizza" width={75} height={75} className="absolute top-[45%] right-[10%] -rotate-15" />
          <Image src="/svg/prawn.svg" alt="prawn" width={35} height={35} className="absolute bottom-[5%] right-[80%] rotate-75" />
          <Image src="/svg/tacos.svg" alt="tacos" width={70} height={70} className="absolute top-[25%] left-[50%] -rotate-60" />
          <Image src="/svg/asian-bowl.svg" alt="asian bowl" width={45} height={45} className="absolute top-[80%] left-[20%] rotate-30" />
          <Image src="/svg/banana.svg" alt="banana" width={30} height={30} className="absolute bottom-[10%] right-[50%] -rotate-75" />
          <Image src="/svg/bowl.svg" alt="bowl" width={55} height={55} className="absolute top-[50%] left-[90%] rotate-10" />
          <Image src="/svg/bowl2.svg" alt="bowl2" width={35} height={35} className="absolute bottom-[40%] right-[5%] -rotate-45" />
          <Image src="/svg/donut.svg" alt="donut" width={45} height={45} className="absolute top-[5%] left-[5%] rotate-20" />
          <Image src="/svg/pizza.svg" alt="pizza" width={65} height={65} className="absolute bottom-[50%] left-[30%] rotate-180" />
          <Image src="/svg/prawn.svg" alt="prawn" width={25} height={25} className="absolute top-[35%] right-[70%] rotate-0" />
          <Image src="/svg/tacos.svg" alt="tacos" width={50} height={50} className="absolute bottom-[15%] left-[60%] rotate-90" />
        </div>
        {children}
      </body>
    </html>
  );
}