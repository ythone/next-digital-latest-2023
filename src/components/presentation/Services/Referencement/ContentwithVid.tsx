import React from 'react'
import SecondCircularBubble from '../../CircularBubble/SecondCircularBubble'
import CustomDropdown from '../../CustomDopdown/CustomDropdown'
import SocialMediaButton from '../../SocialMediaButton/SocialMediaButton'
import OrangeBarReverse from '../../OrangeNavigation/OrangeBarReverse'
import CircularBubble from '../../CircularBubble/CircularBubble'
import { BsFillPlayFill } from 'react-icons/bs'

const ContentwithVid = () => {

    const listlang = [
        "ENG",
        "FR"
      ]
    

  return (
    <>
          <video src="./referencement.mp4" autoPlay muted loop className='w-full'></video>
      <div className='fixed top-1 w-full hover:cursor-pointer mb-20 px-20 grid grid-rows-3 grid-flow-col'>
        <div className='flex flex-row mt-6'>
          <div className='basis-3/4 flex items-center'>
            <div className='flex flex-col gap-16'>
              <div className='flex items-end justify-center'>
                <CircularBubble
                  titre={'Référencement SEO'}
                  description={"Avec une concurrence de plus en plus accrue sur les moteurs de recherche,parfaire son référencement SEO est vital."}
                  img_url={''} />
              </div>
              <div className='font-opensans text-white flex flex-col items-start justify-start'>
                <div className='text-sm'>
                  <p className='pl-6 mb-4'><span className='text-[#fc7326] font-bold'>NEXT</span> VOUS APPORTE LES SOLUTIONS SUIVANTE:</p>
                  <p className='text-white flex items-center mb-1'><span className='flex items-center text-[#fc7326]'><BsFillPlayFill /> 1|</span>Optimiser votre positionement et visibilité d'une manière durable</p>
                  <p className='text-white flex items-center mb-1'><span className='flex items-center text-[#fc7326]'><BsFillPlayFill /> 2|</span>Vous permettre de diminuer les dépenses éffectuées comme PPC ou Adwords</p>
                  <p className='text-white flex items-center mb-1'><span className='flex items-center text-[#fc7326]'><BsFillPlayFill /> 3|</span>Pour un coût d'acquisition faible,Obtenir des clients/prospects qualifiés</p>
                  <p className='text-white flex items-center mb-1'><span className='flex items-center text-[#fc7326]'><BsFillPlayFill /> 4|</span>Améliorer votre business et chiffre d'affaire en ligne.</p>
                  <p className='text-white flex items-center'><span className='flex items-center text-[#fc7326]'><BsFillPlayFill /> 5|</span>Booster et imposer votre marque sur le net.</p>
                </div>
              </div>
            </div>
            <div className=''>
              <SecondCircularBubble description={"En réalité,le SEO ou le search engine optimization est la clé de toute stratégie marketing digitale.C'est ce qui permet à vos prospects de vous retrouver lorsqu'ils émettent un besoin par rapport à un de vos services ou un de vos produits."} />
            </div>
          </div>
          <div className='basis-1/4'>
            <div className='flex flex-col items-end'>
              <img className='w-48 h-46 hover:scale-110' src="https://i.postimg.cc/Njjfwyps/LOGO-NEXT-2023.jpg" alt="" />
              <div className='w-16 float-right'>
                <CustomDropdown
                  is_img={true}
                  content={'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png'}
                  list={listlang} />
              </div>
            </div>
            <div className='flex items-center gap-16'>
              <div className=''>
                <SecondCircularBubble description={"Par contre,le référencement naturel commence par la mise en oeuvre d'une véritbale stratégie dynamisant la majorité des secteurs."} />
              </div>
            <div className=''>
              <SocialMediaButton />
            </div>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <OrangeBarReverse titre={'Services'} />
        </div>

      </div>
    </>
  )
}

export default ContentwithVid