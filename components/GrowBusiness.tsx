import Image from "next/image";
import growbusiness from "../assests/progress.svg";
import { CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {};
function GrowBusiness({}: Props) {
  return (
    <div className=" bg-[#f8f9fb] p-8  ">
      <div className=" space-y-5 md:space-y-0 md:flex md:items-center md:space-x-8 md:py-20 lg:w-[1000px] lg:m-auto lg:space-x-20">
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <Image
            src={growbusiness}
            height={512}
            width={512}
            alt=" business growth picture"
            className="  transform  -scale-x-100 md:min-w-[300px] lg:min-w-[400px]"
          />
        </div>

        <div
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="1000"
          className=" space-y-3"
        >
          <h3 className=" uppercase font-light text-sm text-gray-500">
            GET YOUR NEXT LEVEL
          </h3>
          <h2 className="  text-2xl md:text-3xl lg:text-4xl font-semibold">
            We craft marketing & digital products that grow business
          </h2>
          <p className=" text-sm   text-gray-500">
            We specialize in crafting marketing and digital products that drive
            business growth. Our expert team combines creativity, strategy, and
            technical expertise to deliver impactful solutions tailored to your
            unique needs. Experience the power of our services and take your
            business to new heights.
          </p>

          <div className=" space-y-4">
            <div className=" flex items-center space-x-2">
              <CheckIcon className="w-6 text-green-500 font-bold" />
              <p className=" text-gray-500 text-sm">
                Tailored marketing strategies and digital products.
              </p>
            </div>
            <div className=" flex items-center space-x-2">
              <CheckIcon className="w-6 text-green-500 font-bold" />
              <p className=" text-gray-500 text-sm">
                Creative excellence for visually stunning and user-friendly
                solutions.
              </p>
            </div>
            <div className=" flex items-center space-x-2">
              <CheckIcon className="w-6 text-green-500 font-bold" />
              <p className=" text-gray-500 text-sm">
                Growth-focused approach driving measurable results.{" "}
              </p>
            </div>
            <Link href="/contact">
              <button className=" mt-3  bg-green-500 p-3 text-white rounded-lg text-sm">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GrowBusiness;
