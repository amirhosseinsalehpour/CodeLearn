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
    <html dir="rtl" className={`${figtree.variable} `}>
      <body className="flex flex-col min-h-screen">
        <header className="bg-gray-200 font-extrabold h-10 flex justify-center items-center text-2xl">
          صفحه من اینجاست
        </header>
        <div className="flex-1">{children}</div>
        <footer className="bg-gray-200 h-10 flex justify-center items-center">
          {" "}
          FOOTER
        </footer>
      </body>
    </html>
  );
}
