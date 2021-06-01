import React from 'react'
import moment from 'moment'

export default function LichSu(props) {
    let { ThongTinDatVe } = props;
    return (
        <div className="LichSu">
            {ThongTinDatVe?.map((tt, index) => {
                return <div className="LS__content row">
                    <div className="col-2">
                        <img src="http://movie0706.cybersoft.edu.vn/hinhanh/ga-trong-nuoi-vo_gp01.png" />
                    </div>
                    <div className="col-10">
                        <div className="LS__text">
                           <h2>{tt.tenPhim}</h2>
                            <p>Thời lượng: <span className="adress">{tt.thoiLuongPhim}</span></p>
                            <p>Ngày đặt:<span>{moment(tt.ngayDat).subtract(10, 'days').calendar()} {moment(tt.ngayDat).format('hh:mm A')}</span></p>
                            <p>Tên rạp:<span>{tt.danhSachGhe[0].tenHeThongRap}</span></p>
                            {/* <p>Rạp:<span>Rạp 1</span></p> */}
                            <p>Ghế: {tt.danhSachGhe?.map((rap,index)=>{
                                return <span>{rap.tenGhe} </span>
                            })}  </p>
                        </div>
                    </div>
                </div>
            })}


        </div>
    )
}
