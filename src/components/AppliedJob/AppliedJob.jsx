import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utlity/LocalStroage";

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobsId = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobApplication = jobs.filter((job) => storedJobsId.includes(job.id));

      const jobApplication = [];
      for (const id of storedJobsId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobApplication.push(job);
        }
      }
      setAppliedJobs(jobApplication);
    }
  }, [jobs]);

  return (
    <div>
      <h1 className="text-3xl text-center">
        Jobs Applied : {appliedJobs.length}
      </h1>
      <div>
        {appliedJobs.map((job) => (
          <div key={job.id} className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src={job.logo} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{job.job_title}</h2>
              <p>{job.company_name}</p>

              {/* Job-type Start */}
              <div>
                <button className="py-2 px-5 mr-4 font-extrabold border rounded border-[#7E90FE]">
                  {job.job_type}
                </button>
                <button className="py-2 px-5 mr-4 font-extrabold border rounded border-[#7E90FE]">
                  {job.remote_or_onsite}
                </button>
              </div>

              {/* Job-type end */}

              {/* Location and salary start */}
              <div className="flex">
                <h1 className="flex mr-4">
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
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  {job.location}
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
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  {job.salary}
                </h1>
              </div>
              {/* Location and salary End */}

              <div className="card-actions justify-end items-center">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
