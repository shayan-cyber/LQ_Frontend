import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie"

export default function Comments({ toggle, comments, post_id }) {
  const [cookie, setCookie] = useCookies(["token"])
  const [postcomments, setPostComments] = useState([...comments])
  const [text, setText] = useState("")

  const addComment = (data) =>{
    axios.post("http://127.0.0.1:8000/api/socialmedia/add-comment/", data,
    
    {
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Token ${cookie['token']}` 
      }
    }
    
    
    )
    .catch(e=>console.log(e))
    .then((response) =>{
      if(response){
        if(response.status ===201){
          
          postcomments.unshift(response.data)
          console.log(postcomments);
          console.log(comments);
          setPostComments([...postcomments])
          setText("")

        }
      }
      console.log(response);
    })

  }




  return (
    <>
      <div className={toggle ? "container  p-3 px-4 mt-3 " : "hidden container p-3 px-4 mt-3"}>

        <div id="comment-post-form" className="container w-full">

          <textarea value={text} className="w-full rounded-md" placeholder="Comment here..." onChange={(e)=>{setText(e.target.value)}}>
            
          </textarea>

          <button className="w-full p-2 rounded bg-indigo-500 text-white hover:bg-indigo-800" onClick={()=>{addComment({post:post_id,body:text})}}>Send</button>
        </div>

        <div className="w-full max-h-1/2 overflow-y-scroll mt-6" >

        
        {postcomments.map((comment) => {
          return (
            <div key={comment.id} className="border-b border-gray-300 p-3 ">
              <div className="flex justify-start ">
                <img
                  className="w-8 h-8 rounded-full border-2 border-indigo-400 mr-2"
                  src="https://img.icons8.com/color/48/000000/businesswoman.png"
                />

                <h1 className="font-medium text-black text-opacity-60 text-xs self-center">
                  {comment.prof_username}
                </h1>
              </div>

              <div className="p-3">
                <p className="font-medium text-black text-opacity-60 text-xs">
                  {comment.body}
                </p>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </>
  );
}
