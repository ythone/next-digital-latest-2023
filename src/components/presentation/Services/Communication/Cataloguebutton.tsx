import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

const Cataloguebutton = () => {
    return (
        <div className='flex items-start justify-start font-opensans gap-2 text-white'>
            <div className='bg-[#ff007c] uppercase font-franklin text-4xl py-1 px-5'>
                Catalogue
            </div>
            <div className='bg-[#06126c] text-5xl'>
                <span><BsFillPlayFill /></span>
            </div>
        </div>
    )
}

export default Cataloguebutton