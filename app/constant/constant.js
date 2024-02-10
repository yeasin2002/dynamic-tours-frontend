import ocean1 from "@/public/ocean1.png";
import ocean2 from "@/public/ocean2.png";
import ocean3 from "@/public/ocean3.png";

import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { IoLocationOutline, IoTicketOutline } from "react-icons/io5";
import { CiCreditCard2 } from "react-icons/ci";

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

export const journeyData = [
  {
    id: "c1",
    image: ocean1,
    icon: IoLocationOutline,
    title: "Find Your Destination",
    description: `Travelling Is A Wonderfull Way To Explore New Places. Learn About
          Different Culture And Gain New Exeperience`,
  },
  {
    id: "c2",
    image: ocean2,
    icon: IoTicketOutline,
    title: "Book Your Ticket",
    description: `Travelling Is A Wonderfull Way To Explore New Places. Learn About
          Different Culture And Gain New Exeperience`,
  },
  {
    id: "c3",
    image: ocean3,
    icon: CiCreditCard2,
    title: "Pay & Start Journey",
    description: `Travelling Is A Wonderfull Way To Explore New Places. Learn About
          Different Culture And Gain New Exeperience`,
  },
];

export const footerData = [
  {
    company: [
      {
        id: "c1",
        title: "About Us",
        link: "#",
      },
      {
        id: "c2",
        title: "Tour Guide",
        link: "#",
      },
      {
        id: "c3",
        title: "Package",
        link: "#",
      },
      {
        id: "c4",
        title: "Contact",
        link: "#",
      },
    ],
  },

  {
    resource: [
      {
        id: "r1",
        title: "Free eBooks",
        link: "#",
      },
      {
        id: "r2",
        title: "Community",
        link: "#",
      },
      {
        id: "r3",
        title: "Blogs",
        link: "#",
      },
      {
        id: "r4",
        title: "Safety Guidelines",
        link: "#",
      },
    ],
  },
  {
    extra: [
      {
        id: "e1",
        title: "Customer Support",
        link: "#",
      },
      {
        id: "e2",
        title: "Terms & Conditions",
        link: "#",
      },
      {
        id: "e3",
        title: "Privacy Policy",
        link: "#",
      },
    ],
  },
];
