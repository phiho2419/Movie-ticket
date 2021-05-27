import React, { useEffect, useState } from 'react'
import LichSu from './LichSu'
import ThongTin from './ThongTin'
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { thongTinAction } from '../../Redux/Actions/NguoiDungAction';
import { USERLOGIN } from '../../Util/setting';

const { TabPane } = Tabs;

export default function ThongTinCaNhan() {
    const [edit, setEdit] = useState(false);

    const { user,taiKhoan } = useSelector(state => state.NguoiDungReducer);
    const dispatch = useDispatch();
let a ={
    taiKhoan:taiKhoan
}
    useEffect(() => {
        dispatch(thongTinAction(a))
    })
    console.log(user);

    return (
        <div className="ThongTinCaNhan">
            <div className="TT_content">
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<p>Thông Tin Chi Tiết</p>} key="1">
                        <ThongTin />
                        <div className="Edit__button">
                            <button className="TT__button" onClick={() => {
                                if (edit) {
                                    document.querySelector('.Edit').style.display = 'none';
                                    document.querySelector('.TT__button').style.backgroundColor = '#ff867f';
                                } else {
                                    document.querySelector('.Edit').style.display = 'block';
                                    document.querySelector('.TT__button').style.backgroundColor = '#ff5252';
                                }
                                setEdit(!edit)
                            }}>Chỉnh Sửa</button>
                        </div>
                    </TabPane>
                    <TabPane tab={<p>Lịch Sử Đặt Vé</p>} key="2">
                        <LichSu />
                    </TabPane>

                </Tabs>
            </div>
            <div className="Edit">
                <div className="Edit__content">
                    <h2>Chỉnh Sửa Thông Tin</h2>
                    <div className="form-group">
                        <label>Tài Khoản</label>
                        <input className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Mật khẩu</label>
                        <input className="form-control" />
                    </div><div className="form-group">
                        <label> Nhập lại mật khẩu</label>
                        <input className="form-control" />
                    </div>

                    <div class="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label>Họ Tên</label>
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>Nhóm</label>
                                <select className="form-control">
                                    <option >GP1</option>
                                    <option >GP2</option>
                                    <option >GP3</option>
                                    <option >GP4</option>
                                    <option >GP5</option>
                                    <option >GP6</option>
                                    <option >GP7</option>
                                    <option >GP8</option>
                                    <option >GP9</option>
                                    <option >GP10</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>Số điện thoại</label>
                                <input className="form-control" />
                            </div>
                        </div>
                        <div className="Edit__button">
                            <button className="TT__button">Cập Nhật</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
