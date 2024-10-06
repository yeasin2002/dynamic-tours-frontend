import { Card, Typography, Button } from "@/app/ui/materialExport";
import SelectDate from "@/app/components/extra/SelectDate";

export default function BookingMenu() {
  return (
    <>
      <Card className="rounded-md  lg:absolute p-6 bg-offWhite top-0 right-0">
        <div className=" ">
          <Typography className="tracking-wide font-medium text-lg uppercase text-textBlack">
            Find a guide by your date
          </Typography>

          <div className="flex flex-col">
            <SelectDate />
          </div>

          <Button
            className="uppercase font-normal text-sm tracking-wide bg-actionBlue"
            fullWidth
          >
            Book a guide
          </Button>
        </div>
      </Card>
    </>
  );
}
