import React from 'react'
import Header from '../Header/Header'

export default function Loading() {
    document.title = "Loading...";

    return (
        <div className="loading">
            <Header />
            <div className="loader">
                <span className="ball" />
                <span className="ball2" />
                <ul>
                    <li /><li /><li /><li /><li />
                </ul>
            </div>

        </div>
    )
}
