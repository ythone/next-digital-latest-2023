import React, { useState, useEffect } from 'react';
import SocialMediaButton from '../SocialMediaButton/SocialMediaButton';
import { motion } from 'framer-motion';

type Props = {
  isTopOfPage: boolean
}


const MsgAcceuil = ({ isTopOfPage }: Props) => {
  const texts = [
    {
      id: 1,
      titre: "social media",
      description: "Les réseaux sociaux demeurent desormais un moyen de communication important et surtout incontournable pour n'importe quel type de structure."
    },
    {
      id: 2,
      titre: "communication",
      description: "La transmission du message demeurent desormais un moyen de transmission important et surtout incontournable pour n'importe quel type de structure."
    },
    {
      id: 3,
      titre: "photographie",
      description: "La photographie du message demeurent desormais un moyen de transmission important et surtout incontournable pour n'importe quel type de structure."
    },
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState(texts[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % texts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [index, texts.length]);

  useEffect(() => {
    setText(texts[index]);
  }, [index, texts]);


  return (
    <div className='pl-20'>
      <div className='pl-20 flex items-center justify-between'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='text-white mt-10 ml-5'>
            <h1 className='text-5xl font-bold capitalize tracking-tighter font-mont drop-shadow-xl'>{text.titre}</h1>
            <div className='mt-5 text-lg w-96'>
              <p className='my-0 font-opensans'>{text.description}</p>
            </div>
            <div className='bg-[#0a0393] h-1 w-48 mt-5'>
            </div>
            <div className='mt-5'>
              <h1 className='text-[#ffff00] font-billion text-4xl drop-shadow-lg shadow-black'>The future is now !</h1>
            </div>
          </div>
        </motion.div>
        <div className='mr-8 gap-2 mb-20'>
          <SocialMediaButton />
        </div>
      </div>
    </div>
  )
}

export default MsgAcceuil