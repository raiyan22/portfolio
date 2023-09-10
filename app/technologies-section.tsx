import Image from "next/image"
import SectionTitleHeader from "./section-title-header"

export default function TechnologiesSection({ title }: { title: String }) {
    const technologies = [
        {
            "icon_path": "/python-logo.png",
            "label": "python"
        },
        {
            "icon_path": "/java-logo.png",
            "label": "java"
        },
        {
            "icon_path": "/java-logo.png",
            "label": "javascript"
        },
        {
            "icon_path": "/java-logo.png",
            "label": "html/css"
        },
        {
            "icon_path": "/java-logo.png",
            "label": "typescript"
        },
        {
            "icon_path": "/java-logo.png",
            "label": "swift"
        },
        {
            "icon_path": "/java-logo.png",
            "label": "openCV"
        },
        {
            "icon_path": "/java-logo.png",
            "label": "tensorflow"
        },
        {
            "icon_path": "/java-logo.png",
            "label": "langchain"
        },
        {
            "icon_path": "/java-logo.png",
            "label": "spring boot"
        },
        {
            "icon_path": "/java-logo.png",
            "label": "react"
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
            "icon_path": "/tailwind.png",
            "label": "github"
        },
        // {
        //     "icon_path": "/python-logo.png",
        //     "label": "OpenCV"
        // },
        // {
        //     "icon_path": "/java-logo.png",
        //     "label": "Java"
        // },
        // {
        //     "icon_path": "/nextjs.png",
        //     "label": "next.js"
        // },
        // {
        //     "icon_path": "/tailwind.png",
        //     "label": "tailwind"
        // }
    ]
    return (
        <div className="mb-12">
            
            <SectionTitleHeader title="Technologies" />
            <div className="text-base mb-4 text-gray-200">
                Technologies and tools that I used in my projects.
            </div>
            <div className="flex flex-wrap">
                {technologies.map( (item) => (
                    <div className="flex py-1 my-1 mr-2 sm:py-2 5 px-2 sm:px-3 md:px-4 sm:my-1  bg-slate-900 rounded-xl items-center group duration-150">
                        {/* <Image className="w-8 h-8 sm:w-10 sm:h-10 p-1 group-hover:-rotate-[15deg]  transition-all ease-in-out duration-150"  src={item.icon_path} alt={`icon_technology- ${item.label} `} width={25} height={25} /> */}
                        <span className="ml-2  sm:ml-3 md:ml-4 text-slate-400   text-sm tracking-wide font-bold cursor-default">
                            {item.label}
                        </span>
                    </div>
                ) )}

            </div>
        </div>
    )
}