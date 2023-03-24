// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import ClientAvavtar from "./clientAvavtar";
import BtnSliderLeft from "./BtnSliderLeft";
import BtnSliderRight from "./BtnSliderRight";
import { useState } from "react";

type Props = {
    data_img: any
}

const SlideClient = ({ data_img }: Props) => {
    const [slideIndex, setSlideIndex] = useState(1)
    const nextSlide = () => {
        if (slideIndex !== data_img.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === data_img.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(data_img.length)
        }
    }
    return (
        <div className="flex items-center justify-center">
        <BtnSliderLeft moveSlide={nextSlide} direction={"next"} />
            {data_img.map((obj: any, index: any) => {
                return (
                    <div key={obj.id}><ClientAvavtar img_url_color={obj.img_color} img_url_no_color={obj.img_without_color} /></div>
                )
            })}
            <BtnSliderRight moveSlide={prevSlide} direction={"prev"} />
        </div>
    )
}

export default SlideClient