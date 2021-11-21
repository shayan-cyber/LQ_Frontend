import {useState, useEffect} from 'react'
import axios from "axios";
import { useCookies } from "react-cookie"


export default function Card({ post }) {
  const [cookie, setCookie] = useCookies(["token"])
  const [auth_token, setAuthToken] = useState("")

  useEffect(() => {

    setAuthToken(cookie['token'])
    
  })

  
  const [singlepost, setSinglePost] = useState(post)
  const [happiescount, sethappiescount] = useState(singlepost.happies_count)
  const [happyprofs, setHappyProfs] = useState(singlepost.happy_profs)
 

  const addhappy = (data) => {
   

    axios.post("http://127.0.0.1:8000/api/socialmedia/add-happy/",
    
    data,
    {

      headers:{
        "Content-Type": "application/json",
        "Authorization": `Token ${cookie['token']}` 
      },
      

    }
    
    
    ).catch(e=>console.log(e))
    .then(
      
      
      (response) =>{
        if(response.status === 201){

          sethappiescount(happiescount +1)
          
          setHappyProfs(happyprofs.concat(auth_token))
        
        }
        else if(response.status === 202){

          sethappiescount(happiescount -1)
          var filtered_arr = happyprofs.filter((item) => {
            if(item !== auth_token){
              return item
            }
          })
          setHappyProfs(filtered_arr)


        }
      }
      
      
      )


  }
    
  return (
    <div className="container flex justify-center my-2">
      <div className="card">
        <div className="flex justify-start ">
          <img
            className="w-8 h-8 rounded-full border-2 border-indigo-300 mr-2"
            src="https://img.icons8.com/color/48/000000/businesswoman.png"
          />

          <h1 className="font-medium text-black text-opacity-60 text-xs self-center">
            {singlepost.prof_username}
          </h1>
        </div>

        <p className="text-black text-opacity-80 font-medium text-sm mt-4 mx-2">
          {singlepost.body}
        </p>

        <div
          id="response_buttons"
          className="mt-4 p-2 flex justify-start rounded-md "
        >
          <div className="mr-4">
            <button
              className={
                ( happyprofs.indexOf(auth_token) !== -1  )?(
                "text-sm rounded-md hover:bg-gray-100 hover:text-indigo-400 p-2 text-red-500 font-medium text-opacity-90"
                ):(
                  "text-sm rounded-md hover:bg-gray-100 hover:text-indigo-400 p-2 text-gray-500 font-medium text-opacity-90"
                )

              }
              onClick={() => {
                addhappy({ post: singlepost.id });
              }}
            >
              {happiescount}{" "}
              <i className="far fa-smile-beam  font-medium text-opacity-75 "></i>
              
            </button>
          </div>
          <div className="mr-4">
            <button className="text-sm rounded-md hover:bg-gray-100 hover:text-red-500 p-2 text-gray-500 font-medium text-opacity-90">
              0{" "}
              <i className="fal fa-comment-alt-lines  font-medium text-opacity-75 "></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
