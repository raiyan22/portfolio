import SectionTitleHeader from "./section-title-header"

export default function EduSection() {
    const education = [
        {
            "label": "B.Sc. (CSE)",
            "value": "Khulna University of Engineering & Technology (KUET)",
            "score": "cgpa 3.64/4.00"
        },
        // {
        //     "label": "dob",
        //     "value": "29 December, 1999"
        // },
        {
            "label": "HSC",
            "value": "2017 - Notre Dame College, Dhaka",
            "score": "gpa 5.00/5.00"
        },
        {
            "label": "SSC",
            "value": "2015 - Ideal School and College, Dhaka",
            "score": "gpa 5.00/5.00"
        }

    ]
    return (
        <div className="mb-12">
            <SectionTitleHeader title="Education" />
            <div className="text-gray-400 cursor-default">
                {education.map((item) => (
                    <div>
                        <div className="flex flex-row mb-4">
                            <div className="basis-1/3">
                                <p>
                                    <span className="text-sky-600 font-black">_</span>
                                    {item.label}
                                </p>
                            </div>
                            <div className="basis-2/3">
                                <p>{item.value}</p>
                                {/* score */}
                               {/* <span className="text-sky-600 font-black">   <p>{item.score}</p> </span> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}