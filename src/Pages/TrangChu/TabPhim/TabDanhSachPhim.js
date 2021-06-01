import { Tag } from 'antd';
import React from 'react'
import { Fragment } from 'react'

export default function TabDanhSachPhim(props) {

    console.log(props.danhSachPhim);
    const renderDanhSachPhim = () =>{
        return props.danhSachPhim.map((phim,index)=>{
            return <div className="row my-3">
                <div className='col-2'>
                    <img src={phim.hinhAnh} alt={phim.tenPhim} style={{ width:'50px', height:'60px' , objectFit:'cover'}}/>
                </div>
                <div className='col-10'>
                    <p>{phim.tenPhim}</p>
                    {phim.lstLichChieuTheoPhim.slice(0,10).map((lichChieu,index)=>{
                        return <Tag>{lichChieu.ngayChieuGioChieu}</Tag>
                    })}
                </div>
            </div>
        })
    }

    return (
        <div >
            {renderDanhSachPhim()}
        </div>
    )
}
