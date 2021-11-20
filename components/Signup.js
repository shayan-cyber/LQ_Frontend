import {useState} from 'react'



export default function Signup({ handleSignup }) {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [pride_community, setPrideCommunity] = useState(false);

  




  return (
    <>
      <div className="container flex justify-center px-5">
        <div className="card w-full md:w-1/2 px-5 shadow-md rounded-md py-6 dark:bg-gray-900">
          <h1 className="text-center text-2xl font-medium text-black text-opacity-70 dark:text-white">
            Signup
          </h1>

          <div className="form-control my-4">
            <label className="block text-md font-medium text-indigo-500 mb-3">
              Full name
            </label>
            <input
              className="block rounded border-gray-300 w-full"
              type="text" value={fullname} onChange={(e)=>{setFullname(e.target.value)}}
            ></input>
          </div>
          <div className="form-control my-4">
            <label className="block text-md font-medium text-indigo-500 mb-3">
              Email
            </label>
            <input
              className="block rounded border-gray-300 w-full"
              type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}
            ></input>
          </div>

          <div className="form-control my-4">
            <label className="block text-md font-medium text-indigo-500 mb-3">
              Username
            </label>
            <input
              className="block rounded border-gray-300 w-full"
              type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}
            ></input>
          </div>
          <div className="form-control my-4">
            <label className="block text-md font-medium text-indigo-500 mb-3">
              Password
            </label>
            <input
              className="block rounded border-gray-300 w-full"
              type="password"
              value={password} onChange={(e)=>{setPassword(e.target.value)}}
            ></input>
          </div>
          <div className="form-control my-4">
            <label className="block text-md font-medium text-indigo-500 mb-3">
              Confirm password
            </label>
            <input
              className="block rounded border-gray-300 w-full"
              type="password"
              value={confirmpassword} onChange={(e)=>{setConfirmpassword(e.target.value)}}
            ></input>
          </div>
          <div className="form-control my-4">
            <label className="block text-md font-medium text-indigo-500 mb-3">
              Pride Community
            </label>
            <input
              className="block rounded border-gray-300"
              type="checkbox"
              checked={pride_community} onChange={(e)=>{setPrideCommunity(!pride_community)}}
            ></input>
          </div>

          <div className="w-full mt-5">
            <button className="w-full bg-indigo-500 p-3 rounded-md text-white transition duration-500 ease-in-out transform hover:bg-indigo-700" onClick={()=>{
              handleSignup({fullname:fullname,email:email,username:username,password:password,confirmpassword:confirmpassword, pride_community:pride_community})

              setPassword("")
              setEmail("")
              setUsername("")
              setConfirmpassword("")
              setFullname("")
              setPrideCommunity(false)
            
            }}>
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
