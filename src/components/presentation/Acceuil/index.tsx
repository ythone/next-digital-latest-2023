import React from 'react'
import Navbar from '../Navbar'
import MsgAcceuil from './MsgAcceuil'
import { BsInstagram } from 'react-icons/bs';
import { ImFacebook, ImTwitter, ImWhatsapp } from "react-icons/im";
import Footer from '../Footer/Footer';

type Props = {
  isTopOfPage:boolean
}

const Acceuil = ({isTopOfPage}:Props) => {
  return (
    <section className='fixed w-full'>
      <video src="./acceuil.mp4" autoPlay muted loop className='w-full'></video>
      <Navbar isTopOfPage={isTopOfPage} />
      <div className='w-full fixed bottom-0 pl-20 py-6 mt-5'><MsgAcceuil isTopOfPage={false}/></div>
      {/*<video src="./acceuil.mp4" autoPlay muted loop className='w-full'></video>*/}
      {/*<div>
        <Footer/>
  </div>*/}
    </section>
  )
}

export default Acceuil