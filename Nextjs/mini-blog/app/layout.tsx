import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Mini Blog",
  description: "Simple blog built with Next.js 13 App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
          backgroundColor: "#fafafa",
        }}
      >
        <Navbar />
        <main style={{ flex: 1, padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
