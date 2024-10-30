import React from 'react'

export default function Herosection() {
  return (
    <div className='flex justify-center gap-4 mt-20'>
        <div>
            <h1 className='text-[38px] font-bold '>Hi, I am Yusuf, <br />
            Creative Technologist</h1>
            <p className='mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae modi autem inventore corporis error deserunt <br /> quos excepturi labore ea non reiciendis voluptatum fugiat rem minus assumenda, <br /> veniam ipsum praesentium accusantium.</p>
            <button className='bg-red-500 p-3 mt-4 text-white hover:'>Download Resume</button>
        </div>
        <div>
            <img src="/public/images/tunez.JPG" alt="pics"  className='w-60 h-60 rounded-full'/>
        </div>
    </div>
  )
}
