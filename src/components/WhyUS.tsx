import Image from "next/image";
import Visual from "../assets/Visual.svg";
import Performance from "../assets/Performance.svg";
import Security from "../assets/secure.svg";
import Reliability from "../assets/Reliability.svg";
import Ripple from "../components/ui/ripple";

const WhyUs = () => {
  return (
    <section className="h-[90vh] w-full flex flex-col relative items-center px-[80px] py-4 overflow-hidden bg-[#070305]">
      <div className="relative w-full flex flex-col items-center min-h-[800px]">
        <Ripple
          className="absolute inset-0 !opacity-100"
          mainCircleSize={500}
          mainCircleOpacity={0.5}
          numCircles={6}
        />

        <div className="flex flex-col items-center z-10">
          <div className="flex items-center gap-4 mt-12">
            <div className="fading_div_left"></div>
            <strong className="text-white text-[24px]">Why US</strong>
            <div className="fading_div_right"></div>
          </div>
          <p className=" text-[24px] relative text-center opacity-70 text-white">
            With years of experience, we have found that great apps excel in
            <br /> <b className="text-[#d6180a]">visual appeal</b>,{" "}
            <b className="text-[#d6180a]">reliability</b>,{" "}
            <b className="text-[#d6180a]">performance</b>, and{" "}
            <b className="text-[#d6180a]">security</b>.
            <br /> At Frontude, we build with these principles in mind to
            deliver solutions you can trust.
          </p>
        </div>

        <div className="grid grid-rows-2 grid-cols-2 mt-[80px] gap-6 w-[90%] relative z-10">
          <div className="bgred w-full">
            <div className="why_us_card flex flex-col items-start px-8 py-4 relative overflow-hidden">
              <div className="flex items-center gap-8">
                <Image src={Visual} alt="Visual Appeal" height={36} />
                <h3 className="text-[24px] hoverable text-white">
                  Visual Appeal
                </h3>
              </div>
              <p className="mt-8 text-white opacity-70">
                We design applications that are visually appealing and easy to
                use. Our team of designers will work with you to create an app
                that reflects your brand and engages your users.
              </p>
            </div>
          </div>

          <div className="bgred w-full">
            <div className="why_us_card flex flex-col items-start px-8 py-4 relative overflow-hidden">
              <div className="flex items-center gap-8">
                <Image src={Reliability} alt="Reliability" height={36} />
                <h3 className="text-[24px] text-white">Reliability</h3>
              </div>
              <p className="mt-8 text-white opacity-70">
                We build applications that are reliable and perform well under
                pressure. Our team of developers will work with you to create an
                app that meets your needs and exceeds your expectations.
              </p>
            </div>
          </div>
          <div className="bgred w-full">
            <div className="why_us_card flex flex-col items-start px-8 py-4 relative overflow-hidden">
              <div className="flex items-center gap-8">
                <Image src={Performance} alt="Performance" height={26} />
                <b className=" text-[24px] text-white">Performance</b>
              </div>
              <p className="mt-8 text-white opacity-70 ">
                We optimize applications for speed and performance. Our team of
                experts will work with you to create an app that loads quickly
                and runs smoothly on all devices.
              </p>
            </div>
          </div>

          <div className="bgred w-full">
            <div className="why_us_card flex flex-col items-start px-8 py-4 relative overflow-hidden">
              <div className="flex items-center gap-8">
                <Image src={Security} alt="Security" height={36} />
                <b className=" text-[24px] text-white">Security</b>
              </div>
              <p className="mt-8 text-white opacity-70">
                We take security seriously and follow best practices to protect
                your data. Our team of experts will work with you to create an
                app that is secure and reliable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
