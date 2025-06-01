import "@/styles/global.css";
import Navbar from "@/components/shared-components/navbar-components/Navbar";
import Footer from "@/components/shared-components/footer-components/Footer";
import JumpToTopButton from "@/components/shared-components/JumpToTopButton";
import Script from 'next/script';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

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
      <head>
        {/* Google Tag Manager Script (Head) */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body className="relative h-full min-h-screen font-theme-manrope overflow-x-hidden overflow-y-auto !m-0 !p-0 example">
        <Navbar />
        <main className="w-full h-full min-h-screen !m-0 !p-0">
          {children}
        </main>
        <JumpToTopButton />
        <Footer />

        {/* Google Tag Manager noscript (for non-JS support) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
