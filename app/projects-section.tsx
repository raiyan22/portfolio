import SectionTitleHeader from "./section-title-header"
import Image from "next/image"
import WebIcon from "../public/webicon.png"
import CompareIcon from "../public/refreshicon.png"

export default function ProjectsSection() {
    const projects = [
        {
            "thumbnail": "/frbas.webp",
            "name": "FaceRecog",
            "description": "An end to end GUI based Application facilitating the teacher to take attendance automatically relying on the face recognition method.",
            "live_link": "n/a",
            "github_link": "https://github.com/raiyan22/FaceRecog",
        },
        {
            "thumbnail": "/hand-gesture.png",
            "name": "Phrase level Bangla Sign Language Recognition (Thesis)",
            "description": "Developed a system for recognizing Bangla sign language at the phrase level using hand gesture analysis. Used MediaPipe for feature extraction.",
            "live_link": "n/a",
            "github_link": "https://www.github.com/raiyan22/Thesis",
        },
        {
            "thumbnail": "/chatcsv.jpg",
            "name": "ChatSQL",
            "description": "Powered by langchain and OpenAI that delivers information to the user from a custom or existing SQL database in an organized, personalized and conversational manner.",
            "live_link": "#",
            "github_link": "https://github.com/raiyan22/chatCSV",
        },
        {
            "thumbnail": "/springboot.jpg",
            "name": "T-store REST API",
            "description": "A simple backend API created with Spring boot and Java  following REST approach. Studied and implemented the basic Spring boot architecture. ",
            "live_link": "#",
            "github_link": "https://www.github.com/raiyan22/Tshirt-REST-API",
        },
        {
            "thumbnail": "/ifit.webp",
            "name": "iFit",
            "description": "Mobile application for iOS platform made with Swift to help a user to exercise and workout. Implemented the authentication system using Firebase.",
            "live_link": "#",
            "github_link": "https://www.github.com/raiyan22/iFit-iOS-fitness-App",
        },
        {
            "thumbnail": "/covidkiller.png",
            "name": "CovidKiller",
            "description": "A 2D platformer game made with PyGame module. Implemented simple collision detection and scoring system for player. Inspired from old school arcade style games.",
            "live_link": "#",
            "github_link": "https://github.com/raiyan22/CovidKiller",
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
                    // <div className="bg-slate-900 rounded-xl">
                    <div className="bg-slate-900 rounded-xl min-h-[300px]">
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
                                    {item.description}
                                </p>
                            </div>
                            <div className="flex flex-row">

                                {/* <div className="basis-1/2 flex">
                                    <a href={item.live_link} target="_blank" className=" bg-gray-800 disabled w-full flex items-center justify-center text-center p-3 rounded-lg mr-1 hover:bg-gray-700 transition ease-in-out duration-100">
                                        <Image src={WebIcon} alt="website icon" width={26} height={26} quality={100} />
                                        <span className="text-sm font-normal text-gray-200 tracking-wide ml-3">live</span>
                                    </a>
                                </div> */}
                                <div className="w-full">
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

        </div >
    )
}