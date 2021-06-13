import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Select } from 'antd';
import { LayThongTinLichChieuPhim_Action } from '../../../Redux/Actions/QuanLyRapAction'
import moment from 'moment';

const { Option } = Select;

export default function SearchForm() {
    const { mangPhim } = useSelector(state => state.QuanLyPhimReducer);
    const { thongTinLichChieu } = useSelector(state => state.QuanLyRapReducer);
    const dispatch = useDispatch();

    let [ngayChieuGioChieuState, setNgayChieuGioChieu] = useState([]);
    let [maCumRapState, setMaCumRap] = useState('');

    const renderPropDownPhim = () => {
        return mangPhim.map((phim, index) => {
            return <Option value={phim.maPhim} key={index} >{phim.tenPhim}</Option>
        })
    }

    const renderPropDownRap = () => {
        return thongTinLichChieu.heThongRapChieu?.map((heThongRap) => {
            return heThongRap.cumRapChieu?.map((rap) => {
                return <Option key={rap.tenCumRap} value={rap.maCumRap}>{rap.tenCumRap}</Option>
            })
        })
    }

    const renderPropDownNgay = () => {
        let mangLichChieu = []
        return thongTinLichChieu.heThongRapChieu?.map((heThongRap) => {
            return heThongRap.cumRapChieu?.map((rap) => {
                if(rap.maCumRap == maCumRapState){
                    return rap.lichChieuPhim?.map((lichChieu,index)=>{
                        mangLichChieu.push(lichChieu.ngayChieuGioChieu)
                        return <Option key={index}>{lichChieu.ngayChieuGioChieu}</Option>
                    })
                }
            })
        })
    }

  


    const handleChangeChonPhim = (maPhim) => {
        dispatch(LayThongTinLichChieuPhim_Action(maPhim));
    }
    const handleChangeChonRap = (maCumRap) => {
        setMaCumRap(maCumRap);
    }

    return (
        <form className="search_bar" style={{ display: "flex" }}>
            <div className="search_dropdown">
                <Select size='large' placeholder="Chọn phim" onChange={handleChangeChonPhim} style={{minWidth:'150px'}}>
                    {renderPropDownPhim()}
                </Select>
            </div>
            <div className="search_dropdown">
                <Select size='large' placeholder="Chọn rạp" onChange={handleChangeChonRap} notFoundContent={'Chọn phim trước'} style={{minWidth:'150px'}}>
                    {renderPropDownRap()}
                </Select>
            </div>
            <div className="search_dropdown" >
                <Select size='large' placeholder="Chọn ngày" style={{minWidth:'150px'}} notFoundContent={'Chọn rạp trước'}>
                    {renderPropDownNgay()}
                </Select>
            </div>
            <div className="search_dropdown">
                <Select size='large' placeholder="Chọn giờ" style={{minWidth:'150px'}} notFoundContent={'Chọn ngày trước'}>
                   
                </Select>
            </div>
            <div>
                <Button size='large' type='primary' htmlType="submit">Đặt vé</Button>
            </div>
        </form>
    )
}
