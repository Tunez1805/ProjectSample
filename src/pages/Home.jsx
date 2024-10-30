import React from 'react'
import Featured from '../components/Featured'
import Featured2 from '../components/Featured2'
import Featured3 from '../components/Featured3'
import Herosection from '../components/Herosection'
import Recent from '../components/Recent'

export default function Home() {
  return (
    <div>
        <Herosection />
        <Recent />
        <Featured />
        <Featured2 />
        <Featured3 />
        
    </div>
  )
}
