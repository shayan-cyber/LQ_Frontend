import axios from "axios";
import { useCookies } from "react-cookie"
import Card from '../../components/Card'


export default function Feed({ posts }) {
  const [cookie, setCookie] = useCookies(["token"])
  

  return (
    <>
      <div className="container px-2">
        {posts.map((post) => {
          return (
            <Card key={post.id} post={post} />
          );
        })}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get(
    "http://127.0.0.1:8000/api/socialmedia/all-posts/"
  );
  const posts = await response.data;

  return {
    props: { posts }, // will be passed to the page component as props
  };
}
