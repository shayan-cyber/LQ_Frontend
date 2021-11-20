import Login from "../components/Login";
import Signup from "../components/Signup";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Authentication() {

  const [token, setToken] = useCookies(["token"]);


  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("")

  const handleLogin = (data) => {
    axios
      .post("http://127.0.0.1:8000/api-token-auth/", data)
      .catch((err) => {
        console.log(err);
        setError("Invalid credentials !!")
        setSuccess("")
    

      })
      .then((response) => {
        console.log(response);

        if(response){

            if(response.status === 200){
                setError("")
                setSuccess("Login successful")
                setToken("token", response.data.token)
            }
        }
      

        
        
        
      });
  };

  const handleSignup = (data) => {

    console.log(data);
    for(const i in data){
      if(!data[i]){
        setError(`Please enter the ${i}`);
        return
      }
    }





    axios
      .post("http://127.0.0.1:8000/api/auth/register-user/", data)
      .catch((err) =>{
        console.log(err);
      })
      .then((response) => {
        console.log(response);
        setError("")
      });
  };


 


  return (
    <>
      <div className="container px-2">
        <div
          className={
            error
              ? "bg-red-300 px-4 text-red-800 py-3 w-full  rounded-md mb-2"
              : "hidden bg-red-300 px-4 text-red-800 py-3 w-full  rounded-md mb-2"
          }
        >

         <i className="fas fa-exclamation-triangle mx-2"></i> {error}
        </div>

        <div
          className={
            success
              ? "bg-green-200 px-4 text-green-800 py-3 w-full  rounded-md mb-2"
              : "hidden bg-green-200 px-4 text-green-800 py-3 w-full  rounded-md mb-2"
          }
        >

         <i className="far fa-check-circle mx-2"></i> {success}
        </div>




        {toggle ? (
          <Signup handleSignup={handleSignup} />
        ) : (
          <Login handleLogin={handleLogin} />
        )}

        <div className="flex justify-center mt-4">
          {toggle ? (
            <div>
              <h1>Already registered ?</h1>
              <div className="flex justify-center">
                <button
                  className="justify-self-center text-indigo-400 "
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h1>Don't have an account yet?</h1>
              <div className="flex justify-center">
                <button
                  className="justify-self-center text-indigo-400 "
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  Signup
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
