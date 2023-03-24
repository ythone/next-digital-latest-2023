import React from 'react'
import Navbar from '../Navbar'
import { ImFacebook, ImTwitter, ImWhatsapp } from "react-icons/im";
import { BsInstagram } from 'react-icons/bs';
import { SlArrowDown } from "react-icons/sl";
import SocialMediaButton from '../SocialMediaButton/SocialMediaButton';
import { motion } from 'framer-motion';

type Props = {
    setPage: (value: React.SetStateAction<boolean>) => void,
    isturnpage: boolean
}


const Content_agence_1 = ({ setPage, isturnpage }: Props) => {
    const handlePage = () => {
        setPage(!isturnpage);
    }

    return (
        <div className='fixed bottom-0 w-full'>
            <div className='pl-20 mt-10 flex items-center justify-between'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='pl-20 text-gray-300 text-2sm'>
                        <div className='text-sm pl-20'>
                            <div className='pl-5'>
                                <div>
                                    <h1 className='text-white font-bold font-mont text-5xl mb-5'>À propos de l'agence</h1>
                                </div>
                                <div className='mb-5 font-opensans'>
                                    <p><span className='text-white font-semibold'>NEXT, </span>filiale de Prestige Group Sarl est une agence spécialisée dans les services du numerique.</p>
                                    <p>elle accompagne au quotidien les marques,les entreprises et les organisations dans leur</p>
                                    <p>transformation industrielle et digitale.</p>
                                </div>
                                <div className='mb-5 font-opensans'>
                                    <p><span className='text-white font-semibold'>AVEC QUELLE OFFRE?</span><br />Une offre 100% intégré IT et digitale.</p>
                                    <p>Une offre efficace sur toute la chaine de valeurs des entreprises grâce à une parfaite maîtrise des</p>
                                    <p>technologies SMACS{"("}Social,Mobility,Ananlytics,Cloud,Security{")"} et du marketing digital.</p>
                                </div>
                                <div className='font-opensans'>
                                    <p><span className='text-white font-semibold'>POUR QUELS RÉSULTATS?</span><br />Digitalisation complète de ses clients avec une garantie de stabilité,de contrôle et coût maîtrisés.</p>
                                    <p>Créer à partir des besoins des clients des sytèmes d'information personnalisés et intrinsèquement</p>
                                    <p>digitaux,en réponse aux enjeux de Time to Market,d'agilité,de rigidité et d'expérimentations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className='mb-20'>
                    <div className='gap-2 mb-20 pr-5'>
                        <SocialMediaButton />
                    </div>
                </div>
            </div>
            <div onClick={handlePage} className='hover:cursor-pointer flex items-center justify-center'>
                <span className='text-white text-5xl flex items-center justify-center mt-5'><SlArrowDown /></span>
            </div>
        </div>
    )
}

export default Content_agence_1