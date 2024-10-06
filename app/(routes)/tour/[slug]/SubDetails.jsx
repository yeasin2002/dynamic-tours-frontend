import {
  HiOutlineClock,
  HiOutlineFlag,
  HiOutlineLocationMarker,
  HiOutlineUser,
} from "react-icons/hi";
import { Button, Typography } from "@/app/ui/materialExport";

export default function SubDetails({ tour }) {
  return (
    <>
      <div className="flex items-center gap-7 py-2">
        <div className="flex items-center gap-2">
          <HiOutlineLocationMarker className="text-shadeBlack -translate-y-0.5 w-5 h-5" />
          <Typography
            className="text-shadeBlack"
            variant="paragraph"
          >{`${tour?.startLocation?.address}`}</Typography>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineClock className="text-shadeBlack w-5 h-5 -translate-y-0.5" />
          <Typography
            className="text-shadeBlack"
            variant="paragraph"
          >{`Duration : ${tour?.duration} days`}</Typography>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineUser className="text-shadeBlack w-5 h-5 -translate-y-0.5" />
          <Typography
            className="text-shadeBlack"
            variant="paragraph"
          >{`People : ${tour?.totalParticipant}`}</Typography>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineFlag className="text-shadeBlack w-5 h-5 " />
          <Typography
            className="text-shadeBlack"
            variant="paragraph"
          >{`Places : ${tour?.locations?.length}`}</Typography>
        </div>
      </div>
    </>
  );
}
