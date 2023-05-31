import Image from "next/image";
import growbusiness from "../assests/progress.svg";
import { CheckIcon } from "@heroicons/react/24/outline";

type Props = {};
function GrowBusiness({}: Props) {
  return (
    <div className=" bg-[#f8f9fb] p-8  ">
        <div className=" space-y-5 md:space-y-0 md:flex md:items-center md:space-x-8 md:py-20 lg:w-[1000px] lg:m-auto lg:space-x-20">




      <div data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
        <Image
          src={growbusiness}
          height={512}
          width={512}
          alt=" business growth picture"
          className="  transform  -scale-x-100 md:min-w-[300px] lg:min-w-[400px]"
        />
      </div>

      <div data-aos="fade-left" data-aos-once="true" data-aos-duration="1000" className=" space-y-3">
        <h3 className=" uppercase font-light text-sm text-gray-500">
          GET YOUR NEXT LEVEL
        </h3>
        <h2 className="  text-2xl md:text-3xl lg:text-4xl font-semibold">
          We craft marketing & digital products that grow business
        </h2>
        <p className=" text-sm   text-gray-500">
          An enim nullam tempor sapien gravida donec pretium ipsum porta justo
          integer and odio velna vitae auctor integera congue magna at purus
          pretium ligula rutrum luctus and ultrice a gravida lectus
        </p>

        <div className=" space-y-4">
          <div className=" flex items-center space-x-2">
            <CheckIcon className="w-6 text-green-500 font-bold" />
            <p className=" text-gray-500 text-sm">
              Vitae auctor integer congue magna at pretium
            </p>
          </div>
          <div className=" flex items-center space-x-2">
            <CheckIcon className="w-6 text-green-500 font-bold" />
            <p className=" text-gray-500 text-sm">
              Integer congue magna and pretium purus ligula
            </p>
          </div>
          <div className=" flex items-center space-x-2">
            <CheckIcon className="w-6 text-green-500 font-bold" />
            <p className=" text-gray-500 text-sm">
              Sagittis congue augue egestas volutpat egestas
            </p>
          </div>
          <button className=" mt-3  bg-green-500 p-3 text-white rounded-lg text-sm">
            Get a Free SEO Analysis
          </button>
        </div>
      </div>
        </div>
    </div>
  );
}
export default GrowBusiness;
