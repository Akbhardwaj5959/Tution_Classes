import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappFloat from "./components/Whatsapp";

const outfit = Outfit({
  subsets: ["latin"], weight:["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight:["400"]
});

export const metadata = {
  title: "Rathore Classes",
  description: "Learn from the best tutors in the industry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden `}
      >
        <Navbar />
        <WhatsappFloat/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
