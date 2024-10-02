import React,{useState} from 'react'
import {AiOutlineClose,Aioutlinemen, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav,setNav]=useState(false)

  const handleNav = () =>{
    setNav(!nav)
  }

  return (
    <div className='flex justify-between text-white items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-2xl font-bold text-white uppercase'>Pasindu Jayasinghe</h1>
        <ul className='hidden md:flex font-bold uppercase'>
           <li className='p-4'>Home</li>
           <li className='p-4'>About</li>
           <li className='p-4'>Projects</li>
           <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose/> : <AiOutlineMenu/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 font-bold h-full w-[40%] border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-2xl font-bold text-white uppercase m-4'>Pasindu Jayasinghe</h1>
        <ul className='pt-3 uppercase'>
           <li className='p-4 border-b border-gray-600'>Home</li>
           <li className='p-4 border-b border-gray-600'>About</li>
           <li className='p-4 border-b border-gray-600'>Projects</li>
           <li className='p-4'>Contact</li>
        </ul>
        </div>
    </div>

  )
}
export default Navbar