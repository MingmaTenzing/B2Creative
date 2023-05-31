import Image from "next/image";
import analytics from "../assests/advanced analytics.png";
import email from "../assests/email marketing.png"
import videomarketing from "../assests/video marketing.png"
import SEO from "../assests/SEO.png"
import PPC from "../assestS/pay per clikc.png"
import consulting from "../assests/consulting.png"
import contentmarketing from "../assests/content marketing.png"
import webdesign from "../assests/website design.png"


type Props = {};
function ExploreServices({}: Props) {
  return (
    <div className=" p-4">
      <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" className=" flex flex-col items-center text-center mt-10 space-y-4">
        <h3 className=" uppercase font-light text-sm">Explore our services</h3>
        <h2 className=" text-2xl md:text-3xl lg:text-4xl font-semibold">
          SEO Management & Strategy Services
        </h2>
        <p className=" text-sm lg:max-w-[600px]" >
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
          libero tempus, blandit posuere and ligula varius magna a porta
          elementum massa risus
        </p>
      </div>

      <div className="  pt-10 md:flex md:flex-wrap md:justify-center lg:w-[1200px] lg:m-auto">

        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1100" className=" flex flex-col items-center md:items-start lg:flex-row lg:space-x-3 m-4  ">

          <Image
            src={analytics}
            width={512}
            height={512}
            alt="services image"
            className=" w-20 "
          />

          <div className=" md:w-[320px] space-y-2 ">

          <h3 className=" text-center md:text-start  text-xl ">Advanced Analytics Review</h3>
          <p className="text-center md:text-start  text-sm  text-gray-500 font-light">
            Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet
            turpis at augue, viverra and augue eget dictum tempor. Pulvinar
            porta blandit posuere vehicula imperdiet varius undo viverra rutrum
            dignissim
          </p>
          </div>


        </div>
        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1100" className=" flex flex-col items-center md:items-start lg:flex-row lg:space-x-3 m-4  ">

          <Image
            src={email}
            width={512}
            height={512}
            alt="services image"
            className=" w-20 "
          />

          <div className=" md:w-[320px] space-y-2 ">

          <h3 className=" text-center md:text-start  text-xl ">Email Marketing Campaigns</h3>
          <p className="text-center md:text-start  text-sm  text-gray-500 font-light">
            Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet
            turpis at augue, viverra and augue eget dictum tempor. Pulvinar
            porta blandit posuere vehicula imperdiet varius undo viverra rutrum
            dignissim
          </p>
          </div>


        </div>
        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1100" className=" flex flex-col items-center md:items-start lg:flex-row lg:space-x-3 m-4  ">

          <Image
            src={videomarketing}
            width={512}
            height={512}
            alt="services image"
            className=" w-20 "
          />

          <div className=" md:w-[320px] space-y-2 ">

          <h3 className=" text-center md:text-start  text-xl ">Video Marketing</h3>
          <p className="text-center md:text-start  text-sm  text-gray-500 font-light">
            Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet
            turpis at augue, viverra and augue eget dictum tempor. Pulvinar
            porta blandit posuere vehicula imperdiet varius undo viverra rutrum
            dignissim
          </p>
          </div>


        </div>
        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1100" className=" flex flex-col items-center md:items-start lg:flex-row lg:space-x-3 m-4  ">

          <Image
            src={SEO}
            width={512}
            height={512}
            alt="services image"
            className=" w-20 "
          />

          <div className=" md:w-[320px] space-y-2 ">

          <h3 className=" text-center md:text-start  text-xl ">Search Engine Optimization (SEO)</h3>
          <p className="text-center md:text-start  text-sm  text-gray-500 font-light">
            Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet
            turpis at augue, viverra and augue eget dictum tempor. Pulvinar
            porta blandit posuere vehicula imperdiet varius undo viverra rutrum
            dignissim
          </p>
          </div>


        </div>
        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1100" className=" flex flex-col items-center md:items-start lg:flex-row lg:space-x-3 m-4  ">

          <Image
            src={PPC}
            width={512}
            height={512}
            alt="services image"
            className=" w-20 "
          />

          <div className=" md:w-[320px] space-y-2 ">

          <h3 className=" text-center md:text-start  text-xl ">Pay Per Click (PPC)</h3>
          <p className="text-center md:text-start  text-sm  text-gray-500 font-light">
            Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet
            turpis at augue, viverra and augue eget dictum tempor. Pulvinar
            porta blandit posuere vehicula imperdiet varius undo viverra rutrum
            dignissim
          </p>
          </div>


        </div>
        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1100" className=" flex flex-col items-center md:items-start lg:flex-row lg:space-x-3 m-4  ">

          <Image
            src={consulting}
            width={512}
            height={512}
            alt="services image"
            className=" w-20 "
          />

          <div className=" md:w-[320px] space-y-2 ">

          <h3 className=" text-center md:text-start  text-xl ">Strategy and Analytics Consulting</h3>
          <p className="text-center md:text-start  text-sm  text-gray-500 font-light">
            Maecenas gravida nunc vehicula magna luctus tempor quisque laoreet
            turpis at augue, viverra and augue eget dictum tempor. Pulvinar
            porta blandit posuere vehicula imperdiet varius undo viverra rutrum
            dignissim
          </p>
          </div>


        </div>
   
       
     
      </div>
    </div>
  );
}
export default ExploreServices;
