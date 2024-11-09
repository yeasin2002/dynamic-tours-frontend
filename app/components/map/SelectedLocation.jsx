import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useMapContext } from "../Dashboard/CreateTour/MapContext";
import { HiChevronUp } from "react-icons/hi";
import { convertToDataURL } from "@/app/util/helper";

export default function SelectedLocation() {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useMapContext();
  const openMenu = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {state.selectedLocation.length > 0 && (
        <Menu open={isOpen} placement="top-start">
          <MenuHandler>
            <div className=" p-2">
              <Button className=" normal-case p-0" onClick={openMenu}>
                <Typography
                  variant="paragraph"
                  className=" bg-offWhite text-[15px] text-offGray flex items-center gap-2 p-2 px-3 rounded-lg shadow-md cursor-pointer"
                >
                  Show Places
                  <HiChevronUp className=" w-5 h-5 text-shadeBlack" />
                </Typography>
              </Button>
            </div>
          </MenuHandler>
          <MenuList className=" bg-white shadow-md flex flex-col py-2 gap-2 max-h-[360px]">
            {state.selectedLocation.map((item) => (
              <div
                onClick={closeMenu}
                className="rounded-md text-offGray bg-offWhite shadow-sm p-2 flex items-center"
              >
                <div>
                  <img
                    src={convertToDataURL(item.images[0])}
                    alt="location_image"
                    width={60}
                    height={60}
                    className=" rounded-md w-14 h-14"
                  />
                </div>
                <div className=" flex-col flex gap-0.5 px-4">
                  <Typography variant="small">
                    Day : {item.dayNumber}
                  </Typography>
                  <Typography variant="small">
                    {item.address.split(",").length > 1
                      ? item.address.split(",").slice(0, 2).join(",")
                      : item.address}
                  </Typography>
                </div>
              </div>
            ))}
          </MenuList>
        </Menu>
      )}
    </>
  );
}
