import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const jobData = async () => {
      try {
        const res = await fetch("/data/jobs.json");

        const result = await res.json();
        setJobs(result);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    jobData();
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-6xl">Featured Jobs:{jobs.length}</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-primary w-full text-xl"
        >
          Show All jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
