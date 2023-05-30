"use client"
import Image from "next/image";
import Nav from "../../../components/Nav";
import bg from "../../../assests/contact bg.jpg";
import Footer from "../../../components/Footer";
import { FormEvent, useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

type Props = {};

function Contact({}: Props) {

  const [fullName, setfullName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const form = useRef<HTMLFormElement | null>(null);
  useEffect(() => {
window.scrollTo(0, 0);
  },[])


  function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const currentForm = form.current;
    if( currentForm == null){
      return;
    }
    emailjs.sendForm('service_r9j6cse', 'template_rdn6rwe', form.current!, 'rRfW0Y-rhgWuB17Pc').then((result) => {
      setfullName("");
      setEmail("");
      setMessage("");
      toast.success('Your Message has been sent ')
      

    }, (error) => {
      console.log(error.text);
    })
  

  }
  return (
    <>
      <Nav />
      <Toaster />

      <div className=" relative h-[250px] md:h-[300px] w-full ">
        <div className=" z-20 text-white  flex flex-col items-center justify-center h-full p-4 space-y-3">
          <h3 className=" text-2xl md:text-3xl lg:text-4xl font-bold">
            Let's Keep in Touch
          </h3>
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

      <div className=" p-4 md: flex md:w-[900px] md:items-center m-auto md:space-x-8">
        <form ref={form} onSubmit={sendMessage} className="  space-y-4 mt-10 ">
          <h1 className=" font-bold text-xl md:text-2xl lg:text-3xl mb-2 text-gray-700">
            Contact Us, Right Away!
          </h1>
          <input onChange={(e) => setfullName(e.target.value)}
           value={fullName}
           className=" outline-none border h-[60px]    rounded-lg p-2 w-full"
            type="text"
            placeholder=" Full Name"
            name="user_name"
            required
          ></input>
          <input
            className=" outline-none border  h-[60px] rounded-lg p-2 w-full "
            type="email"
            value={email}
            name="user_email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" Email Address"
          ></input>
          <textarea value={message} name="message" required onChange={(e) => setMessage(e.target.value)} className=" p-4 rounded-lg border outline-none h-[200px] w-full"></textarea>
          <div className=" flex  md:justify-end">
            <button value="Send" type="submit" className="   bg-green-500 p-3 text-white rounded-lg text-sm font-semibold ">
              Send Message 
            </button>
          </div>
        </form>

        <div className=" mt-10 md:mt-0 space-y-4">
          <div className=" ">
            <h3 className=" mb-2 font-semibold text-lg text-gray-700">
              Our Location:
            </h3>
            <div className=" space-y-1">
              <p className=" font-light text-gray-500">West Perth, Perth</p>
              <p className=" font-light text-gray-500">121 Hay Street</p>
              <p className=" font-light text-gray-500">Western Australia</p>
            </div>
          </div>
          <div className="">
            <h3 className=" mb-2 font-semibold text-lg text-gray-700">
              Contact Details:
            </h3>
            <div className=" space-y-1">
              <p className=" font-light text-gray-500">Phone: 0415 877 553</p>
              <p className=" font-light text-gray-500">
                Email:b2creative.au@gmail.com{" "}
              </p>
              <p className=" font-light text-gray-500"></p>
            </div>
          </div>
          <div className="">
            <h3 className=" mb-2 font-semibold text-lg text-gray-700">
              Office Hours:
            </h3>
            <div className=" space-y-1">
              <p className=" font-light text-gray-500">Mon-Fri: 9:00am - 4pm</p>
              <p className=" font-light text-gray-500">
                Saturday: 9:00am - 3pm
              </p>
              <p className=" font-light text-gray-500">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact;
