import girlWithSpiritWolf from '../../../public/girlWithSpiritWolf.jpg'
export default function WhatOffer() {
    return(
        <div className='relative w-full max-[2001px]:h-[650px] max-[1848px]:h-[600px] max-[1651px]:h-[530px] max-[1420px]:h-[450px] max-[1222px]:h-[35vw]'>
            <div className='absolute z-[-1] w-full h-full'
                style={{
                    backgroundImage: `url(${girlWithSpiritWolf.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            ></div>
            <div className="pt-[9vw] pl-[6vw] flex flex-col gap-[2vw]  max-[1651px]:pt-[8vw]">
                <p className='text-[#E0915C] font-[600] max-[2001px]:text-[1.5vw]'>Underwatch</p>
                <h2 className='text-white font-[500] max-[2001px]:text-[3vw]'>What we offer:</h2>
                <p className='text-white max-[2001px]:w-[49vw] tracking-[2px] max-[2001px]:text-[1.2vw] max-[1400px]:tracking-[1px] max-[655px]:tracking-[0.2px] max-[555px]:w-[75vw] max-[555px]:text-[1.5vw]'>
                                    Experience the best of online gaming with our dynamic community that
                    values fun, inclusivity, and safety. Our dedicated moderation team is
                    constantly working to enhance the community experience. We maintain
                    a zero-tolerance policy for toxicity and provide resources such as free
                    Vod-Reviews, affordable professional coaching, and 24/7 LFG and support to ensure all members can fully enjoy their time in our community.s
                </p>
            </div>
        </div>
    )
};
