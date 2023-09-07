import Image from "next/image"
import SectionTitleHeader from "./section-title-header"

export default function LinksSection() {
    const links = [
        {
            "url": "https://www.github.com/raiyan22",
            "icon_path": "/python-logo.png",
            "label": "Example website 1"
        },
        {
            "url": "https://www.github.com/raiyan22",
            "icon_path": "/python-logo.png",
            "label": "Example website 1"
        },
    ]
    return (
        <div className="mb-12">
            
            <SectionTitleHeader title="Links" />
            <div className="text-base mb-4 text-gray-200">
                Check out my other sites and resources.
            </div>
            <div >
                {links.map( (item) => (
                    <a href={item.url} target="_blank" className="flex items-center w-full rounded-xl p-1.5 mb-2 bg-slate-900 group hover:bg-slate-800 transition-shadow duration-150" > 
                        <div className="flex w-full text-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 items-center flex">
                                <img src={item.icon_path} alt="link icon" width={42} height={42} className="p-0.5 pl-1 group-hover:-rotate-[20deg] transition-all ease-in-out duration-150" />
                            </div>
                            <h2 className="flex justify-center items-center font-bold w-full text-sm text-gray-200 -ml-10 group-hover:tracking-widest ease-in-out duration-150">
                                {item.label}
                            </h2>
                        </div>
                    </a>
                ) )}
            </div>
        </div>
    )
}