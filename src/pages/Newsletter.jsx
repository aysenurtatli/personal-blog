import React, { useState } from 'react'
import Title from '../components/Title'
import successIcon from '../assets/images/icon-success.svg'
import errorIcon from '../assets/images/icon-error.svg'
const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isValid, setIsValid] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)){
      setIsValid(true);
      setMessage("You’re subscribed! Check your inbox for updates.")
      setEmail("")
    } else {
      setIsValid(false);
      setMessage("Please enter a valid email address.")
    }
  }

  const inputBorder = isValid === null
  ? 'border-[#4A4846]'
  : isValid
  ? 'border-green-500'
  : 'border-red-500'

  return (
    <article className='py-[32px] md:py-[48px] px-[10px] h-screen'>
        <Title title={"Newsletter"}></Title>
        <div className='my-[16px]'>
          <p className='text-[18px]'>Want to stay updated on my latest articles, coding tutorials, and personal adventures? Sign up for my newsletter! It’s a simple way to keep track of new posts and occasional coding tips I discover. Just drop your email in the sign-up box, and I’ll send you updates whenever there’s something new to share.</p>
          <p className='text-[#34302D] dark:text-white text-[20px] font-semibold mt-[16px]
          '>I’d love to have you along for the ride and also hear about your own journey!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className='text-[#34302D] dark:text-white text-[18px]'>
              Email Address
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email@example.com' className={`w-full bg-white dark:bg-[#201E1D] h-[51px] rounded-[10px] border border-[#DEDCDA] dark:border-[#4A4846] px-[16px] text-[18px] cursor-pointer ${inputBorder}`} />
          </label>
          {message && (
            
            <span className={`${isValid ? 'text-[#9DD3A9]'  : 'text-[#F04438]'} inline-flex gap-2`}>
              <img src={isValid ? successIcon : errorIcon} />{message}</span>
          )}
          <div>
            <button type='submit' className='w-[158px] h-[51px] rounded-[10px] bg-[#93CEFC] hover:bg-[#75B0DE] text-[#1C1A19] mt-[16px] mb-[8px] text-[18px] font-medium'>Stay updated</button>
            </div>
          <span className='block'>Unsubscribe anytime. No spam, I promise 🙂</span>
        </form>
    </article>
  )
}

export default Newsletter