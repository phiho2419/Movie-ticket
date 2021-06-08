import Footer from '../../Components/Footer/Footer'
import React, { useEffect } from 'react'
import Carousel from './Carousel/Carousel'
import ListPhim from './ListPhim/ListPhim'
import TabPhim from './TabPhim/TabPhim'
<<<<<<< HEAD
import Header from '../../Components/Header/Header'
=======
import { thongTinAction } from '../../Redux/Actions/NguoiDungAction'
import { useDispatch } from 'react-redux'
import { USERLOGIN } from '../../Util/setting'
>>>>>>> 5f8a83eeb16c9899a70d3bc3222b653f6d4b9d58

export default function TrangChu() {
    const dispatch = useDispatch();

    if (localStorage.getItem(USERLOGIN)) {
        dispatch(thongTinAction());
    }

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
