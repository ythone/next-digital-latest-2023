import { MdArrowRight } from "react-icons/md";

type Props = {
  direction:string;
  moveSlide:()=>void;
}

export default function BtnSliderRight({ direction, moveSlide }:Props) {
    return (
      <div className="text-[#653d2c] text-8xl hover:cursor-pointer hover:scale-110" onClick={moveSlide}>
        <span><MdArrowRight/></span>
      </div>
    );
  }