import SectionTitleHeader from "./section-title-header"

export default function InfoSection({ title }: { title: String }) {
    const information = [
        {
            "label": "name",
            "value": "Md. Raiyanul Islam"
        },
        {
            "label": "dob",
            "value": "29 December, 1999"
        },
        {
            "label": "location",
            "value": "Dhaka, Bangladesh"
        },
        {
            "label": "languages",
            "value": "English, Bangla, Hindi"
        },
        {
            "label": "experience",
            "value": "n/a"
        },  
        {
            "label": "status",
            "value": "Always exploring new ideas"
        }
    ]
    return (
        <div className="mb-12">
            <SectionTitleHeader title="Personal Information" />
            <div className="text-gray-400 cursor-default">
                {information.map((item) => (
                    <div>
                        <div className="flex flex-row mb-4">
                            <div className="basis-1/3">
                                <p>
                                    <span className="text-blue-600 font-black">_</span>
                                    {item.label}
                                </p>
                            </div>
                            <div className="basis-2/3">
                                <p>{item.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}