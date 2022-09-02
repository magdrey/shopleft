import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div classNameName="hero mb-0">
            <div className="card text-bg-dark text-white  border-0 vh-100">
                <img src="/assets/bluesky.gif" className="card-img" alt="Background" height="100%" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div classNameName="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">CHECK OUT ALL TRENDS</p>
                    
                    </div>
                    
                </div>
            </div>

            <Products />

        </div>
    )
}

export default Home
