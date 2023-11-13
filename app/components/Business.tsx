"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../styles/animations";
import { features } from "../constants";
import Button from "./Button";

interface featureCardProps {
  icon: string;
  title: string;
  content: string;
  index: number;
}

const FeatureCard = ({ icon, title, content, index }: featureCardProps) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
      <Image
        src={icon}
        alt="icon"
        width={0}
        height={0}
        className="w-[50%] h-[50%] object-contain"
        loading="eager"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className="section">
    <motion.div
      className="sectionInfo"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      animate="show"
    >
      <h2 className="heading2">
        You do the business, <br className="sm:block hidden" /> we’ll handle the
        money.
      </h2>
      <p className="paragraph max-w-[470px] mt-5">
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>

      <Button styles={`mt-10`} />
    </motion.div>

    <div className="sectionImg flex-col">
      {features.map((feature, index) => (
        <motion.div
          key={feature.id}
          variants={fadeIn("left", "spring", index * 0.5, 1)}
          initial="hidden"
          animate="show"
        >
          <FeatureCard key={feature.id} {...feature} index={index} />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Business;
