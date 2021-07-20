import React from 'react'
import logoCgv from '../../assets/img/logo/cgv.png'
import logoBhd from '../../assets/img/logo/bhd.png'
import logoCinestar from '../../assets/img/logo/cinestar.png'
import logoGalaxy from '../../assets/img/logo/galaxycine.png'
import logoMegags from '../../assets/img/logo/megags.png'
import logoCnx from '../../assets/img/logo/cnx.jpg'
import logoLotte from '../../assets/img/logo/lotte.png'
import logoDongda from '../../assets/img/logo/dongdacinema.png'
import logoBt from '../../assets/img/logo/bt.jpg'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="row">
                    <div className="col-4 d-none d-sm-block col-lg-3">
                        <p>CyberSoft</p>
                        <ul>
                            <li><a href="/">Giới Thiệu</a></li>
                            <li><a href="/">FAQ</a></li>
                            <li><a href="/">Liên hệ</a></li>
                        </ul>
                    </div>
                    <div className="col-4 d-none d-sm-block col-lg-3">
                        <p>Điều Khoản sủ dụng</p>
                        <ul>
                            <li><a href="/">Điều Khoản Chung</a></li>
                            <li><a href="/">Điều Khoản Giao Dịch</a></li>
                            <li><a href="/">Điều Khoản Thanh Toán</a></li>
                            <li><a href="/">Điều Khoản Bảo Mật</a></li>
                            <li><a href="/">Câu Hỏi Thường Gặp</a></li>
                        </ul>
                    </div>
                    <div className="col-12 d-none d-lg-block col-lg-3">
                        <p>Đối tác</p>
                        <ul>
                            <li className="logoL">
                                <a href="https://www.cgv.vn/" className="logo"><img src={logoCgv} alt="footer"/></a>
                                <a href="https://www.galaxycine.vn/" className="logo"><img src={logoGalaxy} alt="footer"/></a>
                                <a href="http://lottecinemavn.com/LCHS/index.aspx"><img src={logoLotte} alt="footer"/></a>

                            </li>
                            <li className="logoL">
                                <a href="https://www.bhdstar.vn/" className="logo"><img src={logoBhd} alt="footer"/></a>
                                <a href="https://www.megagscinemas.vn/" className="logo"><img src={logoMegags} alt="footer"/></a>
                                <a href="http://ddcinema.vn/"><img src={logoDongda} alt="footer"/></a>

                            </li>
                            <li>
                                <a href="http://cinestar.com.vn/" className="logo"><img src={logoCinestar} alt="footer"/></a>
                                <a href="https://cinemaxvn.com/" className="logo"><img src={logoCnx} alt="footer"/></a>
                                <a href="https://www.betacinemas.vn/home.htm"><img src={logoBt} alt="footer"/></a>

                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-3">
                        <p>Liên hệ</p>
                        <ul>
                            <li><a href="/"><i className="fab fa-facebook-f"></i>Duy</a> </li>
                            <li><a href="/"><i className="fab fa-facebook-f"></i>Phi</a>  </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
