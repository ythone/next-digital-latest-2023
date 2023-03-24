import React from 'react'
import CustomNavbar from '../../Navbar/CustomNavbar'
import { motion } from 'framer-motion'
import SocialMediaButton from '../../SocialMediaButton/SocialMediaButton'

type Props = {
    isTopOfPage: boolean
    listItems: JSX.Element
  }
  

const ContentVersionImg = ({ isTopOfPage ,listItems}: Props) => {
  return (
    <>
          <div className='fixed w-full bg-[#191772]'>
      <CustomNavbar isTopOfPage={isTopOfPage} />
      <div className='fixed bottom-5 w-full pl-20 '>
        <div className='pl-20'>
          <div className='pl-10 flex items-center justify-center gap-10'>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            >
              <div className='grid grid-cols-4 gap-8'>
                {listItems}
              </div>
            </motion.div>

            <div className='gap-2 mb-20 pr-5'>
              <SocialMediaButton />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default ContentVersionImg