'use client'

import React from 'react';
import "./styles.css";
import "../package/core/styles.css"

import { usePathname } from 'next/navigation';

import Navbar from "./components/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body>
          {!pathname.includes('/edit') && <Navbar />}
          <main>{children}</main>
      </body>
    </html>

  );
}

export default RootLayout;