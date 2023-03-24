import React from 'react'

type Props = {
  titre:string;
  description:string;
  img_url:string;
}

const CircularBubble = ({titre,description,img_url}:Props) => {
  const displayImg = ()=>{
    if(img_url!=""){
      return <>
      <img className='w-12 h-12' src={img_url} alt="" />
      </>
    }
    return <></>
  }
  return (
    <div className='relative w-72 h-72 hover:scale-110 hover:bg-[#110f37] flex flex-col items-center justify-center gap-2 border-4 border-[#fdf70d] border-dashed bg-[#110f37] rounded-full'>
      {displayImg()}
      <h1 className='text-[#fdf70d] font-mont text-2xl'>{titre}</h1>
      <div className='mt-2 w-24  border-b-4 border-[#fdf70d]'></div>
      <p className='font-opensans mx-8 text-center text-white text-sm mt-2'>
        {description}
      </p>
    </div>
  )
}

export default CircularBubble