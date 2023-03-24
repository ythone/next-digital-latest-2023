import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

type Props = {
    is_img: boolean,
    content: string,
    list: string[]
}

const CustomDropdown = ({ is_img, content, list }: Props) => {
    const [Newcontent, setNewcontent] = useState(content);
    const [visibility, setVisibility] = useState(false);
    const displaytag = () => {
        if (is_img) {
            return <><img className='w-5 h-5' src={Newcontent} alt="" /></>
        }
        return <><p className='text-[#ff9153]'>{Newcontent}</p></>
    }

    const listItems = list.map((content) =>
        <option className='my-1' key={content} onClick={() => setNewcontent(content)}>{content}</option >
    );

    const displaylistflag = () => {
        if(is_img){
            return <select id="content" defaultValue={"FR"} className="bg-transparent uppercase text-white text-xl w-full py-2.5 border-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent ">
            {listItems}
        </select>           
        }
        return <select id="content" defaultValue={"FR"} className="bg-white text-gray-900 text-xl w-full py-2.5 border-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent ">
            {listItems}
        </select>
    }

    return (
        <div>
            <div>
                {displaylistflag()}
            </div>
        </div>
    )
}

export default CustomDropdown