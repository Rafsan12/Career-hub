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
      <h1>Jobs I Applied : {appliedJobs.length}</h1>
    </div>
  );
};

export default AppliedJob;
