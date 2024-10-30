import React from 'react'

export default function Featured() {
  return (
    <div className='flex justify-center flex-row gap-4 mt-20'>
        <div>
            <img src="/public/images/codesign.JPG" alt="pics" />
        </div>
        <div>
            <h1 className='text-[25px] font-bold '>Designing Dashboards</h1>
            <button className='font-semibold text-white bg-indigo-950 rounded-xl p-1 w-42 h-6 px-2 leading-3'>2020</button> &nbsp; &nbsp; &nbsp; <h3 className='font-light text-gray-400 text-[18px]'>Dashboard</h3>
            <p className='w-594 h-93'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Inventore rerum tempora dignissimos enim, qui saepe <br /> facilis dolorum tempore eum modi eligendi ut provident,<br /> explicabo cum ducimus consequatur optio hic natus?</p>
        </div>
       
       <br />
        <hr className='my-4' />
    </div>
  )
}
