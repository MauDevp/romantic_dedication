// @ts-nocheck
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "our love story",
  description: "Love for Regina ",
  image: "/favicon.png",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
