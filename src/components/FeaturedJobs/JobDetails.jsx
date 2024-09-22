import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  // Fetching the job data from the router
  const jobs = useLoaderData();

  // Getting the job id from the URL parameters
  const { id } = useParams();

  // Converting the id from string to integer
  const idInt = parseInt(id);

  // Finding the job object that matches the id
  const job = jobs.find((job) => job.id === idInt);

  console.log(job); // Logging the job object for debugging

  return (
    <div>
      {/* Displaying the job title */}
      <h2>Job Details: {job.job_title}</h2>

      {/* Main grid layout with job description and details */}
      <div className="grid gap-4 md:grid-cols-4">
        {/* Left column: Job description and responsibilities */}
        <div className="border md:col-span-3 ">
          {/* Job Description */}
          <h1 className="ml-2">
            <span className="text-xl font-bold ml-4">Job Description</span>:{" "}
            {job.job_description}
          </h1>

          {/* Job Responsibility */}
          <h1 className="mt-8 ml-2">
            <span className="text-xl font-bold ml-4 ">Job Responsibility</span>:{" "}
            {job.job_responsibility}
          </h1>

          {/* Educational Requirements */}
          <h1 className="mt-8 ml-2">
            <span className="text-xl font-bold block">
              Educational Requirements
            </span>
            {job.educational_requirements}
          </h1>

          {/* Experiences */}
          <h1 className="mt-8 ml-2">
            <span className="text-xl font-bold block">Experiences</span>
            {job.experiences}
          </h1>
        </div>

        {/* Right column: Job details and contact information */}
        <div className="border flex flex-col justify-between h-full">
          {/* Job details section */}
          <div>
            <h1 className="text-3xl text-center">Job Details</h1>
            <div className="border"></div>

            {/* Salary */}
            <h1 className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="font-bold">Salary</span>: {job.salary} Per Month
            </h1>

            {/* Job title */}
            <h1 className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
              <span className="font-bold">Job Title</span>: {job.job_title}
            </h1>

            {/* Contact information */}

            <h1 className="text-3xl text-center mt-12">Contact Information</h1>
            <div className="border"></div>
            <h1 className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span className="font-bold">Phone</span>:{" "}
              {job.contact_information.phone}
            </h1>
            <h1 className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span className="font-bold">Email</span>:{" "}
              {job.contact_information.email}
            </h1>
            <h1 className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5ZM12 12a7.5 7.5 0 0 1 7.5 7.5v1.125c0 .621-.504 1.125-1.125 1.125h-12.75c-.621 0-1.125-.504-1.125-1.125V19.5A7.5 7.5 0 0 1 12 12Z"
                />
              </svg>
              <span className="font-bold">Address</span>:{" "}
              {job.contact_information.address}
            </h1>
          </div>

          {/* Apply now button centered at the bottom */}
          <div className="flex justify-center items-end">
            <button className="btn-primary px-4 py-2 bg-indigo-600 w-full   text-white rounded">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
