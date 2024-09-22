import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

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
      <div>
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
