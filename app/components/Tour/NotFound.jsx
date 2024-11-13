import { Card, Typography } from "@material-tailwind/react";
import { HiOutlineEmojiSad } from "react-icons/hi";

export default function NotFound() {
  return (
    <>
      <Card className="py-5 h-[400px] flex items-center mt-4 justify-center">
        <div className=" p-4 flex flex-col items-center gap-2 text-center">
          <HiOutlineEmojiSad
            strokeWidth={"1.6"}
            className="w-24 h-24 my-2 text-shadeBlack text-center"
          />
          <Typography variant="h3" className="text-shadeBlack ">
            No tour was found
          </Typography>
          <Typography variant="paragraph" className="text-shadeBlack">
            We are adding more tours to increase
            <br /> Our customer satisfaction
          </Typography>
        </div>
      </Card>
    </>
  );
}
