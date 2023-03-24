import React from 'react'
import CustomLink from '../Navbar/CustomLink'
import SocialMediaButton from '../SocialMediaButton/SocialMediaButton'
import CustomLinkNewbar from '../Navbar/CustomLinkNewbar'
import CustomLinkFooter from '../Navbar/CustomLinkFooter'

const Footer = () => {
    return (
        <div className='bg-[#0a0393] grid grid-cols-3 gap-8 py-5 px-20'>
            <div className='col-span-1'>
                <h1 className='text-[#fc7326] uppercase font-franklin text-3xl'>SERVICE</h1>
                <div className='flex flex-col items-start'>
                <CustomLinkFooter href={'/acceuil'} titre={'Accueil'} />
                <CustomLinkFooter href={'/services'} titre={'Services'} />
                <CustomLinkFooter href={'/contact'} titre={'Contact'} />
                <CustomLinkFooter href={'/agence'} titre={"l'agence"} />
                </div>
            </div>
            <div className='col-span-1'>
                <h1 className='text-[#fc7326] uppercase font-franklin text-3xl'>Nous suivre</h1>
                <div className='flex items-end'>
                    <SocialMediaButton />
                </div>
            </div>
            <div className='col-span-1'>
                <h1 className='text-[#fc7326] uppercase font-franklin text-4xl'>Nous suivre</h1>
                <div className='flex items-end'>
                    <SocialMediaButton />
                </div>
            </div>
        </div>
    )
}

export default Footer