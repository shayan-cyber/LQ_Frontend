import Layout from "../../components/Learning/Layout";
import ContentCard from '../../components/Learning/ContentCard';
import axios from "axios";

export default function Home({catContent}) {
  return (
    <Layout>
      {/* learning info start */}

      <div className="w-full mt-5 md:mt-10 px-8 py-8 min-h-screen bg-white rounded-xl">
        {/* sort and category start */}

        <div className="w-full h-auto bg-gray-100 dark:bg-gray-800 rounded-lg md:flex">
          {/* sort by start */}

          <div className="sm:flex">
            {/* sort by text */}

            <span className="text-base px-6 py-2 text-black dark:text-gray-300">
              SORT BY
            </span>

            {/* dropdown */}

            <div className="dropdown inline-block relative">
              <button className="bg-gray-800 dark:bg-gray-100 text-gray-200 dark:text-gray-900 font-semibold py-2 px-4 rounded inline-flex items-center h-7">
                <span className="mr-1 text-sm text-gray-200 dark:text-gray-900">
                  Dropdown
                </span>
                <svg
                  className="fill-current h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>

              {/* dropdown list items */}
              <ul className="dropdown-menu absolute hidden text-gray-200 dark:text-gray-900 pt-1">
                <li className="">
                  <a
                    className="rounded-t bg-gray-800 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-400 block whitespace-no-wrap h-7 text-sm text-center font-semibold py-1 px-4"
                    href="#"
                  >
                    First item
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-800 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-400 block whitespace-no-wrap h-7 text-sm text-center font-semibold py-1 px-4"
                    href="#"
                  >
                    Second item
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-b bg-gray-800 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-400 block whitespace-no-wrap h-7 text-sm text-center font-semibold py-1 px-4"
                    href="#"
                  >
                    Third item
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* sort by end */}

          {/* category start */}

          <div className="sm:flex">
            {/* category text */}

            <span className="text-base px-4 lg:pl-20 py-2 text-black dark:text-gray-300">
              CATEGORY
            </span>

            {/* dropdown */}

            <div className="dropdown inline-block relative hover:dropdown-menu-block">
              <button className="bg-gray-800 dark:bg-gray-100 text-gray-200 dark:text-gray-900 font-semibold py-2 px-4 rounded inline-flex items-center h-7">
                <span className="mr-1 text-sm text-gray-200 dark:text-gray-900">
                  Dropdown
                </span>
                <svg
                  className="fill-current h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>

              {/* dropdown list items */}

              <ul className="dropdown-menu absolute hidden text-gray-200 dark:text-gray-900 pt-1">
                <li className="">
                  <a
                    className="rounded-t bg-gray-800 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-400 block whitespace-no-wrap h-7 text-sm text-center font-semibold py-1 px-4"
                    href="#"
                  >
                    First item
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-800 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-400 block whitespace-no-wrap h-7 text-sm text-center font-semibold py-1 px-4"
                    href="#"
                  >
                    Second item
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-b bg-gray-800 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-400 block whitespace-no-wrap h-7 text-sm text-center font-semibold py-1 px-4"
                    href="#"
                  >
                    Third item
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* category end */}
        </div>

        {/* sort and category end */}

        {/* learning container start */}

        <div className="my-6">
          <div className="grid grid-cols-3 gap-2 w-full py-4">
            
              {catContent.map(item=><ContentCard key={item.id} title={item.category_name} description={item.category_des} id={item.id} isCat={true}/>)}
              
              
           
          </div>
        </div>

        {/* learning container end */}

        {/* next button start */}

        <div className="text-center">
          <a className="bg-gray-800 text-gray-200 font-semibold py-4 px-4 rounded inline-flex items-center h-7">
            <span className="mr-1 text-lg text-gray-200">Next</span>
            <svg
              className="fill-current h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </a>
        </div>

        {/* next button end */}
      </div>

      {/* learning info end */}
    </Layout>
  );
}

export async function getServerSideProps(){
    const resp = await axios.get("http://127.0.0.1:8000/api/learning/unaware/");
    const catContent = resp.data;

    

    return {

        props:{catContent}

    }

}
