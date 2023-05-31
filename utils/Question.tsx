import {
  ChevronDownIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export interface questiontype {
  title: string;
  id: number;
  answer: string;
}

interface Props {
  item: questiontype;
}

function Question({ item }: Props) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" className=" md:w-[600px] m-auto">
      <div className="m-4 cursor-pointer">
        <div
          onClick={() => setOpenModal(!openModal)}
          className=" flex items-center  justify-between border p-4 rounded-lg bg-gray-200 bg-opacity-40 "
        >
          <p className="  font-semibold">{item.title}</p>
          {openModal ? (
            <ChevronUpIcon
              data-aos="flip-down"
              className=" w-6"
              onClick={() => setOpenModal(!openModal)}
            />
          ) : (
            <ChevronDownIcon
              data-aos="flip-up"
              className=" w-6"
              onClick={() => setOpenModal(!openModal)}
            />
          )}
        </div>
        {openModal && (
          <div data-aos="fade-down" data-aos-once="true" className=" p-4">
            <p className="   text-sm font-light text-gray-500">{item.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Question;
