import { Montserrat } from "next/font/google";
import "./globals.css";
// components
import Navbar from "./components/Navbar";
import ProvideRedux from "./provideRedux";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={montserrat.className}>
        <ProvideRedux>
          <Navbar />
          <main className="max-w-4xl mx-auto">{children}</main>
        </ProvideRedux>
      </body>
    </html>
  );
}
