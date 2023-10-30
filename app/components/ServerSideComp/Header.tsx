import bgImgUnderWatch from '../../../public/underwatchbgheader.png'
export default function Header() {
    return(
        <>
            <div className="w-full max-[2038px]:h-[1000px]  max-[1055px]:h-[803px]  max-[782px]:h-[65vw]"
                style={{
                    backgroundImage: `url(${bgImgUnderWatch.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
            </div>
        </>
    )
};
