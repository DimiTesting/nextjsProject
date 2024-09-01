import Hero from '@/components/Hero'
import HomePropertyCard from '@/components/HomePropertyCard'
import InfoBoxes from '@/components/InfoBoxes'
import Link from 'next/link'
import connectDB from '@/config/db'
import Property from '@/models/Property'

const HomePage = async() => {
    await connectDB()
    const recentProperties = await Property.find({}).sort({createdAt: -1}).limit(3).lean()
    return (
        <>
            <Hero></Hero>
            <InfoBoxes></InfoBoxes>
            <h2 className='text-3xl text-center text-blue-600 font-bold mt-6'> Recent Properies</h2>
            <section className="px-4 py-2">
                <div className="container-xl lg:container m-auto px-4 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <HomePropertyCard   
                            properties={recentProperties}
                        />
                    </div>
                </div>
            </section>

            <section className="px-4 py-6">
                <div className="container-xl lg:container m-auto px-4 py-6">
                    <Link href='/properties'> 
                        <div className='bg-gray-700 text-white mx-auto rounded-2xl w-[500px] px-16 py-4 text-center'>
                            Go to all properties 
                        </div>
                    </Link>
                </div>
            </section>
        </>
        
    )
}

export default HomePage