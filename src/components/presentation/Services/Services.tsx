import React from 'react'
import Navbar from '../Navbar'
import CardServices from './CardServices'
import { ImFacebook, ImTwitter, ImWhatsapp } from "react-icons/im";
import { BsInstagram } from 'react-icons/bs';
import SocialMediaButton from '../SocialMediaButton/SocialMediaButton';
import CustomNavbar from '../Navbar/CustomNavbar';
import { motion } from 'framer-motion';

type Props = {
  isTopOfPage: boolean
}

const Services = ({ isTopOfPage }: Props) => {
  const list_service = [
    {
      id: 1,
      img_url: "https://i.postimg.cc/K85kWrTV/icone-strategie-2.png",
      img_url_2: "https://i.postimg.cc/63myRnbm/icone-strategie-3.png",
      titre: "Stratégie",
      route: "/strategie"
    },
    {
      id: 2,
      img_url: "https://i.postimg.cc/nhmT9W6m/icone-webdesign-2.png",
      img_url_2: "https://i.postimg.cc/YCMYtN56/icone-webdesign-3.png",
      titre: "Web design",
      route: "/web_design"
    },
    {
      id: 3,
      img_url: "https://i.postimg.cc/pLKYLFFY/icone-social-media-2.png",
      img_url_2: "https://i.postimg.cc/3xX46yWk/icone-social-media-3.png",
      titre: "Social media",
      route: "/social"
    },
    {
      id: 4,
      img_url: "https://i.postimg.cc/SKNr1Kn6/icone-infographie-2.png",
      img_url_2: "https://i.postimg.cc/L673RZHv/icone-infographie-3.png",
      titre: "Infographie",
      route: "/infographie"
    },
    {
      id: 5,
      img_url: "https://i.postimg.cc/X7Z927w5/icone-photographie-2.png",
      img_url_2: "https://i.postimg.cc/FRD06YWy/icone-photographie-3.png",
      titre: "Photographie",
      route: "/photographie"
    },
    {
      id: 6,
      img_url: "https://i.postimg.cc/vHhxqtfK/icone-ref-rencement-2.png",
      img_url_2: "https://i.postimg.cc/ydYZ0V1k/icone-ref-rencement-3.png",
      titre: "Référencement",
      route: "/referencement"
    },
    {
      id: 7,
      img_url: "https://i.postimg.cc/vBXdFThG/icone-SMS-marketing-2.png",
      img_url_2: "https://i.postimg.cc/qRbCL9qQ/icone-SMS-marketing-3.png",
      titre: "SMS marketing",
      route: "/sms"
    },
    {
      id: 8,
      img_url: "https://i.postimg.cc/zDP9n9P2/icone-support-de-com-2.png",
      img_url_2: "https://i.postimg.cc/tR6xPmyd/icone-support-de-com-3.png",
      titre: "Communication",
      route: "/communication"
    }
  ]


  const listItems = list_service.map((item) =>
    <div className='' key={item.id}><CardServices
      img_url={item.img_url}
      titre={item.titre}
      img_url_2={item.img_url_2}
      route={item.route} /></div>
  );


  return (
    <section id="home" className="mx-auto min-h-full w-full h-screen pt-20 pr-20 bg-[#191772]">
      {/*<video src="./service.mp4" autoPlay muted loop className='w-full'></video>*/}
      <div className='pt-20'>
        <div><CustomNavbar isTopOfPage={isTopOfPage} /></div>
        <div className='flex items-center justify-center pt-20'>
          <div className='md:grid grid-cols-5 '>
            <div className='col-span-1'></div>
            <div className='col-span-4 md:flex items-center justify-center gap-10'>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            >
              <div className='md:grid grid-cols-4 gap-8'>
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
    </section>
  )
}

export default Services