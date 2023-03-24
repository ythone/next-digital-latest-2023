import React from 'react'

const BubbleStrategie = () => {
    return (
        <div className='relative w-72 h-72 hover:scale-110 hover:bg-[#a4a4a4] flex flex-col items-center justify-center gap-2 border-4 border-[#fc7326] border-dashed bg-[#a4a4a4] bg-opacity-80 rounded-full'>
          <h1 className='text-[#7e1b1b] font-mont text-2xl text-center'>Stratégie<br/> digitale</h1>
          <div className='mt-2 w-24 font-semibold  border-b-4 border-[#7e1b1b]'></div>
          <p className='font-opensans font-semibold mx-8 text-center text-[#141414] text-sm mt-2'>
            Les nouveaus consommateurs vivent en ligne autant que dans la réalité.Ils sont connectés
            en permanence.Ils réseautent,suivent des marques,s'abonnent à des magazins et forment des
            communautés.
          </p>
        </div>
      )
}

export default BubbleStrategie