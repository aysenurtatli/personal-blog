import React from 'react'
import Social from '../components/Social'
import Title from '../components/Title'
import workspace from '../assets/images/image-workspace-large.jpg'
const About = () => {
  return (
    <article className='py-[32px] md:py-[48px] px-[10px]'>
        <div className="relative inline-block mb-[24px]">
          <div className='relative z-10'>
          <Title title={"About Me"}></Title>
        </div>
        <div className="absolute bottom-1 left-0 w-full h-[10px] bg-[#75B0DE] z-0"></div>
      </div>
    <p className='text-[18px]'>
    Hi, I’m Paulina! Ever since I can remember, I’ve had a passion for creativity and problem-solving. That’s what led me to the world of front-end web development. There’s something magical about seeing an idea come to life in the browser—whether it’s a simple layout experiment or a complex interface for a bigger project.
    <br /><br />
    When I’m not coding, I love getting lost in a good book. My taste is pretty eclectic: I’ll happily read everything from fantasy novels to biographies of tech pioneers. Reading helps me unwind and often sparks new ideas for my coding projects.
    <br /><br />
    Another big passion of mine is the great outdoors. Hiking allows me to disconnect from the digital world and reconnect with nature. I love challenging hikes with rewarding views at the top. And if I’m not on the trails, you might catch me rock climbing. The combination of mental focus and physical endurance is a perfect parallel to tackling tough coding challenges!
    </p>
    <br /><br />
    <span className='text-[18px]'>Some of my favorite books:</span>
    <br /> <br />
    <ul className='list-disc px-5 text-[18px]'>
        <li>“The Pragmatic Programmer” by Andrew Hunt and David Thomas (for helpful insights into software development)</li>
        <li>“Ready Player One” by Ernest Cline (for some futuristic escapism)</li>
        <li>“The Hobbit” by J.R.R. Tolkien (for a bit of fantasy fun)</li>
        <li>“Educated” by Tara Westover (for incredible inspiration)</li>
    </ul>
    <br /><br />
    <p className='text-[18px]'>
    I absolutely love my workspace as a place that inspires me to do my best work, so I thought I’d share it with you:
    <img src={workspace} alt="workspace" className='w-full rounded-xl my-[24px]' />
    
    I hope this blog not only documents my growth but also helps others see that coding can be for everyone. Thanks for joining me on this journey!
    </p>
    <div className='mt-[24px]'>
        <h3 className='text-[23px] text-[#34302D] dark:text-white font-semibold mb-[16px]'>Follow Me</h3>
      <Social/>
    </div>
</article>
  )
}

export default About