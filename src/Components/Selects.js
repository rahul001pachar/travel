import React from 'react'
import BoraBora from "../Assets/borabora.jpg"
import BoraBora2 from "../Assets/borabora2.jpg"
import Maldives from "../Assets/maldives.jpg"
import Maldives2 from "../Assets/maldives2.jpg"
import Maldives3 from "../Assets/maldives3.jpg"
import KeyWest from "../Assets/keywest.jpg"
import SelectsCard from './SelectsCard'

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
       <SelectsCard bg={Maldives} text="Maldives"/>
       <SelectsCard bg={Maldives2} text="Jamaica"/>
       <SelectsCard bg={BoraBora} text="Bora Bora"/>
       <SelectsCard bg={BoraBora2} text="Antigua"/>
       <SelectsCard bg={KeyWest} text="KeyWest"/>
       <SelectsCard bg={Maldives3} text="Cozumel"/>
    </div>
  )
}

export default Selects