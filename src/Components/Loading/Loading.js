import React from 'react'
import Load from '../../assets/git/load.gif'

export default function Loading() {
    return (
        <div className="loading">
            <img src={Load} className="loader"/>
        </div>
    )
}
