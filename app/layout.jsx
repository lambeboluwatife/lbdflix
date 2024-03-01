import { Poppins } from "next/font/google";
import "./globals.css";
import "./index.css";
import ScrollAwareNavbar from "./components/ScrollAwareNavbar";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "LBDFlix",
  description:
    "Discover the ultimate movie experience with our app! Explore a vast library of films, from classics to the latest blockbusters.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ScrollAwareNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
