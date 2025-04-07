import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import { formatDate } from '../utils/formatDate'
import Title from './Title'

const LatestArticles = () => {

    const [posts,setPosts] = useState([])

    useEffect(() => {
        axios.get("../../data/data.json")
        .then((response) => {
            const firstFiveBlogs = response.data.slice(0,5) 
            setPosts(firstFiveBlogs)
        })
        .catch((error) => {
            console.error(error)
        })
    },[]);


  return (
    <div className='py-[32px] md:py-[48px]'>
        <div className="flex items-center mb-[6px]">
                <Title title={"Latest Articles"}></Title>
                <div className="ml-3 mt-6 h-[3px] w-[40px] bg-[#75B0DE]"></div>
        </div>
        <div className='flex flex-col gap-[24px] my-[32px]'>
        {posts?.map((post) => (
            <div>
                <h3 className='text-[20px] text-[#34302D] dark:text-white font-semibold'>{post.title}</h3>
                <span className='italic text-[16px]'>{formatDate(post.publishedAt)}</span>
            </div>
        ))}
        </div>
        <Link to="/blog" className='border-b-2 border-[#75B0DE] text-[#34302D] dark:text-white text-[18px] font-medium'>View all articles</Link>
    </div>
  )
}

export default LatestArticles