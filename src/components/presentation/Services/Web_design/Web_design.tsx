import React from 'react'
import OrangeBar from '../../OrangeNavigation/OrangeBar'
import BubbleWebDesign from './BubbleWebDesign'
import CustomDropdown from '../../CustomDopdown/CustomDropdown'
import SocialMediaButton from '../../SocialMediaButton/SocialMediaButton'
import { BsFillPlayFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Web_design = () => {

  const listlang = [
    "ENG",
    "FR"
  ]

  return (
    <section className='fixed w-full'>
      <img className='object-cover' src="./web_design.jpg" alt="" />
      <div className='fixed top-1 w-full'>
        <div className='grid grid-cols-4 gap-8 mt-5 px-20'>
          <div className='col-span-1 flex flex-col items-center gap-8'>
            <BubbleWebDesign />
          </div>
          <div className='col-span-2 flex flex-col items-center justify-end mt-5'>
            <img src="./img_front_web.png" alt="" />
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

        <div className='bg-[#1c1c1c] bg-opacity-80 fixed bottom-0 font-opensans'>
          <motion.div className='grid grid-cols-2 gap-8 px-20 py-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          >
          <div className='text-white text-sm'>
            <h1 className='uppercase text-white mb-5'>Ce que <span className='text-[#fc7326]'>NEXT</span>peut faire pour vous:</h1>
            <p className='text-white flex items-center mb-1'><span className='flex items-center text-[#fc7326] pr-1'><BsFillPlayFill /></span> Créaton d'un site web adapté à votre business</p>
            <p className='text-white flex items-center mb-1'><span className='flex items-center text-[#fc7326] pr-1'><BsFillPlayFill /></span>Charte graphique adaptée et design attractif.</p>
            {/*<p className='text-white flex items-center mb-1'><span className='flex items-center text-[#fc7326] pr-1'><BsFillPlayFill /></span>Site internet responsive et rpoduction de gabarits HTML,CSS,JS.</p>*/}
            {/*<p className='text-white flex items-center mb-1'><span className='flex items-center text-[#fc7326] pr-1'><BsFillPlayFill /></span>Performance et ergonomie/navigabilité et lisibilité(UX).</p>*/}
            {/*<p className='text-white flex items-center mb-1'><span className='flex items-center text-[#fc7326] pr-1'><BsFillPlayFill /></span>optimisation du référencement,mot clés et de votre classement dans le moteur de recherche.</p>*/}
          </div>
          <div className='text-sm text-white font-opensans font-normal'>
            <p><span className='text-[#fc7326]'>NEXT</span> vous assure également une réfonte totale de votre site web
              afin de le rendre moderne et Google Friendly.Un site internet qui garantit la floraison de votre business reste notre challenge
              Vous faire entrer dans l'air du digital demeure notre idéal <br /><br />
            </p>
            <p><span className='text-[#fc7326]'>NEXT</span> vous apporte des solutions suivantes: Une seule version de votre site
              - Diminuer vos coûts - Offrir une meilleure expérience utilisateur -miser sur l'avenir -vous demasquer de la concurence
              -votre business dans la poche de vos clients.
            </p>
          </div>        
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default Web_design