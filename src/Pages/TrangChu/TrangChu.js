import Footer from '../../Components/Footer/Footer'
import React from 'react'
import Carousel from './Carousel/Carousel'
import ListPhim from './ListPhim/ListPhim'
import TabPhim from './TabPhim/TabPhim'
import Header from '../../Components/Header/Header'

export default function TrangChu() {
    return (
        <div>
            <Header />
            <Carousel />
            <ListPhim />
            <TabPhim />
            <Footer />
        </div>
    )
}
