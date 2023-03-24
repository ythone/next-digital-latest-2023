import React from 'react'
import CustomDropdown from '../../CustomDopdown/CustomDropdown'
import OrangeBar from '../../OrangeNavigation/OrangeBar'
import SocialMediaButton from '../../SocialMediaButton/SocialMediaButton'
import BubbleStrategie from './BubbleStrategie'
import { BsFillPlayFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Strategie = () => {

  const listlang = [
    "ENG",
    "FR"
  ]


  return (
    <section className='fixed w-full'>
      <img className='object-cover' src="./strategie.jpg" alt="" />
      <div className='fixed top-1 w-full hover:cursor-pointer mb-20 px-20'>
        <div className='flex items-center justify-between mt-6'>
          <div className='flex flex-col gap-8'>
            <BubbleStrategie />
            <div className='pt-5'>
              <OrangeBar titre={'Services'} />
            </div>
          </div>
          <div className='flex flex-col items-end justify-end'>
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
        </div>
      </div>
      <div className='bg-[#1c1c1c] bg-opacity-80 fixed bottom-0 w-full font-opensans'>
        <motion.div className='grid grid-cols-2 gap-8 px-20 py-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='text-white text-2sm'>
            <h1 className='uppercase text-white mb-5'>Ce que <span className='text-[#fc7326]'>NEXT</span>peut faire pour vous</h1>
            <p>Votre objectif business est le point de départ,nous vous accompagons à définir une stratégie
              digitale complète claire,chiffrée,documentée et en adéquation avec vos objectifs business.
            </p>
          </div>
          <div className='text-2sm'>
            <p className='text-white flex items-center mb-1'><span className='flex items-center text-[#fc7326] pr-1'><BsFillPlayFill /></span> Traduction de l'objectif business
              en objectif Marketing Digital</p>
            <p className='text-white flex items-center mb-1'><span className='flex items-center text-[#fc7326] pr-1'><BsFillPlayFill /></span>Stratégie Data Marketing.</p>
            <p className='text-white flex items-center mb-1'><span className='flex items-center text-[#fc7326] pr-1'><BsFillPlayFill /></span>Stratégie de la présence Digitale.</p>
            <p className='text-white flex items-center mb-1'><span className='flex items-center text-[#fc7326] pr-1'><BsFillPlayFill /></span>Stratégie d'acquisition et de publicité digitale.</p>
            <p className='text-white flex items-center mb-1'><span className='flex items-center text-[#fc7326] pr-1'><BsFillPlayFill /></span>Stratégie Social Media.</p>
            <p className='text-white flex items-center mb-1'><span className='flex items-center text-[#fc7326] pr-1'><BsFillPlayFill /></span>Stratégie de content Marketing.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Strategie