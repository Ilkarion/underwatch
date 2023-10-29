'use client'
import Link from 'next/link'
import Logo from '../../../public/logo.png'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [click, setClick] = useState(false)

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

    //anomation
    const topStick:string = "transform transition-all ease-out delay-150 top-[4px]"
    const bottomStick:string = "transform transition-all ease-out delay-150 bottom-[4px]"

    return(
        <>
            <div className={` flex fixed flex-row items-center justify-between pr-[5%] pl-[5%] w-full transform transition-all ease-out delay-50 ${scrolled ? 'h-[60px] bg-white' : 'h-[75px] bg-transparent'} 2xl:h-[100px] max-[500px]:hidden`}>
                <Image src={Logo} alt="Logo blue" className='w-[5vw]' priority={true}/>
                <div className={`flex flex-row gap-[3vw] text-[1.2vw] font-light ${scrolled ? 'text-black' : 'text-white'}`}>
                    <div className={`about border pl-[0.8vw] pr-[0.8vw] pt-[0.4vw] pb-[0.4vw] ${scrolled ? 'border-black transition ease-in-out delay-150 hover:border-gray-600 hover:text-gray-600' : 'border-white transition ease-in-out delay-150 hover:border-[#E5E7EB] hover:text-[#E5E7EB]'} `}><Link href="/">ABOUT US</Link></div>
                    <div className={`our-staff border pl-[0.8vw] pr-[0.8vw] pt-[0.4vw] pb-[0.4vw] ${scrolled ? 'border-black transition ease-in-out delay-150 hover:border-gray-600 hover:text-gray-600' : 'border-white transition ease-in-out delay-150 hover:border-[#E5E7EB] hover:text-[#E5E7EB]'}`}><Link href="/">OUR STAFF</Link></div>
                    <div className={`contact border pl-[0.8vw] pr-[0.8vw] pt-[0.4vw] pb-[0.4vw] ${scrolled ? 'border-black transition ease-in-out delay-150 hover:border-gray-600 hover:text-gray-600' : 'border-white transition ease-in-out delay-150 hover:border-[#E5E7EB] hover:text-[#E5E7EB]'}`}><Link href="/">CONTACT</Link></div>
                    <div className={`join-us border pl-[0.8vw] pr-[0.8vw] pt-[0.4vw] pb-[0.4vw] ${scrolled ? 'border-black transition ease-in-out delay-150 hover:border-gray-600 hover:text-gray-600' : 'border-white transition ease-in-out delay-150 hover:border-[#E5E7EB] hover:text-[#E5E7EB]'}`}><Link href="/">JOIN US</Link></div>
                </div>
            </div>

            <div className={`fixed min-[500px]:hidden max-[500px]:flex  flex-col w-full items-center overflow-hidden ${click ? 'h-[120px]' : 'h-[5vw]'} transform transition-all ease-out delay-50 ${scrolled || click ? 'bg-white' : 'bg-transparent'}`}>
              <div className={`flex flex-row w-full items-center justify-between    pr-[5%] pl-[5%]`}>
                <Image src={Logo} alt='logo' className='w-[5vw]'/>
                <div className='flex justify-center flex-col gap-[3px]' onClick={()=>setClick(!click)}>
                  <div className={`w-4 h-px bg-black relative transition-all ease-out delay-50 ${click ? 'top-[4px] rotate-45' : 'top-[0px] rotate-0' }`}></div>
                  <div className={`w-4 h-px bg-black transition-[opacity] delay-50 ${click && 'opacity-0'}`}></div>
                  <div className={`w-4 h-px bg-black relative transition-all ease-out delay-50 ${click ? 'bottom-[4px] rotate-[-45deg]' :'bottom-[0px] rotate-[0deg]'}`}></div>
                </div>
              </div>
              <ul className={`flex flex-col w-full text-center transform transition-all ease-out delay-50 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
                  <li className='w-full font-[300] hover:bg-slate-200 hover:cursor-pointer'>ABOUT US</li>
                  <li className='w-full font-[300] hover:bg-slate-200 hover:cursor-pointer'>OUR STAFF</li>
                  <li className='w-full font-[300] hover:bg-slate-200 hover:cursor-pointer'>CONTACT</li>
                  <li className='w-full font-[300] hover:bg-slate-200 hover:cursor-pointer'>JOIN US</li>
              </ul>
            </div>
        </>
    )
    
};
