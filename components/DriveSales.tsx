import Image from "next/image";
import analysis from "../assests/analysis.png";
import Link from "next/link";

type Props = {};
function DriveSales({}: Props) {
  return (
    <div className=" mt-20">
      <div className="   w-full overflow-hidden  md:flex items-center md:justify-center ">
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1000"
          className=" p-4  space-y-4  md:w-[700px] lg:pl-20 "
        >
          <h3 className=" text-sm font-light uppercase">DRIVE SALES & LEADS</h3>
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-semibold">
            Our SEO plans will help you to dominate the search engines
          </h2>
          <p className=" text-sm text-gray-500">
            Our SEO plans are designed to give you the competitive edge and help
            you dominate the search engines. With our expert strategies and
            optimization techniques, we aim to skyrocket your website&apos;s
            visibility, increase organic traffic, and outrank your competitors.
            Harness the power of our SEO plans and unlock the full potential of
            your online presence. Dominate the search engines and achieve
            long-term success with our proven strategies.
          </p>
         <Link href="/contact">
          <button  className="  mt-4 bg-green-500 p-4 text-sm rounded-lg text-white">
            Contact Us
          </button>
         
         </Link>
        </div>

        <div
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="1000"
          className=" mt-6  md:p-0 md:mt-0"
        >
          <Image
            src={analysis}
            width={815}
            height={612}
            alt="service image"
            className=" lg:pl-20 p-4  md:p-0 md:w-[600px] lg:w-full md:h-[500px] object-cover object-left"
          />
        </div>
      </div>
    </div>
  );
}
export default DriveSales;
