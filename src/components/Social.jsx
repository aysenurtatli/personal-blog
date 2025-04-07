import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";


const Social = () => {

    const socialIcons = [
        {icon: FaXTwitter, alt: "x"},
        {icon: FaGithub, alt: "github"},
        {icon: FaLinkedinIn, alt: "linkedin"},
        {icon: SiFrontendmentor, alt: "frontend mentor"},
    ]
  return (
    <div className="flex gap-4">
            {socialIcons.map((icons, index) => {
            const Icon = icons.icon;
            return (
                <a href="#" key={index} className="w-[40px] h-[40px] border border-[#EFEDEB] dark:border-[#34302D] flex items-center justify-center rounded-[8px]">
                    <Icon className="text-[20px] text-[#34302D] dark:text-white" />
                </a>
            );
        })}

        </div>
  )
}

export default Social