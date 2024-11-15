import { Typography } from "@/app/ui/materialExport";
export default function SmallGuide({ guides }) {
  console.log(guides);
  let demo = [
    {
      _id: "661fa187f2faa1f9b873f4f5",
      firstName: "Sabbir",
      lastName: "Hossain",
      userName: "mojabbir",
      email: "email@gmail.com",
      profileImage:
        "https://res.cloudinary.com/dquhkvjxf/image/upload/v1724824977/profile/661fa187f2faa1f9b873f4f5/o3b7h0cfelmac80voygg.png",
      createdAt: "2024-04-17T10:16:38.954Z",
      isActive: true,
      __v: 0,
      fullName: "Sabbir Hossain",
      id: "661fa187f2faa1f9b873f4f5",
    },
    {
      _id: "661fa187f2faa1f9b873f4f5",
      firstName: "Sabbir",
      lastName: "Hossain",
      userName: "mojabbir",
      email: "email@gmail.com",
      profileImage:
        "https://res.cloudinary.com/dquhkvjxf/image/upload/v1724824977/profile/661fa187f2faa1f9b873f4f5/o3b7h0cfelmac80voygg.png",
      createdAt: "2024-04-17T10:16:38.954Z",
      isActive: true,
      __v: 0,
      fullName: "Sabbir Hossain",
      id: "661fa187f2faa1f9b873f4f5",
    },
    {
      _id: "661fa187f2faa1f9b873f4f5",
      firstName: "Sabbir",
      lastName: "Hossain",
      userName: "mojabbir",
      email: "email@gmail.com",
      profileImage:
        "https://res.cloudinary.com/dquhkvjxf/image/upload/v1724824977/profile/661fa187f2faa1f9b873f4f5/o3b7h0cfelmac80voygg.png",
      createdAt: "2024-04-17T10:16:38.954Z",
      isActive: true,
      __v: 0,
      fullName: "Sabbir Hossain",
      id: "661fa187f2faa1f9b873f4f5",
    },
  ];
  return (
    <>
      <div className="flex items-center py-2 ">
        <div className="flex">
          {demo?.map((item, i) => (
            <img
              src={item?.profileImage}
              alt="guides-image"
              className={`w-11 h-11 rounded-full border-2 border-transparent -translate-x-${
                i === 0 ? 0 : i * 3
              } `}
            />
          ))}
        </div>
        <Typography
          variant="paragraph"
          className="text-shadeBlack text-base font-medium tracking-wide -translate-x-4"
        >
          35+ More guides available
        </Typography>
      </div>
    </>
  );
}
