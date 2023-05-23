import Image from "next/image"
import brand1 from "../assests/brand1.png"
import brand2 from "../assests/brand2.png"
import brand3 from "../assests/brand-3.png"
import brand4 from "../assests/brand-4.png"
import brand5 from "../assests/brand-5.png"
import dots from "../assests/dots.png"
type Props = {}
function Startups({}: Props) {
  return (
    <div className=" relative bg-[#4c47a1] p-10 md:py-15 md:text-xl  ">
        <p className="text-center text-white text-opacity-60">Used by startups, e-stores, web designers, and team including:</p>
<div className=" flex flex-wrap items-center justify-around mt-8 ">


<Image src={brand1} alt="brand image" width={300} height={150} className="w-20 m-2  md:w-28 opacity-70" />
<Image src={brand2} alt="brand image" width={300} height={150} className="w-20 m-2 md:w-28 opacity-70" />
<Image src={brand3} alt="brand image" width={300} height={150} className="w-20 m-2 md:w-28 opacity-70" />
<Image src={brand4} alt="brand image" width={300} height={150} className="w-20 m-2 md:w-28 opacity-70" />
<Image src={brand5} alt="brand image" width={300} height={150} className="w-20 m-2 md:w-28 opacity-70" />

</div>
        
        <Image src={dots} alt=" networking image" width={512} height={512} className=" w-full h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
    </div>
  )
}
export default Startups