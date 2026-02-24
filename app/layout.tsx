import "./globals.css";
import Header from "@/components/layout/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-primary",
});

export const metadata = {
  title: "Feastria",
  description: "Feastria Restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="ltr">
      <body className={`${poppins.variable} font-sans bg-brand-hero`}>
        <Header />
        {children}
      </body>
    </html>
  );
}