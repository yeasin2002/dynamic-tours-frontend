"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@/app/ui/materialExport";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
export default function FaqSection({ tour }) {
  const [open, setOpen] = useState(0);
  const [alwaysOpen, setAlwaysOpen] = useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <section className="lg:w-7/12 w-full">
        <Accordion open={alwaysOpen}>
          <AccordionHeader
            className="text-textBlack tracking-wide flex justify-betwee py-2  "
            onClick={handleAlwaysOpen}
          >
            <div className="w-full flex items-center justify-between">
              About the place ?
              <HiOutlineChevronDown
                className={`${
                  alwaysOpen
                    ? "rotate-180 h-5 w-5 transition-transform "
                    : "rotate-0 h-5 w-5 transition-transform"
                }`}
              />
            </div>
          </AccordionHeader>
          <AccordionBody className="text-shadeBlack text-base tracking-wide leading-7  ">
            {tour?.description}
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            How to ?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            What ?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      </section>
    </>
  );
}
