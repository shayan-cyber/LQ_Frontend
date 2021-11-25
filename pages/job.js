import React from 'react'

export default function Job() {




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
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* hamburger for small screen end */}

                </div>

                {/* top navbar for small screen end */}

                <div className="sidebar bg-gray-300 dark:bg-gray-900 w-36 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out mt-10 md:mt-2">



                    {/* logo for large screen start */}

                    <a href="#" className="flex items-center px-2 invisible md:visible">

                        {/* <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
            <path d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z" />
          </svg> */}

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


                <div className="p-4 md:p-10 text-2xl font-bold w-full">

                    {/* top div start */}

                    <div className="flex text-xl w-full">

                        {/* search bar start */}

                        <input className="rounded-xl border-gray-300 w-full h-11" type="text"></input>

                        {/* search bar end*/}


                        {/* notification icon start */}

                        <a href="#" className="pl-3 md:px-10 flex mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="gray-300" class="bi bi-bell-fill" viewBox="0 0 16 16">
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



                    {/* job info start */}

                    <div className="w-full mt-5 md:mt-10 p-10 min-h-screen bg-white rounded-xl">

                    </div>

                    {/* job info end */}



                </div>

            </div>




        </>


    )


}



    // const btn = document.querySelector(".mobile-menu-button");
    // const sidebar = document.querySelector(".sidebar");

    // btn.addEventListener("click", () => {
    //     sidebar.classList.toggle("-translate-x-full");
    // });


