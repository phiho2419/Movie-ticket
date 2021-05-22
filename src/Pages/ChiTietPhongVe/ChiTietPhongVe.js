import React from 'react'
import Header from '../../Components/Header/Header'

export default function ChiTietPhongVe() {
    return (
        <div className="pageChiTietPhongVe">
            <Header />
            <div className="container-fluid">
                <div className='row'>
                    <div className=" col-9 ">
                        <div className="ghe_manhinh">
                            <div className="man_hinh">
                                SCREEN
                            </div>
                            <div className="cumGhe">
                                <button className="ghe">  </button>
                                <button className="ghe gheDaDat">  </button>
                                <button className="ghe gheDangDat">  </button>
                            </div>

                        </div>
                    </div>
                    <div className=" col-3 ">
                        <div className="thongtin_datve">
                            <p className="tt_tenPhim"> Batman & Superman </p>
                            <p className="tt_tenRap"> Galaxy Quang Trung</p>
                            <p className="tt_thoiGianChieu">15/07/2020 20:00 PM</p>
                            
                            <hr/>
                            <p className="mb-1 tt_email">Email</p>
                            <p className=""> phiho2419@gmail.com</p>
                            <p className="mb-1 tt_sdt">Số điện thoại</p>
                            <p className=""> 0123654789 </p>
                            <hr/>
                            <p className="tt_datGhe"> Ghế:  <span className="tt_soGheDat"> 11 2 33 </span></p>
                            <p className="tt_giaVe">Giá: <span className="tt_tongGiaVe"> 100.000 VND</span></p>
                            <hr />
                            <div className="tt_httt">
                                <h4 className="tt_tithttt">Hình thức thanh toán</h4>
                                <div className="form-check">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio" className="form-check-input" name="optradio" /> 
                                            <img src="./img/Icon-app_white-bg.png"/> Thanh toán qua ZaloPay
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
                                            <input type="radio" className="form-check-input" name="optradio"  />
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
    )
}
