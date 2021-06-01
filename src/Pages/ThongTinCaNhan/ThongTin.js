import React from 'react'

export default function ThongTin(props) {
    let { user } = props;
    return (
        <div className="ThongTin">
            <div className="TT__content">
                <p>Họ Tên:<span>{user.hoTen}</span></p>
                <p>Tài Khoản:<span>{user.taiKhoan}</span></p>
                <p>Email:<span>{user.email}</span></p>
                <p>Số Điện Thoại:<span>{user.soDT}</span></p>
                <p>Mã Nhóm:<span>{user.maNhom}</span></p>

            </div>
        </div>
    )
}
