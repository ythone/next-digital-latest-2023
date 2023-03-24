import React from 'react'
import { SlArrowDown } from 'react-icons/sl'
import OrangeBar from '../../OrangeNavigation/OrangeBar'
import SocialMediaButton from '../../SocialMediaButton/SocialMediaButton'
import CustomDropdown from '../../CustomDopdown/CustomDropdown'
import BubbleInfograph from './BubbleInfograph'
import { BsFillPlayFill } from 'react-icons/bs'


type Props = {
    setPage: (value: React.SetStateAction<boolean>) => void,
    isturnpage: boolean
}


const Infographie_1 = ({ setPage, isturnpage }: Props) => {
    const handlePage = () => {
        setPage(!isturnpage);
    }

    const listlang = [
        "ENG",
        "FR"
    ]

    return (
        <>
            <img className='object-cover' src="./infographie_1.jpg" alt="" />
            <div className='fixed top-1 w-full'>
                <div className='grid grid-cols-4 gap-8 mt-5 px-20'>
                    <div className='col-span-1 flex flex-col items-center gap-8'>
                        <BubbleInfograph />
                    </div>
                    <div className='col-span-2 flex flex-col items-center justify-end mt-5'>
                        <img src="./img_avant_1.png" alt="" />
                    </div>
                    <div className='flex flex-col items-end justify-end col-span-1'>
                        <img className='w-48 h-46 hover:scale-110' src="https://i.postimg.cc/Njjfwyps/LOGO-NEXT-2023.jpg" alt="" />
                        <div className='w-16 float-right'>
                            <CustomDropdown
                                is_img={true}
                                content={'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png'}
                                list={listlang} />
                        </div>
                        <div className='pt-5'>
                            <SocialMediaButton />
                        </div>
                    </div>

                    <div className='z-50 mb-5'>
                        <OrangeBar titre={'Services'} />
                    </div>

                </div>

                <div className='bg-black font-opensans grid grid-cols-3 gap-8 px-20 py-4'>
                    <div className='text-sm col-span-1 text-white font-opensans font-normal'>
                        <p>Professionels (professions libérales,institutions,TPE,PME,createurs d'entreprise...) et particuliers
                            en quête du faire-part de naissance ou de marriage qui vous ressemble.
                            N'hesitez pas de nous contacter!
                        </p>
                    </div>
                    <div onClick={handlePage} className='text-white flex flex-col items-center justify-end mb-2 text-4xl col-span-1'>
                        <span><SlArrowDown /></span>
                    </div>
                    <div className='text-[#fc7326] text-sm col-span-1'>
                        <h1 className='text-white font-bold uppercase mb-2'>Ce que <span className='text-[#fc7326]'>NEXT</span> peut faire pour vous:</h1>
                        <p className='flex items-center mb-1'><span className='flex items-center text-[#fc7326] pr-1'><BsFillPlayFill /></span>Identité visuel</p>
                        <p className='flex items-center mb-1'><span className='flex items-center text-[#fc7326] pr-1'><BsFillPlayFill /></span>Graphisme Print et Edition</p>
                        <p className='flex items-center mb-1'><span className='flex items-center text-[#fc7326] pr-1'><BsFillPlayFill /></span>Graphisme web</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Infographie_1