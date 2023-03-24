import React from 'react'
import { ImFacebook, ImTwitter, ImWhatsapp } from "react-icons/im";
import { BsInstagram } from 'react-icons/bs';
import { SlArrowDown } from "react-icons/sl";

const SocialMediaButton = () => {
  return (
    <>
              <div className='rounded-full hover:scale-110 hover:cursor-pointer h-8 w-8 bg-[#fc7326] flex items-center justify-center p-1 my-2'><span className='text-[#d1cfce] text-2xl'><ImFacebook /></span></div>
              <div className='rounded-full hover:scale-110 hover:cursor-pointer h-8 w-8 bg-[#fc7326] flex items-center justify-center p-1 my-2'><span className='text-[#d1cfce] text-2xl'><ImTwitter /></span></div>
              <div className='rounded-full hover:scale-110 hover:cursor-pointer h-8 w-8 bg-[#fc7326] flex items-center justify-center p-1 my-2'><span className='text-[#d1cfce] text-2xl'><BsInstagram /></span></div>
              <div className='rounded-full hover:scale-110 hover:cursor-pointer h-8 w-8 bg-[#fc7326] flex items-center justify-center p-1 my-2'><span className='text-[#d1cfce] text-2xl'><ImWhatsapp /></span></div>
    </>
  )
}

export default SocialMediaButton