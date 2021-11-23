import axios from "axios";
import { useCookies } from "react-cookie"
import Card from '../../components/Card'
import Addpost from '../../components/Addpost'
import Head from 'next/head'
import {useState} from 'react'


export default function Feed({ posts }) {
  const [cookie, setCookie] = useCookies(["token"])
  const [allposts, setAllposts] = useState([...posts])

  const addPost = (data)=>{
    console.log(data);
    axios.post("http://127.0.0.1:8000/api/socialmedia/add-post/", data,{
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Token ${cookie['token']}` 
      }
    }).catch(err =>console.log(err))
    .then((response)=>{

      if(response){
        if(response.status === 201){
          allposts.unshift(response.data)
          setAllposts([...allposts]);
        }
      }

    })
  }

  return (
    <>
      <Head>
        <title>Feed</title>
      </Head>
      <div className="container px-2 bg-white dark:bg-gray-800">

        <Addpost addPost={addPost}/>

        <div className="container">
        {allposts.map((post) => {
          return (
            <Card key={post.id} post={post} />
          );
        })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get(
    "http://127.0.0.1:8000/api/socialmedia/all-posts/"
  );
  const posts = await response.data;

  return {
    props: { posts }, // will be passed to the page component as props
  };
}
