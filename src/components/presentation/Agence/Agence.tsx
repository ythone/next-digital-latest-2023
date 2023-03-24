import React, { useState } from 'react';
import Navbar from '../Navbar';
import Content_agence_1 from './Content_agence_1';
import Content_agence_2 from './Content_agence_2';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';


type Props = {
  isTopOfPage: boolean
}


const Agence = ({ isTopOfPage }: Props) => {
  const [isTurnPage, setTurnPage] = useState<boolean>(false);

  const handlePage = () => {
    setTurnPage(!isTurnPage);
  }

  const displayArrow = () => {
    if (isTurnPage) {
      return <>
        <div onClick={handlePage} className='flex items-center justify-center mb-5 '>
          <span className='text-white text-5xl flex items-center justify-center'><SlArrowUp /></span>
        </div>
      </>
    }

    return <></>
  }


  const dispalyContent = () => {
    if (isTurnPage) {
      return <Content_agence_2 />
    }
    return <Content_agence_1 setPage={setTurnPage} isturnpage={isTurnPage} />
  }


  return (
    <section className='fixed w-full '>
      <img className='object-fill' src="./agence_1.jpg" alt="" />
      <div className='bg-opacity-75'></div>
      <div className='fixed top-1 w-full mb-20'>
        {displayArrow()}
      </div>
      <div className='mt-20'><Navbar isTopOfPage={isTopOfPage} /></div>
      {dispalyContent()}
    </section>
  )
}

export default Agence