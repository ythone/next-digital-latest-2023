import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import useMediaQuery from '../../application/useMediaQuery';
type Props = {
    href: string;
    titre: string;
}


const CustomImage = ({ href, titre }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const resolvepath = useResolvedPath(href);
    const isActive = useMatch({ path: resolvepath.pathname, end: true });

    if (isAboveMediumScreens) {
        return (
            <div className={`${isActive ? "text-white bg-[#fc7326] py-1 px-5" : "text-white"} uppercase text-lg`}>
                <Link to={href}>{titre}</Link>
            </div>
        )
    }
    
    return (
        <Link to={href} className={`${isActive ? "text-white" : "text-white"} uppercase text-lg`}>{titre}</Link>
    )
}

export default CustomImage