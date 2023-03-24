import React, { useState } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import CustomLink from '../Navbar/CustomLink'
import CustomLinkNewbar from '../Navbar/CustomLinkNewbar';

type Props = {
    titre: string;
}

const OrangeBar = ({ titre }: Props) => {
    const [isMouseEvent, setMouseEvent] = useState(false);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {

        const target = e.target as HTMLDivElement;
        console.log("handleMouseEnter");
        setMouseEvent(true);
        /*if (target.children.length > 1) {
          target.children[1].classList.add('opacity-100');
        }*/
    };


    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        console.log("handleMouseLeave");
        setMouseEvent(false);
        /*if (target.children.length > 1) {
          target.children[1].classList.remove('opacity-100');
        }*/
    };

    const displaynewAppBar = () => {
        return (
            <div className='bg-[#06126c] flex items-center text-lg'>
                <CustomLinkNewbar href={'/acceuil'} titre={'Accueil'} />
                <CustomLinkNewbar href={'/services'} titre={'Services'} />
                <CustomLinkNewbar href={'/contact'} titre={'Contact'} />
                <CustomLinkNewbar href={'/agence'} titre={"l'agence"} />
            </div>
        )
    }

    const displaybar = () => {
        if (isMouseEvent) {
            return <>
                {displaynewAppBar()}
            </>;
        }
        return <></>;
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex items-start justify-start font-opensans gap-2 text-white'>
            <div className='bg-[#fc7326] text-4xl py-1 px-10'>
                {titre}
            </div>
            <div className='bg-[#06126c] text-5xl'>
                <span><BsFillPlayFill /></span>
            </div>
            {displaybar()}
        </div>
    )
}

export default OrangeBar