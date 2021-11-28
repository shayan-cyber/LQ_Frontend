import Layout from "../../../components/Learning/Layout";
import axios from "axios";
import {IoArrowBackCircle} from 'react-icons/io5'
import Link from 'next/link'

export default function Content({content}){

    return (
        <>
            <div>
                <Layout>
                <div className="w-full mt-5 md:mt-10 px-8 py-8 min-h-screen bg-white rounded-xl">
                    <div className="flex justify-start w-full">
                        <Link href="/learning/">
                            <a ><IoArrowBackCircle/></a>
                        </Link>
                    </div>

                    <h1 className="text-4xl text-black text-opacity-80 text-center" >{content.title}</h1>
                    <div className="rounded-md bg-gray-200 p-4 my-4">

                        <p>
                            {content.description}
                        </p>

                    </div>

                </div>
                

                </Layout>
                
            </div>
        </>
    )
}


export async function getServerSideProps(context){
    const resp = await axios.get(`http://127.0.0.1:8000/api/learning/content/${context.params.id}/`);
    
    const content = await resp.data

    return {
        props: {content}
    }
}