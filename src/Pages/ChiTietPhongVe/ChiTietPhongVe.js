import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinLichChieuAction, datVeAction } from '../../Redux/Actions/LichChieuAction';
import { USERLOGIN } from '../../Util/setting';
import Swal from 'sweetalert2';
// import { Redirect } from 'react-router';
import { handleSttGhe } from '../../Util/services';

export default function ChiTietPhongVe(props) {

    const { malichChieu } = props.match.params;
    const dispatch = useDispatch();
    document.title = "Đặt Vé";


    //Lấy reducer
    const { lichChieu, danhSachGheDangDat } = useSelector(state => state.LichChieuReducer);

    //Call api 
    useEffect(() => {
        dispatch(layThongTinLichChieuAction(malichChieu));
        return dispatch({
            type: 'XOA_LICH_SU_DATVE',
        })
    }, [dispatch, malichChieu])


    //Lấy thông tin người dùng
    let dataUser = JSON.parse(localStorage.getItem(USERLOGIN));


    const renderDanhSachGhe = () => {
        return lichChieu.danhSachGhe?.map((ghe, index) => {

            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);

            let gheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let gheDaDat = ghe.daDat === true ? 'gheDaDat' : '';


            //Xác định lối đi
            let loiDi = index === 7 || index === 23 || index === 39 || index === 55 || index === 71 || index === 87 || index === 103 || index === 119 || index === 135 || index === 151 || index === 167;

            return <Fragment key={index}>
                <button disabled={ghe.daDat} style={{ background: "transparent" }} onClick={
                    () => {
                        dispatch({
                            type: 'DAT_GHE',
                            gheDangDat: ghe
                        })
                    }
                }>
                    <img src={indexGheDD !== -1 ? "../../../img/gheDangDat.png" : gheDaDat ? "../../../img/gheDaDat.png" : gheVip ? '../../../img/gheVip.png' : "../../../img/gheThuong.png"} alt="ghe" style={{ margin: "2px", cursor: 'pointer' }} />
                </button>

                {/* Xuống dòng  */}
                {(index + 1) % 16 === 0 ? <br /> : ''}

                {/* Lối đi  */}
                {loiDi ? <span style={{ display: 'inline-block', width: '20px' }} ></span> : ''}
            </Fragment >
        })




    }



    return (
        <Fragment>
            <div className="pageChiTietPhongVe">
                <div className="bg-image"></div>
                <div className="container-fluid bg-content">
                    <div className='row'>
                        <div className=" col-12 col-lg-8 ">
                            <div className="wrap_ghemanhinh">
                                <div className="ghe_manhinh">
                                    <div className="man_hinh">
                                        {/* <img src="../../../img/screen.png" alt="screen" /> */}
                                    </div>
                                    <div className="cumGhe text-center">

                                        <div className="d-flex justify-content-center">
                                            <div className="soCotGhe">
                                                <p>A</p>
                                                <p>B</p>
                                                <p>C</p>
                                                <p>D</p>
                                                <p>E</p>
                                                <p>F</p>
                                                <p>G</p>
                                                <p>H</p>
                                                <p>I</p>
                                                <p>J</p>
                                            </div>
                                            <div>
                                                <div className="soHangGhe" style={{ color: 'white', fontWeight: '700' }}>
                                                    <span>1</span>
                                                    <span>2</span>
                                                    <span>3</span>
                                                    <span>4</span>
                                                    <span>5</span>
                                                    <span>6</span>
                                                    <span>7</span>
                                                    <span>8</span>
                                                    <span>9</span>
                                                    <span>10</span>
                                                    <span>11</span>
                                                    <span>12</span>
                                                    <span>13</span>
                                                    <span>14</span>
                                                    <span>15</span>
                                                    <span>16</span>
                                                </div>
                                                {renderDanhSachGhe()}
                                            </div>
                                        </div>
                                        <div className="chuThichGhe mt-3">
                                            <div className="d-flex justify-content-center font-weight-bold ">
                                                <div className="mx-2">
                                                    <img src="../../../img/gheThuong16.png" alt="ghe" />
                                                    <span style={{ color: "white", marginLeft: '2px' }}>Ghế thường</span>
                                                </div >
                                                <div className="mx-2">
                                                    <img src="../../../img/gheVip16.png" alt="ghe" />
                                                    <span style={{ color: "white", marginLeft: '2px' }}>Ghế VIP</span>
                                                </div>
                                                <div className="mx-2">
                                                    <img src="../../../img/gheDaDat16.png" alt="ghe" />
                                                    <span style={{ color: "white", marginLeft: '2px' }}>Ghế đã đặt</span>
                                                </div>
                                                <div className="mx-2">
                                                    <img src="../../../img/gheDangDat16.png" alt="ghe" />
                                                    <span style={{ color: "white", marginLeft: '2px' }}>Ghế đang đặt</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className=" col-12 col-lg-4 ">
                            <div className="thongtin_datve">
                                {/* <div className="ticket_tag"><img src="../../../img/tickettagC.png" alt="ghe" /></div> */}
                                <div className="wrap_content_datve">
                                    <p className="tt_tenRap text-center"> {lichChieu.thongTinPhim?.tenCumRap}</p>
                                    <div  >
                                        <div>
                                            <p className="tt_tenPhim"> {lichChieu.thongTinPhim?.tenPhim} </p>
                                            <p className="tt_thoiGianChieu">{lichChieu.thongTinPhim?.ngayChieu} {lichChieu.thongTinPhim?.gioChieu} - {lichChieu.thongTinPhim?.tenRap}</p>

                                        </div>
                                        {/* <div style={{flexGrow:'1'}} className="logo_ticket" style={{position:'relative'}}>
                                        <img id="logo_circle" style={{ width: '78px', objectFit: 'cover', height: '60px' }} className="navbar-brand header-logo p-0 pr-1 img-fluid" src="../../img/logoheader.png" alt="logo" />
                                        <img style={{ position: 'absolute', top: '0', left: '0', width: '85px', objectFit: 'cover', height: '60px' }} className="navbar-brand header-logo p-0 pr-1 img-fluid" src="../../img/logoheaderA.png" alt="logo" />
                                    </div> */}
                                    </div>
                                    {/* <p className="mb-1 tt_email">Email</p>
                                <p className=""> {dataUser.email}</p>
                                <p className="mb-1 tt_sdt">Số điện thoại</p>
                                <p className=""> {dataUser.soDT} </p> */}

                                    <hr />
                                    <p className="tt_datGhe "> Ghế:
                                        {danhSachGheDangDat.map((gheDD, index) => {
                                            return <span className="tt_soGheDat mr-2" key={index}>  {handleSttGhe(gheDD.stt)}</span>

                                        })}
                                    </p>
                                    <hr />
                                    <p className="tt_giaVe">Giá: <span className="tt_tongGiaVe">
                                        {danhSachGheDangDat.reduce((tongTien, gheDD, index) => {
                                            return tongTien += gheDD.giaVe;
                                        }, 0).toLocaleString()}  VND
                                    </span></p>
                                    <hr />
                                    <div className="tt_httt">
                                        <h5 className="tt_tithttt">Thanh toán</h5>
                                        <div className="form-check">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="radio" className="form-check-input" name="optradio" defaultChecked />
                                                    <img src="../../../img/viDienTu.png" alt="viDienTu" /> Ví điện tử
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="radio" className="form-check-input" name="optradio" />
                                                    <img src="../../../img/creditCard.png" alt="viSa" /> Visa, Master
                                                </label>
                                            </div>
                                            <div className="form-check ">
                                                <label className="form-check-label">
                                                    <input type="radio" className="form-check-input" name="optradio" />
                                                    <img src="../../../img/atmMachine.png" alt="atm" /> Thẻ ATM nội địa
                                                </label>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <button onClick={() => {
                                    if (!localStorage.getItem(USERLOGIN)) {
                                        Swal.fire({
                                            icon: 'error',
                                            text: 'Cần đăng nhập để đặt vé !',
                                        })
                                    }
                                    else if (danhSachGheDangDat.length === 0) {
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Bạn chưa chọn ghế !',
                                        })
                                    }
                                    else {
                                        let objectApi = {
                                            "maLichChieu": malichChieu,
                                            "danhSachVe": danhSachGheDangDat,
                                            "taiKhoanNguoiDung": dataUser.taiKhoan
                                        }
                                        dispatch(datVeAction(objectApi))
                                    }

                                    // let objectApi = {
                                    //     "maLichChieu": malichChieu,
                                    //     "danhSachVe": danhSachGheDangDat,
                                    //     "taiKhoanNguoiDung": dataUser.taiKhoan
                                    // }
                                    // dispatch(datVeAction(objectApi))

                                }} className="btnDatVe">ĐẶT VÉ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}