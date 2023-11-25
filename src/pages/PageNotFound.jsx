import { useRouteError } from "react-router-dom"
import { Link } from "react-router-dom";

const PageNotFound = () => {
    const error = useRouteError();

    if (error.status === 404) {
        return (
            <div className="w-full h-screen grid place-content-center place-items-center text-white">
                <h1 className="font-primary tracking-wider text-8xl">{error.status}</h1>
                <h3 className="h3">Page {error.statusText}</h3>
                <Link to='/' className="bg-accent px-4 py-3 rounded-md mt-5 text-stone-800 font-semibold">
                    Back to home
                </Link>
            </div>
        )
    }

    return (
        <div className="w-full h-screen grid place-content-center place-items-center text-white">
            <h2 className="h2 text-center">
                Something went wrong <span className="text-primary text-4xl">!</span>
            </h2>
        </div>
    )
}

export default PageNotFound;