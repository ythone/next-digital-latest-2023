import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

const DemanderDevisReverse = () => {
    return (
        <div className='flex items-start justify-start font-opensans gap-2 text-white'>
            <div className='bg-[#06126c] text-5xl rotate-180'>
                <span className=''><BsFillPlayFill /></span>
            </div>
            <div className='bg-[#fc7326] text-3xl py-1 pb-2 px-5'>
                Demandez un devis
            </div>
        </div>
    )
}

export default DemanderDevisReverse