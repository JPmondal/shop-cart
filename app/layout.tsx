import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s - ShopCart Store",
    default: "ShopCart Store",
  },
  description: "ShopCart online store for shopping all you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(process.env.hello);
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        <Header />
        <p>{process.env.hello}</p>
        {children}
        <Footer />
      </body>
    </html>
  );
}
