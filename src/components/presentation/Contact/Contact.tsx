import React from 'react'
import Navbar from '../Navbar'
import FormContact from './FormContact'
import { BsInstagram } from 'react-icons/bs';
import { ImFacebook, ImTwitter, ImWhatsapp } from "react-icons/im";
import SocialMediaButton from '../SocialMediaButton/SocialMediaButton';
import { motion } from 'framer-motion';

type Props = {
  isTopOfPage: boolean
}

const Contact = ({ isTopOfPage }: Props) => {
  return (
    <section className='fixed w-full'>
      <img className='object-contain' src="./contact.jpg" alt="" />
      <Navbar isTopOfPage={isTopOfPage} />
      <div className='fixed bottom-5 w-full'>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
        <div className='pl-20'>
          <div className='pl-20'>
            <div className='flex items-center justify-center h-96 gap-16'>
              <div className='pr-5'>
                <FormContact />
              </div>
              <div className='flex flex-col items-center justify-end mt-20 font-opensans'>
                <div className='text-white'>
                  <div>
                    <p>Château Bonamoussadi</p>
                    <p>B.P: 7431 Douala, Cameroun</p>
                  </div>
                  <div className='my-3'>
                    <p>Tél: +237 698 74 34 05</p>
                  </div>
                  <div>
                    <p>HEURES D'OUVERTURE:</p>
                    <p>Lun-Ven: 9h00 - 17h00</p>
                    <p>Samedi: 10h00 - 13h00</p>
                  </div>
                  <div className='gap-2 flex items-center'>
                    <SocialMediaButton />
                  </div>
                </div>
              </div>
              <div className='mt-20'>
                <img className='w-64' src="./image_avant_contact.png" alt="" />
              </div>
            </div>
          </div>
        </div>          
        </motion.div>
      </div>
    </section>
  )
}

export default Contact