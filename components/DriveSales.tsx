import Image from "next/image";
import analysis from "../assests/analysis.png"

type Props = {};
function DriveSales({}: Props) {
  return (
    <div className=" mt-10">

        <div  className="   w-full overflow-hidden  md:flex items-center md:justify-center ">



        <div className=" p-4  space-y-3  md:w-[700px] lg:pl-20 ">


      <h3 className=" text-sm font-light uppercase">DRIVE SALES & LEADS</h3>
      <h2 className=" text-2xl md:text-3xl lg:text-4xl font-semibold">
        Our SEO plans will help you to dominate the search engines
      </h2>
      <p className=" text-sm text-gray-500">


      Velna iaculis odio auctor integer congue and impedit magna viverra dolor
      vitae donec mauris lectus laoreet gestas neque undo luctus feugiat. Justo
      integer at odio velna vitae Integer congue magna at pretium purus pretium
      ligula at rutrum luctus risus eros dolor auctor ipsum blandit luctus purus
      vehicula magna a tempor. Quisque vel laoreet turpis and cubilia augue.
      Sagittis congue augue egestas volutpat egestas magna
      </p>
      <button className=" bg-green-500 p-4 text-sm rounded-lg text-white">Our Pricing Packages</button>
        </div>

        <div className=" mt-6  md:p-0 md:mt-0">
            <Image src={analysis} width={815} height={612} alt="service image" className=" lg:pl-20 p-4  md:p-0 md:w-[600px] lg:w-full md:h-[500px] object-cover object-left" /> 


        </div>
        </div>
    </div>
  );
}
export default DriveSales;
