"use client";
import Link from 'next/link'
import React, { useState } from 'react'

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  return (
    <nav className='fixed w-full z-10 flex justify-between items-center bg-[#370617] py-3 text-white px-20'>
      <div className="sec-1 flex gap-6">
        <div className='nav-brand'>Ak blog</div>
        <div className='nav-links-wrapper'>
          <ul className='flex gap-4'>
            <Link href="/">Home</Link>
            <Link href="/favorites">Favorites</Link>
            <Link href="/saved">Saved</Link>
          </ul>
        </div>
      </div>
      <div className='sec-2 relative flex gap-4'>
        {
          isLoggedIn ? (<div className='cursor-pointer' onClick={()=>setShowProfileMenu(!showProfileMenu)}>profile</div>) : (<Link href="/login">Login</Link>)
        }
        {showProfileMenu ? 
          ( <div className='absolute -bottom-20 left-0 p-2 bg-black rounded-md'>
              <ul className='flex flex-col'>
                <Link href="/">Profile</Link>
                <Link href="/">notifications</Link>
                <Link href="/">log out</Link>
              </ul>
          </div> )
          : 
          ( <div></div> ) 
        }
      </div>
    </nav>
  )
}

export default NavBar
















// 'use client';
// import React, { useState } from 'react'
// import Link from 'next/link';

// import UserInfo from './UserInfo';
// import SearchBar from './SearchBar';
// export default function NavBar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const userImage = "https://picsum.photos/id/3/200/300";
//   const username = "Aya Killiah";
//   return ( 
//   <nav className="fixed w-full z-10 flex justify-center items-center flex-col">
//     <div className='bg-[#370617] relative w-full py-3'>
//     <div className="relative flex justify-between items-center mx-auto px-[75px]">
//       <div className='text-xl text-white'>LOGO</div>
//       <div className="relative flex items-center justify-center gap-4 md:hidden">
//        {
//        isLoggedIn &&
//         (<UserInfo userImage={userImage} username={username}/>) 
//         ||
//         (<button>Log in</button>)
//       }
        
//         <div className="flex items-center" >
//           <button type="button" 
//                   className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
//                   aria-controls="mobile-menu" 
//                   aria-expanded="false"
//                   onClick={()=>{
//                     setIsOpen(!isOpen); 
//                     console.log("isOpen")
//                   }}
//                   >
//             <span className="absolute -inset-0.5"></span>
//             <span className="sr-only">Open main menu</span>
            
//             <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//             </svg>
          
//             <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div className="desktop_size_menu hidden md:flex items-center justify-center gap-4">
//         <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
//         <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Favorites</a>
//         <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">saved</a>        
//         {
//        isLoggedIn &&
//         (<UserInfo userImage={userImage} username={username}/>) 
//         ||
//         (<button>Log in</button>)
//       }      </div>
//       </div>
//       <div className={`mobile_size_menu md:hidden ${isOpen ? "transition-all duration-75 flex flex-col justify-center items-center gap-6" : "hidden"}`}>
//           <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
//           <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Favorites</a>
//           <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">saved</a>        
//       </div>
//     </div>
//     <SearchBar/>
//   </nav>

// )
// }
