import Image from "next/image";
import image from "../assests/marketing.png";
import localseo from "../assests/local-seo.svg"
import ecommerce from "../assests/e-commerce.svg"
import analytics from "../assests/analytics.svg"
import PPC from "../assests/PPC.svg"
type Props = {};
function SEOServices({}: Props) {
  return (
    <div className="  p-4">
        <div className="flex flex-col items-center text-center space-y-3">


      <p className="  uppercase text-gray-400">knowledge of the market</p>
      <h2 className="  font-semibold lg:text-4xl text-2xl md:text-3xl ">Custom SEO Services – Our Specialty</h2>
      <p className="text-gray-500 md:w-[500px]">
        Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
        libero tempus, blandit posuere and ligula varius magna a porta elementum
        massa risus
      </p>
        </div>

        <div className="flex flex-col items-center mt-4 md:flex-row md:flex-wrap md:space-y-0 md: justify-center">
            <div className=" hover:scale-105 m-4 transition-all ease-linear duration-200 hover:shadow-lg space-y-3 w-[300px] border lg:border-none h-[280px] text-center flex flex-col items-center justify-center p-4">
                <Image src={localseo} alt="local seo" width={200} height={200} className="w-[120px]" />
                <h3 className=" text-gray-600 md: font-semibold">Local SEO</h3>
                <p className=" text-gray-500 font-light text-sm">Boost local visibility. Dominate search results. Drive local customers.</p>


            </div>
            <div className=" hover:scale-105 m-4 transition-all ease-linear duration-200 hover:shadow-lg space-y-3 w-[300px] border lg:border-none h-[280px] text-center flex flex-col items-center justify-center p-4">
                <Image src={ecommerce} alt="local seo" width={200} height={200} className="w-[120px]" />
                <h3 className=" text-gray-600 md: font-semibold">E-Commerce SEO</h3>
                <p className=" text-gray-500 font-light text-sm">Boost local visibility. Dominate search results. Drive local customers.</p>


            </div>
            <div className=" hover:scale-105 m-4 transition-all ease-linear duration-200 hover:shadow-lg space-y-3 w-[300px] border lg:border-none h-[280px] text-center flex flex-col items-center justify-center p-4">
                <Image src={analytics} alt="local seo" width={200} height={200} className="w-[120px]" />
                <h3 className=" text-gray-600 md: font-semibold">Advanced Analytics</h3>
                <p className=" text-gray-500 font-light text-sm">Boost local visibility. Dominate search results. Drive local customers.</p>


            </div>
            <div className=" hover:scale-105 m-4 transition-all ease-linear duration-200 hover:shadow-lg space-y-3 w-[300px] border lg:border-none h-[280px] text-center flex flex-col items-center justify-center p-4">
                <Image src={PPC} alt="local seo" width={200} height={200} className="w-[120px]" />
                <h3 className=" text-gray-600 md: font-semibold">PPC Management</h3>
                <p className=" text-gray-500 font-light text-sm">Boost local visibility. Dominate search results. Drive local customers.</p>


            </div>
        </div>
    </div>
  );
}
export default SEOServices;
