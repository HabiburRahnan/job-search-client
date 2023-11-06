import { Helmet } from "react-helmet";
import Title from "../../Components/Title";

const AppliedJobs = () => {
  return (
    <div className="bg-[#F4F3F0] p-0 md:p-24">
      <Helmet>
        <meta charset="utf-8" />
        <title>AppliedJob | Job Search</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Title>Applied Job</Title>
    </div>
  );
};

export default AppliedJobs;
