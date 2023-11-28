import { logo } from "../../public";
import { footerLinks, socialMedia } from "../constants";
import Image from "next/image";

const Footer = () => (
  <section className="flexCenter paddingY flex-col">
    <div className="flexStart md:flex-row flex-col mb-8 w-full">
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <Image
          src={logo}
          alt="hoobank"
          width={266}
          height={72.14}
          priority={true}
          className="object-contain"
        />
        <p className="paragraph mt-4 max-w-[312px]">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h1 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h1>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary transition-colors delay-150 cursor-pointer ${
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
          <Image
            key={social.id}
            src={social.icon}
            alt={social.id}
            width={21}
            height={21}
            priority={true}
            className={`object-contain cursor-pointer hover:opacity-75 ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
