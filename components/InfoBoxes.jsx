import InfoBox from "./InfoBox"

const InfoBoxes = () => {

    return (
        <section>
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <InfoBox 
                        background={'bg-gray-100'}
                        heading={'For Renters'}
                        details={{ 
                            href: "/properties",
                            description: "Browse Details"
                        }}
                        > 
                        Find your dream rental property. Bookmark properties and contact owners. 
                    </InfoBox>
                    <InfoBox 
                        background={'bg-blue-100'}
                        heading={'For Property Owners'}
                        details={{
                            href: "/properties/add",
                            description: "Add Property"
                        }}> 
                        List your properties and reach potential tenants. Rent as an airbnb or long term. 
                    </InfoBox>
                </div>
            </div>
        </section>
    )
}

export default InfoBoxes