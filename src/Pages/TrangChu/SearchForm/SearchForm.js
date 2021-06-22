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
    let [ngayChieu, setNgayChieu] = useState('');
    let [malichChieu, setMalichChieu] = useState('');

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
                if (rap.maCumRap == maCumRapState) {
                    return rap.lichChieuPhim?.map((lichChieu, index) => {
                        mangLichChieu.push({ "ngayChieu": lichChieu.ngayChieuGioChieu.substr(0, 10), "gioChieu": lichChieu.ngayChieuGioChieu.substr(10, 19), "maLichChieu": lichChieu.maLichChieu });
                        console.log('mangLichChieu', ngayChieu);
                        return <Option key={index} value={lichChieu.ngayChieuGioChieu.substr(0, 10)}>{lichChieu.ngayChieuGioChieu.substr(0, 10)}</Option>
                    })
                }
            })
        })
    }
    const renderPropDownGio = () => {
        return thongTinLichChieu.heThongRapChieu?.map((heThongRap) => {
            return heThongRap.cumRapChieu?.map((rap) => {
                return rap.lichChieuPhim?.map((lichChieu, index) => {
                    console.log(ngayChieu);
                    if (lichChieu.ngayChieuGioChieu.substr(0, 10) == ngayChieu) {
                        console.log(lichChieu);
                        return <Option key={index} value={lichChieu.maLichChieu}>{lichChieu.ngayChieuGioChieu.substr(11, 19)}</Option>
                    }

                })
            })
        })
    }


    const handleChangeChonPhim = (maPhim) => {
        dispatch(LayThongTinLichChieuPhim_Action(maPhim));
        setNgayChieu('0');
        setMaCumRap('0');
    }
    const handleChangeChonRap = (maCumRap) => {
        setMaCumRap(maCumRap);
        setNgayChieu('0');
    }
    const handleChangeChonNgay=(ngay) => {
        setNgayChieu(ngay);
    }
    const handleMalichChieu=(maLichChieu) => {
console.log(maLichChieu);
    }
    return (
        <form className="search_bar" style={{ display: "flex" }}>
            <div className="search_dropdown">
                <Select size='large' placeholder="Chọn phim" onChange={handleChangeChonPhim} style={{ minWidth: '150px' }}>
                    {renderPropDownPhim()}
                </Select>
            </div>
            <div className="search_dropdown">
                <Select size='large' placeholder="Chọn rạp" onChange={handleChangeChonRap} notFoundContent={'Chọn phim trước'} style={{ minWidth: '150px' }}>
                    {renderPropDownRap()}
                </Select>
            </div>
            <div className="search_dropdown" >
                <Select size='large' placeholder="Chọn ngày" onChange={handleChangeChonNgay} style={{ minWidth: '150px' }} notFoundContent={'Chọn rạp trước'}>
                    {renderPropDownNgay()}
                </Select>
            </div>
            <div className="search_dropdown">
                <Select size='large' placeholder="Chọn giờ" onChange={handleMalichChieu} style={{ minWidth: '150px' }} notFoundContent={'Chọn ngày trước'}>
                    {renderPropDownGio()}

                </Select>
            </div>
            <div>
                <Button size='large' type='primary' htmlType="submit">Đặt vé</Button>
            </div>
        </form>
    )
}
