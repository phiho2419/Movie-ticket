import React from 'react'
import { NavLink } from 'react-router-dom'
import { Fragment } from 'react'


export default function TabDanhSachPhim(props) {


    const renderDanhSachPhim = () => {
        return props.danhSachPhim.map((phim, index) => {
            if (index <= 5) {
                return <Fragment key={index}>
                    <div className="d-md-flex my-3" >
                        <div className="tabphim_avaPhim">
                            <img src={phim.hinhAnh} alt={phim.tenPhim} style={{ width: '100px', height: '150px', objectFit: 'cover' }} />
                        </div>
                        <div className='mx-2 content_chitietphim'>
                            <div className='d-flex align-items-center content_tenphim'>
                                <p className="tag_phim_c18 m-0">C16</p>
                                <p className='film_name m-0 ml-2'>{phim.tenPhim}</p>
                            </div>
                            <p className="film_details mb-2"> 105p IMDb - 8.0{phim.danhGia}</p>
                            {phim.lstLichChieuTheoPhim.slice(0, 6).map((lichChieu, indexLc) => {
                                return <span key={indexLc} className="ticket">
                                    <NavLink to={`/chitietphongve/${lichChieu.maLichChieu}`} className="font-weight-bold" style={{ color: 'white' }}>{lichChieu.ngayChieuGioChieu.slice(11, 16)}</NavLink>
                                </span>
                            })}
                        </div>

                    </div>
                    <hr style={{ width: '80%' }} />
                </Fragment>
            }
            else { return null }
        })
    }


    return (
        <div className="tab_chi_tiet_phim">
            {renderDanhSachPhim()}
        </div>
    )
}
