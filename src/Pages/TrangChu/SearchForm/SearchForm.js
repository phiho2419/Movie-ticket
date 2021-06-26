import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Select } from 'antd';
import { LayThongTinLichChieuPhim_Action } from '../../../Redux/Actions/QuanLyRapAction'
import moment from 'moment';
import { NavLink } from 'react-router-dom'

const { Option } = Select;

export default function SearchForm() {
    const { mangPhim } = useSelector(state => state.QuanLyPhimReducer);
    const { thongTinLichChieu } = useSelector(state => state.QuanLyRapReducer);
    const dispatch = useDispatch();

    let [maCumRapState, setMaCumRap] = useState('');
    let [ngayChieuState, setNgayChieu] = useState('');
    let [maLichChieuState, setMaLichChieu] = useState('');
    let [checkDisable, setDisable] = useState(true);


    const renderDropDownPhim = () => {
        return mangPhim.map((phim, index) => {
            return <Option value={phim.maPhim} key={index} >{phim.tenPhim}</Option>
        })
    }

    const renderDropDownRap = () => {
        return thongTinLichChieu.heThongRapChieu?.map((heThongRap) => {
            return heThongRap.cumRapChieu?.map((rap) => {
                return <Option key={rap.tenCumRap} value={rap.maCumRap}>{rap.tenCumRap}</Option>
            })
        })
    }

    let mangDropDownNgay = [];
    const handleMangDropDownNgay = () => {
        return thongTinLichChieu.heThongRapChieu?.map((heThongRap) => {
            return heThongRap.cumRapChieu?.map((rap) => {
                if (rap.maCumRap == maCumRapState) {
                    return rap.lichChieuPhim?.map((lichChieu, index) => {
                        let findIndex = mangDropDownNgay.findIndex(item => item === lichChieu.ngayChieuGioChieu?.substr(0, 10));
                        if (findIndex === -1) {
                            mangDropDownNgay.push(lichChieu.ngayChieuGioChieu?.substr(0, 10));
                        }
                    })
                }
            })
        })
    }

    const renderDropDownNgay = () => {
        return mangDropDownNgay?.map((ngayChieu, indexNgayChieu) => {
            return <Option key={indexNgayChieu} value={ngayChieu}>{moment(ngayChieu).format("DD/MM/YYYY")}</Option>
        })
    }
    const renderDropDownGio = () => {
        return thongTinLichChieu.heThongRapChieu?.map((heThongRap) => {
            return heThongRap.cumRapChieu?.map((rap) => {
                if (rap.maCumRap == maCumRapState) {
                    return rap.lichChieuPhim?.map((lichChieu, indexLichChieu) => {
                        if (lichChieu.ngayChieuGioChieu?.substr(0, 10) == ngayChieuState) {
                            return <Option key={indexLichChieu} value={lichChieu.maLichChieu} >{lichChieu.ngayChieuGioChieu?.slice(11, 16)}</Option>
                        }
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
    const handleChangeChonNgay = (ngayChieu) => {
        setNgayChieu(ngayChieu);
    }
    const handleDatVe = (maLichChieu) => {
        setMaLichChieu(maLichChieu)
        setDisable(false)
    }



    return (
        <form className="search_bar " style={{ display: "flex" }} id='formChon'>
                <Select style={{height:'60px'}} size='large' placeholder="Chọn phim" onChange={handleChangeChonPhim} style={{ minWidth: '150px' }}>
                    {renderDropDownPhim()}
                </Select>
                <Select size='large' placeholder="Chọn rạp" onChange={handleChangeChonRap} notFoundContent={'Chọn phim trước'} style={{ minWidth: '150px' }}>
                    {renderDropDownRap()}
                </Select>
                <Select size='large' placeholder="Chọn ngày" onChange={handleChangeChonNgay} style={{ minWidth: '150px' }} notFoundContent={'Chọn rạp trước'}>
                    {handleMangDropDownNgay()}
                    {renderDropDownNgay()}
                </Select>
                <Select size='large' placeholder="Chọn giờ" onChange={handleDatVe} style={{ minWidth: '150px' }} notFoundContent={'Chọn ngày trước'}>
                    {renderDropDownGio()}
                </Select>
                <Button size='large' type='primary' htmlType="submit" disabled={checkDisable} href={`/chitietphongve/${maLichChieuState}`}>
                    ĐẶT VÉ NGAY
                </Button>
        </form>
    )
}
