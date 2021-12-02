import React from "react";
import { useState, useEffect } from "react";
import Link from 'next/link'
import { MdAddCircle } from 'react-icons/md'
import axios from "axios";

export default function Layout({ children }) {
  const [toggle, setToggle] = useState(true);


  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/job-portal/job-categories/")
      .then((response) => {
        setCategories(response.data)
      }
      )

  }, [])

  const toggleSidebar = () => {
    setToggle(!toggle);
  };






  return (
    <>
      <div className="relative z-10 min-h-screen md:flex bg-purple-1 dark:bg-black2-2">
        {/* top navbar for small screen start */}

        <div className="bg-white dark:bg-gray-900 text-black flex justify-between md:hidden">
          {/* logo for small screen start */}

          <a
            href="#"
            className="block p-4 text-black dark:text-gray-300 font-bold"
          >
            Website Logo
          </a>

          {/* logo for small screen end */}

          {/* hamburger for small screen start */}

          <button
            className="mobile-menu-button p-4 focus:outline-none"
            onClick={() => toggleSidebar()}
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* hamburger for small screen end */}
        </div>

        {/* top navbar for small screen end */}

        <div
          className={
            toggle
              ? "sidebar bg-white dark:bg-black1-1 w-60 space-y-6 py-7 pl-4 pr-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out mt-10 md:mt-0"
              : "sidebar bg-white dark:bg-black1-1 w-60 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform  md:relative md:translate-x-0 transition duration-200 ease-in-out mt-10 md:mt-0"
          }
        >
          {/* logo for large screen start */}

          <a href="#" className="flex items-center px-2 invisible md:visible">
            {/* <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
            <path d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z" />
          </svg> */}
            Website Logo
          </a>

          {/* logo for large screen end */}

          {/* side navbar start */}

          <nav className="text-base text-black dark:text-gray-300">
            {categories.map((category) => {
              return (
                <div key={category.id}>
                  <Link href={`/job-portal/jobs/${category.name}`}>
                    <a

                      className="block md:pt-10 px-10 rounded transition duration-200"
                    >
                      <div className="w-12 h-12 bg-white rounded-full"></div>
                    </a>
                  </Link>

                  <span>{category.name}</span>
                </div>
              );
            })}

            <div className="mt-20">

              <a href="#" className="py-9 px-4 rounded transition duration-200 text-grey-1 dark:text-grey2-2 dark:hover:text-blue2-4 hover:text-blue-1 flex">
                <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.8 5.85C18.7333 5.05 17.2667 5.05 16.2 5.85L7.2 12.6C6.44458 13.1666 6 14.0557 6 15V28.5C6 30.1569 7.34315 31.5 9 31.5H10.5C12.1569 31.5 13.5 30.1569 13.5 28.5V24C13.5 22.3431 14.8431 21 16.5 21H19.5C21.1569 21 22.5 22.3431 22.5 24V28.5C22.5 30.1569 23.8431 31.5 25.5 31.5H27C28.6569 31.5 30 30.1569 30 28.5V15C30 14.0557 29.5554 13.1666 28.8 12.6L19.8 5.85Z" fill="currentcolor" />
                </svg>
                <span className="mt-1 ml-3">Home</span>
              </a>

              <a href="#" className="pb-9 px-4 rounded transition duration-200 text-grey-1 dark:text-grey2-2 dark:hover:text-blue2-4 hover:text-blue-1 flex">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.99996 5.33333V21.3333H28V5.33333H3.99996ZM9.33329 9.33333H22.6666V12H9.33329V9.33333ZM9.33329 14.6667H18.6666V17.3333H9.33329V14.6667ZM2.66663 24V26.6667H29.3333V24H2.66663Z" fill="currentcolor" />
                </svg>
                <span className="mt-0.5 ml-3">Learn</span>
              </a>

              <a href="#" className="pb-9 pl-4 rounded transition duration-200 text-grey-1 dark:text-grey2-2 dark:hover:text-blue2-4 hover:text-blue-1 flex">
                <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.52 1C11.4675 1 10.6 1.8675 10.6 2.92V4.2H2.8675C1.8375 4.2 1 5.03 1 6.05V15.72C1 16.0725 1.2625 16.36 1.5875 16.36H21.0825C22.3 15.5525 23.755 15.08 25.32 15.08C27.2875 15.08 29.08 15.83 30.44 17.05V6.05C30.44 5.03 29.6025 4.2 28.5725 4.2H20.84V2.92C20.84 1.8675 19.9725 1 18.92 1H12.52ZM12.52 2.28H18.92C19.28 2.28 19.56 2.56 19.56 2.92V4.2H11.88V2.92C11.88 2.56 12.16 2.28 12.52 2.28ZM15.72 12.52C16.4275 12.52 17 13.0925 17 13.8C17 14.5075 16.4275 15.08 15.72 15.08C15.0125 15.08 14.44 14.5075 14.44 13.8C14.44 13.0925 15.0125 12.52 15.72 12.52ZM25.32 16.36C21.7925 16.36 18.92 19.2325 18.92 22.76C18.92 24.295 19.465 25.7025 20.37 26.8075L16.5475 30.6275L17.4525 31.5325L21.2725 27.71C22.3775 28.615 23.785 29.16 25.32 29.16C28.8475 29.16 31.72 26.2875 31.72 22.76C31.72 19.2325 28.8475 16.36 25.32 16.36ZM1 17.5325V25.39C1 26.41 1.8375 27.24 2.8675 27.24H18.125L18.7075 26.66C18.015 25.4825 17.64 24.1325 17.64 22.76C17.64 20.7925 18.39 19 19.61 17.64H1.5875C1.3825 17.64 1.185 17.5975 1 17.5325ZM25.32 17.64C28.155 17.64 30.44 19.925 30.44 22.76C30.44 25.595 28.155 27.88 25.32 27.88C22.485 27.88 20.2 25.595 20.2 22.76C20.2 19.925 22.485 17.64 25.32 17.64Z" fill="currentcolor" />
                </svg>
                <span className="ml-3">Find Jobs</span>
              </a>

              <a href="#" className="pl-4 pr-2 rounded transition duration-200 text-grey-1 dark:text-grey2-2 dark:hover:text-blue2-4 hover:text-blue-1 flex">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_105_613)">
                    <path d="M16 3.20209C11.4752 3.20209 9.59995 6.10449 9.59995 9.60209C9.59995 10.7797 10.1625 11.9625 10.1625 11.9625C9.93632 12.0926 9.56442 12.5057 9.65828 13.2396C9.83322 14.6081 10.4265 14.9566 10.8041 14.9854C10.9481 16.2622 12.32 17.8955 12.8 18.1333V20.2667C11.7333 23.4667 3.19995 21.3333 3.19995 28.8H16.8104C15.6381 27.3387 14.9333 25.4859 14.9333 23.4667C14.9333 19.5627 17.5567 16.279 21.1354 15.2646C21.1567 15.1707 21.1862 15.0761 21.1958 14.9854C21.5734 14.9566 22.1667 14.6081 22.3416 13.2396C22.4355 12.5047 22.0636 12.0926 21.8375 11.9625C21.8375 11.9625 22.4 10.8938 22.4 9.60209C22.4 7.01222 21.3834 4.80209 19.2 4.80209C19.2 4.80209 18.4416 3.20209 16 3.20209ZM23.4666 17.0667C19.9446 17.0667 17.0666 19.9447 17.0666 23.4667C17.0666 26.9887 19.9446 29.8667 23.4666 29.8667C24.8442 29.8667 26.1198 29.4219 27.1666 28.675L30.1791 31.6875C30.2774 31.7899 30.3951 31.8716 30.5254 31.9279C30.6557 31.9842 30.7959 32.014 30.9378 32.0154C31.0797 32.0169 31.2205 31.99 31.3519 31.9363C31.4832 31.8827 31.6026 31.8034 31.703 31.703C31.8033 31.6027 31.8826 31.4833 31.9363 31.3519C31.9899 31.2205 32.0168 31.0797 32.0154 30.9378C32.0139 30.7959 31.9842 30.6557 31.9279 30.5255C31.8716 30.3952 31.7898 30.2775 31.6875 30.1792L28.675 27.1667C29.4219 26.1198 29.8666 24.8443 29.8666 23.4667C29.8666 19.9447 26.9886 17.0667 23.4666 17.0667ZM23.4666 19.2C25.8357 19.2 27.7333 21.0976 27.7333 23.4667C27.7333 25.8357 25.8357 27.7333 23.4666 27.7333C21.0976 27.7333 19.2 25.8357 19.2 23.4667C19.2 21.0976 21.0976 19.2 23.4666 19.2Z" fill="currentcolor" />
                  </g>
                  <defs>
                    <clipPath id="clip0_105_613">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="mt-1 ml-3">Connect</span>
              </a>

            </div>


            {/* log out div start */}
            <div className="absolute bottom-28 flex">
              <a
                href=""
                className="pt-10 pl-4 transition duration-200 flex text-grey-1 dark:text-grey2-2 dark:hover:text-blue2-4 hover:text-blue-1">

                <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.6666 9.33333L20.7866 11.2133L24.2266 14.6667H10.6666V17.3333H24.2266L20.7866 20.7733L22.6666 22.6667L29.3333 16L22.6666 9.33333ZM5.33329 6.66667H16V4H5.33329C3.86663 4 2.66663 5.2 2.66663 6.66667V25.3333C2.66663 26.8 3.86663 28 5.33329 28H16V25.3333H5.33329V6.66667Z" fill="currentcolor" />
                </svg>
                <span className="ml-3 mt-1">Log Out</span>
              </a>
            </div>

            {/* log out div end */}

          </nav>

          {/* side navbar end */}
        </div>

        <div className="py-4 md:py-10 w-full">
          {/* top div start */}

          <div className="flex text-xl w-full text-darkerblack-1 dark:text-grey2-2">
            {/* search bar start */}

            <svg className={
              toggle
                ? "absolute pl-3 md:pl-9 mt-0.5 md:mt-1.5 w-8 h-8 md:w-16 ma:h-12"
                : "hidden absolute pl-1 md:pl-9 mt-0.5 md:mt-1.5 w-8 h-8 md:w-16 ma:h-12"
            } viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.25 21H22.065L21.645 20.595C23.115 18.885 24 16.665 24 14.25C24 8.86502 19.635 4.50002 14.25 4.50002C8.865 4.50002 4.5 8.86502 4.5 14.25C4.5 19.635 8.865 24 14.25 24C16.665 24 18.885 23.115 20.595 21.645L21 22.065V23.25L28.5 30.735L30.735 28.5L23.25 21ZM14.25 21C10.515 21 7.5 17.985 7.5 14.25C7.5 10.515 10.515 7.50002 14.25 7.50002C17.985 7.50002 21 10.515 21 14.25C21 17.985 17.985 21 14.25 21Z" fill="currentcolor" />
            </svg>


            <input
              className="rounded-2xl bg-white border-white dark:border-black1-1 dark:bg-black1-1 mr-2 md:mr-4 ml-2 md:ml-5 w-full h-9 md:h-11 pl-8 md:pl-14 text-sm
              dark:placeholder-grey2-2"
              type="text" placeholder="Find your ideal jobs by job title, company name....."></input>


            {/* search bar end*/}


            {/* modal buton */}
            <svg className="mt-1.5 md:hidden" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
              <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
            </svg>



            {/* notification icon start */}

            <a href="/job-portal/add-job" className="pl-3 md:px-10 flex mt-3 text-3xl">
              <MdAddCircle />
            </a>

            {/* notification icon end */}

            {/* profile picture start */}

            <a href="#" className="pl-2 pr-2 md:pr-16">
              <div className="w-12 h-12 bg-white rounded-full"></div>
            </a>

            {/* profile picture end */}
          </div>

          {/* top div end */}





          {/* job info start */}

          <div className="w-full mt-5 md:mt-0 py-0 min-h-screen flex rounded-lg lg:-ml-2 ">
            {children}







          </div>



          {/* job info end */}
        </div>

      </div>


      {/* modal start*/}

      <div className="hidden modal sm:invisible fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" aria-modal="true">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

          <div className="inline-block align-bottom bg-white-1 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

            <div className="bg-white dark:bg-gray-900 w-screen min-h-full px-6 inset-y-0 left-0 my-6">

              <span className="text-xl">Category</span>


              <div className="mt-6">
                <span className="text-base mt-40">Professional level</span>

                <div className="flex space-x-3 mt-3">
                  <input className="w-5 h-5 rounded mt-1" type="checkbox"></input>
                  <span>Trainee Level</span>
                </div>

                <div className="flex space-x-3 mt-1">
                  <input className="w-5 h-5 rounded mt-1" type="checkbox"></input>
                  <span>Trainee Level</span>
                </div>

                <div className="flex space-x-3 mt-1">
                  <input className="w-5 h-5 rounded mt-1" type="checkbox"></input>
                  <span>Trainee Level</span>
                </div>

                <div className="flex space-x-3 mt-1">
                  <input className="w-5 h-5 rounded mt-1" type="checkbox"></input>
                  <span>Trainee Level</span>
                </div>

              </div>


              <div className="mt-4">
                <span className="text-base mt-40">Employment Level</span>

                <div className="flex space-x-3 mt-3">
                  <input className="w-5 h-5 rounded mt-1" type="checkbox"></input>
                  <span>Full Time</span>
                </div>

                <div className="flex space-x-3 mt-1">
                  <input className="w-5 h-5 rounded mt-1" type="checkbox"></input>
                  <span>Remote</span>
                </div>

                <div className="flex space-x-3 mt-1">
                  <input className="w-5 h-5 rounded mt-1" type="checkbox"></input>
                  <span>Internship</span>
                </div>


              </div>

              <div className="mt-4">
                <span className="text-base mt-40">Salary</span>

                <div className="mt-1">

                </div>




              </div>


            </div>
          </div>

        </div>
      </div>

      {/* modal end*/}



    </>
  );
}

