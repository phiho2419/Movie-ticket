

import axios from 'axios';
import {history} from '../../App'



export const themPhimAction = (phimDuocThem) => { 
    return async (dispatch) => {
        try {
            const result = await axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
                method:'POST',
                data: phimDuocThem,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`
                }
            });

            if(result.status === 200) {
                alert(result.response?.data);
            }
        }catch (errors) {
            console.log('errors',errors.response)
        }
    }
}

export const themNguoiDungAction = (nguoiDungDuocThem) => { 
    return async (dispatch) => {
        try {
            const result = await axios({
                url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
                method:'POST',
                data: nguoiDungDuocThem,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`
                }
            });

            if(result.status === 200) {
                alert(result.response);
            }
        }catch (errors) {
            console.log('errors',errors.response)
        }
    }
}

export const layDanhSachNguoiDungAction =  () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03`,
                method: 'GET'
            });
            dispatch({ type: 'SET_MANG_NGUOI_DUNG', mangNguoiDung: result.data })
        } catch (errors) {
            console.log(errors.response)
        }
    }
}
