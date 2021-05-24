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
        // Call API
        dispatch(LayChiTietPhimAppiAction(maPhim))
    }, [])
    return (
        <div className="ChiTietPhim">
            <CTPhimInTro hinhAnh={chiTietPhim.hinhAnh} tenPhim={chiTietPhim.tenPhim} moTa={chiTietPhim.moTa} ngayKhoiChieu={chiTietPhim.ngayKhoiChieu} trailer={chiTietPhim.trailer} danhGia={chiTietPhim.danhGia}/>
            <CTPhimList heThongRap={chiTietPhim.heThongRapChieu}/>
        </div>
    )
}
