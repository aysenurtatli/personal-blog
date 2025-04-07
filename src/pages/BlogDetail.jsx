import { useParams } from 'react-router'
import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { formatDate } from '../utils/formatDate'
import { micromark } from 'micromark'



const BlogDetail = () => {
    const {slug} = useParams()
    const [post, setPost] = useState(null);
 

 useEffect(() => {
    axios.get("../../data/data.json")
        .then((response) => {
            const foundPost = response.data.find((item) => item.slug === slug)
            setPost(foundPost)
        },[slug])
 })

 const htmlContent = useMemo(() => {
    if (!post?.content) return ''
    return micromark(post.content) 
}, [post?.content])

  return (
    <article className='px-[10px] py-[32px] md:py-[48px]'>
        {post && (
            <div>
            <h2 className='text-[40px] text-[#34302D] dark:text-white font-extrabold'>{post.title}</h2>
            <span className='italic text-[16px] my-[12px] block'>Published {formatDate(post.publishedAt)}</span>
            <div
                className="prose prose-invert max-w-none dark:[&_hr]:border-[#34302D] [&_hr]:border-[#EFEDEB] [&_hr]:border-t [&_hr]:my-[32px]"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </div>
        )}
       
    </article>
  )
}

export default BlogDetail