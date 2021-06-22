

import axios from 'axios';
import { history } from '../../App'
import Swal from 'sweetalert2';



export const themPhimAction = (phimDuocThem) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
                method: 'POST',
                data: phimDuocThem,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`
                }
            });

            if (result.status === 200) {
                Swal.fire({
                    icon: 'success',
                    text: 'Thêm phim thành công',
                })
            }
        } catch (err) {
            console.log(err.response);
            Swal.fire({
                icon: 'error',
                text: `${err.response.data}`,
            })

        }
    }
}
export const capNhatPhimAction = (phimCapNhat) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
                method: 'POST',
                data: phimCapNhat,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`
                }
            });
            if (result.status === 200) {
                Swal.fire({
                    icon: 'success',
                    text: 'Cập nhật phim thành công',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();

                    }
                })
            }
        } catch (err) {
            console.log(err.response);
            Swal.fire({
                icon: 'error',
                text: `${err.response.data}`,
            })
        }
    }
}
export const themNguoiDungAction = (nguoiDungDuocThem) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
                method: 'POST',
                data: nguoiDungDuocThem,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`
                }
            });

            if (result.status === 200) {
                Swal.fire({
                    icon: 'success',
                    text: 'Thêm người dùng thành công',
                })

            }
        } catch (errors) {
            console.log(errors.response);
            Swal.fire({
                icon: 'error',
                text: `${errors.response?.data}`,
            })

        }
    }
}

export const layDanhSachNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03`,
                method: 'GET'
            });
            dispatch({ type: 'SET_MANG_NGUOI_DUNG', mangNguoiDung: result.data })
        } catch (err) {
            Swal.fire({
                icon: 'error',
                text: `${err.response?.data}`,
            })

        }
    }
}
export const timKiemNguoiDungAction = (tuKhoa) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP03&tuKhoa=${tuKhoa.tuKhoa}`,
                method: 'GET'
            });
            dispatch({ type: 'SET_MANG_TIM_KIEM_NGUOI_DUNG', mangNguoiDung: result.data })
        } catch (err) {
            Swal.fire({
                icon: 'error',
                text: `${err.response?.data}`,
            })

        }
    }
}
export const xoaPhim = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`
                }
            });

            if (result.status === 200) {
                Swal.fire({
                    icon: 'success',
                    text: 'Xóa Phim thành công',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                })

            }
        } catch (errors) {
            console.log(errors.response);
            Swal.fire({
                icon: 'error',
                text: `${errors.response?.data}`,
            })

        }
    }
}
export const xoaNguoiDung = (maTaiKhoan) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${maTaiKhoan}`,
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`
                }
            });

            if (result.status === 200) {
                Swal.fire({
                    icon: 'success',
                    text: 'Xóa Tài Khoản thành công',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                })

            }
        } catch (errors) {
            console.log(errors.response);
            Swal.fire({
                icon: 'error',
                text: `${errors.response?.data}`,
            })

        }
    }
}


