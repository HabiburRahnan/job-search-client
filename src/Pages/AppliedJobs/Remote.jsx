import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Remote = (job) => {
  const { job_title, photo, displayName, job_type, email } = job.jobs;
  return (
    <Card className="mt-6 md:w-96 ">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={photo} alt="card-image" />
      </CardHeader>
      <CardBody className="border border-blue-500 rounded-lg">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Title: {job_title}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Name: {displayName}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Type: {job_type}
        </Typography>
        <Typography color="blue-gray" className="mb-2">
          Email: {email}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default Remote;
