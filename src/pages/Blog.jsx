import React from 'react'
import Title from '../components/Title'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'

const Blog = () => {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        axios.get("../../data/data.json")
        .then((response) => {
            setPosts(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
    },[]);

  return (
    <div className='py-[32px] md:py-[48px] px-[10px]'>
        <div className="flex items-center mb-[6px]">
        <Title title="My Articles" />
            <div className="ml-3 mt-6 h-[3px] w-[40px] bg-[#75B0DE]"></div>
        </div>
        <p className='text-[18px]'>
        Below are all my recent blog posts. Click on any title to read the full article.
        </p>
        <div>
            {posts.map((post, index) => (
                <Link to={`/blog/${post.slug}`} key={index}>
                    <div className='flex flex-col gap-[8px] border-b border-[#EFEDEB] dark:border-[#34302D] py-[20px]'>
                        <h3 className='text-[20px] text-[#34302D] dark:text-white font-semibold'>{post.title}</h3>
                        <span className='text-[16px] italic'>{post.publishedAt}</span>
                        <p className='text-[18px]'>{post.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Blog