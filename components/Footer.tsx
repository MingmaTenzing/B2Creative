import Image from "next/image";
import logo from "../assests/b2creative logo.jpg";
import Link from "next/link";
import instagram from "../assests/instagram.png";
import facebook from "../assests/facebook.png";
import tiktok from "../assests/tik-tok.png";

type Props = {};
function Footer({}: Props) {
  return (
    <div className=" mt-20 border-t  p-4   ">
      <div className="  lg:flex   justify-between py-10 lg:items-center">
        <div className=" lg:max-w-[300px] space-y-4 flex flex-col items-center">
          <Image
            src={logo}
            width={200}
            height={200}
            alt="B2Creatvie Logo"
            className=" w-16"
          />
          <p className=" text-center font-light text-gray-600 ">
            Your digital marketing partner for success.
          </p>
        </div>

        <div className=" mt-8 space-y-4 md:space-y-0 md:flex md:space-x-40">
          <div className=" space-y-3 flex-col flex ">
            <h3 className=" font-semibold text-lg">Quick Links</h3>
            <Link target="_blank" href="/about" className=" font-light">
              About Us
            </Link>
            <p className=" cursor-pointer  font-light">Case Studies</p>
            <p className=" font-light">Lawyer SEO</p>
            <p className=" font-light">Testimonials</p>
          </div>
          <div className=" space-y-3 flex-col flex ">
            <h3 className=" font-semibold text-lg">Featured Services</h3>
            <p className=" font-light">Local SEO</p>
            <p className=" font-light">Social Media Marketing</p>
            <p className=" font-light">SEO Optimization</p>
            <p className=" font-light">Pay Per Click Management</p>
          </div>

          <div className=" space-y-4">
            <h3 className=" font-semibold text-lg">Follow the Best</h3>
            <input
              className=" border outline-none p-4 w-full"
              placeholder="Email Address"
            ></input>
            <div className="  space-y-2">
              <h3 className=" font-semibold text-lg">Find Us On</h3>
              <div className=" flex items-center space-x-3">
                <Link target="_blank" href="https://www.instagram.com/b2creative.au/">
                  <Image
                    src={instagram}
                    height={200}
                    width={200}
                    alt="instagram b2creative"
                    className=" w-10 hover:scale-110 transition-all ease-linear duration-150"
                  />
                </Link>
                <Link target="_blank" href="https://www.facebook.com/profile.php?id=100091245305321">
                  <Image
                    src={facebook}
                    height={200}
                    width={200}
                    alt="instagram b2creative"
                    className=" w-10 hover:scale-110 transition-all ease-linear duration-150"
                  />
                </Link>
                <Link  target="_blank" href="https://www.tiktok.com/@b2creative.au?is_from_webapp=1&sender_device=pc">
                  <Image
                    src={tiktok}
                    height={200}
                    width={200}
                    alt="instagram b2creative"
                    className=" w-10 hover:scale-110 transition-all ease-linear duration-150"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-10">
        <p className=" text-center font-light text-sm">
          © Copyright B2CREATIVE 2023
        </p>
      </div>
    </div>
  );
}
export default Footer;
