import React from 'react'

const BubbleMedia = () => {
    return (
        <div className='relative w-96 h-96 hover:scale-110 hover:bg-[#7e7c7b] flex flex-col items-center justify-center gap-2 border-4 border-[#d96322] border-dashed bg-[#7e7c7b] bg-opacity-80 rounded-full'>
          <h1 className='text-[#7e1b1b] font-mont text-2xl'>Social Media</h1>
          <div className='mt-2 w-24  border-b-4 border-[#7e1b1b]'></div>
          <p className='font-opensans mx-8 text-center text-white text-sm mt-2'>
            Toute entreprise a besoin des réseaux sociaux pour garder une relation avec ses clients.
            Cela vous aidera à mieux les comprendre et mieux répondre à leurs demandes tout en créant
            une relation durable.
          </p>
        </div>
      )
}

export default BubbleMedia