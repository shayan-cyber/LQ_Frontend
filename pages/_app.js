import '../styles/globals.css'
// import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from '../components/Navbar'
import { motion,AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps,router }) {

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  const [isDark, setisDark] = useState(false);
  

  const toggleDark = ()=>{
    setisDark(!isDark)
  }

  // scroll to top start

  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  useEffect(() =>{
    window.addEventListener('scroll', toggleVisible);
  })
  


  // scroll to top end
  
  return (

    
    <>
      <Head>

      <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css" rel="stylesheet" type="text/css" />

      </Head>
      <div className={isDark ? "dark z-1" : "light z-1"}>
        <Navbar toggleDark={toggleDark} isDark={isDark}/>
        
        <motion.div key={router.route}  variants={variants} initial="hidden" animate="enter" exit="exit" transition={{ type: 'linear' }}>
          <Component {...pageProps} />
        </motion.div>
 
        <button className={visible?"w-15 z-10 h-15 fixed bottom-3 right-3 rounded-full p-2 bg-indigo-500":"hidden w-15 z-10 h-15 fixed bottom-3 right-3 rounded-full p-2 bg-indigo-500"} onClick={scrollToTop} >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </>
  );
}

export default MyApp;
