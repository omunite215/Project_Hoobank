import { stats } from "../constants";
import { Fade } from "react-awesome-reveal";

const Stats = () => (
  <section className="flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6">
    {stats.map((stat) => (
      <div
        key={stat.id}
        className="flex-1 justify-start items-center flex-row m-3"
      >
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          <Fade delay={1e3} cascade damping={1e-1}>
            {stat.value}
          </Fade>
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
