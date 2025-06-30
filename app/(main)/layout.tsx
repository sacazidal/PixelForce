import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PixelForce",
  description: "PixelForce - сила в каждом пикселе",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
}
