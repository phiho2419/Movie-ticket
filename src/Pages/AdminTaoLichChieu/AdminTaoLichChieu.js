import React, { useEffect, useState } from 'react'
import { Select, DatePicker, Button } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { callAPI_layDanhSachPhimAction } from '../../Redux/Actions/QuanLyPhimAction';
import { LayThongTinHeThongRapApiAction } from '../../Redux/Actions/QuanLyRapAction';
import { TaoLichChieuAction } from '../../Redux/Actions/LichChieuAction';

export default function AdminTaoLichChieu() {
    const { Option } = Select;
    const { mangPhim } = useSelector(state => state.QuanLyPhimReducer);
    const { thongTinHeThongRap } = useSelector(state => state.QuanLyRapReducer);
    const [maCumRap, setMaCumRap] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(callAPI_layDanhSachPhimAction());

    })
    function disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }
    const formik = useFormik({
        initialValues: {
            maPhim: '',
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: ''

        },
        onSubmit: (values, actions) => {
            // console.log('values', values);
            // console.log('ngayChieuGioChieu', values.ngayChieuGioChieu);

            dispatch(TaoLichChieuAction(values))
        }
    })
    const renderDropDownPhim = () => {
        return mangPhim.map((phim, index) => {
            return <Option value={phim.maPhim} key={index} >{phim.tenPhim}</Option>
        })
    }

    const renderDropDownCumRap = () => {
        return thongTinHeThongRap.map((cumRap, index) => {
            return <Option value={cumRap.maCumRap} key={index} >{cumRap.tenCumRap}</Option>
        })
    }
    const renderDropDownRap = () => {
        // return thongTinHeThongRap.map((cumRap) => {
            // if (maCumRap === cumRap.maCumRap) {
            //     // console.log(cumRap.danhSachRap);
            //     return cumRap.danhSachRap.map((rap, index) => {
            //         return <Option value={rap.maRap} key={index} >{rap.tenRap}</Option>
            //     })
            // }
            return  thongTinHeThongRap.filter(cumRap => cumRap.maCumRap === maCumRap).map((cr,index)=> {
                return cr.danhSachRap.map((rap, index) => {
                            return <Option value={rap.maRap} key={index} >{rap.tenRap}</Option>
                        })
            }) 

        }
    // }


    const handleChangeChonPhim = (maPhim) => {
        formik.values.maPhim = maPhim
    }
    const handleChangeHeThongRap = (maHeThongRap) => {
        dispatch(LayThongTinHeThongRapApiAction(maHeThongRap));

    }
    const handleChangeCumRap = (maCumRap) => {
        setMaCumRap(maCumRap);
    }
    const handleChangeRap = (maRap) => {
        formik.values.maRap = maRap

    }
    const handleChangeGiaVe = (giaVe) => {
        formik.values.giaVe = giaVe
    }

    return (
        <div>
            <div style={{marginTop:"40px"}}>
                <div className="admin__title text-center">
                    <h1 className="font-weight-bold">Thêm lịch chiếu</h1>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">

                        <div className="col-6">
                            <Select className="mt-3" size='large' placeholder="Chọn phim" style={{ minWidth: '100%' }} onChange={handleChangeChonPhim}>
                                {renderDropDownPhim()}
                            </Select>
                            <Select className="mt-3" size='large' placeholder="Chọn hệ thống rạp" style={{ minWidth: '100%' }} onChange={handleChangeHeThongRap}>
                                <Option value="CGV">CGV</Option>
                                <Option value="BHDStar">BHDStar</Option>
                                <Option value="CineStar">CineStar</Option>
                                <Option value="Galaxy">Galaxy</Option>
                                <Option value="LotteCinima">LotteCinima</Option>
                                <Option value="MegaGS">MegaGS</Option>
                            </Select>
                            <Select className="mt-3" size='large' placeholder="Chọn cụm rạp" style={{ minWidth: '100%' }} onChange={handleChangeCumRap} notFoundContent={'Chọn hệ thống rạp trước'}>
                                {renderDropDownCumRap()}
                            </Select>
                        </div>
                        <div className="col-6">
                            <Select className="mt-3" size='large' placeholder="Chọn rạp" style={{ minWidth: '100%' }} onChange={handleChangeRap} notFoundContent={'Chọn cụm rạp trước'}>
                                {renderDropDownRap()}
                            </Select>
                            <DatePicker
                            className="mt-3"
                                style={{ minWidth: '100%', height: "38px" }}
                                format="DD/MM/YYYY hh:mm:ss"
                                disabledDate={disabledDate}
                                showTime={{ defaultValue: moment('DD/MM/YYYY hh:mm:ss') }}
                                onChange={(value, dateString) => {
                                    formik.values.ngayChieuGioChieu = dateString
                                }}
                            />
                            <Select className="mt-3" size='large' placeholder="Chọn giá vé" style={{ minWidth: '100%' }} name="giaVe" onChange={handleChangeGiaVe}>
                                <Option value="70000">70k</Option>
                                <Option value="90000">90k</Option>
                                <Option value="110000">110k</Option>
                                <Option value="130000">130k</Option>
                                <Option value="150000">150k</Option>
                            </Select>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="text-right">
                                <Button type="primary" htmlType="submit">Đặt lịch</Button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>

        </div>
    )
}
