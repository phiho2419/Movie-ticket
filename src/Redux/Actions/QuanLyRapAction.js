import axios from 'axios'
import { history } from '../../App'


export const callApi_layThongTinHeThongRap = () => {
    return async dispatch => {
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP02`,
                method: 'GET'
            });
            dispatch({
                type: 'SET_MANG_RAP',
                mangRap: result.data
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

export const LayChiTietRapApiAction = (maRap) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maRap}&maNhom=GP01`,
                method: 'GET'
            });
            // console.log('kq ma he thong rap',result.data);
            dispatch({
                type: 'SET_CHI_TIET_RAP',
                chiTietRap: result.data
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