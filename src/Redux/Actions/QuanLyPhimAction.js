import axios from 'axios'
import { history } from '../../App'


export const callAPI_layDanhSachPhimAction =  () => {
    // try {
    //     let result = await axios({
    //         url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02',
    //         method: 'GET',
    //     });
    //     console.log(result.data);
    //     dispatch({ type: 'SET_MANG_PHIM', mangPhim: result.data })

    // } catch (errors) {

    // }
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02`,
                method: 'GET'
            });
            dispatch({ type: 'SET_MANG_PHIM', mangPhim: result.data })
        } catch (errors) {
            console.log(errors)
        }
    }
}

export const LayChiTietPhimAppiAction = (maPhim) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET'
            });
            console.log(result.data);
            dispatch({
                type: 'SET_CHI_TIET_PHIM',
                chiTietPhim: result.data
            })
        } catch (errors) {
            if (errors.response.status === 400) {
                alert('Không hợp lệ!');
                // history.push('/');
            }
            // console.log('error', error.reponse.status);
        }
    }
}