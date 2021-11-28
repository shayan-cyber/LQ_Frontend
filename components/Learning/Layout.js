import React from 'react'

export default function Layout({children}) {




    return (
        <>



            <div className="relative min-h-screen md:flex bg-gray-300 dark:bg-gray-900">

                {/* top navbar for small screen start */}

                <div className="bg-gray-300 dark:bg-gray-900 text-black flex justify-between md:hidden">


                    {/* logo for small screen start */}

                    <a href="#" className="block p-4 text-black dark:text-gray-300 font-bold">Website Logo</a>

                    {/* logo for small screen end */}


                    {/* hamburger for small screen start */}

                    <button className="mobile-menu-button p-4 focus:outline-none">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* hamburger for small screen end */}

                </div>

                {/* top navbar for small screen end */}

                <div className="sidebar bg-gray-300 dark:bg-gray-900 w-36 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out mt-10 md:mt-2">



                    {/* logo for large screen start */}

                    <a href="#" className="flex items-center px-2 invisible md:visible">



                        Website Logo

                    </a>

                    {/* logo for large screen end */}



                    {/* side navbar start */}

                    <nav className="text-center text-base text-black dark:text-gray-300">

                        <a href="#" className="block md:pt-10 px-10 rounded transition duration-200">

                            <div className="w-12 h-12 bg-white rounded-full">

                            </div>

                        </a>

                        <span>Home</span>


                        <a href="" className="block pt-10 px-10 rounded transition duration-200">

                            <div className="w-12 h-12 bg-white rounded-full">

                            </div>

                        </a>

                        <span>Learn</span>


                        <a href="" className="block pt-10 px-10 rounded transition duration-200">

                            <div className="w-12 h-12 bg-white rounded-full">

                            </div>

                        </a>

                        <span>Learn</span>



                        {/* sign out div start */}
                        <div className="absolute bottom-20">
                            <a href="" className="block pt-10 px-10 rounded transition duration-200">

                                <div className="w-12 h-12 bg-white rounded-full">

                                </div>

                            </a>

                            <span>Sign Out</span>
                        </div>

                        {/* sign out div end */}


                    </nav>

                    {/* side navbar end */}

                </div>


                <div className="p-4 md:p-10 text-2xl w-full">

                    {/* top div start */}

                    <div className="flex text-xl w-full">

                        {/* search bar start */}

                        <input className="rounded-xl border-gray-300 w-full h-11" type="text"></input>

                        {/* search bar end*/}


                        {/* notification icon start */}

                        <a href="#" className="pl-3 md:px-10 flex mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="gray-300" className="bi bi-bell-fill" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                            </svg>
                        </a>

                        {/* notification icon end */}


                        {/* profile picture start */}

                        <a href="#" className="pl-3 md:px-10">

                            <div className="w-12 h-12 bg-white rounded-full">

                            </div>
                        </a>

                        {/* profile picture end */}


                    </div>

                    {/* top div end */}
                    {children}




                   



                </div>

            </div>




        </>


    )


}