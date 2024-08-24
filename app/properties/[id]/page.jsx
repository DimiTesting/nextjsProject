const showPropertyById = ({params}) => {
    console.log(params)

    return (
        <div className="text-2xl">
            Page to show a specific property {params.id}
        </div>
    )
}

export default showPropertyById