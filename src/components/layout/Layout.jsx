import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../routers/Routers'
import { BrowserRouter as Router } from 'react-router-dom'

function Layout() {
    return (
        <Router>
            <div className="min-h-screen w-screen max-w-[100vw] overflow-x-hidden">
                <Header />
                <div className="pt-20">
                    <Routers />
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default Layout