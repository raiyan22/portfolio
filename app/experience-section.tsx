import SectionTitleHeader from "./section-title-header"

export default function ExperienceSection({ title }: { title: String }) {
    const experience = [
        {
            "id": "2",
            "time_duration": "09/2023 - 12/2023",
            "company_name": "'Bista Solutions'",
            "job_role": "Trainee ML Engineer",
            "key_contribution": [
                {
                    "id": "11",
                    "desc": "Implemented demand forecasting models on historical sales data.",
                },
                {
                    "id": "22",
                    
                    "desc": "Worked my way through statistical analysis using python and statsmodels.",
                },
                {
                    "id": "33",
                    "desc": "Developed a system to use popular forecasting methods in a convenient manner.",
                }
            ]
        },
        // {
        //     "id": "1",
        //     "time_duration": "09/2023 - 12/2023",
        //     "company_name": "'Samsung'",
        //     "job_role": "Trainee ML Engineer",
        //     "key_contribution": [
        //         {   "id": "44",
        //             "desc": "Worked my way through statistical analysis using python and statsmodels",
        //         },
        //         {
        //         {   "id": "55",
        //             "desc": "Skillfully implemented sales forecasting models on historical sales data",
        //         },
        //         {
        //         {   "id": "66",            
        //             "desc": "Developed a system to use popular forecasting methods in a convenient manner",
        //         }
        //     ]
        // }

    ]

    return (
        <div className="mb-12">
            <SectionTitleHeader title="Experience" />
            <div className="text-base mb-4 text-gray-400">
                Below is an overview of my professional experience.
            </div>
            <ul className="list-inside lg:list-outside list-disc text-gray-400">
                {experience.map((item) => (
                    <li key={item.id} className="mb-10">
                        <span>  {item.time_duration} </span> <br className="block sm:hidden" />
                            <span className="text-blue-600 pl-4 sm:pl-0">{">> "}</span>
                            {item.company_name}
                        
                        <p className="mt-3">
                            {item.job_role}
                        </p>
                        <p className="mt-4"> Contribution:</p>
                        
                            <ul className="list-disc ml-8 mt-4">
                                {item.key_contribution.map((point) => (
                                    <li key={point.id}>
                                            {point.desc}
                                        </li>
                                ))}
                            </ul>
                            
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}