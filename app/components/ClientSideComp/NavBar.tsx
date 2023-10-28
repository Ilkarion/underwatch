'use client'
import Link from 'next/link'
import Logo from '../../../public/logo.png'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return(
        <>
            <div className={` flex fixed flex-row items-center justify-between pr-[5%] pl-[5%] w-full transform transition-all ease-out delay-50  ${scrolled ? 'h-[60px] bg-white' : 'h-[75px] bg-transparent'} 2xl:h-[100px]`}>
                <Image src={Logo} alt="Logo blue" className='w-[5vw]' priority={true}/>
                <div className={`flex flex-row gap-[3vw] text-[1.2vw] font-light ${scrolled ? 'text-black' : 'text-white'}`}>
                    <div className={`about border pl-[0.8vw] pr-[0.8vw] pt-[0.4vw] pb-[0.4vw] ${scrolled ? 'border-black transition ease-in-out delay-150 hover:border-gray-600 hover:text-gray-600' : 'border-white transition ease-in-out delay-150 hover:border-[#E5E7EB] hover:text-[#E5E7EB]'} `}><Link href="/">ABOUT US</Link></div>
                    <div className={`our-staff border pl-[0.8vw] pr-[0.8vw] pt-[0.4vw] pb-[0.4vw] ${scrolled ? 'border-black transition ease-in-out delay-150 hover:border-gray-600 hover:text-gray-600' : 'border-white transition ease-in-out delay-150 hover:border-[#E5E7EB] hover:text-[#E5E7EB]'}`}><Link href="/">OUR STAFF</Link></div>
                    <div className={`contact border pl-[0.8vw] pr-[0.8vw] pt-[0.4vw] pb-[0.4vw] ${scrolled ? 'border-black transition ease-in-out delay-150 hover:border-gray-600 hover:text-gray-600' : 'border-white transition ease-in-out delay-150 hover:border-[#E5E7EB] hover:text-[#E5E7EB]'}`}><Link href="/">CONTACT</Link></div>
                    <div className={`join-us border pl-[0.8vw] pr-[0.8vw] pt-[0.4vw] pb-[0.4vw] ${scrolled ? 'border-black transition ease-in-out delay-150 hover:border-gray-600 hover:text-gray-600' : 'border-white transition ease-in-out delay-150 hover:border-[#E5E7EB] hover:text-[#E5E7EB]'}`}><Link href="/">JOIN US</Link></div>
                </div>
            </div>
        </>
    )
    
};
