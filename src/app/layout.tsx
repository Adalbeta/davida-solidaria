import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "../context/I18nContext";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Dádiva Solidária",
  description: "Apoio e esperança para quem precisa em Portugal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        <ThemeProvider>
          <I18nProvider>
            <Navbar />
            <main style={{ minHeight: "calc(100vh - 150px)" }}>
              {children}
            </main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
