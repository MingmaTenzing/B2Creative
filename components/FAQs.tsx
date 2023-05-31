'use client'
import { useEffect } from "react";
import { questions } from "../questions";
import Question from "../utils/Question";

type Props = {};
function FAQs({}: Props) {

  return (
    <div className=" p-4 mt-10">
      <div  data-aos="fade-up" data-aos-once="true" data-aos-duration="1000"className=" space-y-3 text-center">
        <h3 className=" uppercase font-light text-gray-500 text-sm">have questions? look here</h3>

        <h2 className=" font-semibold text-2xl md:text-3xl lg:text-4xl">Frequently Asked Questions</h2>
        <p className=" w-[400px] m-auto text-gray-600 font-light text-sm">
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
          libero tempus, blandit posuere and ligula varius magna a porta
          elementum massa risus
        </p>
      </div>

      <div>
        {
            questions.map((item) => <Question item={item} key={item.id}  />)
        }
      

      </div>
    </div>
  );
}
export default FAQs;
