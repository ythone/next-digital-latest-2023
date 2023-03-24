import React, { useState } from 'react'
import SocialMediaP1 from './SocialMediaP1'
import SocialMediaP2 from './SocialMediaP2'

const SocialMedia = () => {
  const [isTurnPage, setTurnPage] = useState<boolean>(false);

  

  const dispalyContent = () => {
    if (isTurnPage) {
      return <SocialMediaP2 setPage={setTurnPage} isturnpage={isTurnPage}/>
    }
    return <SocialMediaP1 setPage={setTurnPage} isturnpage={isTurnPage} />
  }


  return (
    <section className='fixed w-full'>
      <img className='object-cover' src="./Social2.jpg" alt="" />
      {/*<video src="./social1.mp4" autoPlay muted loop className='w-full'></video>*/}
       {dispalyContent()}
    </section>
  )
}

export default SocialMedia