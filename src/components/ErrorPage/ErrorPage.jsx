import { useRouteError, Link } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="bg-gray-800 p-96 h-screen">
            <h2 className="text-7xl text-center font-extrabold text-red-600 mb-24">Oppss!!!</h2>
            <h3 className="text-4xl text-center font-semibold text-white">Error{error.status}: {error.error.message}</h3>
            <Link className="btn btn-error flex justify-center w-36 mx-auto my-6" to="/">Go Home</Link>
        </div>
    )
}

export default ErrorPage