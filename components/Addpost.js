import {useState} from 'react'
export default function Addpost({addPost}){

    const [body, setBody] = useState("")

    return (
        <>
            <div className="container bg-white flex justify-center ">
                <div className="w-full md:w-1/2">
                    <div className="form-control w-full">
                        <label className="w-full" htmlFor="body" >Body</label>
                        <textarea className="w-full rounded-md my-2" type="text" id="body" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                    </div>

                    <button className="w-full p-2 rounded bg-indigo-500 text-white hover:bg-indigo-800" onClick={()=>{
                        addPost({body: body})
                        setBody("")
                        
                        
                        }}>Save</button>
                </div>
                

            </div>
        </>
    )


}