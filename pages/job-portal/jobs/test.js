import Layout from "../../../components/Job/Layout";
// import { useState } from 'react'

export default function Test() {
    
    return (

        <Layout>

            {/* job types */}

            <div className="container">


                <div className="w-full mt-6 md:mt-10 pb-0 px-2 md:pl-16 bg-gry-300 flex justify-between md:justify-start md:space-x-20 border-b border-blue-400">

                    <a href="" className="pb-1.5 border-b-4 border-blue-1 hover:text-blue-1 active:text-blue-1 dark:text-blue2-4"><span>All Jobs</span></a>
                    <a href="" className="hover:text-blue-1 hover:border-b-4 hover:border-blue-1 dark:text-grey2-2 dark:hover:text-blue2-4"><span>Liked Jobs</span></a>
                    <a href="" className="hover:text-blue-1 hover:border-b-4 hover:border-blue-1 dark:text-grey2-2 dark:hover:text-blue2-4"><span>Applied Jobs</span></a>

                </div>

                <div className="flex mt-12">



                    <div className="sidebar hidden sm:block dark:bg-black2-2 dark:text-grey2-2 w-60 min-h-screen px-6 inset-y-0 left-0 mt-1">

                        <span className="text-xl">Category</span>


                        <div className="mt-6">
                            <span className="text-base mt-40">Professional level</span>

                            <div className="flex space-x-3 mt-3">
                                <input className="w-5 h-5 rounded mt border-2 border-grey-1" type="checkbox"></input>
                                <span className="-mt-0.5">Trainee Level</span>
                            </div>

                            <div className="flex space-x-3 mt-1">
                                <input className="w-5 h-5 rounded mt border-2 border-grey-1" type="checkbox"></input>
                                <span className="-mt-0.5">Junior Level</span>
                            </div>

                            <div className="flex space-x-3 mt-1">
                                <input className="w-5 h-5 rounded mt border-2 border-grey-1" type="checkbox"></input>
                                <span className="-mt-0.5">Moderate Level</span>
                            </div>

                            <div className="flex space-x-3 mt-1">
                                <input className="w-5 h-5 rounded mt border-2 border-grey-1" type="checkbox"></input>
                                <span className="-mt-0.5">Senior Level</span>
                            </div>

                        </div>


                        <div className="mt-4">
                            <span className="text-base mt-40">Employment Level</span>

                            <div className="flex space-x-3 mt-3">
                                <input className="w-5 h-5 rounded mt-1 border-2 border-grey-1" type="checkbox"></input>
                                <span className="mt-0.5">Full Time</span>
                            </div>

                            <div className="flex space-x-3 mt-1">
                                <input className="w-5 h-5 rounded mt-1 border-2 border-grey-1" type="checkbox"></input>
                                <span className="mt-0.5">Remote</span>
                            </div>

                            <div className="flex space-x-3 mt-1">
                                <input className="w-5 h-5 rounded mt-1 border-2 border-grey-1" type="checkbox"></input>
                                <span className="mt-0.5">Internship</span>
                            </div>


                        </div>


                        <div className="mt-4">
                            <span className="text-base mt-40">Salary</span>

                            <div className="mt-1">

                            </div>




                        </div>


                    </div>


                    {/* new start */}

                    <div className="w-full mt-1 px-3 md:pl-2 md:pr-4">


                        <div className="flex flex-wrap -mx-1 lg:-mx-4">


                            <div className="mb-5 px-1 w-full md:w-1/2 lg:px-4 lg:w-1/3 ">


                                <div className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-black1-1">
                                    <div className="flex items-center justify-between leading-none pb-2 px-5 pt-5">
                                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                                            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                                        </a>
                                        <a className="no-underline text-blue-1 dark:text-blue2-4" href="#">
                                            <i className="fa fa-heart"></i>
                                        </a>
                                    </div>

                                    <div className="flex items-center justify-between leading-tight px-5">
                                        <h1 className="text-lg">
                                            <span className="text-black dark:text-grey2-2 font-bold">
                                                UX Designer
                                            </span>
                                        </h1>
                                        <p className="text-grey-1 dark:text-grey2-2  text-sm">
                                            1 day ago
                                        </p>
                                    </div>

                                    <div className="mt-1 px-3">
                                        <button className="mt-2 px-4 py-1 mr-1 text-blue-1 bg-purple-1 dark:bg-blue3-3 dark:text-blue2-4 rounded-full">Graphic design</button>
                                        <button className="mt-2 px-4 py-1 mr-1 text-blue-1 bg-purple-1 dark:bg-blue3-3 dark:text-blue2-4 rounded-full">Figma</button>
                                    </div>

                                    <div className="mt-3 mb-8 px-4">
                                        <span className="font-semibold dark:text-grey2-2">Mumbai, Maharashtra</span>

                                        <p className="text-sm text-grey-1 dark:text-grey2-2 mt-2">The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.</p>

                                        <div className="text-center">
                                            <button className="mt-4 px-8 py-2 text-md border-2 border-blue-1 text-blue-1 hover:text-white hover:bg-blue-1 
                                        dark:border-blue2-4 dark:text-blue2-4 dark:hover:bg-blue2-4 dark:hover:text-black1-1 rounded-2xl">Easy Apply</button>
                                        </div>


                                    </div>



                                </div>


                            </div>

                            <div className="mb-5 px-1 w-full md:w-1/2 lg:px-4 lg:w-1/3 ">


                                <div className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-black1-1">
                                    <div className="flex items-center justify-between leading-none pb-2 px-5 pt-5">
                                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                                            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                                        </a>
                                        <a className="no-underline text-blue-1 dark:text-blue2-4" href="#">
                                            <i className="fa fa-heart"></i>
                                        </a>
                                    </div>

                                    <div className="flex items-center justify-between leading-tight px-5">
                                        <h1 className="text-lg">
                                            <span className="text-black dark:text-grey2-2 font-bold">
                                                UX Designer
                                            </span>
                                        </h1>
                                        <p className="text-grey-1 dark:text-grey2-2  text-sm">
                                            1 day ago
                                        </p>
                                    </div>

                                    <div className="mt-1 px-3">
                                        <button className="mt-2 px-4 py-1 mr-1 text-blue-1 bg-purple-1 dark:bg-blue3-3 dark:text-blue2-4 rounded-full">Graphic design</button>
                                        <button className="mt-2 px-4 py-1 mr-1 text-blue-1 bg-purple-1 dark:bg-blue3-3 dark:text-blue2-4 rounded-full">Figma</button>
                                    </div>

                                    <div className="mt-3 mb-8 px-4">
                                        <span className="font-semibold dark:text-grey2-2">Mumbai, Maharashtra</span>

                                        <p className="text-sm text-grey-1 dark:text-grey2-2 mt-2">The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.</p>

                                        <div className="text-center">
                                            <button className="mt-4 px-8 py-2 text-md border-2 border-blue-1 text-blue-1 hover:text-white hover:bg-blue-1 
            dark:border-blue2-4 dark:text-blue2-4 dark:hover:bg-blue2-4 dark:hover:text-black1-1 rounded-2xl">Easy Apply</button>
                                        </div>


                                    </div>



                                </div>


                            </div>
                            <div className="mb-5 px-1 w-full md:w-1/2 lg:px-4 lg:w-1/3 ">


                                <div className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-black1-1">
                                    <div className="flex items-center justify-between leading-none pb-2 px-5 pt-5">
                                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                                            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                                        </a>
                                        <a className="no-underline text-blue-1 dark:text-blue2-4" href="#">
                                            <i className="fa fa-heart"></i>
                                        </a>
                                    </div>

                                    <div className="flex items-center justify-between leading-tight px-5">
                                        <h1 className="text-lg">
                                            <span className="text-black dark:text-grey2-2 font-bold">
                                                UX Designer
                                            </span>
                                        </h1>
                                        <p className="text-grey-1 dark:text-grey2-2  text-sm">
                                            1 day ago
                                        </p>
                                    </div>

                                    <div className="mt-1 px-3">
                                        <button className="mt-2 px-4 py-1 mr-1 text-blue-1 bg-purple-1 dark:bg-blue3-3 dark:text-blue2-4 rounded-full">Graphic design</button>
                                        <button className="mt-2 px-4 py-1 mr-1 text-blue-1 bg-purple-1 dark:bg-blue3-3 dark:text-blue2-4 rounded-full">Figma</button>
                                    </div>

                                    <div className="mt-3 mb-8 px-4">
                                        <span className="font-semibold dark:text-grey2-2">Mumbai, Maharashtra</span>

                                        <p className="text-sm text-grey-1 dark:text-grey2-2 mt-2">The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.</p>

                                        <div className="text-center">
                                            <button className="mt-4 px-8 py-2 text-md border-2 border-blue-1 text-blue-1 hover:text-white hover:bg-blue-1 
            dark:border-blue2-4 dark:text-blue2-4 dark:hover:bg-blue2-4 dark:hover:text-black1-1 rounded-2xl">Easy Apply</button>
                                        </div>


                                    </div>



                                </div>


                            </div>

                            <div className="mb-5 px-1 w-full md:w-1/2 lg:px-4 lg:w-1/3 ">


                                <div className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-black1-1">
                                    <div className="flex items-center justify-between leading-none pb-2 px-5 pt-5">
                                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                                            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                                        </a>
                                        <a className="no-underline text-blue-1 dark:text-blue2-4" href="#">
                                            <i className="fa fa-heart"></i>
                                        </a>
                                    </div>

                                    <div className="flex items-center justify-between leading-tight px-5">
                                        <h1 className="text-lg">
                                            <span className="text-black dark:text-grey2-2 font-bold">
                                                UX Designer
                                            </span>
                                        </h1>
                                        <p className="text-grey-1 dark:text-grey2-2  text-sm">
                                            1 day ago
                                        </p>
                                    </div>

                                    <div className="mt-1 px-3">
                                        <button className="mt-2 px-4 py-1 mr-1 text-blue-1 bg-purple-1 dark:bg-blue3-3 dark:text-blue2-4 rounded-full">Graphic design</button>
                                        <button className="mt-2 px-4 py-1 mr-1 text-blue-1 bg-purple-1 dark:bg-blue3-3 dark:text-blue2-4 rounded-full">Figma</button>
                                    </div>

                                    <div className="mt-3 mb-8 px-4">
                                        <span className="font-semibold dark:text-grey2-2">Mumbai, Maharashtra</span>

                                        <p className="text-sm text-grey-1 dark:text-grey2-2 mt-2">The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.</p>

                                        <div className="text-center">
                                            <button className="mt-4 px-8 py-2 text-md border-2 border-blue-1 text-blue-1 hover:text-white hover:bg-blue-1 
            dark:border-blue2-4 dark:text-blue2-4 dark:hover:bg-blue2-4 dark:hover:text-black1-1 rounded-2xl">Easy Apply</button>
                                        </div>


                                    </div>



                                </div>


                            </div>





                        </div>


                    </div>

                    {/*new end */}

                </div>


            </div>
        </Layout>


    )
}












