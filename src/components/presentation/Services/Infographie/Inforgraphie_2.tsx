import React from 'react'
import BubbleInfograph_21 from './BubbleInfograph_21'
import BubbleInfograph_22 from './BubbleInfograph_22'
import BubbleInfograph_23 from './BubbleInfograph_23'
import DemanderDevisReverse from '../../OrangeNavigation/DemanderDevisReverse'
import { SlArrowUp } from 'react-icons/sl'

type Props = {
    setPage: (value: React.SetStateAction<boolean>) => void,
    isturnpage: boolean
}


const Inforgraphie_2 = ({ setPage, isturnpage }: Props) => {
    const handlePage = () => {
        setPage(!isturnpage);
    }

    return (
        <>
            <img className='object-cover' src="./infographie_2.jpg" alt="" />
            <div className='fixed top-1 w-full'>
            <div onClick={handlePage} className='text-white flex items-center justify-center mt-3 text-6xl'>
                    <span><SlArrowUp /></span>
                </div>
                <div className='grid grid-cols-3 gap-8 mt-5 px-20'>
                    <div className='col-span-1 flex flex-col items-center justify-end mt-10 gap-8'>
                        <BubbleInfograph_21 />
                    </div>
                    <div className='col-span-1 flex flex-col items-center mt-10 gap-8'>
                        <BubbleInfograph_22 />
                    </div>
                    <div className='col-span-1 flex flex-col items-center justify-between gap-8'>
                        <BubbleInfograph_23 />
                    </div>
                </div>
                <div className='flex items-center justify-end px-20 mt-10'>
                <DemanderDevisReverse/>
                </div>
            </div>
        </>
    )
}

export default Inforgraphie_2