import Image from "next/image"
import SectionTitleHeader from "./section-title-header"

export default function TechnologiesSection({ title }: { title: String }) {
    const technologies = [
        {
            "icon_path": "/python-logo.png",
            "label": "Python"
        },
        {
            "icon_path": "/java-logo.png",
            "label": "Java"
        },
        {
            "icon_path": "/nextjs.png",
            "label": "next.js"
        },
        {
            "icon_path": "/tailwind.png",
            "label": "tailwind"
        },
        {
            "icon_path": "/python-logo.png",
            "label": "Python"
        },
        {
            "icon_path": "/java-logo.png",
            "label": "Java"
        },
        {
            "icon_path": "/nextjs.png",
            "label": "next.js"
        },
        {
            "icon_path": "/tailwind.png",
            "label": "tailwind"
        }
    ]
    return (
        <div className="mb-12">
            
            <SectionTitleHeader title="technologies" />
            <div className="text-base mb-4 text-gray-200">
                Technologies and tools that I used in my projects.
            </div>
            <div className="flex flex-wrap">
                {technologies.map( (item) => (
                    <div className="flex py-1 sm:py-2 5 px-2 sm:px-3 md:px-4 sm:my-1 mr-2 bg-slate-900 rounded-xl items-center group duration-150">
                        <Image className="w-10 h-10 sm:w-12 sm:h-12 p-1 group-hover:-rotate-[15deg]  transition-all ease-in-out duration-150"  src={item.icon_path} alt={`icon_technology- ${item.label} `} width={35} height={35} />
                        <span className="ml-2  sm:ml-3 md:ml-4 text-slate-400   text-sm tracking-wide font-bold cursor-default">
                            {item.label}
                        </span>
                    </div>
                ) )}

            </div>
        </div>
    )
}