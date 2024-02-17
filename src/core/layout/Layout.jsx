import React from 'react'
import Footer from '../../components/footer/Footer'


const Layout = ({ children }) => {
    return (
        <div className="flex flex-col max-w-full mx-auto">
            {children}
            <Footer />
        </div>
    )
}

export default Layout