import axios from "axios";
import Link from 'next/link'

export default function JobCard({job}) {
  return (
    <>
      <div className="w-full  rounded-md p-4 bg-gray-100 ">
        <h3 className="text-md mb-1">{job.title}</h3>
        <h5 className="text-sm mb-2">Company : {job.company}</h5>
        <h5 className="text-sm mb-2 text-black text-opacity-80">
          <i className="fas fa-user-tie"></i>
          {"  "} {"  "} Hirer : Name
        </h5>

        <span className="bg-indigo-200 block mb-3 mt-3 text-xs font-medium text-black text-opacity-90 rounded-md p-2 ">
          Salary(CTC) : {job.salary_ctc} LPA
        </span>

        {/* <p className="text-xs mb-4 font-light mt-4">
          {job.description}
        </p> */}


        {job.isOpen?(
            <span className="bg-green-400 p-1 text-xs rounded-md ">Active</span>
        ):(
            <span className="bg-gray-400 p-1 text-xs rounded-md ">Inactive</span>
        )}


        <span className="bg-gray-300 p-1 text-xs rounded-md mx-2">
          {" "}
          Experience: 10-15
        </span>
        <span className="bg-gray-300 p-1 text-xs rounded-md mx-2">
          {" "}
          Age limit : 10-15
        </span>

        <h3 className="text-base text-black text-opacity-75 mt-4">Categories :</h3>
        <div className="block">
          {job.categories.map((cat=>{
            return(
              <span key={cat.id} className="bg-blue-300 p-1 text-xs rounded-md mr-2">{cat.name}</span>
            )
          }))}

        </div>
        

        <Link href ={`/job-portal/${job.id}`} >
        
            <a className="block w-full text-center bg-indigo-500 hover:bg-indigo-600 text-white rounded-md p-1 mt-6 mb-2">Details</a>
        
        </Link>
        
        


      </div>
    </>
  );
}
