import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    href: string;
    titre: string;
    //setImage:(value: React.SetStateAction<string>) => void;
}


const CustomLinkFooter = ({ href, titre }: Props) => {
    return (
        <Link to={href} className={`font-franklin text-white text-lg`}>{titre}</Link>
    )
}

export default CustomLinkFooter