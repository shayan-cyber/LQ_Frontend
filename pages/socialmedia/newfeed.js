import Layout from "../../components/Media/Layout";
import { useState } from 'react'

export default function Newfeed() {

    const [like, setLike] = useState(true);

    const toggleLike = () => {
        setLike(!like);
    };

    return (
        <Layout>



            <div className="container pt-8 px-2 md:mx-40">

                {/* top div */}
                <div className="w-full bg-white px-2 md:px-4 rounded-xl dark:bg-black1-1">

                    {/* whats on mind */}
                    <div className="flex mb-4 pt-8 pb-3 pl-1 md:pl-6 md:pr-10">
                        <div className="w-12 h-11 bg-gray-200 rounded-full"></div>
                        <input
                            className="rounded-3xl bg-darkblue-1 dark:bg-black2-2 border-darkblue-1 dark:border-grey3-3 ml-2 md:ml-5 w-full h-9 md:h-11 pl-6 text-sm 
                            placeholder-darkerblue-1 dark:placeholder-blue3-3"
                            type="text" placeholder="What's on your mind?"></input>
                    </div>

                    {/* line */}
                    <div className="border-b-2 border-purple-1 dark:border-darkerblue-1"></div>

                    {/* photo, emoji, addpost */}
                    <div className="space-x-3 md:space-x-20 flex py-7 justify-center">

                        {/* photos */}
                        <div className="flex text-blue-1 hover:text-darkerblue-1 dark:text-darkerblue-1 dark:hover:text-blue4-4 cursor-pointer">
                            <svg width="27" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_129_553)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.62412 30.5666L5.76012 30.6426C5.28725 30.6851 4.81067 30.6333 4.35796 30.4902C3.90526 30.3472 3.48543 30.1157 3.12279 29.8093C2.7576 29.5055 2.45639 29.1322 2.23666 28.7111C2.01693 28.2899 1.88305 27.8293 1.84279 27.356L0.0134573 6.42665C-0.0328513 5.89954 0.037522 5.3687 0.219573 4.87186C0.401624 4.37502 0.690884 3.92438 1.06679 3.55198C1.69346 2.92265 2.54812 2.57731 3.43212 2.49865L6.87212 2.19865C6.98425 2.18911 7.09695 2.20823 7.19967 2.2542C7.30238 2.30018 7.39173 2.3715 7.45931 2.46148C7.52689 2.55146 7.57049 2.65714 7.58603 2.76859C7.60156 2.88004 7.58853 2.99362 7.54813 3.09865C7.36977 3.57446 7.25717 4.07239 7.21346 4.57865L5.35612 25.8C5.28983 26.539 5.37083 27.2837 5.59444 27.9912C5.81805 28.6986 6.17983 29.3547 6.65879 29.9213C6.65879 29.9213 7.27079 30.4066 6.62412 30.568V30.5666ZM17.9895 8.79865C18.0263 9.10896 18.0005 9.42353 17.9135 9.72367C17.8265 10.0238 17.6801 10.3034 17.4829 10.5459C17.2858 10.7884 17.042 10.9888 16.7659 11.1352C16.4898 11.2817 16.1872 11.3712 15.8759 11.3984C15.5645 11.4257 15.2509 11.3901 14.9536 11.2938C14.6563 11.1976 14.3814 11.0426 14.1451 10.838C13.9089 10.6335 13.7161 10.3835 13.5783 10.1031C13.4405 9.82261 13.3604 9.51732 13.3428 9.20531C13.3087 8.59995 13.5115 8.00507 13.9084 7.54668C14.3053 7.08829 14.865 6.80238 15.469 6.74952C16.073 6.69666 16.6739 6.88099 17.1443 7.26348C17.6148 7.64596 17.9179 8.19656 17.9895 8.79865ZM25.7895 12.8133C25.6992 12.7057 25.5884 12.6171 25.4637 12.5525C25.3389 12.488 25.2026 12.4488 25.0627 12.4373C24.9227 12.4258 24.7818 12.4421 24.6482 12.4854C24.5145 12.5286 24.3908 12.5979 24.2841 12.6893L19.3068 16.9493C19.1613 17.0741 19.0709 17.2513 19.0555 17.4423C19.04 17.6333 19.1006 17.8228 19.2241 17.9693L20.3401 19.2933C20.4283 19.3932 20.4957 19.5098 20.5383 19.6361C20.5808 19.7624 20.5976 19.896 20.5878 20.0289C20.578 20.1618 20.5417 20.2915 20.4811 20.4102C20.4204 20.5289 20.3367 20.6342 20.2347 20.7201C20.1328 20.806 20.0147 20.8706 19.8874 20.9102C19.7601 20.9497 19.6262 20.9634 19.4935 20.9505C19.3609 20.9376 19.2321 20.8983 19.1149 20.8349C18.9976 20.7715 18.8942 20.6853 18.8108 20.5813L15.4748 16.6066C15.2988 16.3968 15.0485 16.263 14.7763 16.2332C14.504 16.2034 14.2307 16.2798 14.0135 16.4466L9.33346 20L8.66679 25.6666C8.58679 26.5653 9.10145 28.5866 10.0001 28.6666L25.8881 30.2213C26.3215 30.256 27.2215 30.1693 27.5548 29.888C27.8908 29.608 28.7415 28.7653 28.7775 28.3333L29.8881 17.5546L25.7908 12.812L25.7895 12.8133Z" fill="currentcolor" />
                                    <path d="M26.1467 31.284L10.6747 29.9307C9.70179 29.8432 8.80317 29.374 8.17546 28.6256C7.54775 27.8772 7.24208 26.9106 7.32534 25.9373L9.17333 4.78666C9.26141 3.81401 9.73116 2.91584 10.4798 2.28866C11.2284 1.66147 12.195 1.35633 13.168 1.43999L28.6387 2.79333C29.6115 2.88043 30.5103 3.34936 31.1382 4.09751C31.7662 4.84566 32.0722 5.81209 31.9893 6.78533L30.1387 27.9347C30.0516 28.9075 29.5826 29.8063 28.8345 30.4342C28.0863 31.0622 27.1199 31.3682 26.1467 31.2853V31.284ZM26.32 29.292L26.4293 29.2973C26.8568 29.3048 27.2712 29.1504 27.5895 28.865C27.9078 28.5796 28.1064 28.1844 28.1453 27.7587L29.996 6.60933C30.0331 6.16459 29.8931 5.7232 29.6064 5.38113C29.3198 5.03907 28.9097 4.82399 28.4653 4.78266L12.9933 3.43066C12.5482 3.39363 12.1064 3.534 11.7643 3.8212C11.4221 4.10839 11.2073 4.51915 11.1667 4.96399L9.31734 26.1107C9.28029 26.5556 9.42049 26.9972 9.7074 27.3393C9.99432 27.6814 10.4047 27.8963 10.8493 27.9373L26.32 29.292Z" fill="currentcolor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_129_553">
                                        <rect width="32" height="32" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <span className="mt-0.5 ml-0.5 md:ml-2">Photos/Videos</span>
                        </div>

                        {/* emojis */}
                        <div className="flex text-blue-1 hover:text-darkerblue-1 dark:text-darkerblue-1 dark:hover:text-blue4-4 cursor-pointer">
                            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.38 18C23.0333 18 23.5013 18.6347 23.3293 19.276C22.4987 22.3747 19.5467 24.6667 16.032 24.6667C12.5173 24.6667 9.56535 22.3747 8.73468 19.276C8.56135 18.636 9.03068 18 9.68401 18H22.38Z" fill="#1512BC" />
                                <path d="M31.3653 16C31.3653 24.468 24.5 31.3333 16.032 31.3333C7.56398 31.3333 0.698647 24.468 0.698647 16C0.698647 7.53201 7.56398 0.666672 16.032 0.666672C24.5 0.666672 31.3653 7.53201 31.3653 16ZM28.6986 16C28.6986 12.6406 27.3641 9.41878 24.9887 7.04332C22.6132 4.66786 19.3914 3.33334 16.032 3.33334C12.6726 3.33334 9.45076 4.66786 7.07529 7.04332C4.69983 9.41878 3.36531 12.6406 3.36531 16C3.36531 19.3594 4.69983 22.5812 7.07529 24.9567C9.45076 27.3322 12.6726 28.6667 16.032 28.6667C19.3914 28.6667 22.6132 27.3322 24.9887 24.9567C27.3641 22.5812 28.6986 19.3594 28.6986 16Z" fill="currentcolor" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.032 12C12.032 13.1053 11.2853 14 10.3653 14C9.44531 14 8.69865 13.1053 8.69865 12C8.69865 10.8947 9.44531 10 10.3653 10C11.2853 10 12.032 10.8947 12.032 12ZM23.3653 12C23.3653 13.1053 22.6186 14 21.6986 14C20.7786 14 20.032 13.1053 20.032 12C20.032 10.8947 20.7786 10 21.6986 10C22.6186 10 23.3653 10.8947 23.3653 12ZM22.38 18H9.68398C9.03064 18 8.56265 18.6347 8.73465 19.276C9.56531 22.3747 12.5173 24.6667 16.032 24.6667C19.5466 24.6667 22.4986 22.3747 23.3293 19.276C23.5026 18.636 23.0333 18 22.38 18ZM19.4933 20.6667C18.604 21.4987 17.3706 22 16.032 22C14.7511 22.0092 13.5143 21.5328 12.5706 20.6667H19.4933Z" fill="currentcolor"/>
                            </svg>

                            <span className="mt-0.5 ml-0.5 md:ml-2">Emojis</span>
                        </div>

                        {/* Add Post */}
                        <div className="block">
                            <div onClick={() => toggleLike()}
                                className={
                                    like
                                        ? "flex cursor-pointer text-blue-1 hover:text-darkerblue-1 dark:text-darkerblue-1 dark:hover:text-blue4-4 "
                                        : "flex cursor-pointer text-darkerblue-1 dark:text-blue4-4 "
                                }>
                                <svg className="mt-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.6 13.6H22.4C22.8243 13.6 23.2313 13.4314 23.5314 13.1314C23.8314 12.8313 24 12.4243 24 12C24 11.5756 23.8314 11.1687 23.5314 10.8686C23.2313 10.5686 22.8243 10.4 22.4 10.4H1.6C1.17565 10.4 0.768686 10.5686 0.468628 10.8686C0.16857 11.1687 0 11.5756 0 12C0 12.4243 0.16857 12.8313 0.468628 13.1314C0.768686 13.4314 1.17565 13.6 1.6 13.6Z" fill="currentcolor" />
                                    <path d="M13.6 22.4V1.6C13.6 1.17565 13.4315 0.768686 13.1314 0.468628C12.8313 0.16857 12.4244 0 12 0C11.5757 0 11.1687 0.16857 10.8687 0.468628C10.5686 0.768686 10.4 1.17565 10.4 1.6V22.4C10.4 22.8243 10.5686 23.2313 10.8687 23.5314C11.1687 23.8314 11.5757 24 12 24C12.4244 24 12.8313 23.8314 13.1314 23.5314C13.4315 23.2313 13.6 22.8243 13.6 22.4Z" fill="currentcolor" />
                                </svg>

                                <span className="mt-0.5 ml-0.5 md:ml-2">Add Post</span>
                            </div>

                            {/* dropdown list */}
                            <ul className={
                                like
                                    ? "hidden dropdown-menu absolute text-bluer-1 dark:text-grey2-2 pt-1"
                                    : "dropdown-menu absolute text-bluer-1 dark:text-grey2-2 pt-1"
                            }>
                                <li className="">
                                    <a
                                        className="rounded-t bg-darkblue-1 dark:bg-blue4-4 hover:bg-darkerpurple-1 dark:hover:bg-blue3-3 block whitespace-no-wrap h-9 text-sm font-semibold py-2 pl-4 pr-8"
                                        href="#"
                                    >
                                        Anonymously
                                    </a>
                                </li>
                                <li className="">
                                    <a
                                        className="bg-darkblue-1 dark:bg-blue4-4 hover:bg-darkerpurple-1 dark:hover:bg-blue3-3 dark:hover:bg-gray-400 block whitespace-no-wrap h-9 text-sm font-semibold py-2 pl-4 pr-8"
                                        href="#"
                                    >
                                        Public
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* post cards */}
                <div className="w-full bg-white dark:bg-black1-1 my-8 px-4 md:px-6 rounded-xl">

                    {/* dp, name, upload time */}
                    <div className="flex mb-4 pt-8 pb-3">

                        {/* dp */}
                        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>

                        <div className="block ml-4">
                            <div>
                                {/* name */}
                                <span className="text-darkerblack-1 dark:text-grey2-2 font-bold">Anonymous</span>
                                <span className="text-darkergrey-1 dark:text-grey3-3 ml-2">Anonymous</span>
                            </div>
                            {/* upload time */}
                            <span className="text-sm text-black dark:text-grey2-2">10 mins</span>
                        </div>

                    </div>

                    {/* posted content */}
                    <div className="text-md text-darkerblack-1 dark:text-grey2-2">
                        <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>

                    {/* like, comment */}
                    <div className="flex space-x-16 py-5">

                        {/* like button */}
                        <div className="flex text-black hover:text-blue-1 dark:text-grey2-2 dark:hover:text-darkerblue-1">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.125 1.25C18.6448 1.25 15 4.89488 15 9.375C15 13.8551 18.6448 17.5 23.125 17.5C27.6052 17.5 31.25 13.8551 31.25 9.375C31.25 4.89488 27.6052 1.25 23.125 1.25ZM23.125 2.5C26.9159 2.5 30 5.58413 30 9.375C30 13.1659 26.9159 16.25 23.125 16.25C19.3341 16.25 16.25 13.1659 16.25 9.375C16.25 5.58413 19.3341 2.5 23.125 2.5ZM22.4998 5.62207C21.1619 5.62001 19.9772 6.71136 20.0001 8.13501C20.0347 10.2746 22.7733 12.9159 23.0854 13.2101C23.332 13.4425 23.7188 13.436 23.9575 13.1957C24.2562 12.8949 26.875 10.1978 26.875 8.125C26.875 6.35812 25.0798 5.14305 23.4375 5.80762C23.1254 5.68132 22.8085 5.62255 22.4998 5.62207ZM22.4745 6.87317C22.6908 6.86843 22.9141 6.92067 23.1244 7.04236C23.3181 7.15442 23.5569 7.15442 23.7506 7.04236C23.9399 6.93286 24.1558 6.87488 24.375 6.87488C25.0643 6.87488 25.625 7.43563 25.625 8.12488C25.625 9.231 24.3371 10.9142 23.4991 11.8557C22.6233 10.9328 21.2684 9.26431 21.2499 8.11487C21.2385 7.41413 21.8254 6.88738 22.4745 6.87317ZM10.0735 10.0894C7.46855 10.0894 5.34924 12.2087 5.34924 14.8136C5.34924 16.2439 5.98908 17.5267 6.99646 18.3938C3.7454 18.8984 1.25 21.6978 1.25 25.0894V30.625C1.25 30.9701 1.52981 31.25 1.875 31.25H18.2721C18.6172 31.25 18.875 30.9701 18.875 30.625V25.0894C18.875 21.698 16.398 18.8987 13.1505 18.3939C14.158 17.5269 14.7977 16.244 14.7977 14.8136C14.7977 12.2087 12.6784 10.0894 10.0735 10.0894ZM10.0735 11.3394C11.9892 11.3394 13.5477 12.8979 13.5477 14.8136C13.5477 16.7293 11.9892 18.2878 10.0735 18.2878C8.1578 18.2878 6.59924 16.7293 6.59924 14.8136C6.59924 12.8979 8.1578 11.3394 10.0735 11.3394ZM8.05139 19.5625H12.0956C15.1567 19.5625 17.625 22.0282 17.625 25.0894V30H2.5V25.0894C2.5 22.0282 4.99033 19.5625 8.05139 19.5625Z" fill="currentcolor" />
                            </svg>
                            <span className="mt-2 ml-2">Like</span>
                        </div>

                        {/* comment button */}
                        <div className="flex text-black hover:text-blue-1 dark:text-grey2-2 dark:hover:text-darkerblue-1">
                            <svg className="mt-1.5" width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 2.25C8.40075 2.25 2.25 8.39975 2.25 16C2.25 19.7496 3.77489 23.3142 6.46033 25.9016L2.521 28.61C2.29537 28.765 2.19689 29.049 2.27808 29.3104C2.35933 29.5719 2.60125 29.75 2.875 29.75H16C23.5992 29.75 29.75 23.6003 29.75 16C29.75 8.40081 23.6003 2.25 16 2.25ZM16 3.5C22.8925 3.5 28.5 9.1075 28.5 16C28.5 22.8925 22.8925 28.5 16 28.5H4.88733L7.81848 26.4849C8.15648 26.2526 8.18253 25.7622 7.87109 25.4954C5.09328 23.1148 3.5 19.6539 3.5 16C3.5 9.1075 9.1075 3.5 16 3.5ZM11.236 14.3163C10.3076 14.3163 9.55237 15.0716 9.55237 16C9.55237 16.9284 10.3076 17.6836 11.236 17.6836C12.1643 17.6836 12.9197 16.9283 12.9197 16C12.9197 15.0716 12.1643 14.3163 11.236 14.3163ZM16 14.3163C15.0716 14.3163 14.3163 15.0716 14.3163 16C14.3163 16.9284 15.0716 17.6836 16 17.6836C16.9283 17.6836 17.6836 16.9283 17.6836 16C17.6837 15.0716 16.9284 14.3163 16 14.3163ZM20.764 14.3163C19.8357 14.3163 19.0803 15.0716 19.0803 16C19.0803 16.9284 19.8357 17.6836 20.764 17.6836C21.6924 17.6836 22.4476 16.9283 22.4476 16C22.4476 15.0716 21.6924 14.3163 20.764 14.3163ZM11.236 15.5663C11.475 15.5663 11.6697 15.7609 11.6697 16C11.6697 16.2391 11.4751 16.4336 11.236 16.4336C10.9968 16.4336 10.8024 16.2391 10.8024 16C10.8024 15.7609 10.9969 15.5663 11.236 15.5663ZM16 15.5663C16.2391 15.5663 16.4336 15.7609 16.4336 16C16.4336 16.2391 16.2391 16.4336 16 16.4336C15.7608 16.4336 15.5663 16.2391 15.5663 16C15.5663 15.7609 15.7609 15.5663 16 15.5663ZM20.764 15.5663C21.0031 15.5663 21.1976 15.7609 21.1976 16C21.1976 16.2391 21.0031 16.4336 20.764 16.4336C20.5249 16.4336 20.3303 16.2391 20.3303 16C20.3303 15.7609 20.5249 15.5663 20.764 15.5663Z" fill="currentcolor" />
                            </svg>



                            <span className="mt-2.5 ml-2">Comment</span>
                        </div>

                    </div>

                    {/* line */}
                    <div className="border-b-2 border-purple-1"></div>

                    {/* comment textbar */}
                    <div className="flex py-6">
                        <div className="w-12 h-11 bg-gray-200 rounded-full"></div>
                        <input
                            className="rounded-3xl bg-darkblue-1 dark:bg-black2-2 border-darkblue-1 dark:border-grey3-3 ml-2 md:ml-5 w-full h-9 md:h-11 pl-6 text-sm placeholder-darkerblue-1 dark:placeholder-blue3-3"
                            type="text" placeholder="Please 'Enter' to post....."></input>
                    </div>

                </div>

                <div className="w-full bg-white dark:bg-black1-1 my-8 px-4 md:px-6 rounded-xl">

                    {/* dp, name, upload time */}
                    <div className="flex mb-4 pt-8 pb-3">

                        {/* dp */}
                        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>

                        <div className="block ml-4">
                            <div>
                                {/* name */}
                                <span className="text-darkerblack-1 dark:text-grey2-2 font-bold">Anonymous</span>
                                <span className="text-darkergrey-1 dark:text-grey3-3 ml-2">Anonymous</span>
                            </div>
                            {/* upload time */}
                            <span className="text-sm text-black dark:text-grey2-2">10 mins</span>
                        </div>

                    </div>

                    {/* posted content */}
                    <div className="text-md text-darkerblack-1 dark:text-grey2-2">
                        <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>

                    {/* like, comment */}
                    <div className="flex space-x-16 py-5">

                        {/* like button */}
                        <div className="flex text-black hover:text-blue-1 dark:text-grey2-2 dark:hover:text-darkerblue-1">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.125 1.25C18.6448 1.25 15 4.89488 15 9.375C15 13.8551 18.6448 17.5 23.125 17.5C27.6052 17.5 31.25 13.8551 31.25 9.375C31.25 4.89488 27.6052 1.25 23.125 1.25ZM23.125 2.5C26.9159 2.5 30 5.58413 30 9.375C30 13.1659 26.9159 16.25 23.125 16.25C19.3341 16.25 16.25 13.1659 16.25 9.375C16.25 5.58413 19.3341 2.5 23.125 2.5ZM22.4998 5.62207C21.1619 5.62001 19.9772 6.71136 20.0001 8.13501C20.0347 10.2746 22.7733 12.9159 23.0854 13.2101C23.332 13.4425 23.7188 13.436 23.9575 13.1957C24.2562 12.8949 26.875 10.1978 26.875 8.125C26.875 6.35812 25.0798 5.14305 23.4375 5.80762C23.1254 5.68132 22.8085 5.62255 22.4998 5.62207ZM22.4745 6.87317C22.6908 6.86843 22.9141 6.92067 23.1244 7.04236C23.3181 7.15442 23.5569 7.15442 23.7506 7.04236C23.9399 6.93286 24.1558 6.87488 24.375 6.87488C25.0643 6.87488 25.625 7.43563 25.625 8.12488C25.625 9.231 24.3371 10.9142 23.4991 11.8557C22.6233 10.9328 21.2684 9.26431 21.2499 8.11487C21.2385 7.41413 21.8254 6.88738 22.4745 6.87317ZM10.0735 10.0894C7.46855 10.0894 5.34924 12.2087 5.34924 14.8136C5.34924 16.2439 5.98908 17.5267 6.99646 18.3938C3.7454 18.8984 1.25 21.6978 1.25 25.0894V30.625C1.25 30.9701 1.52981 31.25 1.875 31.25H18.2721C18.6172 31.25 18.875 30.9701 18.875 30.625V25.0894C18.875 21.698 16.398 18.8987 13.1505 18.3939C14.158 17.5269 14.7977 16.244 14.7977 14.8136C14.7977 12.2087 12.6784 10.0894 10.0735 10.0894ZM10.0735 11.3394C11.9892 11.3394 13.5477 12.8979 13.5477 14.8136C13.5477 16.7293 11.9892 18.2878 10.0735 18.2878C8.1578 18.2878 6.59924 16.7293 6.59924 14.8136C6.59924 12.8979 8.1578 11.3394 10.0735 11.3394ZM8.05139 19.5625H12.0956C15.1567 19.5625 17.625 22.0282 17.625 25.0894V30H2.5V25.0894C2.5 22.0282 4.99033 19.5625 8.05139 19.5625Z" fill="currentcolor" />
                            </svg>
                            <span className="mt-2 ml-2">Like</span>
                        </div>

                        {/* comment button */}
                        <div className="flex text-black hover:text-blue-1 dark:text-grey2-2 dark:hover:text-darkerblue-1">
                            <svg className="mt-1.5" width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 2.25C8.40075 2.25 2.25 8.39975 2.25 16C2.25 19.7496 3.77489 23.3142 6.46033 25.9016L2.521 28.61C2.29537 28.765 2.19689 29.049 2.27808 29.3104C2.35933 29.5719 2.60125 29.75 2.875 29.75H16C23.5992 29.75 29.75 23.6003 29.75 16C29.75 8.40081 23.6003 2.25 16 2.25ZM16 3.5C22.8925 3.5 28.5 9.1075 28.5 16C28.5 22.8925 22.8925 28.5 16 28.5H4.88733L7.81848 26.4849C8.15648 26.2526 8.18253 25.7622 7.87109 25.4954C5.09328 23.1148 3.5 19.6539 3.5 16C3.5 9.1075 9.1075 3.5 16 3.5ZM11.236 14.3163C10.3076 14.3163 9.55237 15.0716 9.55237 16C9.55237 16.9284 10.3076 17.6836 11.236 17.6836C12.1643 17.6836 12.9197 16.9283 12.9197 16C12.9197 15.0716 12.1643 14.3163 11.236 14.3163ZM16 14.3163C15.0716 14.3163 14.3163 15.0716 14.3163 16C14.3163 16.9284 15.0716 17.6836 16 17.6836C16.9283 17.6836 17.6836 16.9283 17.6836 16C17.6837 15.0716 16.9284 14.3163 16 14.3163ZM20.764 14.3163C19.8357 14.3163 19.0803 15.0716 19.0803 16C19.0803 16.9284 19.8357 17.6836 20.764 17.6836C21.6924 17.6836 22.4476 16.9283 22.4476 16C22.4476 15.0716 21.6924 14.3163 20.764 14.3163ZM11.236 15.5663C11.475 15.5663 11.6697 15.7609 11.6697 16C11.6697 16.2391 11.4751 16.4336 11.236 16.4336C10.9968 16.4336 10.8024 16.2391 10.8024 16C10.8024 15.7609 10.9969 15.5663 11.236 15.5663ZM16 15.5663C16.2391 15.5663 16.4336 15.7609 16.4336 16C16.4336 16.2391 16.2391 16.4336 16 16.4336C15.7608 16.4336 15.5663 16.2391 15.5663 16C15.5663 15.7609 15.7609 15.5663 16 15.5663ZM20.764 15.5663C21.0031 15.5663 21.1976 15.7609 21.1976 16C21.1976 16.2391 21.0031 16.4336 20.764 16.4336C20.5249 16.4336 20.3303 16.2391 20.3303 16C20.3303 15.7609 20.5249 15.5663 20.764 15.5663Z" fill="currentcolor" />
                            </svg>



                            <span className="mt-2.5 ml-2">Comment</span>
                        </div>

                    </div>

                    {/* line */}
                    <div className="border-b-2 border-purple-1"></div>

                    {/* comment textbar */}
                    <div className="flex py-6">
                        <div className="w-12 h-11 bg-gray-200 rounded-full"></div>
                        <input
                            className="rounded-3xl bg-darkblue-1 dark:bg-black2-2 border-darkblue-1 dark:border-grey3-3 ml-2 md:ml-5 w-full h-9 md:h-11 pl-6 text-sm placeholder-darkerblue-1 dark:placeholder-blue3-3"
                            type="text" placeholder="Please 'Enter' to post....."></input>
                    </div>

                </div>
            </div>

        </Layout>
    )
}
