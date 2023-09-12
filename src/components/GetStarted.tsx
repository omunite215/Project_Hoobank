import { arrowUp } from "../assets";
import { Fade } from "react-awesome-reveal";

const GetStarted = () => {
  return (
    <Fade
      delay={1e3}
      className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer transition-all ease-in-out delay-200 hover:text-xl hover:border-2 shadow hover:shadow-xl hover:shadow-cyan-500/50"
    >
      <div className="flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full">
        <div className="flex justify-center items-start flex-row">
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow-up"
            className=" h-[23px] w-[23px] object-contain"
            loading="lazy"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </Fade>
  );
};

export default GetStarted;
