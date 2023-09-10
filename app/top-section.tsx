import Image from "next/image";
import ProfileImage from '../public/profilepic.jpg'

export default function TopSection() {
    return (
        <div className="my-16 sm:my-24 md:my-32">
            <div className="flex items-center justify-end">
                <div className="mr-4 sm:mr-8 text-right">
                    <span className="text-2xl sm:text-3xl md:text-4xl text-slate-300 font-bold tracking-wide">
                        Md. Raiyanul Islam
                    </span>
                    <p className="text-sm sm:text-base text-slate-500">
                        
                        
                        Fresh graduate looking for Software Engineer role
                    </p>

                </div>
                <div>
                    <Image className="rounded-full" src={ProfileImage} alt="profile-image" width={140} height={140} quality={100} />
                </div>
            </div>
        </div>

    )
}