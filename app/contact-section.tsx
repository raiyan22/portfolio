import SectionTitleHeader from "./section-title-header"

export default function ContactSection({ title }: { title: String }) {
    return (
        <div className="mb-12">
            <SectionTitleHeader title="Contact" />
            <div className="text-base mb-4 text-gray-400">
                Feel free to mail or do a quick call.
            </div>

            {/*  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="py-4 pl-4 rounded-full bg-slate-800 group">
                    <div className="flex items-center cursor-default">
                        {/* <div className="w-8">
                            <img className="group-hover:-rotate-12 transition ease-in-out duration-100" src="./public/icons8-gmail-96.png" />
                        </div> */}
                        <div className="ml-4">
                            <div className="text-slate-500 text-sm tracking-wide font-semibold group-hover:text-slate-400 transition ease-in-out duration-100">
                               raiyanislam058@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4 pl-4 rounded-full bg-slate-800 group">
                    <div className="flex items-center cursor-default">
                        {/* <div className="w-8">
                            <img className="group-hover:-rotate-12 transition ease-in-out duration-100" src="./public/icons8-callback-96.png" />
                        </div> */}
                        <div className="ml-4">
                            <div className="text-slate-500 text-sm tracking-wide font-semibold group-hover:text-slate-400 transition ease-in-out duration-100">
                                +88-01531992476
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
    )
}