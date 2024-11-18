import Image from "next/image";
// import { RainbowButtonDemo } from "../components/ui/RainbowButtonui";

import WebDev from "../assets/webDev.svg";
import UIUX from "../assets/UIUX.svg";
import CloudDevops from "../assets/devops.svg";

const Services = () => {
  return (
    <section className="h-screen w-full flex flex-col relative items-center px-[80px] py-4 overflow-hidden">
      {/* Remove or adjust the background image */}
      {/* <Image src={Background} alt="Background" layout="fill" objectFit="cover" className="-z-30 h-full w-full" /> */}

      {/* Remove or adjust the overlay */}
      {/* <div className="absolute inset-0 bg-black/70 -z-20 transition-[mask-position] duration-300 ease-in-out" /> */}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4 mt-12">
          <div className="fading_div_left"></div>
          <strong className="text-white text-[24px]">Services</strong>
          <div className="fading_div_right"></div>
        </div>
        <p className=" text-[24px] relative text-center text-white">
          From concept design to full development,
          <br />
          we offer end-to-end services to bring your ideas to life
        </p>
      </div>

      <div className="grid grid-rows-1 grid-cols-3 mt-[80px] w-[90%] gap-6 relative">
        <div className="bgblue w-full">
          <div className="card flex flex-col items-start px-8 py-4 relative overflow-hidden">
            <Image src={WebDev} alt="Web Development" height={36} />
            <h3 className="mt-6 text-[24px] hoverable text-white">App Development</h3>
            <p className="mt-8 text-white">
              We design and develop <b className="text-[#d6180a]">web</b>,{" "}
              <b className="text-[#d6180a]">mobile</b> and{" "}
              <b className="text-[#d6180a]">desktop</b> applications that are
              visually appealing and user-friendly. Our team of experts will
              work with you to create an app that meets your needs and exceeds
              your expectations.
            </p>
          </div>
        </div>
        <div className="bgblue w-full">
          <div className="card flex flex-col items-start px-8 py-4 relative overflow-hidden">
            <Image src={CloudDevops} alt="Cloud and Devops" height={36} />

            <h3 className="mt-6 text-[24px] text-white">Cloud and Devops</h3>
            <p className="mt-8 text-white">
              We provide cloud and DevOps services to help you{" "}
              <b className="text-[#d6180a]">build</b>,{" "}
              <b className="text-[#d6180a]">deploy</b>, and{" "}
              <b className="text-[#d6180a]">manage</b> applications in the
              cloud. Our team of experts will work with you to design a solution
              that meets your needs and exceeds your expectations.
            </p>
          </div>
        </div>
        <div className="bgblue w-full">
          <div className="card flex flex-col items-start px-8 py-4 relative overflow-hidden">
            <Image src={UIUX} alt="UI/UX Design" height={36} />

            <h3 className="mt-6 text-[24px] text-white">UI/UX Design</h3>
            <p className="mt-8 text-white">
              Our team of experts will work with you to design a user-friendly
              interface that meets your needs and exceeds your expectations. We
              ensure that the design is both{" "}
              <b className="text-[#d6180a]">functional</b> and{" "}
              <b className="text-[#d6180a]">aesthetically</b> pleasing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
