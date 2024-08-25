import Image from "next/image"
import Link from "next/link"
import {FaBed, FaBath, FaRulerCombined, FaMapMarker, FaMoneyBill} from 'react-icons/fa'

const HomePropertyCard = ({properties}) => {

    properties = properties.slice(0,3)

    return (
        properties.length>0 ? (
            properties.map((property) => (
                <div className="rounded-xl shadow-md relative">
                <Image
                    src={`/images/properties/${property.images[0]}`}
                    height="0"
                    width="0"
                    sizes="100vh"
                    alt=""
                    className="w-full h-auto rounded-t-xl"
                />
                <div className="p-4">
                    <div className="text-left md:text-center lg:text-left mb-6">
                        <div className="text-gray-600">{property.type}</div>
                        <h3 className="text-xl font-bold">{property.name}</h3>
                    </div>
                    <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right"> 
                        {property.rates.monthly ? `$${property.rates.monthly}/mo` : 
                        property.rates.weekly ? `$${property.rates.weekly}/wk`: 
                        `$${property.rates.nightly}/ng`}
                    </h3>
                    <div className="flex justify-center gap-4 text-gray-500 mb-4">
                        <p>
                            <FaBed/> {property.beds}
                            <span className="md:hidden lg:inline">Beds</span>
                        </p>
                        <p>
                            <FaBath/> {property.baths}
                            <span className="md:hidden lg:inline">Baths</span>
                        </p>
                        <p>
                            <FaRulerCombined/> {property.square_feet}
                            1,500 <span className="md:hidden lg:inline">sqft</span>
                        </p>
                    </div>
        
                    <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
                        <p><FaMoneyBill/> Weekly</p>
                        <p><FaMoneyBill/> Monthly</p>
                    </div>
        
                    <div className="border border-gray-100 mb-5"></div>
        
                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                            <FaMapMarker color="red"/>
                            <span className="text-orange-700"> {property.location.city} {' '} {property.location.state} </span>
                        </div>
                        <Link
                            href={`/properties/${property._id}`}
                            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                        >
                            Details
                        </Link>
                    </div>
                </div>
                </div>
            ))
        ):( <div className="rounded-xl shadow-md relative"> No Properties Found </div>)
    )
}

export default HomePropertyCard