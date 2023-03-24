import React from 'react'

type Props = {
    description: string;
  }
  

const SecondCircularBubble = ({ description}: Props) => {
    return (
        <div className='relative w-72 h-72 hover:scale-110 hover:bg-[#1a1b03] flex flex-col items-center justify-center gap-2 border-4 border-[#fc7326] border-dashed bg-[#1a1b03] bg-opacity-70 rounded-full'>
          <div className='mt-2 w-24  border-b-4 border-[#fc7326]'></div>
          <p className='font-opensans mx-8 text-center text-white text-sm mt-2'>
            {description}
          </p>
        </div>
      )
}

export default SecondCircularBubble