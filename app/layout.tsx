"use client";
import { Poppins } from "next/font/google";
import { useState } from "react";
import "./globals.css";
import MobileNavbar from "@/components/Navbar/MobileNavbar";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import useFetchData from "@/hooks/useFetchData";
import { userData } from "@/utils/types";
import Footer from "@/components/Footer/Footer";
import CircleFollowingCursor from "@/components/CircleFollowingCursor";
import StarIndicator from "@/components/StarIndicator";
import CircularText from "@/components/CircularText";
import Loader from "@/components/Loader";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loading, error, data, isMounted } = useFetchData<userData>();

  const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(true);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} min-h-screen overflow-x-hidden`}>
        <ThemeProvider enableSystem={true} attribute="class">
          {loading ? (
            <Loader />
          ) : error ? (
            <div className="flex h-[100vh] items-center justify-center text-[red] text-5xl font-bold">
              {error?.message ?? "There is an error while fetching the data."}
            </div>
          ) : (
            <>
              <div>
                <MobileNavbar data={data} nav={nav} closeNav={closeNav} />
                <Navbar data={data} openNav={openNav} />
              </div>
              <div>
                <CircleFollowingCursor />
                <StarIndicator />
                {children}
                <Footer data={data} />
              </div>
            </>
          )}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 5000,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
