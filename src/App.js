import '../src/scss/main.css'
import { Route, BrowserRouter, Switch, Router, NavLink } from 'react-router-dom'
import {createBrowserHistory} from 'history'
import Header from './Components/Header/Header';
import TrangChu from './Pages/TrangChu/TrangChu';
import ChiTietPhongVe from './Pages/ChiTietPhongVe/ChiTietPhongVe';
import { AdminTemplate } from './Templates/AdminTemplate';
import AdminQuanLyPhim from './Pages/AdminQuanLyPhim/AdminQuanLyPhim';
import AdminThemPhim from './Pages/AdminThemPhim/AdminThemPhim';
import AdminQuanLyNguoiDung from './Pages/AdminQuanLyNguoiDung/AdminQuanLyNguoiDung';
import AdminThemNguoiDung from './Pages/AdminThemNguoiDung/AdminThemNguoiDung';
export  const history = createBrowserHistory();

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
          
          <AdminTemplate path='/admin' exact component={AdminQuanLyPhim} />
          <Route path='/' exact component={TrangChu} />    

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
