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
                {/* <div className="py-4 pl-4 rounded-full bg-slate-800 group"> */}
                <div className="py-4 rounded-full bg-slate-800 group">
                    <div className="flex items-center justify-around cursor-default">
                        {/* <div className="w-8">
                            <img className="group-hover:-rotate-12 transition ease-in-out duration-100" src="./public/icons8-gmail-96.png" />
                        </div> */}
                        {/* <div className="ml-4"> */}
                        <div className="ml-0    ">
                            <div className="text-slate-500 text-sm tracking-wide font-semibold group-hover:text-slate-400 transition ease-in-out duration-100">
                                raiyanislam058@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="py-4 pl-4 rounded-full bg-slate-800 group"> */}
                <div className="py-4 rounded-full bg-slate-800 group">
                    <div className="flex items-center justify-around cursor-default">
                        {/* <div className="w-8">
                            <img className="group-hover:-rotate-12 transition ease-in-out duration-100" src="./public/icons8-callback-96.png" />
                        </div> */}
                        {/* <div className="ml-4"> */}
                        <div className="ml-0">
                            <div className="text-slate-500 text-sm tracking-wide font-semibold group-hover:text-slate-400 transition ease-in-out duration-100">
                                +88-01531992476
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* cp */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                <div className="py-4 rounded-full bg-slate-800 group">
                    <div className="flex items-center justify-around cursor-default">
                        {/* <div className="w-8">
                            <img className="group-hover:-rotate-12 transition ease-in-out duration-100" src="./public/icons8-gmail-96.png" />
                        </div> */}
                        <div className="ml-0">
                            <div className="text-slate-500 text-sm tracking-wide font-semibold group-hover:text-slate-400 transition ease-in-out duration-100">
                                <a target="_blank" href="https://www.linkedin.com/in/raiyanulislam/"> linkedin </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4 rounded-full bg-slate-800 group">
                    <div className="flex items-center justify-around cursor-default">
                        {/* <div className="w-8">
                            <img className="group-hover:-rotate-12 transition ease-in-out duration-100" src="./public/icons8-callback-96.png" />
                        </div> */}
                        <div className="ml-0">
                            <div className="text-slate-500 text-sm tracking-wide font-semibold group-hover:text-slate-400 transition ease-in-out duration-100">
                                <a target="_blank" href="https://www.stackoverflow.com/users/9550867/raiyan22"> stackoverflow</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4 rounded-full bg-slate-800 group">
                    <div className="flex items-center justify-around cursor-default">
                        {/* <div className="w-8">
                            <img className="group-hover:-rotate-12 transition ease-in-out duration-100" src="./public/icons8-callback-96.png" />
                        </div> */}
                        <div className="ml-0">
                            <div className="text-slate-500 text-sm tracking-wide font-semibold group-hover:text-slate-400 transition ease-in-out duration-100">
                                <a target="_blank" href="https://www.github.com/raiyan22"> github</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            {/*  */}
            {/* <div className="flex flex-col sm:flex-row justify-center items-center m-3 mx-0 space-x-1 md:space-x-2">
                
                <div className="bg-slate-900 rounded-full h-1 ">
                    <div className="text-center text-sm text-slate-500 m-3 sm:mx-6 sm:my-1 sm:p-1 ">
                        
                    </div>
                </div>
                <div className="bg-slate-900 rounded-full group">
                    <div className="text-center text-sm text-slate-500 mx-3 my-2 sm:mx-6 sm:my-1 sm:p-1  cursor-pointer group-hover:text-slate-400 transition ease-in-out duration-100">
                        <a href="https://www.linkedin.com/in/raiyanulislam/"> linkedin </a>
                    </div>
                </div>
                <div className="bg-slate-900 rounded-full group">
                    <div className="text-center text-sm text-slate-500 mx-6 my-1 p-1 cursor-pointer group-hover:text-slate-400 transition ease-in-out duration-100">
                        <a href="https://stackoverflow.com/users/9550867/raiyan22"> stackoverflow </a>
                    </div>
                </div>
                <div className="bg-slate-900 rounded-full group">
                    <div className="text-center text-sm text-slate-500 mx-6 my-1 p-1 cursor-pointer group-hover:text-slate-400 transition ease-in-out duration-100">
                        <a href="https://www.github.com/raiyan22"> github </a>
                    </div>
                </div>
                <div className="bg-slate-900 rounded-full h-1 ">
                    <div className="text-center text-sm text-gray-200 mx-6 my-1 p-1 ">
                        
                    </div>
                </div>
            </div> */}
        </div>
    )
}