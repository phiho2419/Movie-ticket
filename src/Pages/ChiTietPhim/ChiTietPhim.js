import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LayChiTietPhimAppiAction } from '../../Redux/Actions/QuanLyPhimAction';
import CTPhimInTro from './CTPhimInTro'
import CTPhimList from './CTPhimList'

export default function ChiTietPhim(props) {
    const { chiTietPhim } = useSelector(state => state.QuanLyPhimReducer);
    const { maPhim } = props.match.params;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LayChiTietPhimAppiAction(maPhim))
    });
    return (
        <div className="ChiTietPhim" id="detail">
            <CTPhimInTro chiTietPhim={chiTietPhim}/>
            <CTPhimList heThongRap={chiTietPhim.heThongRapChieu} ngayKhoiChieu={chiTietPhim.ngayKhoiChieu} moTa={chiTietPhim.moTa}/>
        </div>
    )
}
