import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Dynamic Tours",
  description: "Explore new traveling opportunity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
