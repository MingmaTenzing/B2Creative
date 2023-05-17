import Image from "next/image"
import marketingimg from "../assests/marketing.png"
import wave from "../assests/wave.svg"
type Props = {}
const Hero = (props: Props) => {
  return (
    <>
    <section className=" md:flex md:justify-center  md:items-center  relative space-y-4  md:px-16 lg:py-0  py-20 p-4 bg-b2creative text-white">
          <div className=" space-y-4  flex flex-col items-center md:items-start lg:w-[500px]">
            <h1 className=" text-center md:text-start md:text-4xl text-2xl lg:text-5xl font-semibold">
              Higher Rankings. Relevant Visitors. More Customers
            </h1>
            <p className="text-center md:text-start md:text-lg">
              B2Creative: Your digital marketing partner for success. Strategic
              planning, creative design, and data-driven strategies to enhance
              your online presence and drive results. Let's unlock your
              business's full potential..
            </p>
            <button className=" hover:border-white hover:bg-transparent transition-all ease-linear duration-200 border border-green-500 bg-green-500 p-3  text-sm rounded-lg">
              See Case Studies
            </button>
          </div>
          <div>
            <Image
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
        </>
  )
}
export default Hero