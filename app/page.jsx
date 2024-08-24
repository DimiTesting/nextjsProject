import Link from 'next/link'

const HomePage = () => {
    return (
        <div>
            <h1 className="text-2xl"> Main text </h1>
            <Link href='/properties'> Show available properties</Link>
        </div>
        
    )
}

export default HomePage