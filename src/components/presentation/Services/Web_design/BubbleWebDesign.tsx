import React from 'react'

const BubbleWebDesign = () => {
    return (
        <div className='relative w-72 h-72 hover:scale-110 hover:bg-[#a4a4a4] flex flex-col items-center justify-center gap-2 border-4 border-[#fc7326] border-dashed bg-[#a4a4a4] bg-opacity-80 rounded-full'>
          <h1 className='text-[#7e1b1b] font-mont text-2xl text-center'>Responsive<br/>web design</h1>
          <div className='mt-2 w-24 font-semibold  border-b-4 border-[#7e1b1b]'></div>
          <p className='font-opensans font-semibold mx-8 text-center text-[#141414] text-sm mt-2'>
            NEXT vous offre l'opportunité d'avoir un site web moderne,sur mesure et responsive.Ainsi
            ,le developpement d'un site internet ne sera plus une corvée pour vous,car notre équipe de 
            professionels acharnés et passionés s'en chargera.
          </p>
        </div>
      )
}

export default BubbleWebDesign