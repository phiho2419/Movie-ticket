import '../src/scss/main.css'
// import '../src/css/main.css'
import { Route, Switch, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ChiTietPhongVe from './Pages/ChiTietPhongVe/ChiTietPhongVe';
import { AdminTemplate } from './Templates/AdminTemplate';
import AdminQuanLyPhim from './Pages/AdminQuanLyPhim/AdminQuanLyPhim';
import AdminThemPhim from './Pages/AdminThemPhim/AdminThemPhim';
import AdminQuanLyNguoiDung from './Pages/AdminQuanLyNguoiDung/AdminQuanLyNguoiDung';
import AdminThemNguoiDung from './Pages/AdminThemNguoiDung/AdminThemNguoiDung';
import TrangChu from './Pages/TrangChu/TrangChu';
import ChiTietPhim from './Pages/ChiTietPhim/ChiTietPhim';
import ChiTietCumRap from './Pages/ChiTietCumRap/ChiTietCumRap';
import { UserTemplate } from './Templates/UserTemplate';
import { HomeTemplate } from './Templates/HomeTemplate';
import DangKi from './Pages/DangKi/DangKi';
import DangNhap from './Pages/DangNhap/DangNhap';
import ThongTinCaNhan from './Pages/ThongTinCaNhan/ThongTinCaNhan';
import { useEffect, useState } from 'react';
import Loading from './Components/Loading/Loading';
import AdminTaoLichChieu from './Pages/AdminTaoLichChieu/AdminTaoLichChieu';
// import Demo from './Pages/Demo';
import Error from './Components/Error/Error';
export const history = createBrowserHistory();

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])
  return (

    <Router history={history}>
      { !loading  ? (
        <div className="App">
          <Switch>
            <HomeTemplate path='/chitietphongve/:malichChieu' exact component={ChiTietPhongVe} />

            <AdminTemplate path='/admin/quanlyphim' exact component={AdminQuanLyPhim} />
            <AdminTemplate path='/admin/themphim' exact component={AdminThemPhim} />
            <AdminTemplate path='/admin/themnguoidung' exact component={AdminThemNguoiDung} />
            <AdminTemplate path='/admin/quanlynguoidung' exact component={AdminQuanLyNguoiDung} />
            <AdminTemplate path='/admin/taolichchieu' exact component={AdminTaoLichChieu} />
            {/* <AdminTemplate path='/admin' exact component={AdminQuanLyPhim} /> */}

            <UserTemplate path="/dangnhap" component={DangNhap} />
            <UserTemplate path="/dangky" component={DangKi} />

            <HomeTemplate path='/chitietphim/:maPhim' component={ChiTietPhim} />
            <HomeTemplate path='/chitietcumrap/:maHeThongRap/:maCumRap' component={ChiTietCumRap} />
            <HomeTemplate path='/thongtincanhan' component={ThongTinCaNhan} />
            
            {/* <Route path='/demo' component={Demo} /> */}
            
            <HomeTemplate path='/' exact component={TrangChu} />
            <Route component={Error} />
            
          </Switch>
        </div>
      ) : ( <Loading />  )}
    </Router>
  );
}

export default App;
