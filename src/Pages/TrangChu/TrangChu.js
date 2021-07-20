import React, { useEffect } from 'react'
import Carousel from './Carousel/Carousel'
import ListPhim from './ListPhim/ListPhim'
import TabPhim from './TabPhim/TabPhim'
import News from './News/News'
import Ungdung from './Ungdung/Ungdung'


export default function TrangChu() {
    useEffect(() => {
        document.title = "Trang Chủ";
    }, [])
    return (
        <div>
            <Carousel />
            <div id="listPhim">
                <ListPhim />
            </div>
            <div id="tabPhim">
                <TabPhim />
            </div>
            <div id="tinTuc">
                <News />
            </div>
            <div id="ungDung">
                <Ungdung />
            </div>
        </div>
    )
}
