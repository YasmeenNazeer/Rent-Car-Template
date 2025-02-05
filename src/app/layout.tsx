'use client'
import React from 'react';

import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import Loading from "./loading";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [pathname]); // Trigger effect on route change

  const isStudio = pathname.startsWith("/studio");
  const isHome = pathname.startsWith("/sign-in");
  const isAdmin = pathname.startsWith("/admin");
  const isOrders = pathname.startsWith("/orders");
  const isCustomers = pathname.startsWith("/customers");
  const isStatistics = pathname.startsWith("/product-data");
  const isReviews = pathname.startsWith("/reviews");
  const studioAndHome = !isStudio && !isHome && !isAdmin && !isOrders && !isCustomers && !isStatistics && !isReviews

  return (
    
  <ClerkProvider>
                       
    <html lang="en">
      <body>
           
      <Toaster richColors />
          {(studioAndHome && !isLoading) && <Header />}
          {isLoading ? <Loading /> : children}
          {(studioAndHome && !isLoading) && <Footer />}



      </body>
    </html>
    </ClerkProvider>
    
  ); }
