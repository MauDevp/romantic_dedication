// @ts-nocheck
import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from '../context/ModalContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Loved by Regina",
  description: "Loved by Regina ",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
