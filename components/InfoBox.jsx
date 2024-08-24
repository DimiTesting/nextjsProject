import Link from "next/link"

const InfoBox = ({children, background, heading, details}) => {
    return (
        <div className={`${background} p-6 rounded-lg shadow-md`}>
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="mt-2 mb-4">
        {children}
        </p>
        <Link
            href={details.href}
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
        >
            {details.description}
        </Link>
        </div>
    )
}

export default InfoBox