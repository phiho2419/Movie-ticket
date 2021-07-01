import Footer from '../../Components/Footer/Footer'
import React, { useEffect } from 'react'
import Carousel from './Carousel/Carousel'
import ListPhim from './ListPhim/ListPhim'
import TabPhim from './TabPhim/TabPhim'
import Header from '../../Components/Header/Header'
import { thongTinAction } from '../../Redux/Actions/NguoiDungAction'
import { useDispatch } from 'react-redux'
import { USERLOGIN } from '../../Util/setting'
import News from './News/News'
import Ungdung from './Ungdung/Ungdung'


export default function TrangChu() {
    // const dispatch = useDispatch();

    // if (localStorage.getItem(USERLOGIN)) {
    //     dispatch(thongTinAction());
    // }

    return (
        <div>
            <Carousel />
            <ListPhim />
            <TabPhim />
            <div id="tintuc">
                <News />
            </div>
            <Ungdung />
        </div>
    )
}
