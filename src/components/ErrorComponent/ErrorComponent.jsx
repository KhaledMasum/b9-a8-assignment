import { Link } from "react-router-dom";

const ErrorComponent = () => {
    return (
        <div className="flex justify-center items-center min-h-screen gap-4">
            <h1 className="text-red-700 font-bold text-4xl">Ooops!!!</h1>
            <button className="btn btn-primary"><Link to={'/'}>Go back to home</Link></button>
        </div>
    );
};

export default ErrorComponent;