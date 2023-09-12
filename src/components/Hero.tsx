import { Fade, Slide } from "react-awesome-reveal";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="h-[32px] w-[32px]" />
          <Fade cascade delay={1e2} damping={1e-2}>
            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2">
              <span className="text-white">20%</span> Discount For{" "}
              <span className="text-white">1 Month</span> Account
            </p>
          </Fade>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <Fade cascade delay={1e3} damping={1e-1}>
              The Next
            </Fade>{" "}
            <br className="sm:block hidden" />{" "}
            <Fade cascade delay={1e3} damping={1e-1}>
              <span className="text-gradient">Generation</span>
            </Fade>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <Fade>
              <GetStarted />
            </Fade>
          </div>
        </div>
        <Fade cascade delay={1e3} damping={1e-1}>
          <span className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Payment Method
          </span>
        </Fade>
        <div className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          <Fade delay={1e1}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </Fade>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
        <Slide direction="right">
          <img
            src={robot}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        </Slide>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      <div className="ss:hidden flex justify-center items-center">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
