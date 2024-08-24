import '../assets/styles/global.css'

export const metadata = {
    title : "Property rental", 
    keywords: ["apartment rents", "rent", "home rents"],
    description: "Property rental website"
}

const MainLayout = ({children}) => {
    return (
        <html>
            <body>
                <main>{children}</main>
            </body>
        </html>
    )
}

export default MainLayout