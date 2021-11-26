import axios from "axios";
import Layout from "../../components/Job/Layout";

export default function Job({ job }) {
  return (
    <>
      <Layout>
        <div className="container px-5">
          <h1 className="text-2xl text-black text-opacity-70">{job.title}</h1>

          <p className="text-sm text-black text-opacity-70 font-normal my-4">{job.description}</p>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  // context.params.id
  const response = await axios.get(
    `http://127.0.0.1:8000/api/job-portal/job/${context.params.id}/`
  );

  const job = await response.data;

  return {
    props: { job }, // will be passed to the page component as props
  };
}
