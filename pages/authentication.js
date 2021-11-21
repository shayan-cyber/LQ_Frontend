import Login from "../components/Login";
import Signup from "../components/Signup";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import validator from 'validator'

export default function Authentication() {

  const [cookie, setCookie] = useCookies(["token"]);


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
                setCookie("token", response.data.token)
            }
        }
      

        
        
        
      });
  };

  const handleSignup = (data) => {

    console.log(data);
    for(const i in data){
      if(!data[i] && i !== 'pride_community'){
        setError(`Please enter the ${i}`);
        // console.log(i, data[i]);
        return
      }
    }

    if(!validator.isEmail(data.email)){
      setError("Please enter a valid email")
      return
    }

    if(data.password !== data.confirmpassword){
      setError("Passwords do not match !!")
      return
    }

   


    axios
      .post("http://127.0.0.1:8000/api/auth/register-user/", data)
      .catch((err) =>{
        console.log(err);
        setError("Something went wrong")
      })
      .then((response) => {

        if(response){
          if(response.status !== 201){
            setError(response.data.message)
          }
          else if(response.status === 201){
            setSuccess("Sign up successfull")
            setCookie("token", response.data.token)

            setError("")
          }else{
            setError("Something went wrong")
          }
        }
        console.log(response);
        
      });
  };


 


  return (
    <>
      <div className="container px-2 mb-16">
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
