import { Link, useLocation, useNavigate } from "react-router-dom"
const Post = ({ post }) => {
    const { id, title } = post;

    const navigate = useNavigate();
    

    const handleShowDetails = () => {
        navigate(`/posts/${id}`);
    }

    return (
        <div className="bg-sky-400 px-10 py-7 space-y-5 mx-auto rounded-xl w-96">
            <h4 className="text-xl text-gray-800">Post of ID: {id}</h4>
            <h2 className="text-2xl font-bold text-gray-900">Title: {title}</h2>
            {/* <p className="text-lg text-gray-700">{body}</p> */}
            {/* <Link className="btn btn-secondary" to={`/posts/${id}`}>Details
            </Link> */}
            <button onClick={handleShowDetails} className="btn btn-success">Click to see Details</button>
        </div>

        // <button  className="btn btn-accent w-8/12 text-white">
    )
}

export default Post