
const User = ({ user }) => {

    const {id, name, email, phone} = user;
    return (
        <div className=" border border-gray-800 text-center py-8 rounded-xl">
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
        </div>
    )
}

export default User