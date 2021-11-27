import React from 'react'

export default function Learning() {




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



                    {/* learning info start */}

                    <div className="w-full mt-5 md:mt-10 px-8 py-8 min-h-screen bg-white rounded-xl">

                        {/* sort and category start */}

                        <div className="w-full h-auto bg-gray-100 dark:bg-gray-800 rounded-lg md:flex">

                            {/* sort by start */}

                            <div className="sm:flex">

                                {/* sort by text */}

                                <span className="text-base px-6 py-2 text-black dark:text-gray-300">SORT BY</span>

                                {/* dropdown */}

                                <div class="dropdown inline-block relative">

                                    <button class="bg-gray-800 dark:bg-gray-100 text-gray-200 dark:text-gray-900 font-semibold py-2 px-4 rounded inline-flex items-center h-7">
                                        <span class="mr-1 text-sm text-gray-200 dark:text-gray-900">Dropdown</span>
                                        <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </button>

                                    {/* dropdown list items */}
                                    <ul class="dropdown-menu absolute hidden text-gray-200 dark:text-gray-900 pt-1">
                                        <li class=""><a class="rounded-t bg-gray-800 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-400 block whitespace-no-wrap h-7 text-sm text-center font-semibold py-1 px-4" href="#">First item</a></li>
                                        <li class=""><a class="bg-gray-800 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-400 block whitespace-no-wrap h-7 text-sm text-center font-semibold py-1 px-4" href="#">Second item</a></li>
                                        <li class=""><a class="rounded-b bg-gray-800 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-400 block whitespace-no-wrap h-7 text-sm text-center font-semibold py-1 px-4" href="#">Third item</a></li>
                                    </ul>
                                </div>



                            </div>

                            {/* sort by end */}



                            {/* category start */}

                            <div className="sm:flex">

                                {/* category text */}

                                <span className="text-base px-4 lg:pl-20 py-2 text-black dark:text-gray-300">CATEGORY</span>


                                {/* dropdown */}

                                <div class="dropdown inline-block relative hover:dropdown-menu-block">

                                    <button class="bg-gray-800 dark:bg-gray-100 text-gray-200 dark:text-gray-900 font-semibold py-2 px-4 rounded inline-flex items-center h-7">
                                        <span class="mr-1 text-sm text-gray-200 dark:text-gray-900">Dropdown</span>
                                        <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </button>


                                   {/* dropdown list items */}

                                   <ul class="dropdown-menu absolute hidden text-gray-200 dark:text-gray-900 pt-1">
                                        <li class=""><a class="rounded-t bg-gray-800 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-400 block whitespace-no-wrap h-7 text-sm text-center font-semibold py-1 px-4" href="#">First item</a></li>
                                        <li class=""><a class="bg-gray-800 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-400 block whitespace-no-wrap h-7 text-sm text-center font-semibold py-1 px-4" href="#">Second item</a></li>
                                        <li class=""><a class="rounded-b bg-gray-800 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-400 block whitespace-no-wrap h-7 text-sm text-center font-semibold py-1 px-4" href="#">Third item</a></li>
                                    </ul>
                                </div>



                            </div>

                            {/* category end */}

                        </div>

                        {/* sort and category end */}



                        {/* learning container start */}

                        <div class="my-6">
                            <div class="flex flex-wrap -mx-1 lg:-mx-4">

                                {/* card 1 */}

                                <div class="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                    <div class="bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg shadow-md">



                                        <div class="items-center p-2 md:p-4">
                                            <h1 class="text-lg text-gray-900 dark:text-gray-100 font-semibold mb-4">
                                                Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins
                                            </h1>

                                            <p class="text-gray-800 dark:text-gray-300 text-sm">
                                                Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                                            </p>
                                        </div>

                                        <div class="flex items-center p-2 md:p-4">
                                            <a class="flex items-center no-underline hover:underline text-black dark:text-gray-200" href="#">

                                                <p class="text-sm mr-2">
                                                    Read More
                                                </p>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 20 14">
                                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                </svg>

                                            </a>

                                        </div>

                                    </div>


                                </div>

                                {/* card 2 */}

                                <div class="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                    <div class="bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg shadow-md">



                                        <div class="items-center p-2 md:p-4">
                                            <h1 class="text-lg text-gray-900 dark:text-gray-100 font-semibold mb-4">
                                                Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins
                                            </h1>

                                            <p class="text-gray-800 dark:text-gray-300 text-sm">
                                                Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                                            </p>
                                        </div>

                                        <div class="flex items-center p-2 md:p-4">
                                            <a class="flex items-center no-underline hover:underline text-black dark:text-gray-200 " href="#">

                                                <p class="text-sm mr-2">
                                                    Read More
                                                </p>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 20 14">
                                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                </svg>

                                            </a>

                                        </div>

                                    </div>


                                </div>

                                {/* card 3 */}

                                <div class="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                    <div class="bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg shadow-md">



                                        <div class="items-center p-2 md:p-4">
                                            <h1 class="text-lg text-gray-900 dark:text-gray-100 font-semibold mb-4">
                                                Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins
                                            </h1>

                                            <p class="text-gray-800 dark:text-gray-300 text-sm">
                                                Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                                            </p>
                                        </div>

                                        <div class="flex items-center p-2 md:p-4">
                                            <a class="flex items-center no-underline hover:underline text-black dark:text-gray-200 " href="#">

                                                <p class="text-sm mr-2">
                                                    Read More
                                                </p>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 20 14">
                                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                </svg>

                                            </a>

                                        </div>

                                    </div>


                                </div>

                                {/* card 4 */}

                                <div class="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                    <div class="bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg shadow-md">



                                        <div class="items-center p-2 md:p-4">
                                            <h1 class="text-lg text-gray-900 dark:text-gray-100 font-semibold mb-4">
                                                Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins
                                            </h1>

                                            <p class="text-gray-800 dark:text-gray-300 text-sm">
                                                Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                                            </p>
                                        </div>

                                        <div class="flex items-center p-2 md:p-4">
                                            <a class="flex items-center no-underline hover:underline text-black dark:text-gray-200 " href="#">

                                                <p class="text-sm mr-2">
                                                    Read More
                                                </p>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 20 14">
                                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                </svg>

                                            </a>

                                        </div>

                                    </div>


                                </div>

                                {/* card 5 */}

                                <div class="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                    <div class="bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg shadow-md">



                                        <div class="items-center p-2 md:p-4">
                                            <h1 class="text-lg text-gray-900 dark:text-gray-100 font-semibold mb-4">
                                                Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins
                                            </h1>

                                            <p class="text-gray-800 dark:text-gray-300 text-sm">
                                                Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                                            </p>
                                        </div>

                                        <div class="flex items-center p-2 md:p-4">
                                            <a class="flex items-center no-underline hover:underline text-black dark:text-gray-200 " href="#">

                                                <p class="text-sm mr-2">
                                                    Read More
                                                </p>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 20 14">
                                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                </svg>

                                            </a>

                                        </div>

                                    </div>


                                </div>

                                {/* card 6 */}

                                <div class="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                    <div class="bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-lg shadow-md">



                                        <div class="items-center p-2 md:p-4">
                                            <h1 class="text-lg text-gray-900 dark:text-gray-100 font-semibold mb-4">
                                                Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins
                                            </h1>

                                            <p class="text-gray-800 dark:text-gray-300 text-sm">
                                                Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                                            </p>
                                        </div>

                                        <div class="flex items-center p-2 md:p-4">
                                            <a class="flex items-center no-underline hover:underline text-black dark:text-gray-200" href="#">

                                                <p class="text-sm mr-2">
                                                    Read More
                                                </p>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 20 14">
                                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                </svg>

                                            </a>

                                        </div>

                                    </div>


                                </div>


                            </div>
                        </div>

                        {/* learning container end */}



                        {/* next button start */}

                        <div className="text-center">
                            <a class="bg-gray-800 text-gray-200 font-semibold py-4 px-4 rounded inline-flex items-center h-7">
                                <span class="mr-1 text-lg text-gray-200">Next</span>
                                <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </a>
                        </div>

                        {/* next button end */}

                    </div>

                    {/* learning info end */}



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