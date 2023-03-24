import React from 'react'
import BuubleSMS from './BuubleSMS'
import { BsFillPlayFill } from 'react-icons/bs'
import SocialMediaButton from '../../SocialMediaButton/SocialMediaButton'
import CustomDropdown from '../../CustomDopdown/CustomDropdown'
import DemanderDevis from '../../OrangeNavigation/DemanderDevis'
import OrangeBar from '../../OrangeNavigation/OrangeBar'
import OrangeBarReverse from '../../OrangeNavigation/OrangeBarReverse'
import DemanderDevisReverse from '../../OrangeNavigation/DemanderDevisReverse'

const SMSMarketing = () => {
  const listlang = [
    "ENG",
    "FR"
  ]

  return (
    <section className='fixed w-full'>
      <img className='object-cover' src="./sms.jpg" alt="" />
      <div className='fixed top-1 w-full hover:cursor-pointer mb-20 px-20 grid grid-cols-3 gap-4'>
        <div className='mt-5'>
          <div className=''>
            <BuubleSMS />
          </div>
          <div className='transform translate-x-10 -translate-y-10'>
            <img className='h-96' src="./phone_sms.png" alt="" />
          </div>
        </div>
        <div className='mt-5 font-opensans'>
          <h1 className='pl-6 mb-5 text-[#fc7326] font-bold text-xl'>LES AVANTAGES D'UNE CAMPAGNE SMS</h1>
          <div>
            <div className='text-2sm'>
              <h1 className='flex items-center mb-1 text-[#fc7326]'><span className='flex items-center'><BsFillPlayFill /> 1| </span> Rapide à mettre en place:</h1>
              <p className='text-white pl-5 flex items-center mb-1'>Pas de création graphique,un message très court,quelques minutes vous avez créé votre message.</p>
            </div>
          </div>
          <div>
            <div className='text-2sm'>
              <h1 className='flex items-center mb-1 text-[#fc7326]'><span className='flex items-center'><BsFillPlayFill /> 2| </span>Efficace:</h1>
              <p className='text-white pl-5 flex items-center mb-1'>Lu à 92%,le sms commercial est clairement un média qui tient ses promesses malgré(ou grâce) à la brièveté du message</p>
            </div>
          </div>
          <div>
            <div className='text-2sm'>
              <h1 className='flex items-center mb-1 text-[#fc7326]'><span className='flex items-center'><BsFillPlayFill /> 3| </span>Très peu onéreuse:</h1>
              <p className='text-white pl-5 flex items-center mb-1'>Frais de création inexistants,frais d'envoi très faibles.</p>
            </div>
          </div>
          <div>
            <div className='text-2sm'>
              <h1 className='flex items-center mb-1 text-[#fc7326]'><span className='flex items-center'><BsFillPlayFill /> 4| </span>Immédiat:</h1>
              <p className='text-white pl-5 flex items-center mb-1'>Moins de 10 min pour réaliser une campagne SMS globale,l'envoi est instantané et permet toutes les communications:promotions,reduction,information.</p>
            </div>
          </div>
          <div>
            <div className='text-2sm'>
              <h1 className='flex items-center mb-1 text-[#fc7326]'><span className='flex items-center'><BsFillPlayFill /> 5| </span>Réactive:</h1>
              <p className='text-white pl-5 flex items-center mb-1'>retours immédiats,envoi à la date et à l'heure adéquate,aucune communication aujourd'hui ne permet
                autant de créativité.</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-end justify-start mt-5 gap-5'>
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
          <div>
            <div className='my-2 z-50'>
              <OrangeBarReverse titre={'Services'} />
            </div>
          </div>
          <div className='z-50'>
            <DemanderDevisReverse />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SMSMarketing