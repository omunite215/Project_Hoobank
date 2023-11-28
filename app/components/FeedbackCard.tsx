"use client";
import { motion } from "framer-motion";
import { zoomIn } from "../styles/animations";
import { quotes } from "../../public";
import Image, { StaticImageData } from "next/image";

interface feedbackCardPropTypes {
  content: string;
  name: string;
  title: string;
  img: string | StaticImageData;
}

const FeedBackCard = ({ content, name, title, img }: feedbackCardPropTypes) => (
  <motion.div
    className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
    variants={zoomIn}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <Image
      src={quotes}
      alt="quotes"
      width={42}
      height={27}
      className="object-contain"
      priority={true}
    />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
      {content}
    </p>
    <div className="flex">
      <Image
        src={img}
        alt={name}
        width={48}
        height={48}
        className="rounded-full object-contain"
        priority={true}
      />
      <div className="flex flex-col ml-4">
        <h1 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h1>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </motion.div>
);

export default FeedBackCard;
