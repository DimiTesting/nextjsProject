import Image from "next/image"

const ProperyHeaderImage = ({property}) => {
    return (
        <section>
            <div className="container-xl m-auto">
            <div className="grid grid-cols-1">
                <Image
                src={`/images/properties/${property.images[0]}`}
                alt=""
                className="object-cover h-[400px] w-full"
                width="1800"
                height="0"
                sizes="100vh"
                />
            </div>
            </div>
        </section>
    )
}

export default ProperyHeaderImage