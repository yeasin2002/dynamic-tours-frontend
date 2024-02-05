import ocean1 from "@/public/ocean1.png";
import ocean2 from "@/public/ocean2.png";
import ocean3 from "@/public/ocean3.png";

import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const navMenu = [
  {
    id: "a1",
    name: "About",
    href: "/about",
  },
  {
    id: "a2",
    name: "Tour",
    href: "/tour",
  },
  {
    id: "a3",
    name: "Package",
    href: "/package",
  },
  {
    id: "a4",
    name: "Contact",
    href: "/contact",
  },
];

export const oceanImage = [
  {
    id: "o1",
    image: ocean1,
  },
  {
    id: "o2",
    image: ocean2,
  },
  {
    id: "o3",
    image: ocean3,
  },
];

export const socialLinks = [
  {
    id: "i1",
    icon: FaFacebook,
    link: "#",
  },
  {
    id: "i2",
    icon: FaInstagram,
    link: "#",
  },
  {
    id: "i3",
    icon: RiTwitterXFill,
    link: "#",
  },
  {
    id: "i4",
    icon: FaGithub,
    link: "#",
  },
];
