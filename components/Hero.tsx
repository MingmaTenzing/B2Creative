import Image from "next/image"
import marketingimg from "../assests/marketing.png"
import wave from "../assests/wave.svg"
import BGMAP from "../assests/bg-map.png"
type Props = {}
const Hero = (props: Props) => {
  return (
    <>
    <section className=" relative md:flex md:justify-center  md:items-center   space-y-4  md:px-16 lg:py-0  py-20 p-4 bg-b2creative text-white overflow-hidden">
          <div  className=" space-y-4  flex flex-col items-center md:items-start lg:w-[500px]">
            <h1 data-aos="fade-up"  data-aos-duration="700" className=" text-center md:text-start md:text-4xl text-2xl lg:text-5xl font-semibold">
              Higher Rankings. Relevant Visitors. More Customers
            </h1>
            <p data-aos="fade-up"  data-aos-duration="900" className="text-center md:text-start md:text-lg">
              B2Creative: Your digital marketing partner for success. Strategic
              planning, creative design, and data-driven strategies to enhance
              your online presence and drive results. Let's unlock your
              business's full potential..
            </p>
            <button  data-aos="fade-up"  data-aos-duration="1000" className=" hover:border-white hover:bg-transparent transition-all ease-linear duration-200 border border-green-500 bg-green-500 p-3  text-sm rounded-lg">
             Contact Us
            </button>
          </div>
          <div>
            <Image
             data-aos="fade-left"  data-aos-duration="900"
              src={marketingimg}
              alt="marketing image"
              width={675}
              height={590}
              className=" min-w-[400px]"
            />
          </div>
        </section>
        <div className=" -mt-3 lg:-mt-20">
          <Image src={wave} width={1920} height={1080} alt="wave" />
        </div>

        <Image src={BGMAP}  width={1080} height={1080} alt="bg image" className=" absolute w-full h-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover brightness-200" />
        </>
  )
}
export default Hero