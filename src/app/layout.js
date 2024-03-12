import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Ekpenisi E Raphael",
  description:
    "This is a portfolio website to showcase my rencent and previous works",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
