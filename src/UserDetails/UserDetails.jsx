import { useLoaderData } from "react-router-dom"


const UserDetails = () => {

    const userDetails = useLoaderData();
    const {name, phone, email, website} = userDetails;
    // console.log(userDetails);

    return (
        <div className="bg-gray-800 py-20 space-y-4">
            <h2 className="text-4xl font-bold text-center text-white"><span className="text-3xl text-red-600 py-1">Details about user:</span> <br /> {name}</h2>
            <h2 className="text-xl font-bold text-center text-white">Email: {email}</h2>
            <h3 className="text-xl font-bold text-center text-white">Website: {website}</h3>
            <p className="text-xl font-bold text-center text-white">Phone: {phone}</p>
        </div>
    )
}

export default UserDetails