import { Card, Typography } from "@material-tailwind/react";

export default function NotFound() {
  return (
    <>
      <Card className="py-5 h-[400px] flex items-center justify-center">
        <div>
          <Typography variant="h3" className=" text-center text-gray-800 mb-2">
            No tour was found !
          </Typography>
          <Typography
            variant="paragraph"
            className=" text-center text-blue-gray-700"
          >
            We are adding more tours to increase
            <br /> Our customer satisfaction
          </Typography>
        </div>
      </Card>
    </>
  );
}
