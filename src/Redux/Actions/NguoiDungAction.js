import axios from 'axios'
import { history } from '../../App'
import { TOKEN, USERLOGIN } from '../../Util/setting';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router';

export const dangNhapAction = (userLogin) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                method: 'POST',
                data: userLogin
            });

            dispatch({
                type: 'DANG_NHAP',
                taiKhoan: result.data.taiKhoan
            })
            localStorage.setItem(TOKEN, result.data.accessToken);
            localStorage.setItem(USERLOGIN, JSON.stringify(result.data))
            history.push('/');

        } catch (err) {
            Swal.fire({
                icon: 'error',
                title:"Đăng nhập thất bại",
                text: 'Tài khoản hoặc mật khẩu không đúng !',
            })
        }
    }
}
export const dangKyAction = (userLogup) => {
    return async () => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
                method: 'POST',
                data: userLogup
            });
            if(result.status === 200) {
                Swal.fire({
                    icon: 'success',
                    text: 'Đăng ký thành công',
                })
            }
            history.push('/dangnhap');

        } catch (err) {
            Swal.fire({
                icon: 'error',
                text: `${err.response?.data}`,
            })
        }
    }
}
export const thongTinAction = (taiKhoan) => {

    return async (dispatch) => {
        try {
            const result = await axios({
                method: 'POST',
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
                data: { taiKhoan }
            });

            // console.log(result.data);
            dispatch({
                type: 'THONG_TIN_NGUOI_DUNG',
                user: result.data
            })
        } catch (err) {
            Swal.fire({
                icon: 'error',
                text: 'Bạn chưa đăng nhập !',
            })
            return <Redirect to="/dangnhap" />
        }
    }
}
export const CapNhatNguoiDungAction = (thongTinNguoiDung) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
                method: 'PUT',
                data: thongTinNguoiDung,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            });
            console.log(result.data);
            dispatch({
                type: 'THONG_TIN_NGUOI_DUNG_UPDATE',
                user: result.data
            })
            if (result.status === 200) {
                Swal.fire({
                    icon: 'success',
                    text: 'Thay đổi thành công!',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                })
                // window.location.reload();
            }
        } catch (err) {
            Swal.fire({
                icon: 'error',
                text: `${err.response?.data}`,
            })
        }
    }
}
