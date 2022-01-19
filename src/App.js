import '../src/scss/main.css'
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
import Loading from './Components/Loading/Loading';
import AdminTaoLichChieu from './Pages/AdminTaoLichChieu/AdminTaoLichChieu';
import Error from './Components/Error/Error';
export const history = createBrowserHistory();

function App() {
  return (

    <div className="App">
      <Router history={history}>
        <Loading />
        <Switch>
          <HomeTemplate path='/chitietphongve/:malichChieu' exact component={ChiTietPhongVe} />

          <AdminTemplate path='/admin/quanlyphim' exact component={AdminQuanLyPhim} />
          <AdminTemplate path='/admin/themphim' exact component={AdminThemPhim} />
          <AdminTemplate path='/admin/themnguoidung' exact component={AdminThemNguoiDung} />
          <AdminTemplate path='/admin/quanlynguoidung' exact component={AdminQuanLyNguoiDung} />
          <AdminTemplate path='/admin/taolichchieu' exact component={AdminTaoLichChieu} />

          <UserTemplate path="/dangnhap" exact component={DangNhap} />
          <UserTemplate path="/dangky" exact component={DangKi} />

          <HomeTemplate path='/chitietphim/:maPhim' exact component={ChiTietPhim} />
          <HomeTemplate path='/chitietcumrap/:maHeThongRap/:maCumRap' exact component={ChiTietCumRap} />
          <HomeTemplate path='/thongtincanhan' exact component={ThongTinCaNhan} />
          <HomeTemplate path='/' exact component={TrangChu} />

          <Route component={Error} />

        </Switch>
      </Router>
    </div>

  );
}

export default App;
