import Image from "next/image"
import SectionTitleHeader from "./section-title-header"

export default function HobbiesSection() {
    const hobbies = [
        {
            "icon_path": "/python-logo.png",
            "label": "Python"
        },
    ]
    return (
        <div className="mb-12">
            
            <SectionTitleHeader title="Hobbies and Interests" />
            <div className="text-base mb-4 text-gray-200">
                Stuff I am hyped about.
            </div>
            <div className="text-base text-slate-400 font-medium cursor-default">
                <span className="underline decoration-2 decoration-lime-400">* Photography * </span>
                <span className="underline decoration-2 decoration-amber-400"> Digital Art *</span>
                <span className="underline decoration-2 decoration-sky-400"> Vector Illustration *</span>
                <span className="underline decoration-2 decoration-green-400"> New Technologies *</span>
                <span className="underline decoration-2 decoration-red-400"> Netflix *</span>
                <span className="underline decoration-2 decoration-purple-400"> Youtube *</span>
                <span className="underline decoration-2 decoration-teal-400"> Thrillers *</span>

            </div>
        </div>
    )
}