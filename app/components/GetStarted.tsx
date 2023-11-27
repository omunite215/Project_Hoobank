import { arrowUp } from "../../public";
import Image from "next/image";

const GetStarted = () => (
  <div className="flexCenter w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer bg-blue-gradient transition-all ease-in-out delay-200 hover:text-xl hover:border-2 shadow hover:shadow-xl hover:shadow-cyan-500/50">
    <div className="flexCenter flex-col bg-primary w-[100%] h-[100%] rounded-full">
      <div className="flexStart flex-row">
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <Image
          src={arrowUp}
          alt="arrow-up"
          width={23}
          height={23}
          className="object-contain"
        />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
