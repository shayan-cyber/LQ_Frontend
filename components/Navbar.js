import { useState } from "react";

import Link from "next/link";
import { useCookies } from "react-cookie";
import {useEffect} from "react"
import { useRouter } from 'next/router'


export default function Navbar({toggleDark, isDark}){
    const router = useRouter()
    const [cookie, setCookie,removeCookie] = useCookies(["token"]);
    // console.log(cookie['token']);
    const [auth_token, setAuthToken] = useState("")
  
    useEffect(() => {
  
      setAuthToken(cookie['token'])
      
    })

    return (

        <nav className="sticky z-20 top-0 bg-white py-3 px-2 container flex justify-between shadow-md mb-2">
          <div className="flex justify-start self-center">
            <Link href="/">
              <a className="text-red-500 mx-3 font-medium text-md md:text-2xl text-opacity-75 hover:text-opacity-100">
                Home
              </a>
            </Link>
            
            <Link href="/socialmedia/feed">
              <a className="text-red-500 mx-3 font-medium text-md md:text-2xl text-opacity-75 hover:text-opacity-100">
                Connect
              </a>
            </Link>

            <Link href="/job-portal/jobs">
              <a className="text-red-500 mx-3 font-medium text-md md:text-2xl text-opacity-75 hover:text-opacity-100">
                Job
              </a>
            </Link>

            <Link href="/learning">
              <a className="text-red-500 mx-3 font-medium text-md md:text-2xl text-opacity-75 hover:text-opacity-100">
               Learning
              </a>
            </Link>


            {auth_token ? (
        
                <button className="text-red-500 mx-3 font-medium text-md md:text-2xl text-opacity-75 hover:text-opacity-100" onClick={
                  ()=>{
                    removeCookie("token")
                    setAuthToken("")
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
            toggleDark();
          }}>
            <i className={isDark?"fas fa-toggle-on text-md md:text-2xl mx-4":"fas fa-toggle-off text-md md:text-2xl mx-4"}></i>
            
            </button>
          </div>
        </nav>



    )


}