import React from 'react'
import { SlArrowDown, SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import SocialMediaButton from '../SocialMediaButton/SocialMediaButton'
import { motion } from 'framer-motion'
import ClientAvavtar from './clientAvavtar'
import SlideClient from './SlideClient'

type Props = {
    setPage: (value: React.SetStateAction<boolean>) => void,
    isturnpage: boolean
}

const Content_agence_2 = () => {
    //bg-[#090a12]
    const list_clients = [
        {
            id: 1,
            img_color: "./smile_no_color.png",
            img_without_color: "./smile_color.png"
        },
        {
            id: 2,
            img_color: "./romario_color.png",
            img_without_color: "./romario_no_color.png"
        },
        {
            id: 3,
            img_color: "./market_color.png",
            img_without_color: "./market_no_color.png"
        },
        {
            id: 4,
            img_color: "./fondation_color.png",
            img_without_color: "./fondation_no_color.png"
        },
        {
            id: 5,
            img_color: "./indigo_color.png",
            img_without_color: "./indigo_no_color.png"
        },
        {
            id: 6,
            img_color: "./beaute_color.png",
            img_without_color: "./beaute_no_color.png"
        }
    ]

    const listItems = list_clients.map((item) =>
        <div key={item.id}><ClientAvavtar img_url_color={item.img_color} img_url_no_color={item.img_without_color} /></div>
    );


    return (
        <div className='fixed bottom-0 w-full'>
            <div className='pl-20 mt-10 flex items-center justify-between'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='mx-20 pl-20 text-gray-300 text-2sm'>
                        <div className='text-sm pl-20 flex items-center justify-center'>
                            <div className='px-20 mt-20'>
                                <div className='pl-5 text-center'>
                                    <div>
                                        <h1 className='text-white font-normal font-opensans uppercase text-3xl mb-5'>Commentaires des clients</h1>
                                    </div>
                                    <div className='mb-5 font-opensans px-20'>
                                        <p>{"<<"}Digitalisation complète de ses clients avec une garantie de stabilité,
                                            de controle et de coût maîtrisés.Créer à partir des besoins des clients des
                                            systèmes d'information personnalisés et intrinsèquement.{">>"}
                                        </p>
                                    </div>
                                    <div className='mb-5 font-opensans'>
                                        <p><span className='text-white font-semibold'>EBRAD WABO , </span>PDG Indigo</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='pl-20 flex items-center justify-center gap-6'>
                            <div className='hover:cursor-pointer border border-gray-300 hover:scale-110 p-2'>
                                <span><SlArrowLeft /></span>
                            </div>
                            <div className='hover:cursor-pointer border border-gray-300 hover:scale-110 p-2'>
                                <span><SlArrowRight /></span>
                            </div>
                        </div>
                        <div className='bg-[#fc7326] h-1 mt-6 mx-20'>
                        </div>

                    </div>

                </motion.div>
                <div className='mb-20'>
                    <div className='gap-2 mb-20 pr-5'>
                        <SocialMediaButton />
                    </div>
                </div>
            </div>
            <div className='pl-20 bg-[#171721] bg-opacity-50 flex flex-col items-center justify-center'>
                <div className='pl-20'>
                    <div>
                        <h1 className='text-white font-normal font-opensans uppercase text-3xl my-4'>quelques clients</h1>
                    </div>
                </div>
                <div className='h-38 mb-5'>
                    <SlideClient data_img={list_clients} />
                </div>
            </div>
        </div>
    )
}

export default Content_agence_2