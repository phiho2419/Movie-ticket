import './css/main.css'
import '../src/scss/main.css'
import { Route, BrowserRouter, Switch, Router, NavLink } from 'react-router-dom'
import {createBrowserHistory} from 'history'
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
import DangKi from './Pages/DangKi/DangKi';
import DangNhap from './Pages/DangNhap/DangNhap';
import ThongTinCaNhan from './Pages/ThongTinCaNhan/ThongTinCaNhan';
export const history = createBrowserHistory();

function App() {
  
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route path='/trangchu' exact component={TrangChu} />    
          <Route path='/chitietphongve' exact component={ChiTietPhongVe} /> 
          <AdminTemplate path='/admin/quanlyphim' exact component={AdminQuanLyPhim} />
          <AdminTemplate path='/admin/themphim' exact component={AdminThemPhim} />
          <AdminTemplate path='/admin/themnguoidung' exact component={AdminThemNguoiDung} />
          <AdminTemplate path='/admin/quanlynguoidung' exact component={AdminQuanLyNguoiDung} />
          <UserTemplate path="/dangnhap" component={DangNhap}/>
          <UserTemplate path="/dangky" component={DangKi}/>
          <Route path='/chitietphim/:maPhim' component={ChiTietPhim} />
          <Route path='/chitietcumrap/:maRap' component={ChiTietCumRap} />
          <Route path='/thongtincanhan' component={ThongTinCaNhan} />
          <Route path='/' exact component={TrangChu} />    
        </Switch>
      </div>
    </Router>
  );
}

export default App;
