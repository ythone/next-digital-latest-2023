import React, { useState } from 'react'
import BubbleInfograph from './BubbleInfograph'
import CustomDropdown from '../../CustomDopdown/CustomDropdown'
import SocialMediaButton from '../../SocialMediaButton/SocialMediaButton'
import OrangeBar from '../../OrangeNavigation/OrangeBar'
import { BsFillPlayFill } from 'react-icons/bs'
import { SlArrowDown } from 'react-icons/sl'
import Infographie_1 from './Infographie_1'
import Inforgraphie_2 from './Inforgraphie_2'

const Infographie = () => {
  const [isTurnPage, setTurnPage] = useState<boolean>(false);

  const listlang = [
    "ENG",
    "FR"
  ]

  
  const dispalyContent = () => {
    if (isTurnPage) {
      return <Inforgraphie_2 setPage={setTurnPage} isturnpage={isTurnPage}/>
    }
    return <Infographie_1 setPage={setTurnPage} isturnpage={isTurnPage} />
  }


  return (
    <section className='fixed w-full'>
      {dispalyContent()}
    </section>
  )
}

export default Infographie