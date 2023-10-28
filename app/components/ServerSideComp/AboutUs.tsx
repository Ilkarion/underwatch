import Logo from '../../../public/logo-about-us.png'
import Image from 'next/image'
export default function AboutUs() {
    return(
        <div className="h-[48vw] w-full bg-[#f0f0f0] flex flex-row pl-[8vw] pt-[7vw] pb-[5vw] gap-[20px] min-[290px]:flex-col min-[810px]:flex-row max-[810px]:pl-[1vw] max-[810px]:pt-[1vw] max-[420px]:gap-[10px]">
            <div className='bg-[#E0E0E0] w-full flex justify-center items-center'>
                <Image src={Logo} alt='logo' className="object-contain w-full min-[290px]:h-[12vw] min-[810px]:h-full"/>
            </div>
            <div className='w-full flex flex-col gap-[15px] max-[420px]:gap-[5px]'>
                <p className='text-[#E0915C] font-[600] xl:text-[1vw] max-[572px]:text-[2vw]'>Underwatch</p>
                <h2 className='font-[700] text-[20px] xl:text-[2vw] max-[572px]:text-[3.3vw]'>About Us</h2>
                <p className='text-[#374151] w-[514px] leading-[3vw] xl:leading-[2.5vw] lg:w-[44vw] lg:text-[1.37vw] lg:leading-[30px] max-[810px]:w-[97vw] max-[810px]:text-[2.4vw]'>Unleash the ultimate gaming experience with Underwatch - where a tight-knit community of skilled players come together to compete and elevate their and your gameplay. We`re dedicated to fostering a positive and inclusive environment, with teams for players of all ranks. Our strict adherence to non-profit principles is made possible by the tireless efforts of our dedicated Mod Team, Coaches, and Members. </p>
            </div>
        </div>
    )
};
