import Footer from '../../Components/Footer/Footer'
import React from 'react'
import Carousel from './Carousel/Carousel'
import ListPhim from './ListPhim/ListPhim'
import TabPhim from './TabPhim/TabPhim'

export default function TrangChu() {
    return (
        <div>
           <Carousel />
           <ListPhim />
           <TabPhim />
           <Footer />
        </div>
    )
}
