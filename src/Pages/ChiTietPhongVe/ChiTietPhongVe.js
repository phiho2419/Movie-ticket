import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { layThongTinLichChieuAction, datVeAction } from '../../Redux/Actions/LichChieuAction';
import { USERLOGIN } from '../../Util/setting';
export default function ChiTietPhongVe() {


    const dispatch = useDispatch();


    //Lấy reducer
    const { lichChieu, danhSachGheDangDat } = useSelector(state => state.LichChieuReducer);


    //Call api 
    useEffect(() => {
        dispatch(layThongTinLichChieuAction(15240));
    }, [])



    //Lấy thông tin người dùng
    let dataUser = JSON.parse(localStorage.getItem(USERLOGIN));


    const renderDanhSachGhe = () => {
        return lichChieu.danhSachGhe?.map((ghe, index) => {

            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);
            let classGheDangDat = '';
            if (indexGheDD !== -1) {
                classGheDangDat = 'gheDangDat';
            }
            let gheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let gheDaDat = ghe.daDat === true ? 'gheDaDat' : '';


            //Xác định lối đi
            let loiDi = index === 7 || index === 23 || index === 39 || index === 55 || index === 71 || index === 87 || index === 103 || index === 119 || index === 135 || index === 151 || index === 167;

            return <Fragment key={index}>
                <button style={{color:'white'}} disabled={ghe.daDat} className={` ghe ${gheVip} ${gheDaDat} ${classGheDangDat}`}
                    onClick={
                        () => {
                            dispatch({
                                type: 'DAT_GHE',
                                gheDangDat: ghe
                            })
                        }
                    }
                > {index + 1}</button>

                {/* Xuống dòng  */}
                {(index + 1) % 16 === 0 ? <br /> : ''}

                {/* Lối đi  */}
                {loiDi ? <span style={{ display: 'inline-block', width: '20px' }} ></span> : ''}
            </Fragment >
        })




    }

    console.log('lichChieu', lichChieu);
    return (
        <Fragment>
            <div className="pageChiTietPhongVe">
                <Header />
                <div className="container-fluid">
                    <div className='row'>
                        <div className=" col-9 ">
                            <div className="ghe_manhinh">
                                <div className="man_hinh">
                                    SCREEN
                            </div>
                                <div className="cumGhe text-center">
                                    {renderDanhSachGhe()}
                                </div>

                            </div>
                        </div>
                        <div className=" col-3 ">
                            <div className="thongtin_datve">
                                <p className="tt_tenPhim"> {lichChieu.thongTinPhim?.tenPhim} </p>
                                <p className="tt_tenRap"> {lichChieu.thongTinPhim?.tenCumRap}</p>
                                <p className="tt_thoiGianChieu">{lichChieu.thongTinPhim?.ngayChieu} {lichChieu.thongTinPhim?.gioChieu}</p>

                                <hr />
                                <p className="mb-1 tt_email">Email</p>
                                <p className=""> {dataUser.email}</p>
                                <p className="mb-1 tt_sdt">Số điện thoại</p>
                                <p className=""> {dataUser.soDT} </p>
                                <hr />
                                <p className="tt_datGhe "> Ghế: 
                                {danhSachGheDangDat.map((gheDD, index) => {
                                    return <Fragment >
                                        {index <= 4 ? <span className="tt_soGheDat" key={index} className="mr-2">  {gheDD.stt}</span> : (index == 5 ? '...' : '')}
                                    </Fragment>
                                })}
                                </p>
                                <p className="tt_giaVe">Giá: <span className="tt_tongGiaVe">
                                    {danhSachGheDangDat.reduce((tongTien, gheDD, index) => {
                                        return tongTien += gheDD.giaVe;
                                    }, 0).toLocaleString()} VND
                                </span></p>
                                <hr />
                                <div className="tt_httt">
                                    <h4 className="tt_tithttt">Hình thức thanh toán</h4>
                                    <div className="form-check">
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="radio" className="form-check-input" name="optradio" defaultChecked />
                                                <img src="./img/Icon-app_white-bg.png" /> Thanh toán qua ZaloPay
                                        </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="radio" className="form-check-input" name="optradio" />
                                                <img src="./img/visa.png" /> Visa, Master
                                        </label>
                                        </div>
                                        <div className="form-check ">
                                            <label className="form-check-label">
                                                <input type="radio" className="form-check-input" name="optradio" />
                                                <img src="./img/atm.png" /> Thẻ ATM nội địa
                                        </label>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </Fragment>
    )
}
