import girlRobot from '../../../public/robot-girl.jpg'
export default function JoinCommunity() {
    return(
        <div className="h-[38vw] w-full relative max-[701px]:h-[500px] max-[507px]:h-[300px] max-[377px]:h-[225px]">
            <div className="w-full h-full absolute z-[-3]"
                style={{
                    backgroundImage: `url(${girlRobot.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
        >

            </div>
            <div className='flex flex-col gap-[2vw] pt-[13vw] pl-[5vw] max-[377px]:pt-[20vw]'>
                <div className="flex flex-col gap-[1vw]">
                    <p className="font-[600] text-[#E0915C] text-[1.2vw] max-[905px]:text-[18px]">Underwatch</p>
                    <h2 className="font-[600] text-white text-[2.3vw] max-[905px]:text-[22px] max-[616px]:text-[5.5vw]">Join our Community</h2>
                    <p className="text-white text-[1vw] font-[300] max-[905px]:text-[12px] max-[616px]:text-[3vw]">Try <i>Underwatch for free</i> and become a better player with our help!</p>
                </div>
                <div className="flex flex-col gap-[1vw]">
                    <button className="w-max bg-white pl-[1.8vw] pr-[1.8vw] pt-[0.8vw] pb-[0.8vw] font-[300] text-[1vw] hover:bg-transparent hover:border hover:border-white hover:text-white  max-[905px]:text-[13px]  max-[616px]:text-[2.54vw]">JOIN US</button>
                    <p className='text-[#7592A1] text-[1vw] font-[300] max-[905px]:text-[12px] max-[616px]:text-[3vw] '>You will be redirected to discord.gg to be invited to Underwatch.</p>
                </div>
            </div>
        </div>
    )
};
