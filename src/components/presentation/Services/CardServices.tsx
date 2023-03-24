import React, { useState } from 'react'
import { Link } from 'react-router-dom';

type Props = {
  img_url: string;
  img_url_2: string;
  titre: string;
  route: string;
}

const CardServices = ({ img_url, img_url_2, titre, route }: Props) => {
  const [isMouseEvent, setMouseEvent] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {

    const target = e.target as HTMLDivElement;
    console.log("handleMouseEnter");
    setMouseEvent(true);
    /*if (target.children.length > 1) {
      target.children[1].classList.add('opacity-100');
    }*/
  };


  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    console.log("handleMouseLeave");
    setMouseEvent(false);
    /*if (target.children.length > 1) {
      target.children[1].classList.remove('opacity-100');
    }*/
  };

  const displayImg = () => {
    if (isMouseEvent) {
      return img_url_2;
    }
    return img_url;
  }

  const ImageHover = () => {
    return (
      <div className="relative">
        <img src={img_url} alt="Image 1" className="w-24 h-auto" />
        <img src={img_url_2} alt="Image 2" className="w-full h-auto absolute top-0 left-0 opacity-0 transition-opacity duration-500" />
        <div className="absolute top-0 left-0 w-full h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} />
      </div>
    );
  }

  return (
    <Link to={route}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='bg-[#ffffff] text-[#0a0393] hover:text-white hover:bg-[#262626] hover:cursor-pointer text-center flex flex-col items-center justify-center p-6'>
        <img className='w-24 h-24' src={displayImg()} alt="" />
        <h1 className='font-bold font-mont text-xl text-center '>{titre}</h1>
      </div>
    </Link>
  )
}

export default CardServices