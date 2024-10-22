import {
  HiOutlineClock,
  HiOutlineFlag,
  HiOutlineLocationMarker,
  HiOutlineUser,
  HiOutlineGlobe,
} from "react-icons/hi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";

import { Button, Typography } from "@/app/ui/materialExport";

export default function SubDetails({ tour }) {
  return (
    <>
      <div className="flex lg:items-center flex-col lg:flex-row  gap-2 lg:gap-7 py-2 ">
        <div className="flex items-center gap-2">
          <HiOutlineLocationMarker className="text-shadeBlack -translate-y-0.5 w-5 h-5" />
          <Typography
            className="text-shadeBlack "
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

      <div>
        <div className="flex items-center gap-2 py-2">
          <HiOutlineGlobe className="text-shadeBlack w-5 h-5 " />
          <Typography
            className="text-shadeBlack tracking-wide"
            variant="paragraph"
          >
            English, Spanish, French, Portuguese and more
          </Typography>
        </div>
        <div className="py-2">
          <div className="flex items-center gap-2">
            <HiOutlineCurrencyDollar className="text-shadeBlack w-5 h-5 " />
            <Typography
              className="text-shadeBlack tracking-wide"
              variant="paragraph"
            >
              {tour?.discountPrice ? (
                <s>Price : ${tour?.price}</s>
              ) : (
                `Price : $${tour?.price}`
              )}
            </Typography>
          </div>

          {tour?.discountPrice && (
            <div className="flex items-center gap-2 mt-4">
              <HiOutlineCurrencyDollar className="text-actionBlue w-5 h-5 stroke-2 " />
              <Typography
                className="text-actionBlue tracking-wide font-bold"
                variant="paragraph"
              >
                Discount Price : ${tour?.discountPrice}
              </Typography>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
