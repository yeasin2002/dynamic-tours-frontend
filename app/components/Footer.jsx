import logo from "@/public/logo.svg";

import SocialLinks from "./extra/SocialLinks";
import { footerData } from "../constant/constant";
export default function Footer() {
  return (
    <>
      <div className=" bg-green-300 container">
        <div>
          <Image src={logo} height={50} width={125} alt="Brand logo" />
          <h2>
            Discover the world one adventure at a time life is short, book a
            trip now
          </h2>
          <SocialLinks />
        </div>
      </div>
    </>
  );
}
