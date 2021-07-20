import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Table, Space, Image, Tag } from 'antd';
import { Button } from 'antd';
import { callAPI_layDanhSachPhimAction } from '../../Redux/Actions/QuanLyPhimAction';
import Edit from './Edit';
import { xoaPhim } from '../../Redux/Actions/AdminAction';
import { USERLOGIN } from '../../Util/setting';
import { Redirect } from 'react-router';
import Swal from 'sweetalert2';

const { Column } = Table;
// const { Search } = Input;
export default function AdminQuanLyPhim() {
    const dispatch = useDispatch();
    const { mangPhim } = useSelector(state => state.QuanLyPhimReducer);
    // console.log('mangPhim',mangPhim);
    useEffect(() => {
        dispatch(callAPI_layDanhSachPhimAction());

    })

    
    let dataUser = JSON.parse(localStorage.getItem(USERLOGIN));
  
    if (!localStorage.getItem(USERLOGIN)) {
        Swal.fire({
            icon: 'error',
            text: 'Bạn vui lòng đăng nhập !',
        })
        return <Redirect to="/dangnhap" />
    } else if (dataUser.maLoaiNguoiDung !== "QuanTri") {
        Swal.fire({
            icon: 'error',
            text: 'Không có quyền quản trị !',
        })
        return <Redirect to="/" />
    }
    return (
        <div className="pageQuanLyPhim">
            <div className="admin__title  px-2">
                    <h1 className="font-weight-bold text-center">Quản lý phim</h1>
                
            </div>

            <div className="mt-4 px-2">
                <Table dataSource={mangPhim} bordered="true" pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15'] }}>
                    <Column align="center" title="Mã phim" dataIndex="maPhim" key="maPhim" />
                    <Column align="center" title="Tên phim" dataIndex="tenPhim" key="tenPhim" />
                    <Column title="Hình ảnh"
                        key="hinhAnh"
                        render={(text, record) => (
                            <Space size="small">
                                <Image src={record.hinhAnh} alt="hinhAnh" preview={false} />
                            </Space>
                        )}
                    />
                    <Column title="Mô tả" key="moTa" render={(record, i) => {
                        return <p>{`${record.moTa.substr(0, 80)} ...`}</p>
                    }} />
                    <Column title="Ngày khởi chiếu" key="ngayKhoiChieu" render={(text, record) => (
                        <Space size="small">
                            <Tag color="gold">{record.ngayKhoiChieu.substr(0, 10)}</Tag>
                        </Space>
                    )} />

                    <Column

                        key="action"
                        render={(text, record) => (
                            <Space size="small">
                                <Button type="primary" size="small" onClick={() => {
                                    dispatch({
                                        type: 'SET_MA_PHIM',
                                        thongTinPhim: record
                                    })

                                }} data-toggle="modal" data-target="#EditPhim"><i class="fa fa-edit" ></i></Button>
                                <div class="modal fade" id="EditPhim" tabindex="-1" aria-labelledby="EditPhimLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <Edit />
                                        </div>
                                    </div>
                                </div>
                                <Button type="primary" danger size="small"><i class="fa fa-trash-alt" onClick={() => {
                                    dispatch(xoaPhim(record.maPhim))
                                }}></i></Button>
                            </Space>
                        )}
                    />
                </Table>

            </div>
        </div>


    )
}