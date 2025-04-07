import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router'
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import BlogDetail from "./pages/BlogDetail"
import About from "./pages/About"
import Newsletter from "./pages/Newsletter"
import Footer from "./components/Footer"

function App() {

  

  return (
    <>
    <Navbar/>
      <div className='max-w-[631px] mx-auto  border-l border-r border-[#EFEDEB] dark:border-[#34302D]'>
              <Routes>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='/blog' element={<Blog/>}></Route>
                  <Route path="/blog/:slug" element={<BlogDetail />} />
                  <Route path='/about' element={<About/>}></Route>
                  <Route path='/newsletter' element={<Newsletter/>}></Route>
              </Routes>
              <Footer/>
      </div>
      
    </>
  )
}

export default App
