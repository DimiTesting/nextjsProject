import '../assets/styles/global.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'

export const metadata = {
    title : "Property rental", 
    keywords: ["apartment rents", "rent", "home rents"],
    description: "Property rental website"
}

const MainLayout = ({children}) => {
    return (
        <AuthProvider> 
            <html>
                <body>
                    <Navbar> </Navbar>
                    <main> {children} </main>
                    <Footer></Footer>
                </body>
            </html>
        </AuthProvider>
    )
}

export default MainLayout