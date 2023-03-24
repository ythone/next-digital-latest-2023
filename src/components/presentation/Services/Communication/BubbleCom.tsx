import React from 'react'

const BubbleCom = () => {
    return (
        <div className='relative w-72 h-72 hover:scale-110 hover:bg-[#bfbfbe] flex flex-col items-center justify-center gap-2 border-4 border-[#fc7326] border-dashed bg-[#bfbfbe] bg-opacity-80 rounded-full'>
          <h1 className='text-[#cf1c20] font-mont text-xl text-center'>Supports de <br/>communication</h1>
          <div className='mt-2 w-24  border-b-4 border-[#cf1c20]'></div>
          <p className='font-opensans mx-8 text-center text-white text-sm mt-2'>
            Assurer la publicité de son entreprise,de ses produits,de ses évènements et de ses offres
            sont indispensables pour déveloper son portefeuille client et de générer de nouvelles affaires.
          </p>
        </div>
      )
}

export default BubbleCom