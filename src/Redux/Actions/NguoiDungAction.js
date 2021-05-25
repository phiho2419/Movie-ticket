import axios from 'axios'
import {history} from '../../App'
import { TOKEN, USERLOGIN } from '../../Util/setting';
export const dangNhapAction = (userLogin) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                method: 'POST',
                data: userLogin
            });

            console.log('result', result.data);


            dispatch({
                type: 'DANG_NHAP',
                taiKhoan: result.data.taiKhoan
            })
            localStorage.setItem(TOKEN, result.data.accessToken);
            localStorage.setItem(USERLOGIN, JSON.stringify(result.data))

            history.push('/');

        } catch (errors) {
        }
    }
}