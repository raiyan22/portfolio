import SectionTitleHeader from "./section-title-header"
import Image from "next/image"
import WebIcon from "../public/webicon.png"
import CompareIcon from "../public/refreshicon.png"

export default function ProjectsSection({ title }: { title: String }) {
    const projects = [
        {
            "thumbnail": "/paper-cut.jpg",
            "name": "Project name 1",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem quod vitae similique fuga? Ipsum.",
            "live_link": "#",
            "github_link": "https://www.github.com/raiyan22/Thesis",
        },
        {
            "thumbnail": "/paper-cut.jpg",
            "name": "Project name 2",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem quod vitae similique fuga? Ipsum.",
            "live_link": "#",
            "github_link": "https://www.github.com/raiyan22/Thesis",
        },
        {
            "thumbnail": "/paper-cut.jpg",
            "name": "Project name 3",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem quod vitae similique fuga? Ipsum.",
            "live_link": "#",
            "github_link": "https://www.github.com/raiyan22/Thesis",
        },
        {
            "thumbnail": "/paper-cut.jpg",
            "name": "Project name 3",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem quod vitae similique fuga? Ipsum.",
            "live_link": "#",
            "github_link": "https://www.github.com/raiyan22/Thesis",
        },
        {
            "thumbnail": "/paper-cut.jpg",
            "name": "Project name 3",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem quod vitae similique fuga? Ipsum.",
            "live_link": "#",
            "github_link": "https://www.github.com/raiyan22/Thesis",
        },
        {
            "thumbnail": "/paper-cut.jpg",
            "name": "Project name 3",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptatem quod vitae similique fuga? Ipsum.",
            "live_link": "#",
            "github_link": "https://www.github.com/raiyan22/Thesis",
        },

    ]

    return (
        <div className="mb-12">

            <SectionTitleHeader title="Projects" />
            <div className="text-base mb-4 text-gray-200">
                My primary projects.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2">
                {projects.map((item) => (
                    <div className="bg-slate-900 rounded-xl">
                        <div style={{ backgroundImage: `url('${item.thumbnail}')` }} className="bg-no-repeat bg-cover bg-center rounded-tl-xl rounded-tr-xl relative" >
                            <div className="aspect-video bg-gradient-to-b from-transparent to-black">
                                <div className="absolute bottom-0 left-0">
                                    <h3 className="text-xl font-bold text-gray-200 m-2 group-hover:invisible">
                                        {item.name}
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="m-2">
                            <div className="mb-4">
                                <p className="text-gray-400 text-sm">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, sit?
                                </p>
                            </div>
                            <div className="flex flex-row">
                                <div className="basis-1/2 flex">
                                    <a href={item.live_link} target="_blank" className="bg-gray-800 w-full flex items-center justify-center text-center p-3 rounded-lg mr-1 hover:bg-gray-700 transition ease-in-out duration-100">
                                        <Image src={WebIcon} alt="website icon" width={26} height={26} quality={100} />
                                        <span className="text-sm font-normal text-gray-200 tracking-wide ml-3">live</span>
                                    </a>
                                </div>
                                <div className="basis-1/2 flex">
                                    <a href={item.github_link} target="_blank" className="bg-gray-800 w-full flex items-center justify-center text-center p-3 rounded-lg mr-1 hover:bg-gray-700 transition ease-in-out duration-100">
                                        <Image src={CompareIcon} alt="compare icon" width={26} height={26} quality={100} />
                                        <span className="text-sm font-normal text-gray-200 tracking-wide ml-3">github</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}