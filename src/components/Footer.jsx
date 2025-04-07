import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

const Footer = () => {

   const socialIcons = [
          {icon: FaXTwitter, alt: "x"},
          {icon: FaGithub, alt: "github"},
          {icon: FaLinkedinIn, alt: "linkedin"},
          {icon: SiFrontendmentor, alt: "frontend mentor"},
      ]

  return (
    <footer className='mx-auto flex items-center justify-between border-t border-[#EFEDEB] dark:border-[#34302D]  w-full min-h-[53px] px-[10px] mt-[20px]'>
      <span>Made with ❤️ and ☕️</span>
      <div className='flex gap-[18px]'>
      {socialIcons.map((icons, index) => {
            const Icon = icons.icon;
            return (
                <a href="#" key={index} className="flex items-center justify-center">
                    <Icon className="text-[20px] text-[#4A4846] dark:text-white" />
                </a>
            );
        })}
      </div>
    </footer>
  )
}

export default Footer