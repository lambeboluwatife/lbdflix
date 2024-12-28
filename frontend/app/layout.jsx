"use client";
import { Poppins } from "next/font/google";
import "../scss/style.scss";
import ScrollAwareNavbar from "./components/ScrollAwareNavbar";
import Footer from "./components/Footer";
import Providers from "@/redux/Providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "./components/Head";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const excludePaths = ["/sign-in", "/sign-up", "/dashboard"];
  const shouldExclude = excludePaths.includes(pathname);
  return (
    <html lang="en">
      <Head />
      <body className={poppins.className}>
        <Providers>
          {!shouldExclude && <ScrollAwareNavbar />}
          <ToastContainer />
          <main>{children}</main>
          {!shouldExclude && <Footer />}
        </Providers>
      </body>
    </html>
  );
}
