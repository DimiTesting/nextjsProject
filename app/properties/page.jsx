import PropertyCard from "@/components/PropertyCard"
//import properties from "@/properties.json"
import connectDB from "@/config/db"
import Property from "@/models/Property"

const ShowProperties = async () => {
    await connectDB();
    const properties = await Property.find({}).lean()

    return (
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <PropertyCard   
                        properties={properties}
                    />
                </div>
            </div>
      </section>
  
    )
}

export default ShowProperties