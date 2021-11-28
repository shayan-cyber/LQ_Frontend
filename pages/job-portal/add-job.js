import Layout from "../../components/Job/Layout";
import axios from "axios";
import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { useCookies } from "react-cookie"

export default function AddJob({ categories }) {
  const [cookie, setCookie] = useCookies(["token"])


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [isRemote, setRemote] = useState(true);
  const [minex, setMinex] = useState(0);
  const [maxex, setMaxex] = useState(0);
  const [salary, setSalary] = useState(0);
  const [age, setAge] = useState(40);
  const [cats, setCats] = useState([]);

  const options = 
    categories.map(category =>{
      return ({label:category.name, value:category.id})
    })
    
  
 
  const [selected, setSelected] = useState([]);

  const addjob = () => {
    console.log("title: ", title);
    console.log("description: ", description);
    console.log("company: ", company);
    console.log("isRemote: ", isRemote);
    console.log("Minex: ", minex);
    console.log("Maxex: ", maxex);
    console.log("Salary: ", salary);
    console.log("age: ", age);
    console.log("cats: ", selected);

    var cats = selected.map((i)=>{
      return i.value
    })

    axios.post("http://127.0.0.1:8000/api/job-portal/add-job/", {title: title, description: description, company: company, isRemote: isRemote,min_experience:minex, max_experience: maxex, salary_ctc: salary, age_limit: age,category:cats },
    
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

          setTitle("");
          setDescription("");
          setCompany("");
          setRemote(true);
          setMaxex(0);
          setMinex(0);
          setSalary(0);
          setAge(0);
          setSelected([]);
        
          console.log(response.data);

        }
      }
      console.log(response);
    })



    
  };

  return (
    <>
      <Layout>
        <div className="container md:px-5 px-2">
          <div className="form-block mb-5">
            <label className="text-indigo-500 text-lg font-normal text-opacity-100">
              Job Title
            </label>
            <input
              type="text"
              className="w-full mt-2 rounded-md"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </div>

          <div className="form-block ">
            <label className="text-indigo-500 text-lg font-normal text-opacity-100">
              Job Description
            </label>
            <textarea
              className="w-full mt-2 rounded-md"
              rows="5"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <div className="form-block mb-5">
              <label className="text-indigo-500 text-lg font-normal text-opacity-100">
                Company Name
              </label>
              <input
                type="text"
                className="w-full mt-2 rounded-md"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              ></input>
            </div>
            <div className="form-block mb-5">
              <label className="text-indigo-500 text-lg font-normal text-opacity-100">
                Remote
              </label>
              <div className="flex items-center justify-start">
                <input
                  type="checkbox"
                  className="block rounded border-gray-300 mt-2"
                  checked={isRemote}
                  onChange={(e) => setRemote(!isRemote)}
                ></input>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <div className="form-block ">
              <label className="text-indigo-500 text-lg font-normal text-opacity-100">
                Min Experience
              </label>
              <input
                type="number"
                className="w-full mt-2 rounded-md"
                value={minex}
                onChange={(e) => setMinex(e.target.value)}
              ></input>
            </div>
            <div className="form-block ">
              <label className="text-indigo-500 text-lg font-normal text-opacity-100">
                Max Experience
              </label>
              <input
                type="number"
                className="w-full mt-2 rounded-md"
                value={maxex}
                onChange={(e) => setMaxex(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <div className="form-block ">
              <label className="text-indigo-500 text-lg font-normal text-opacity-100">
                Salary (CTC)
              </label>
              <input
                type="number"
                className="w-full mt-2 rounded-md"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              ></input>
            </div>
            <div className="form-block ">
              <label className="text-indigo-500 text-lg font-normal text-opacity-100">
                Age Limit
              </label>
              <input
                type="number"
                className="w-full mt-2 rounded-md"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              ></input>
            </div>
          </div>
          
          <div className="form-block mt-5 block">
            <MultiSelect
              options={options}
              value={selected}
              onChange={setSelected}
              labelledBy="Select"
            />
          </div>
          

          <button
            className="bg-green-400 p-2 w-full rounded-md text-white mt-10"
            onClick={() => addjob()}
          >
            Add
          </button>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  // context.params.id

  const response = await axios.get(
    "http://127.0.0.1:8000/api/job-portal/job-categories/"
  );

  const categories = await response.data;

  return {
    props: { categories }, // will be passed to the page component as props
  };
}
