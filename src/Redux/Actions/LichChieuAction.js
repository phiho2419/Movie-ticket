import axios from 'axios'
import { TOKEN } from '../../Util/setting';
import Swal from 'sweetalert2';

export const layThongTinLichChieuAction = (maLichChieu) => {
    // fetch
    return async dispatch => {
        dispatch({
            type:'SET_LOADING',
            isLoading:true
        })
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET'
            });
            setTimeout(() => {
                dispatch({
                    type:'SET_LOADING',
                    isLoading:false
                })
            }, 1000);
            dispatch({
                type: 'SET_LICH_CHIEU',
                lichChieu: result.data
            })
        } catch (errors) {
            console.log('errors', errors.response.data)
        }

    }




}


export const datVeAction = (thongTinDatVe) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
                method: 'POST',
                data: thongTinDatVe,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            });
            if (result.status === 200) {
                Swal.fire({
                    icon: 'success',
                    text: 'Đặt vé thành công !',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                })
            }
        } catch (err) {
            console.log(err.response?.data);
        }
    }
}
export const TaoLichChieuAction =(thonTinLichChieu) =>{
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/TaoLichChieu',
                method: 'POST',
                data: thonTinLichChieu,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            });
            if (result.status === 200) {
                Swal.fire({
                    icon: 'success',
                    text: 'Đặt lịch thành công !',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                })
            }
        } catch (err) {
            Swal.fire({
                icon: 'error',
                text: err.response?.data,
            })
        }
    }
}