import "@/styles/global.css";
import Navbar from "@/components/shared-components/navbar-components/Navbar";
import Footer from "@/components/shared-components/footer-components/Footer";
import JumpToTopButton from "@/components/shared-components/JumpToTopButton";

export const metadata = {
  title: "Audiophile – Hear the Difference | Frontend Mentor Project | Bryan Li",
  description: "Audiophile offers a curated selection of high-end audio equipment, from headphones to speakers, engineered for exceptional sound quality. Discover immersive listening experiences with our premium, detail-driven product range and seamless shopping journey. Description by Bryan Li.",
  icons: {
    icon: "/headphones-svgrepo-com.svg",
    type: "image/svg+xml",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className="relative h-full min-h-screen font-theme-manrope overflow-x-hidden overflow-y-auto !m-0 !p-0 example">
        <Navbar />
        <main className="w-full h-full min-h-screen !m-0 !p-0">
          {children}
        </main>
        <JumpToTopButton />
        <Footer />
      </body>
    </html>
  );
}
