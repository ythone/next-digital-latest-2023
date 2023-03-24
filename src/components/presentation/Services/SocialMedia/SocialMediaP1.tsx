import React from 'react'
import CustomDropdown from '../../CustomDopdown/CustomDropdown'
import SocialMediaButton from '../../SocialMediaButton/SocialMediaButton'
import { SlArrowDown } from 'react-icons/sl'
import OrangeBar from '../../OrangeNavigation/OrangeBar'
import BubbleMedia from './BubbleMedia'
import { BsFillPlayFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

type Props = {
    setPage: (value: React.SetStateAction<boolean>) => void,
    isturnpage: boolean
}


const SocialMediaP1 = ({ setPage, isturnpage }: Props) => {
    const handlePage = () => {
        setPage(!isturnpage);
    }

    const listlang = [
        "ENG",
        "FR"
    ]

    return (
        <div className='fixed top-1 w-full hover:cursor-pointer mb-20 px-20 grid grid-cols-6 gap-4'>
            <div className='col-span-4 text-start flex flex-col gap-3 mt-2'>
                <BubbleMedia />
                <div className='my-1 z-50'>
                    <OrangeBar titre={'Services'} />
                </div>
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='text-white'>
                    <p>Chez <span className='text-[#fc7326]'>NEXT,</span>nous sommes consciens qu'il faudra établir
                        des axes de travail fortement bien pensés afin de réussir votre stratégie.C'est la raison pour laquelle,notre
                        démarche concilie deux points:<br />
                    </p>
                    <p className='flex items-center mb-1 text-[#fc7326]'><span className='flex items-center'><BsFillPlayFill /></span>La quête de fusion et de la cohésion dans
                        la charte éditoriale.</p>
                    <p className='flex items-center text-[#fc7326]'><span className='flex items-center'><BsFillPlayFill /></span>Respect de la distinction et de l'adaptabilité.</p>
                </motion.div>
                <div onClick={handlePage} className='text-white flex flex-col items-end mb-2 text-4xl'>
                    <span><SlArrowDown /></span>
                </div>
            </div>
            <div className='col-span-1 flex flex-col items-end justify-end'>
                <img className='' src="./phone_social1.png" alt="" />
            </div>
            <div className='flex flex-col items-end justify-start mt-5 gap-5 col-span-1'>
                <div>
                    <img className='w-48 h-46 hover:scale-110' src="https://i.postimg.cc/Njjfwyps/LOGO-NEXT-2023.jpg" alt="" />
                    <div className='w-16 float-right'>
                        <CustomDropdown
                            is_img={true}
                            content={'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png'}
                            list={listlang} />
                    </div>
                </div>
                <div className='gap-2'>
                    <div className=''>
                        <SocialMediaButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaP1