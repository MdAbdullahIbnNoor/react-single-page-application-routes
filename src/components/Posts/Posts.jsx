import { useLoaderData } from "react-router-dom"
import Post from "../Post/Post";


const Posts = () => {
  const posts =  useLoaderData();
  return (
    <div>
        <h1 className="text-center text-4xl font-extrabold my-7">Posts: {posts.length}</h1>
        <div className="grid grid-cols-3 gap-5 container mx-auto">
        {
            posts.map(post => <Post key={post.userId} post = {post}></Post>)
        }
        </div>
    </div>
  )
}

export default Posts