import { Poppins } from "next/font/google";

import "../scss/style.scss";
import ScrollAwareNavbar from "./components/ScrollAwareNavbar";
import Footer from "./components/Footer";
import Providers from "@/redux/Providers";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "LBDFlix",
  description:
    "LBDflix is an dynamic movie application that gives a variety of movies, movies details, and trailers. It is packed movies collections for every movie lover and it also recommend movies to users.",
  keywords:
    "avatar, action, comedy, drama, mystery, horror, romance, movies, movie, trailer, rebel moon, zack synder, watch, stream, download, reviews, cast, US, free",
  author: "Lambe Boluwatife",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <ScrollAwareNavbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
