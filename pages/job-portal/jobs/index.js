import React from "react";
import { useState } from "react";
import JobCard from "../../../components/Job/JobCard";
import Layout from "../../../components/Job/Layout";

import axios from "axios";
export default function AllJobs({ jobs }) {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {jobs.map((job) => {
            return <JobCard key={job.id} job={job} />;
          })}
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get(
    "http://127.0.0.1:8000/api/job-portal/all-jobs/"
  );
  const jobs = await response.data;

  return {
    props: { jobs }, // will be passed to the page component as props
  };
}
