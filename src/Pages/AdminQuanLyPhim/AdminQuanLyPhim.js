import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Table, Space, Image } from 'antd';
import { Button, Modal } from 'antd';
import { callAPI_layDanhSachPhimAction } from '../../Redux/Actions/QuanLyPhimAction';

const { Column } = Table;



export default function AdminQuanLyPhim() {
    const dispatch = useDispatch();
    const { mangPhim } = useSelector(state => state.QuanLyPhimReducer);
    useEffect(() => {
        dispatch(callAPI_layDanhSachPhimAction());

    }, [])
console.log('mangPhim',mangPhim);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="pageQuanLyPhim mt-4">
            <h1 className="admin_title mt-4 text-center">Quản lý phim</h1>

            <form className="search_form">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Nhập vào tài khoản hoặc họ tên người dùng" />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                            <i className="fa fa-search" />
                        </span>
                    </div>
                </div>
            </form>

            <div className="container mt-4">
                <Table dataSource={mangPhim} bordered="true" >
                    <Column title="Mã phim" dataIndex="maPhim" key="1" />
                    <Column title="Tên phim" dataIndex="tenPhim" key="2" />
                    <Column title="Hình ảnh"
                        key="hinhAnh"
                        render={(text, record) => (
                            <Space size="small">
                                <Image src={record.hinhAnh} width={60} alt="hinhAnh" />
                            </Space>
                        )}
                    />
                    <Column title="Mã nhóm" dataIndex="maNhom" key="5" />
                    <Column title="Ngày khởi chiếu" dataIndex="ngayKhoiChieu" key="6" />
                    <Column
                        key="action"

                        render={(text, record) => (
                            <Space size="small">

                                <Button size="small" type="secondary" danger onClick={showModal}>
                                    Tạo lịch
                                </Button>

                                {/* Popup tạo lịch chiếu BS4  */}
                                <Modal title={text.tenPhim} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                </Modal>


                                <Button type="primary" size="small">Sửa</Button>
                                <Button type="primary" danger size="small">Xoá</Button>
                            </Space>
                        )}
                    />

                </Table>
            </div>
        </div>
    )
}