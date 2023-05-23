"use client";
import CountUp from "react-countup";

type Props = {};
function RecordSuccess({}: Props) {
  return (
    <div className=" mt-10  p-8">
      <div>
        <div  className=" space-y-3 flex flex-col items-center text-center">
          <h3 className=" uppercase text-sm font-light">
            Planning for the future
          </h3>
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-semibold">
            Our Track Record of Success
          </h2>
            <p className=" text-sm text-gray-600 md:w-[400px]">
            Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
            primis libero tempus, blandit posuere and ligula varius magna a
            porta elementum massa risus
          </p>
        </div>

        <div className=" mt-4 flex flex-col items-center md:flex-row md:flex md:justify-center">
          <div className="  m-4 hover:scale-105 cursor-pointer hover:bg-white hover:shadow-lg transition-all ease-linear  duration-150 p-4 bg-gray-200 bg-opacity-30  w-[300px] h-[250px] flex flex-col items-center justify-center text-center space-y-2">
            <CountUp
              className=" font-bold text-4xl text-green-500"
              end={3485}
              duration={4}
              enableScrollSpy
              scrollSpyOnce
            />

            <h4 className=" font-semibold text-gray-600 text-lg" > Links Optimized</h4>
            <p className=" font-light text-sm">Sagittis congue augue egestas and egestas magna ociis </p>
          </div>
          <div className="  m-4 hover:scale-105 cursor-pointer hover:bg-white hover:shadow-lg transition-all ease-linear  duration-150 p-4 bg-gray-200 bg-opacity-30  w-[300px] h-[250px] flex flex-col items-center justify-center text-center space-y-2">
            <CountUp
              className=" font-bold text-4xl text-green-500"
              duration={3}
              end={2287}
              enableScrollSpy
              scrollSpyOnce
            />

            <h4 className=" font-semibold text-gray-600 text-lg" > Happy Customers</h4>
            <p className=" font-light text-sm">Sagittis congue augue egestas and egestas magna ociis </p>
          </div>
          <div className="  m-4 hover:scale-105 cursor-pointer hover:bg-white hover:shadow-lg transition-all ease-linear  duration-150 p-4 bg-gray-200 bg-opacity-30  w-[300px] h-[250px] flex flex-col items-center justify-center text-center space-y-2">
            <CountUp
              className=" font-bold text-4xl text-green-500"
              end={4379}
              duration={5}
              enableScrollSpy
              scrollSpyOnce
            />

            <h4 className=" font-semibold text-gray-600 text-lg" >Websites Improved</h4>
            <p className=" font-light text-sm">Sagittis congue augue egestas and egestas magna ociis </p>
          </div>
       
        </div>
      </div>
    </div>
  );
}
export default RecordSuccess;
