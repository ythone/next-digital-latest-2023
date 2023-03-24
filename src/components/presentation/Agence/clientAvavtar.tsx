import React from 'react'

type Props = {
    img_url_color:string;
    img_url_no_color:string;
}

const ClientAvavtar = ({img_url_color,img_url_no_color}:Props) => {
  return (
    <div className='bg-[#231414] p-4 rounded-full'>
        <img className='w-20 h-20' src={img_url_no_color} alt="" />
    </div>
  )
}

export default ClientAvavtar