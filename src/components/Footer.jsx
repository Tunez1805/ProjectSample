import React from 'react'
import { FaFacebookSquare } from "react-icons/fa"; 
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className='flex justify-center space-x-2'>
        <a href=""><FaFacebookSquare /></a>
        <a href=""><FaInstagram /></a>
        <a href=""><FaTwitter /></a>
        <a href=""><FaLinkedin />
        </a>

      </div>
    </div>
    

  )
}
