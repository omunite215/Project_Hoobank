import { Fade, Slide } from "react-awesome-reveal";
import { features } from "../constants";
import { Button } from "./";

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
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" loading="lazy"/>
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
  <section id="features" className="flex md:flex-row flex-col sm:py-16 py-6">
    <div className="flex-1 flex justify-center items-start flex-col">
      <Fade cascade delay={1e2} damping={1e-2}>
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          You do the business, <br className="sm:block hidden" />
          We&apos;ll handle the money.
        </h2>
      </Fade>
      <Fade delay={1e3} damping={1e-3}>
        <p className="max-w-[470px] mt-5 text-white">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
      </Fade>
      <Slide>
        <Button styles="mt-10" />
      </Slide>
    </div>
    <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
      <Slide direction="right" cascade delay={1e2} damping={1e-1}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </Slide>
    </div>
  </section>
);

export default Business;
