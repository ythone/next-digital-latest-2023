import React, { useState } from 'react'
import { IoBagOutline, IoClose, IoMenu, IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CustomLink from './CustomLink';
import CustomDropdown from '../CustomDopdown/CustomDropdown';
import useMediaQuery from '../../application/useMediaQuery';
import { GrLanguage } from "react-icons/gr";
import { MdLanguage } from "react-icons/md";

type Props = {
    isTopOfPage: boolean;
};


const CustomNavbar = ({ isTopOfPage }: Props) => {
    const flexBetween = "flex items-center justify-center";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const [imag_url, setImgUrl] = useState<string>("https://i.postimg.cc/VvYxx4Gk/LOGO-NEXT-2.png");
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-white drop-shadow";
    const listflag = [
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png",
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/255px-Flag_of_England.svg.png"
    ]

    const listlang = [
        "ENG",
        "FR"
    ]

    const listcurrency = [
        "USD",
        "XAF",
        "EURO"
    ]

    return (
        <nav>
            <div
                className={`fixed top-0 w-full pl-20 py-6 mt-5`}
            >
                <div className={``}>
                    <div className={`w-full`}>
                        {/* LEFT SIDE */}
                        {/*<img alt="logo" src={Logo} />*/}
                        
                        {/* RIGHT SIDE */}
                        {isAboveMediumScreens ? (
                            <div className={`flex items-center justify-evenly w-full`}>
                                <img className='w-48 h-46 hover:scale-110' src={imag_url} alt="" />
                                <div className={`${flexBetween} gap-8 text-sm mb-20`}>
                                    <CustomLink href={'/acceuil'} titre={'Accueil'}/>
                                    <CustomLink href={'/services'} titre={'Services'}/>
                                    <CustomLink href={'/contact'} titre={'Contact'}/>
                                    <CustomLink href={'/agence'} titre={"l'agence"}/>
                                    <div className='flex items-center'>
                                        <p className='text-white'><span className='text-white text-xl'><MdLanguage/></span></p>
                                    <CustomDropdown
                                        is_img={true}
                                        content={'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png'}
                                        list={listlang} />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <IoMenu className="h-6 w-6 text-[#00b1b9]" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* MOBILE MENU MODAL */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-[#fc7326] drop-shadow-xl">
                    {/* CLOSE ICON */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <IoClose className="h-6 w-6 text-white" />
                        </button>
                    </div>

                    {/* MENU ITEMS */}
                    <div className="ml-[33%] flex flex-col gap-5 text-2xl">
                        <CustomLink href={'/acceuil'} titre={'Accueil'} />
                        <CustomLink href={'/services'} titre={'Services'}/>
                        <CustomLink href={'/contact'} titre={'Contact'}/>
                        <CustomLink href={'/agence'} titre={'agence'}/>
                    </div>
                </div>
            )}
        </nav>
    );

}

export default CustomNavbar