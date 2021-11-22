import '../styles/globals.css'
// import "tailwindcss/tailwind.css";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useCookies } from "react-cookie";
import {useEffect} from "react"
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {


  const [isDark, setisDark] = useState(false);
  

  const toggleDark = ()=>{
    setisDark(!isDark)
  }


  
  return (
    <>
      <Head>

      <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css" rel="stylesheet" type="text/css" />

      </Head>
      <div className={isDark ? "dark" : "light"}>
        <Navbar toggleDark={toggleDark} isDark={isDark}/>

        
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
