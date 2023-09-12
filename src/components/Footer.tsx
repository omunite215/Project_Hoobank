import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { Fade } from "react-awesome-reveal";

const Footer = () => (
  <Fade cascade delay={1e3} damping={1e-2}>
    <section className="flex justify-center items-center sm:py-16 py-6 flex-col">
      <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="hoobank"
            className=" h-[72.14px] w-[266px] object-contain"
            loading="lazy"
          />
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={` h-[21px] w-[21px] object-contain cursor-pointer hover:text-secondary ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              loading="lazy"
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  </Fade>
);

export default Footer;
