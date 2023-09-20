import { useLoaderData, useNavigate, useParams } from "react-router-dom"

const PostDetails = () => {

    const postDetails = useLoaderData();
    const {postId} = useParams();
    const navigate = useNavigate();
    const { id, title, body } = postDetails;

    console.log(postId);

    const handleGoBack = ()=>{
        navigate(-1);
    }


    return (
        <div className="bg-gray-800">
            <div className="py-20 space-y-4 flex flex-col justify-center items-center w-1/4 mx-auto">
            <h2 className="text-4xl font-bold text-center text-white"><span className="text-3xl text-red-600 py-1">Details about user:</span> <br /> {name}</h2>
            <h2 className="text-xl font-bold text-center text-white">Id: {id}</h2>
            <h3 className="text-xl font-bold text-center text-white">Title: {title}</h3>
            <p className="text-xl font-bold text-center text-white">Body: {body}</p>
            
            <button onClick={handleGoBack} className="btn mx-auto w-24">Go Back</button>
            </div>
        </div>
    )
}

export default PostDetails