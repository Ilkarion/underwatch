import Link from "next/link";
import Image from 'next/image'
import Youtube from "../../../public/youtube.svg"
import Instagram from "../../../public/instagram.svg"
import Gmail from "../../../public/gmail.svg"

export default function SocialMedia() {
    return(
        <div className="flex items-center flex-col bg-white  pt-[3vw] pb-[4vw] gap-[4vw]">
            <h2 className="font-[500] text-[3vw]">Follow us on our social media!</h2>
            <div className="social-icons flex flex-row gap-[2vw] items-center">
                <Link href="https://www.youtube.com/@underwatchesport" className="hover:shadow-lg hover:shadow-red-400" target="_blank"><Image src={Youtube} alt="Youtube" className="w-[3.5vw]"></Image></Link>
                <Link href="https://www.instagram.com/underwatch_ow/" className="hover:shadow-lg hover:shadow-amber-400" target="_blank"><Image src={Instagram} alt="Instagram" className="w-[3vw]"></Image></Link>
                <Link href="mailto:underwatchesport@gmail.com" className="hover:shadow-lg hover:shadow-green-400" target="_blank"><Image src={Gmail} alt="Gmail" className="w-[3.2vw]"></Image></Link>
            </div>
        </div>
    )
};
