import React from 'react'
import { useSelector } from 'react-redux'

export default function Loading() {
    const { isLoading } = useSelector(state => state.LoadingReducer)
    if (isLoading) {
        return (
            <div className="loading">

            </div>
        )
    }
    else {
        return null
    }

}
