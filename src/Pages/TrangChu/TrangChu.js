import Footer from '../../Components/Footer/Footer'
import React, { useEffect } from 'react'
import Carousel from './Carousel/Carousel'
import ListPhim from './ListPhim/ListPhim'
import TabPhim from './TabPhim/TabPhim'
import { thongTinAction } from '../../Redux/Actions/NguoiDungAction'
import { useDispatch } from 'react-redux'

export default function TrangChu() {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(thongTinAction());
    // }, [])
    return (
        <div>
           <Carousel />
           <ListPhim />
           <TabPhim />
           <Footer />
        </div>
    )
}
