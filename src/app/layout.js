import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nametoaster",
  description: "나에게 맞는 영어이름은?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>Ntoaster 인공지능 영어추천</header>
        <main>{children}</main>
      </body>
    </html>
  );
}
