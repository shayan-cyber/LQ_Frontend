// import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  const [isDark, setisDark] = useState(false);
  return (
    <>
      <Head>

      <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css" rel="stylesheet" type="text/css" />

      </Head>
      <div className={isDark ? "dark" : "light"}>
        <nav className="py-3 px-2 container flex justify-between shadow-md mb-3">
          <div className="flex justify-start self-center">
            <Link href="/">
              <a className="text-red-500 mx-3 font-medium text-2xl text-opacity-75 hover:text-opacity-100">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="text-red-500 mx-3 font-medium text-2xl text-opacity-75 hover:text-opacity-100">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="text-red-500 mx-3 font-medium text-2xl text-opacity-75 hover:text-opacity-100">
                Home
              </a>
            </Link>
          </div>

          <div>
            <button className="bg-gray-200 p-2 rounded-lg" onClick={() => {
            setisDark(!isDark);
          }}>
            <i className={isDark?"fas fa-toggle-on text-2xl mx-4":"fas fa-toggle-off text-2xl mx-4"}></i>
            
            </button>
          </div>
        </nav>

        
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
