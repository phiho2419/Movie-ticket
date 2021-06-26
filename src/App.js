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
import Loading from './Components/Loading/Loading'
export const history = createBrowserHistory();

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  return (

    <Router history={history}>
      {loading === false ? (
        <div className="App">
          <Switch>
            <HomeTemplate path='/chitietphongve/:maPhim' exact component={ChiTietPhongVe} />

            <AdminTemplate path='/admin/quanlyphim' exact component={AdminQuanLyPhim} />
            <AdminTemplate path='/admin/themphim' exact component={AdminThemPhim} />
            <AdminTemplate path='/admin/themnguoidung' exact component={AdminThemNguoiDung} />
            <AdminTemplate path='/admin/quanlynguoidung' exact component={AdminQuanLyNguoiDung} />
            <AdminTemplate path='/admin' exact component={AdminQuanLyPhim} />

            <UserTemplate path="/dangnhap" component={DangNhap} />
            <UserTemplate path="/dangky" component={DangKi} />

            <HomeTemplate path='/chitietphim/:maPhim' component={ChiTietPhim} />
            <HomeTemplate path='/chitietcumrap/:maRap' component={ChiTietCumRap} />
            <HomeTemplate path='/thongtincanhan' component={ThongTinCaNhan} />

            <HomeTemplate path='/' exact component={TrangChu} />

          </Switch>
        </div>
      ) : (

        <Loading />
      )}
    </Router>
  );
}

export default App;
