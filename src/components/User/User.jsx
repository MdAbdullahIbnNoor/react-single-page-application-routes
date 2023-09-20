import { Link } from "react-router-dom";

const User = ({ user }) => {

    const { id, name, email, phone } = user;
    return (
        <div className=" border border-gray-800 text-center py-8 rounded-xl">
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            {/* <Link to={`/user/${id}`}>Show Details</Link> */}

            <button className="btn btn-primary mt-4">
                <Link to={`/user/${id}`}>Details
                </Link>
            </button>
        </div>
    )
}

export default User