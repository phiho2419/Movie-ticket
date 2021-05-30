import axios from 'axios'
import { history } from '../../App'
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
            console.log(errors.response.data);

        }
    }
}
export const dangKyAction = (userLogup) => {
    console.log('result', userLogup);

    return async () => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
                method: 'POST',
                data: userLogup
            });

            history.push('/Dangnhap');

        } catch (errors) {
            console.log(errors.response.data);
        }
    }
}
export const thongTinAction = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                method: 'POST',
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
                data: {
                    taiKhoan: taiKhoan
                }
            });

            // console.log(result.data);
            dispatch({
                type: 'THONG_TIN_NGUOI_DUNG',
                user: result.data
            })
        } catch (errors) {
            console.log(errors.response.data);
        }
    }
}
export const CapNhatNguoiDungAction = (thongTinNguoiDung) =>{
    return async(dispatch) =>{
        try{
            const result = await axios({
                url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
                method:'PUT',
                data:thongTinNguoiDung,
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            });
            console.log(result.data);
            dispatch({
                type: 'THONG_TIN_NGUOI_DUNG_UPDATE',
                user: result.data
            })
            // if(result.status=== 200){
            //     alert(result.data);
            //     window.location.reload();
            // }
        }catch(err){
            console.log(err.response?.data);
        }
    }
}
