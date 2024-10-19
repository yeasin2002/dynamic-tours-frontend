import { Typography, Button, Avatar } from "@/app/ui/materialExport";
import { HiOutlinePencilAlt, HiStar } from "react-icons/hi";

export default function Review() {
  return (
    <>
      <div className="bg-gray-100 p-8 my-8 rounded-lg text-3xl flex flex-col text-center md:text-left gap-2 md:flex-row  items-center justify-between">
        <div>
          <Typography
            variant="h3"
            className="tracking-wide text-textBlack mb-2"
          >
            Review about this tour
          </Typography>
          <Typography variant="p" className="tracking-wide text-shadeBlack">
            We will be glad to know what you think about the tour
          </Typography>
        </div>

        <div>
          <Button className="flex items-center gap-2 shadow-md font-normal tracking-wide bg-actionBlue ">
            <HiOutlinePencilAlt className="w-5 h-5 " />
            Write a review
          </Button>
        </div>
      </div>

      {/* main review */}
      <div className="flex flex-col md:flex-row border-b py-5 border-[#1e1e1e61] justify-between gap-4 items-center md:items-end">
        <div className="text-center flex flex-col gap-1 items-center">
          <Typography variant="small" className="text-shadeBlack">
            Overall Ratings
          </Typography>
          <Typography
            variant="h2"
            className="font-bold tracking-wide text-textBlack"
          >
            4.5/5
          </Typography>
          <div>
            <div className="rating flex gap-0.5">
              {new Array(5).fill(1).map((item) => (
                <HiStar className="text-yellow-900 w-8 h-8" />
              ))}
            </div>
          </div>
          <Typography variant="small" className="text-shadeBlack">
            Based on 677 reviews
          </Typography>
        </div>
        <div className=" flex items-center gap-2">
          <Button>All</Button>
          <Button>Latest</Button>
          <Button>Positive</Button>
        </div>
      </div>

      {/* review items */}

      <div className=" border-b border-[#1e1e1e61] py-4 flex flex-col gap-3 ">
        <div className="rating flex gap-0.5">
          {new Array(5).fill(1).map((item) => (
            <HiStar className="text-yellow-900 w-6 h-6" />
          ))}
        </div>
        <div className="">
          <Typography
            variant="p"
            className="text-shadeBlack tracking-wide w-full md:w-[65%]"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
            quibusdam delectus, eligendi doloremque quasi, molestias aliquam a
            cupiditate accusamus voluptas earum perspiciatis suscipit, cumque
            omnis neque qui molestiae in temporibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Accusamus molestias in ipsum illo
            labore. Excepturi, maiores. Illo qui iusto et corporis. Sunt
            necessitatibus assumenda impedit voluptatibus, animi nihil pariatur
            ullam!
          </Typography>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              variant="rounded"
            />
            <div>
              <Typography variant="h6">Tania Andrew</Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Web Developer
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
