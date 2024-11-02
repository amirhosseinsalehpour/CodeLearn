import QueryProvider from "@/providers/react-query-provider";
import { Footer } from "./_components/footer/footer";
import { Header } from "./_components/header/header";
import "./globals.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" className={`dark ${figtree.variable} `}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto]  dark:bg-base-100 dark:text-base-content px-4">
        <QueryProvider>
          <Header />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
