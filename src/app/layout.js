import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-full bg-zinc-950">
          <div className="h-20">
          <Navbar />
          </div>
          <div className="w-[calc{100vh-6rem}] ">
          {children}
          </div>
          <div >
          <Footer/>
          </div>
      </div>
      </body>
    </html>
  );
}
