import { Typography } from "@/app/ui/materialExport";
export default function SmallGuide({ guides }) {
  return (
    <>
      <div className="bg-green-400 py-2 flex items-center ">
        <div className="flex">
          <img
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="guides-image"
            className="w-11 h-11 rounded-full border-2 border-transparent"
          />
          <img
            src="https://docs.material-tailwind.com/img/face-3.jpg"
            alt="guides-image"
            className="w-11 h-11 rounded-full border-2 border-transparent -translate-x-3"
          />
          <img
            src="https://docs.material-tailwind.com/img/face-4.jpg"
            alt="guides-image"
            className="w-11 h-11 rounded-full border-2 border-transparent -translate-x-6"
          />
          <img
            src="https://docs.material-tailwind.com/img/face-5.jpg"
            alt="guides-image"
            className="w-11 h-11 rounded-full border-2 border-transparent -translate-x-9"
          />
        </div>
        <Typography
          variant="paragraph"
          className="text-[#434343] text-base font-semibold tracking-wide -translate-x-4"
        >
          35+ More guides available
        </Typography>
      </div>
    </>
  );
}
