import React from 'react'

export default function Loading() {
    document.title = "Loading...";

    return (
        <div className="loading">
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
