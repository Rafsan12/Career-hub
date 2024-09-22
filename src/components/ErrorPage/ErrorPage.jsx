import { Link } from "react-router-dom";
import ErrorImg from "../../../assets/images/404.jpg";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <img className="w-auto mx-auto mt-36 rounded-xl" src={ErrorImg} alt="" />
      <Link to="/">
        <button className="mt-4 w-auto btn btn-outline btn-secondary px-20">
          Go To Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
