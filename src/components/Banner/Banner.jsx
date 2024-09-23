import User from "../../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="hero  min-h-screen  bg-white  dark:bg-gray-900 dark:text-white ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={User} className="max-w-sm rounded-lg shadow-xl" />
        <div>
          <h1 className="text-6xl font-bold mb-4">
            One Step
            <span className="block mt-2">Closer To Your</span>
            <span className="text-cyan-600 block mt-2">Dream Job</span>
          </h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
