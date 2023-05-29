import Image from "next/image";
import Nav from "../../../components/Nav";
import bg from "../../../assests/contact bg.jpg";

type Props = {};
function Contact({}: Props) {
  return (
    <>
      <Nav />

      <div className=" relative h-[250px] md:h-[300px] w-full ">
       <div className=" z-20 text-white  flex flex-col items-center justify-center h-full p-4 space-y-3">

        <h3  className=" text-2xl md:text-3xl lg:text-4xl font-bold">Let's Keep in Touch</h3>
        <p className=" text-center font-light md:w-[400px] ">
          Question? Comment? Let us know how can we help you. Fill in the
          contact form below to get in touch with us
        </p>
       </div>
        <Image
          src={bg}
          width={1820}
          height={725}
          alt=" contact background image"
          className=" absolute  top-0 left-0 w-full h-full object-cover object-center  -z-10  brightness-50 "
        />
      </div>
    </>
  );
}
export default Contact;
