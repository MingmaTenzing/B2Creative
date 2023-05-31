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

  useCountUp({
    ref: "counter",
    duration: 5,
    end: 4379,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <div className=" md:flex  lg:space-x-20 lg:justify-center overflow-hidden md:items-center  md:space-x-4 relative  text-white bg-green-600 pt-10 px-6 md:pl-10 md:pt-20 md:px-0 ">
      <div className="space-y-4  lg:max-w-[600px] lg:pl-20  ">
        <h3
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="800"
          className=" uppercase font-light text-sm "
        >
          Boost your traffic
        </h3>
        <h4
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="900"
          className=" text-2xl  md:text-3xl lg:text-4xl font-semibold"
        >
          Increase your website traffic with our proven approach
        </h4>

        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="900"
          className="flex space-x-2"
        >
          <p className=" text-sm ">•</p>

          <p className=" text-sm">
            Increase your website's visibility and reach through our proven
            approach to SEO.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="900"
          className="flex space-x-2"
        >
          <p className=" text-sm ">•</p>

          <p className=" text-sm">
            Outrank your competitors and drive targeted traffic to your website
            with our effective optimization strategies.
          </p>
        </div>

        <div className="space-y-4 py-4 ">
          <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
            <p className=" font-bold text-3xl">
              <span id="counter" className="  hidden"></span>
              <CountUp
                scrollSpyOnce
                end={4379}
                className="text-3xl"
                enableScrollSpy
              />
            </p>
            <p className=" font-bold">Websites Improved</p>
            <p className="text-sm">
              Our expertise and proven strategies have helped numerous
              businesses enhance their online presence, boost rankings, and
              increase organic traffic.{" "}
            </p>
          </div>
          <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1100">
            <p className=" font-bold text-3xl">
              <CountUp
                scrollSpyOnce
                end={99}
                className="text-3xl"
                enableScrollSpy
              />
              %
            </p>
            <p className=" font-bold">Customer Satisfaction</p>
            <p className="text-sm">
              Experience our exceptional customer satisfaction rate. Join
              countless delighted clients who have achieved outstanding results
              with our services. Your success is our priority.{" "}
            </p>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-duration="900"
        className="mt-4"
      >
        <Image
          src={analyticsimg}
          alt="map image"
          width={950}
          height={600}
          className=" md:h-[500px] md:w-[600px] lg:w-full object-cover object-left"
        />
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
