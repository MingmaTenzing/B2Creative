import Image from "next/image";
import analytics from "../assests/advanced analytics.png";
import email from "../assests/email marketing.png";
import videomarketing from "../assests/video marketing.png";
import SEO from "../assests/SEO.png";
import PPC from "../assestS/pay per clikc.png";
import consulting from "../assests/consulting.png";
import contentmarketing from "../assests/content marketing.png";
import webdesign from "../assests/website design.png";

type Props = {};
function ExploreServices({}: Props) {
  return (
    <div className=" p-4">
      <div
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        className=" flex flex-col items-center text-center mt-10 space-y-4"
      >
        <h3 className=" uppercase font-light text-sm">Explore our services</h3>
        <h2 className=" text-2xl md:text-3xl lg:text-4xl font-semibold">
          SEO Management & Strategy Services
        </h2>
        <p className=" text-sm lg:max-w-[600px]">
          Boost Your Visibility and Drive Results with Comprehensive SEO
          Management & Strategy Services
        </p>
      </div>

      <div className="  pt-10 md:flex md:flex-wrap md:justify-center lg:w-[1200px] lg:m-auto">
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1100"
          className=" flex flex-col items-center md:items-start lg:flex-row lg:space-x-3 m-4  "
        >
          <Image
            src={analytics}
            width={512}
            height={512}
            alt="services image"
            className=" w-20 "
          />

          <div className=" md:w-[320px] space-y-2 ">
            <h3 className=" text-center md:text-start  text-xl ">
              Advanced Analytics Review
            </h3>
            <p className="text-center md:text-start  text-sm  text-gray-500 font-light">
              Gain valuable insights and make data-driven decisions with our
              Advanced Analytics Review. Our expert team will analyze your data,
              identify patterns, and provide comprehensive reports to optimize
              your business strategies. Uncover hidden opportunities and unlock
              your company&apos;s true potential with our advanced analytics
              expertise.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1100"
          className=" flex flex-col items-center md:items-start lg:flex-row lg:space-x-3 m-4  "
        >
          <Image
            src={email}
            width={512}
            height={512}
            alt="services image"
            className=" w-20 "
          />

          <div className=" md:w-[320px] space-y-2 ">
            <h3 className=" text-center md:text-start  text-xl ">
              Email Marketing Campaigns
            </h3>
            <p className="text-center md:text-start  text-sm  text-gray-500 font-light">
              Maximize your reach and engage your audience with Email Marketing
              Campaigns. Our expert team will create compelling email campaigns,
              deliver targeted messages, and track performance to drive
              conversions and nurture customer relationships. Harness the power
              of email marketing to boost your brand awareness, increase
              customer loyalty, and achieve measurable results for your
              business.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1100"
          className=" flex flex-col items-center md:items-start lg:flex-row lg:space-x-3 m-4  "
        >
          <Image
            src={videomarketing}
            width={512}
            height={512}
            alt="services image"
            className=" w-20 "
          />

          <div className=" md:w-[320px] space-y-2 ">
            <h3 className=" text-center md:text-start  text-xl ">
              Video Marketing
            </h3>
            <p className="text-center md:text-start  text-sm  text-gray-500 font-light">
              Engage and captivate your audience with Video Marketing. Our
              expert team creates compelling videos that leave a lasting impact,
              increase brand visibility, and drive conversions. Elevate your
              marketing with the power of video.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1100"
          className=" flex flex-col items-center md:items-start lg:flex-row lg:space-x-3 m-4  "
        >
          <Image
            src={SEO}
            width={512}
            height={512}
            alt="services image"
            className=" w-20 "
          />

          <div className=" md:w-[320px] space-y-2 ">
            <h3 className=" text-center md:text-start  text-xl ">
              Search Engine Optimization (SEO)
            </h3>
            <p className="text-center md:text-start  text-sm  text-gray-500 font-light">
              Supercharge your online presence with Search Engine Optimization
              (SEO). Our proven strategies increase visibility, drive organic
              traffic, and help you outrank your competitors. Unlock the full
              potential of your website and achieve long-term success with our
              expert SEO services.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1100"
          className=" flex flex-col items-center md:items-start lg:flex-row lg:space-x-3 m-4  "
        >
          <Image
            src={PPC}
            width={512}
            height={512}
            alt="services image"
            className=" w-20 "
          />

          <div className=" md:w-[320px] space-y-2 ">
            <h3 className=" text-center md:text-start  text-xl ">
              Pay Per Click (PPC)
            </h3>
            <p className="text-center md:text-start  text-sm  text-gray-500 font-light">
              Maximize your online advertising with Pay Per Click (PPC). Our
              targeted campaigns drive results, maximize ROI, and give you a
              competitive edge in the digital landscape. Experience the power of
              PPC and achieve measurable success with our expert management
              services.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1100"
          className=" flex flex-col items-center md:items-start lg:flex-row lg:space-x-3 m-4  "
        >
          <Image
            src={consulting}
            width={512}
            height={512}
            alt="services image"
            className=" w-20 "
          />

          <div className=" md:w-[320px] space-y-2 ">
            <h3 className=" text-center md:text-start  text-xl ">
              Strategy and Analytics Consulting
            </h3>
            <p className="text-center md:text-start  text-sm  text-gray-500 font-light">
              Gain a competitive advantage with our Strategy and Analytics
              Consulting. Our experienced consultants will analyze your
              business, leverage data insights, and develop customized
              strategies to optimize your operations and drive growth. Unlock
              the full potential of your business with our expert guidance and
              data-driven solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExploreServices;
