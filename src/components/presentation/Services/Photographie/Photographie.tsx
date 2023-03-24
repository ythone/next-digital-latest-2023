import React from 'react'
import CustomDropdown from '../../CustomDopdown/CustomDropdown'
import CircularBubble from '../../CircularBubble/CircularBubble'
import SocialMediaButton from '../../SocialMediaButton/SocialMediaButton'
import OrangeBar from '../../OrangeNavigation/OrangeBar'
import DemanderDevis from '../../OrangeNavigation/DemanderDevis'

const Photographie = () => {

  const listlang = [
    "ENG",
    "FR"
  ]


  return (
    <section className='fixed w-full'>
      <img className='object-cover' src="./photographie.jpg" alt="" />
      <div className='fixed top-1 w-full hover:cursor-pointer mb-20 px-20'>
        <div className='flex items-center justify-between mt-6'>
          <CircularBubble 
            titre={'Photographie'}
            description={"En raison de la révolution numérique,la photographie a pris une place importante dans la stratégie de communication d'une entreprise."} 
            img_url={"/photo.png"} />
          <div>
            <img className='w-48 h-46 hover:scale-110' src="https://i.postimg.cc/Njjfwyps/LOGO-NEXT-2023.jpg" alt="" />
            <div className='w-16 float-right'>
              <CustomDropdown
                is_img={true}
                content={'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png'}
                list={listlang} />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between mt-2'>
          <div className='font-opensans text-white'>
            <p className='w-96 text-sm'>Avec une belle photo,les firmes marchandes peuvent promouvoir rapidement
              un produit ou un service puisque les images sucitent de l'émotion chez les clients.
              En effet, elles peuvent même inciter les consommateurs à se procurer la marchandise.<br /><br/>
              L'importance de la photographie dans la stratégie de marketing d'une firme a émergé en même temps
              que Facebook,Twitter ou instagram.
            </p>
            <div className='mt-4'>
              <div className='my-2'>
                <DemanderDevis />
              </div>
              <div className='my-2'>
                <OrangeBar titre={'Services'} />
              </div>
            </div>
          </div>
          <div className='gap-2 mb-20 pr-5'>
            <div className='mb-20'>
            <SocialMediaButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Photographie