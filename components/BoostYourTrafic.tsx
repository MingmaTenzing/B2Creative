"use client";
import Image from "next/image";
import mapimg from "../assests/bg-map.png";
import analyticsimg from "../assests/analytics.png";
import CountUp, { useCountUp } from "react-countup";
import { useRef, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";

type Props = {};
function BoostYourTrafic({}: Props) {
  const [Statsisvisible, setStatsisVisible] = useState<boolean>(false);
  {
    /** 
    const ref = useRef<HTMLDivElement | null>(null);
    const  entry = useIntersectionObserver(ref, {});

   (entry?.isIntersecting) */
  }

  useCountUp({
    ref: "counter",
    duration: 5,
    end: 4379,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <div className=" relative  text-white bg-green-700 pt-10 px-6  ">
      <div className="space-y-4  ">
        <h3 className=" uppercase font-light text-sm ">Boost your traffic</h3>
        <h4 className=" text-xl font-semibold">
          Increase your website traffic with our proven approach
        </h4>

        <div className="flex space-x-2">
          <p className=" text-sm ">•</p>

          <p className=" text-sm">
            Vitae auctor integer congue magna at pretium blandit porta justo
            integer. Feugiat a ligula rutrum luctus primis ultrice
          </p>
        </div>
        <div className="flex space-x-2">
          <p className=" text-sm ">•</p>

          <p className=" text-sm">
            Vitae auctor integer congue magna at pretium blandit porta justo
            integer. Feugiat a ligula rutrum luctus primis ultrice
          </p>
        </div>

        <div className="space-y-4 py-4 ">
          <div>
            <p className=" font-bold text-3xl">
                <span id="counter" className="  hidden"></span>
              <CountUp end={4379} className="text-3xl" enableScrollSpy />
            </p>
            <p>Websites Improved</p>
            <p className="text-sm">
              An enim nullam tempor sapien gravida donec blandit ipsum
            </p>
          </div>
          <div>
            <p className=" font-bold text-3xl">
            <CountUp end={99} className="text-3xl" enableScrollSpy />%

            </p>
            <p>Websites Improved</p>
            <p className="text-sm">
              An enim nullam tempor sapien gravida donec blandit ipsum
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Image src={analyticsimg} alt="map image" width={950} height={600} />
      </div>

      <Image
        src={mapimg}
        alt="map image"
        width={2000}
        height={1000}
        className="  absolute top-0 left-0 h-full w-full object-cover object-center"
      />
    </div>
  );
}
export default BoostYourTrafic;
