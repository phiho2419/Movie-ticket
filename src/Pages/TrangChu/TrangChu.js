import Footer from '../../Components/Footer/Footer'
import React, { useEffect } from 'react'
import Carousel from './Carousel/Carousel'
import ListPhim from './ListPhim/ListPhim'
import TabPhim from './TabPhim/TabPhim'
import { thongTinAction } from '../../Redux/Actions/NguoiDungAction'
import { useDispatch } from 'react-redux'
import { USERLOGIN } from '../../Util/setting'

export default function TrangChu() {
    const dispatch = useDispatch();

    if (localStorage.getItem(USERLOGIN)) {
        dispatch(thongTinAction());
    }

    return (
        <div>
           <Carousel />
           <ListPhim />
           <TabPhim />
           <Footer />
        </div>
    )
}
