import React from 'react'
import Title from '../components/Title'
import Social from '../components/Social'
import LatestArticles from '../components/LatestArticles'
const Home = () => {
  return (
    <div className='py-[32px] md:py-[48px] px-[10px]'>
        <div className="relative inline-block mb-[24px]">
          <div className='relative z-10'>
          <Title title={"Hi, I’m Paulina 👋"}></Title>
        </div>
        <div className="absolute bottom-1 left-0 w-full h-[10px] bg-[#75B0DE] z-0"></div>
      </div>
        <p className='text-[18px]'>
        I’m on a journey to become a front-end web developer. I love building little projects, trying out new coding techniques, and sharing what I learn along the way. When I’m not at my desk, you’ll find me reading, hiking through the mountains, or challenging myself on rock-climbing walls.
        <br /> <br />
        I started this blog to document my progress, keep myself accountable, and hopefully inspire anyone else who’s learning to code. Welcome to my corner of the internet, and thanks for stopping by!
        </p>
        <div className='my-[24px]'>
          <Social/>
          <LatestArticles/>
        </div>
    </div>
  )
}

export default Home