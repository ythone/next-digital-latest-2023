import React from 'react'
import OrangeBar from '../../OrangeNavigation/OrangeBar'
import BubbleCom from './BubbleCom'
import Cataloguebutton from './Cataloguebutton'
import CustomDropdown from '../../CustomDopdown/CustomDropdown'
import SocialMediaButton from '../../SocialMediaButton/SocialMediaButton'

const Communication = () => {

  const listlang = [
    "ENG",
    "FR"
  ]


  return (
    <div className='w-full bg-[#060f39] py-2'>
      {/*<video src="./communication.mp4" autoPlay muted loop className='w-full'></video>*/}
      <div className='bg-[#060f39] w-full grid grid-cols-3 gap-8 px-20 pt-2'>
        <div className='flex flex-col justify-start items-end mt-20 gap-4'>
          <Cataloguebutton />
          <div className='z-30'>
          <OrangeBar titre={'Services'} />
          </div>
        </div>
        <div className='flex flex-col items-center justify-start mt-3.5'>
          <BubbleCom />
        </div>
        <div className='flex flex-col items-end justify-start'>
            <img className='w-48 h-46 hover:scale-110' src="https://i.postimg.cc/Njjfwyps/LOGO-NEXT-2023.jpg" alt="" />
            <div className='w-16 float-right'>
              <CustomDropdown
                is_img={true}
                content={'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png'}
                list={listlang} />
            </div>
        </div>
      </div>
      <div className='bg-[#060f39] font-opensans px-20 py-3'>
       <div className='px-20 grid grid-cols-2'>
       <img className='h-80' src="./imagefront1.png" alt="" />
      
      <div className='flex items-center justify-between gap-16'>
      <img className='h-72 mt-10' src="./imagefront2.png" alt="" />
      <div className='mb-20'>
              <div className='mb-20'>
              <SocialMediaButton />
              </div>
            </div>
      </div>
       </div>
      </div>
    </div>
  )
}

export default Communication