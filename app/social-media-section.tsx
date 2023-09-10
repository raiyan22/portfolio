import Image from "next/image"
import SectionTitleHeader from "./section-title-header"

export default function SocialSection() {
    // https://www.iconfinder.com/search?q=telegram&category=social-media
    // https://logowik.com/twitter-x-icon-logo-vector-59294.html
    const socials = [
        {
            "url": "https://www.linkedin.com/in/raiyanulislam/",
            "icon": "/linkedin_icon.svg",
            "icon_alt": "Linkedin icon",
            "label": "linkedin"
        },
        {
            "url": "https://www.t.me/ruiraiyan",
            "icon": "/telegram_icon.svg",
            "icon_alt": "Telegram icon",
            "label": "telegram"
        },
        {
            "url": "https://www.discordapp.com/users/996496959324037170",
            "icon": "/discord_icon.svg",
            "icon_alt": "Discord icon",
            "label": "discord"
        },
        {
            "url": "https://twitter.com/_raiyan22",
            "icon": "/twitter_x_icon.svg",
            "icon_alt": "Twitter icon",
            "label": "twitter"
        },
        {
            // ;)
            "url": "https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran", 
            "icon": "/instagram_icon.svg",
            "icon_alt": "Instagram icon",
            "label": "instagram"
        },
    ]
    return (
        <div className="mb-12">

            <SectionTitleHeader title="Socials" />
            <div className="text-base mb-4 text-gray-200">
                Connect with me through social networks.
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {socials.map((link) => (
                    <a href={link.url} target="_blank">
                        {/* <div className="rounded-xl text-center bg-slate-900 group"> */}
                        <div className="rounded-xl text-center bg-transparent group">
                            <div className="p-4">
                                <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
                                    {/* <Image src={link.icon} alt={link.icon_alt} quality={100} width={26} height={26} className="w-14 sm:w-12 md:w-12 group-hover:scale-105 group-hover:-rotate-12 ease-in duration-100"/> */}
                                    <Image src={link.icon} alt={link.icon_alt} quality={100} width={26} height={26} className="w-14 sm:w-12 md:w-12 group-hover:scale-110 ease-in duration-100"/>
                                </div>
                                <span className="text-xs md:text-sm text-slate-600 font-bold group-hover:tracking-wider ease-in duration-100">
                                    {link.label}
                                </span>
                            </div>
                        </div>
                    </a>
                ))}

            </div>
        </div>
    )
}