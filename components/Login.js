import {useState} from 'react'


export default function Login({handleLogin}){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")



    return(

        <>

            <div className="container flex justify-center px-5">


                <div className="card w-full md:w-1/2 px-5 shadow-md rounded-md py-6 dark:bg-gray-900">

                    <h1 className="text-center text-2xl font-medium text-black text-opacity-70 dark:text-white">Login</h1>


                    <div className="form-control my-4">
                        <label className="block text-md font-medium text-indigo-500 mb-3">Username</label>
                        <input className="block rounded border-gray-300 w-full" type="text" value={username} onChange={(e) =>{setUsername(e.target.value)}}></input>

                    </div>
                    <div className="form-control my-4">
                        <label className="block text-md font-medium text-indigo-500 mb-3">Password</label>
                        <input className="block rounded border-gray-300 w-full" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>

                    </div>


                    <div className="w-full mt-5">

                        <button className="w-full bg-indigo-500 p-3 rounded-md text-white transition duration-500 ease-in-out transform hover:bg-indigo-700" onClick={()=>{
                            handleLogin({username:username,password:password}) 
                            setPassword("")
                            setUsername("")

                            }}>Login</button>

                    </div>
                    

                    


                </div>


            </div>

        </>

    )


}