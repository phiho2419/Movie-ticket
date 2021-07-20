import { Tag, Menu } from 'antd';
import React from 'react'
import {NavLink} from 'react-router-dom'
import { Fragment } from 'react'
const { SubMenu } = Menu;


export default function TabDanhSachPhim(props) {


    const renderDanhSachPhim = () => {
        return props.danhSachPhim.map((phim, index) => {
            if (index <= 5) {
                return <Fragment>
                    <div className="d-flex my-3" key={index}>
                        
                            <img  src={phim.hinhAnh} alt={phim.tenPhim} style={{ maxWidth: '100px', height: '150px', objectFit: 'cover' }} />
                        
                        <div className='mx-2'>
                            <div className='d-flex align-items-center'>
                                <p className="tag_phim_c18 m-0">C16</p>
                                <p className='film_name m-0 ml-2'>{phim.tenPhim}</p>
                            </div>
                            <p className="film_details mb-2"> 105p IMDb - 8.0{phim.danhGia}</p>
                            {phim.lstLichChieuTheoPhim.slice(0, 6).map((lichChieu, index) => {
                                return <span key={index} className="ticket">
                                    <NavLink to={`/chitietphongve/${lichChieu.maLichChieu}`} className="font-weight-bold" style={{color:'white'}}>{lichChieu.ngayChieuGioChieu.slice(11, 16)}</NavLink>
                                    {/* {lichChieu.ngayChieuGioChieu.slice(11, 16)} */}
                                    {/* <img  style={{objectFit:'cover',filter:'saturate(2)',position:'relative'}} width="90" src="../../../../img/ticket.png" alt="ticket" /> */}
                                </span>
                            })}
                        </div>

                    </div>
                    <hr style={{width:'80%'}} />
                </Fragment>
            }
        })
    }


    return (
        <div className="tab_chi_tiet_phim">
            {renderDanhSachPhim()}
        </div>
    )
}
