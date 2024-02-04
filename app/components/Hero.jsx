import hero from "@/public/hero.png";
import plane from "@/public/plane.png";
import Image from "next/image";

export default function Hero() {
  console.log(plane);
  return (
    <>
      <div className="p-7 relative flex justify-center items-center">
        <div
          className="  md:h-[751px] h-[360px] rounded-3xl"
          style={{
            backgroundImage: `url(${hero.src})`,
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="p-2 h-full flex items-center">
            <Image
              src={plane}
              className="h-auto w-[85%] absolute float-right right-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}
