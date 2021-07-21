import React from 'react'
import { Table } from 'antd';
import moment from 'moment';

const { Column } = Table;

export default function LichSuDatVe(props) {


    const getTenHeThongRap = (maVe) => {
        return props.thongTinDatVe?.map((tt, i) => {
            if (tt.maVe === maVe) {
                return tt.danhSachGhe.map((ds, index) => {
                    if (index < 1) {
                        return <span key={i} className="m-0">{ds.tenHeThongRap.replace('Star Cineplex', '')}</span>
                    }
                    else {
                        return null
                    }
                })
            }
            else {
                return null
            }
        })
    }

    return (
        <div className="thongTinDatVe" >
            <Table rowKey="maVe"  dataSource={props.thongTinDatVe} bordered="true" pagination={{ defaultPageSize: 5 }}  >
                <Column align={'center'} title="STT" key="maVe" render={(value, item, index) => index + 1} />
                <Column align={'center'} title="Tên phim" dataIndex="tenPhim" key="tenPhim" />
                <Column align={'center'} title="Ngày đặt" key="ngayDat" render={(record, i) => {
                    return <p className="m-0">{moment(record.ngayDat).format("DD/MM/YYYY")}</p>
                }} />
                <Column align={'center'} title="Giá vé" key="giaVe" render={(record, i) => {
                    return <p className="m-0">{record.giaVe.toLocaleString()} VND</p>
                }} />
                <Column align={'center'} title="Tên rạp" key="thoiLuongPhim" render={(record, i) => {
                    return <p className="m-0">{getTenHeThongRap(record.maVe)}</p>
                }} />
            </Table>
        </div>
    )
}
