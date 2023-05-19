import Image from "next/image";
import discuss from "../assests/discuss.jpg";

type Props = {};
function WelcomeSection({}: Props) {
  return (
    <div className=" mt-10 bg-[#f8f9fb]  md:space-y-0 ">

  <div className=" lg:w-[1000px] m-auto flex flex-col items-center p-8 space-y-8 md:space-y-0  md:flex-row md:space-x-8 md:py-20 md:px-10 ">



  
      <Image
        src={discuss}
        alt="Meeting"
        width={1000}
        height={653}
        className="w-[300px] h-[350px] md:h-[400px] lg:w-[400px] lg:h-[480px] object-cover rounded-lg object-center shadow-lg"
      />
      <div className=" space-y-3 lg:space-y-6">
        <h3 className="  font-light  uppercase text-gray-500">Welcome to B2Creative</h3>
        <h2 className="  font-semibold text-xl md:text-3xl text-gray-600 ">We're providing the best SEO services for your website</h2>
        <p className=" text-gray-600">
          An enim nullam tempor sapien gravida donec pretium ipsum porta justo
          integer at odio velna vitae auctor integera congue magna at purus
          pretium ligula rutrum luctus ultrice a gravida lectus suscipit gestas
          magna suscipit luctus undo
        </p>
      </div>
    </div>
    </div>
  );
}
export default WelcomeSection;
