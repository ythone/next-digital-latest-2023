import React from 'react'
import CustomDropdown from '../../CustomDopdown/CustomDropdown'
import SocialMediaButton from '../../SocialMediaButton/SocialMediaButton'
import BubbleMedia2 from './BubbleMedia2'
import DemanderDevisReverse from '../../OrangeNavigation/DemanderDevisReverse'
import { BsFillPlayFill } from 'react-icons/bs'
import { SlArrowUp } from 'react-icons/sl'
import { motion } from 'framer-motion'

type Props = {
    setPage: (value: React.SetStateAction<boolean>) => void,
    isturnpage: boolean
}


const SocialMediaP2 = ({ setPage, isturnpage }: Props) => {
    const handlePage = () => {
        setPage(!isturnpage);
    }


    const listlang = [
        "ENG",
        "FR"
    ]

    return (
        <div className='fixed top-1 w-full hover:cursor-pointer mb-20 px-20 grid grid-cols-2 gap-16'>
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='col-span-1 mt-5 flex flex-col text-start'>
                <div onClick={handlePage} className='text-white flex flex-col items-end mb-2 text-4xl'>
                    <span><SlArrowUp /></span>
                </div>
                <div className='mb-5 flex items-center justify-between gap-8'>
                    <h1 className='font-opensans text-white font-normal text-xl'>LES SOLUTIONS DE <span className='text-[#fc7326]'>NEXT</span></h1>
                </div>
                <div className='text-sm font-opensans pr-20'>
                    <p className='text-white flex items-center mb-1'>Les réseaux sociaux attirent aujourd'hui une gigantesque communauté
                        d'internautes,environ 2060 milliards.Cette manne énorme d'internautes constitue aujourd'hui un public avisé,aussi bien
                        composés de consommateurs que de clients qu'il faudrait conquérir.De plus les réseaux sociaux vous donneraient l'opportunité
                        d'améliorer le trafic vers votre site web, de renforcer l'impact et la notoriété de votre marque.<br /><br />
                    </p>
                </div>
                <div className='text-sm font-opensans text-white pr-20'>
                    <p>                        <span className='text-[#fc7326]'>NEXT</span> vous donne l'ensemble des ingrédients nécessaires à votre réussite
                        sur les réseaux sociaux.</p>
                </div>
                <div className='mt-5 pr-20'>
                    <div>
                        <div className='text-sm mb-2'>
                            <h1 className='flex items-center text-white'><span className='flex items-center text-[#fc7326]'><BsFillPlayFill /> 1| </span>Choix,création,optimisation et développement</h1>
                            <p className='text-white pl-5 flex items-center mb-1'>des réseaux sociaux adaptables à votre entreprises.</p>
                        </div>
                    </div>
                    <div>
                        <div className='text-2sm'>
                            <h1 className='flex items-center  text-white'><span className='flex items-center text-[#fc7326]'><BsFillPlayFill /> 2| </span>Elaboration,planification et rédaction de</h1>
                            <p className='text-white pl-5 flex items-center mb-1'>contenus en phase avec vos valeurs.</p>
                        </div>
                    </div>
                    <div>
                        <div className='text-2sm'>
                            <h1 className='flex items-center  text-white'><span className='flex items-center text-[#fc7326]'><BsFillPlayFill /> 3| </span>Gestion,animation,suivi des interactions,échanges</h1>
                            <p className='text-white pl-5 flex items-center mb-1'>et discussions avec vos communautés sociales.</p>
                        </div>
                    </div>
                    <div>
                        <div className='text-2sm'>
                            <h1 className='flex items-center text-white'><span className='flex items-center text-[#fc7326]'><BsFillPlayFill /> 4| </span>Mise en oeuvre de procédés de marketing</h1>
                            <p className='text-white pl-5 flex items-center mb-1'>opérationnel afin de convenir vos communautés sociales en clientèle.</p>
                        </div>
                    </div>
                    <div>
                        <div className='text-2sm'>
                            <h1 className='flex items-center mb-1 text-white'><span className='flex items-center text-[#fc7326]'><BsFillPlayFill /> 5| </span>Nouer des relations avec des influenceurs</h1>
                            <p className='text-white pl-5 flex items-center mb-1'>afin de renforcer la visibilité de votre marque.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className='flex flex-col items-end justify-start mt-5 gap-2 col-span-1'>
                <div>
                    <img className='w-48 h-46 hover:scale-110' src="https://i.postimg.cc/Njjfwyps/LOGO-NEXT-2023.jpg" alt="" />
                    <div className='w-16 float-right'>
                        <CustomDropdown
                            is_img={true}
                            content={'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png'}
                            list={listlang} />
                    </div>
                </div>
                <div className='gap-6 flex items-center justify-between'>
                    <div className='my-2'>
                        <BubbleMedia2 />
                    </div>
                    <div className=''>
                        <SocialMediaButton />
                    </div>
                </div>
                <div className='z-50'>
                    <DemanderDevisReverse />
                </div>
            </div>
        </div>
    )
}

export default SocialMediaP2