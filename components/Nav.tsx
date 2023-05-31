"use client";
import { Bars3Icon, PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../assests/b2creative logo.jpg";
import Link from "next/link";
import { useState } from "react";

type Props = {};
function Nav({}: Props) {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className="  p-4 border-b sticky top-0 z-10 bg-white  ">
      <div className=" md:hidden flex items-center justify-between">
        <Bars3Icon
          onClick={() => setModal(!modal)}
          className="w-6 text-gray-600"
        />
        <Link href="/">
          <Image
            src={logo}
            alt="B2Creative Logo"
            width={200}
            height={200}
            className="  rounded-full w-14"
          />
        </Link>
       <Link href="/contact" >
         <PhoneIcon className="w-6 text-gray-600" />
        </Link>
      </div>

      <div className="  md:px-[100px] lg:px-[200px] items-center hidden md:flex justify-between ">
        <Link href="/">
          <Image
            src={logo}
            alt="B2Creative Logo"
            width={200}
            height={200}
            className="  rounded-full w-14"
          />
        </Link>
        <div className="flex items-center space-x-10  text-sm text-gray-600 font-semibold">
          <Link href="/about">About</Link>
          <Link
            href="/contact"
            className=" border border-black  px-4 py-3 hover:bg-green-500 hover:border-green-500 transition-all ease-linear duration-200 hover:text-white  rounded-md"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {modal && (
        <div data-aos="fade-right" data-aos-duration="300"  className=" p-4 h-[100vh] w-[200px] left-0 top-0  bg-gray-100 absolute">
        <div className=" flex justify-end ">
          <XMarkIcon className=" w-8" onClick={() => setModal(!modal)} />
          </div>

          <div className=" flex flex-col space-y-3 font-semibold text-lg text-gray-700 items-center justify-center h-full" >
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

            </div>



        </div>
      )}
    </div>
  );
}
export default Nav;
