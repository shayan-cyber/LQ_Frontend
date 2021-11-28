import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

export default function ContentCard({ title, description, id, isCat }) {
  return (
    <>
      <div className="relative w-full">
        <div className="absolute z-0 bg-gradient-to-r from-green-400 to-blue-500 h-60 my-2 px-1 w-full  rounded-md top-0 transform -skew-y-6"></div>
        <div className="mt-5 z-10 px-1 w-full  h-56  relative">
          <div className="bg-gray-100 dark:bg-gray-800 overflow-hidden h-full rounded-lg shadow-md">
            <div className="items-center p-2 md:p-4">
              <h1 className="text-lg text-gray-900 dark:text-gray-100 font-semibold mb-4">
                {title}
              </h1>

              <p className="text-gray-800 dark:text-gray-300 text-sm">
                {description.length > 200
                  ? description.substring(0, 200) + " . . ."
                  : description}
              </p>
            </div>

            <div className="flex items-center p-2 md:p-4">
              {isCat ? (
                <Link href={`/learning/${id}`}>
                  <a className="flex items-center no-underline hover:underline text-black dark:text-gray-200">
                    <p className="text-sm mr-2">Read More</p>

                    <BsArrowRight />
                  </a>
                </Link>
              ) : (
                <Link href="/">
                  <a className="flex items-center no-underline hover:underline text-black dark:text-gray-200">
                    <p className="text-sm mr-2">Read More</p>

                    <BsArrowRight />
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
