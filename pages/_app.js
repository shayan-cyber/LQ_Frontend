import '../styles/globals.css'
// import "tailwindcss/tailwind.css";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useCookies } from "react-cookie";
import {useEffect} from "react"
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const [isDark, setisDark] = useState(false);
  const [cookie, setCookie,removeCookie] = useCookies(["token"]);
  // console.log(cookie['token']);
  const [auth_token, setAuthToken] = useState("")

  useEffect(() => {

    setAuthToken(cookie['token'])
    
  })


  
  return (
    <>
      <Head>

      <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css" rel="stylesheet" type="text/css" />

      </Head>
      <div className={isDark ? "dark" : "light"}>
        <nav className="py-3 px-2 container flex justify-between shadow-md mb-3">
          <div className="flex justify-start self-center">
            <Link href="/">
              <a className="text-red-500 mx-3 font-medium text-md md:text-2xl text-opacity-75 hover:text-opacity-100">
                Home
              </a>
            </Link>
            
            <Link href="/">
              <a className="text-red-500 mx-3 font-medium text-md md:text-2xl text-opacity-75 hover:text-opacity-100">
                Home
              </a>
            </Link>


            {auth_token ? (
        
                <button className="text-red-500 mx-3 font-medium text-md md:text-2xl text-opacity-75 hover:text-opacity-100" onClick={
                  ()=>{
                    removeCookie("token")
                    router.push("/")
                  
                  }
                } >Logout</button>

              
            ):(
              <Link href="/authentication">

                <a className="text-red-500 mx-3 font-medium text-md md:text-2xl text-opacity-75 hover:text-opacity-100" >Register</a>

              </Link>


            )}



           
          </div>

          <div>
            <button className="bg-gray-200 p-1 md:p-2 rounded-lg" onClick={() => {
            setisDark(!isDark);
          }}>
            <i className={isDark?"fas fa-toggle-on text-md md:text-2xl mx-4":"fas fa-toggle-off text-md md:text-2xl mx-4"}></i>
            
            </button>
          </div>
        </nav>

        
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
