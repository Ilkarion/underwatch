import bgImgUnderWatch from '../../../public/underwatchbgheader.png'
import Image from 'next/image'
export default function Header() {
    return(
        <>
            <div className="w-full min-[290px]:h-[60vw] max-[500px]:h-[60vw] lg:h-[550px] xl:h-[650px] 2xl:h-[750px] ">
                <Image src={bgImgUnderWatch} alt='bg image logo underwatch' className='h-[73vw] object-cover w-full max-[500px]:h-[60vw] lg:h-[550px] xl:h-[650px] 2xl:h-[750px] fixed z-[-1]'/>
            </div>
        </>
    )
};
