import '../src/scss/main.css'
import './css/main.css'
import { Route, BrowserRouter, Switch, Router, NavLink } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Fragment } from 'react';
import Header from './Components/Header/Header';
import TrangChu from './Pages/TrangChu/TrangChu';
import Footer from './Components/Footer/Footer';
import ChiTietPhim from './Pages/ChiTietPhim/ChiTietPhim';
import ChiTietCumRap from './Pages/ChiTietCumRap/ChiTietCumRap';
import { UserTemplate } from './Templates/HomeTemplate';
import DangKi from './Pages/DangKi/DangKi';
import DangNhap from './Pages/DangNhap/DangNhap';
import ThongTinCaNhan from './Pages/ThongTinCaNhan/ThongTinCaNhan';
export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>

      <div className="App">
        <Switch>
          <Route path='/trangchu' component={TrangChu} />
          <UserTemplate path="/dangnhap" component={DangNhap}/>
          <UserTemplate path="/dangky" component={DangKi}/>
          <Route path='/chitietphim/:maPhim' component={ChiTietPhim} />
          <Route path='/chitietcumrap/:maRap' component={ChiTietCumRap} />
          <Route path='/' component={ThongTinCaNhan} />

          {/* <ChiTietCumRap/> */}
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
