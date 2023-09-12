import { Fade } from "react-awesome-reveal";
import { Button } from "./";

const CTA = () => {
  return (
    <section className="flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow">
      <div className="flex-1 flex flex-col">
        <Fade cascade delay={1e3} damping={1e-2}>
          <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
            Let&apos;s try our service now!
          </h2>
        </Fade>
        <Fade delay={1e3} damping={1e-2}>
          <h2 className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </h2>
        </Fade>
      </div>
      <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10">
        <Button styles="" />
      </div>
    </section>
  );
};

export default CTA;
