export default function DescriptionSection() {

    // const cv_link = "https://drive.google.com/file/d/1L08e0peSZUpGHBFVOkZwoVn_J_uKkOhm/view?usp=sharing"
    const cv_link = "https://drive.google.com/file/d/1hkD0Cmg9810gGncZiys9fDlWHH2SK_av/view?usp=sharing"

    return (
        <div className="mb-12">
            <p className="text-gray-400">
                Hi!, I'm a <span className="text-sky-500 font-bold"> Software Developer</span>.
            </p>
            <p className="text-gray-400">
                I am interested about AI.
            </p>
            <p className="text-gray-400">
                Always curious to try new stuff.
            </p>
            <p className="text-gray-400">
                I like pizza and calm places. 🍕🌊
            </p>
            <p className="text-gray-400 mt-5">
                {/* Here is my <a href="./Md_Raiyanul_Islam_CV.pdf" download="Md_Raiyanul_Islam_CV.pdf"> <span className="text-lg text-sky-500 font-bold">CV</span>. </a> */}
                Here is my updated <a target="_blank" href={cv_link}> <span className=" animate-pulse text-xl text-sky-500 font-bold ">resume</span>. </a>
                {/* <a href={cv_link}>  </a> */}
            </p>
        </div>
    )
}
