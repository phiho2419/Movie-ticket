import React from 'react'
import Load from '../../assets/git/load.gif'
import LoadingScreen from 'react-loading-screen';

export default function Loading() {
    document.title = "Loading...";

    return (

        <LoadingScreen
            loading={true}
            logoSrc={Load}
        >
        </LoadingScreen>
    )
}
