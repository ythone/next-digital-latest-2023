import React from 'react'

const BubbleInfograph = () => {
    return (
        <div className='relative w-72 h-72 hover:scale-110 hover:bg-[#110f37] flex flex-col items-center justify-center gap-2 border-4 border-[#fdf70d] border-dashed bg-[#110f37] bg-opacity-80 rounded-full'>
          <h1 className='text-[#fdf70d] font-mont text-2xl text-center'>Infographie</h1>
          <div className='mt-2 w-24 font-semibold  border-b-4 border-[#fdf70d]'></div>
          <p className='font-opensans font-semibold mx-8 text-center text-[white] text-sm mt-2'>
            Ici,pas de création prêt-à-porter sans personnalité,mais du graphisme,des illustrations
            et du design sur-mesure!
          </p>
        </div>
      )
}

export default BubbleInfograph