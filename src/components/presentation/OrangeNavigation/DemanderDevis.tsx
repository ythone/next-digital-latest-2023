import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

const DemanderDevis = () => {
    return (
        <div className='flex items-start justify-start font-opensans gap-2 text-white'>
            <div className='bg-[#fc7326] text-4xl py-1 px-10'>
                Demandez un devis
            </div>
            <div className='bg-[#06126c] text-5xl'>
                <span><BsFillPlayFill /></span>
            </div>
        </div>
    )
}

export default DemanderDevis