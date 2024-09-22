"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

export default function TourList({ tourData }) {
  return (
    <>
      <div className=" grid grid-cols-3 bg-offWhite p-3">
        <Card className="w-80">
          <CardBody className=" p-5">
            <Image
              src={`https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80`}
              width={400}
              height={250}
              className="rounded-xl"
            />
            <Typography variant="h5" color="blue-gray" className="my-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
