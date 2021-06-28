import React from 'react'
import like from '../../../assets/img/news/like.png'
import comment from '../../../assets/img/news/comment.png'
import latMat48h from '../../../assets/img/news/lat-mat-48h.png'
import mortal from '../../../assets/img/news/mortal-kombat.png'
import promising from '../../../assets/img/news/peromising.png'
import namNhan from '../../../assets/img/news/nam-nhan.png'
import khaiTruong from '../../../assets/img/news/khai-truong.jpg'
import onety from '../../../assets/img/news/100-ty.png'
import boCtem from '../../../assets/img/news/boc-tem.png'
import ntv from '../../../assets/img/news/ngo-thanh-van.jpg'
import review1 from '../../../assets/img/news/review-1.png'
import review2 from '../../../assets/img/news/review-2.png'
import review3 from '../../../assets/img/news/review-3.png'
import review4 from '../../../assets/img/news/review-4.png'
import review5 from '../../../assets/img/news/review-5.png'
import review6 from '../../../assets/img/news/review-6.png'
import review7 from '../../../assets/img/news/review-7.png'
import review8 from '../../../assets/img/news/review-8.png'
import km1 from '../../../assets/img/news/km-1.jpg'
import km2 from '../../../assets/img/news/km-2.jpg'
import km3 from '../../../assets/img/news/km-3.jpg'
import km4 from '../../../assets/img/news/km-4.jpg'
import km5 from '../../../assets/img/news/km-5.jpg'
import km6 from '../../../assets/img/news/km-6.jpg'
import km7 from '../../../assets/img/news/km-7.jpg'
import km8 from '../../../assets/img/news/km-8.jpg'

export default function News() {
    return (
        <div className="news">
            <div className="newContainer">
                <div class="nav nav-tabs news__tab" id="nav-tab" role="tablist">
                    <a class="nav-link active" id="dien-anh-24h" data-toggle="tab" href="#dien-anh" role="tab" aria-controls="dien-anh" aria-selected="true">Điện ảnh 24h</a>
                    <a class="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Review</a>
                    <a class="nav-link" id="khuyen-mai-tab" data-toggle="tab" href="#khuyen-mai" role="tab" aria-controls="khuyen-mai" aria-selected="false">Khuyến mãi</a>
                </div>
                <div class="tab-content news__content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="dien-anh" role="tabpanel" aria-labelledby="dien-anh-24h">
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={latMat48h} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</a>
                                </h3>
                                <p className="item__detail">Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ</p>
                            </div>
                            <div className="item__icon">
                                <span className="icon">
                                    <img src={like} />
                                    <span className="num">10</span>
                                </span>
                                <span className="icon">
                                    <img src={comment} />
                                    <span className="num">20</span>
                                </span>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={mortal} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] -  GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH ĐÁM</a>
                                </h3>
                                <p className="item__detail">Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng không thiếu những tác phẩm đình đám được chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện tử.</p>
                            </div>
                            <div className="item__icon">
                                <span className="icon">
                                    <img src={like} />
                                    <span className="num">10</span>
                                </span>
                                <span className="icon">
                                    <img src={comment} />
                                    <span className="num">20</span>
                                </span>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={promising} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù đàn ông để đời</a>
                                </h3>
                                <p className="item__detail">Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim</p>
                            </div>
                            <div className="item__icon">
                                <span className="icon">
                                    <img src={like} />
                                    <span className="num">10</span>
                                </span>
                                <span className="icon">
                                    <img src={comment} />
                                    <span className="num">20</span>
                                </span>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={namNhan} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM</a>
                                </h3>
                                <p className="item__detail">Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành</p>
                            </div>
                            <div className="item__icon">
                                <span className="icon">
                                    <img src={like} />
                                    <span className="num">10</span>
                                </span>
                                <span className="icon">
                                    <img src={comment} />
                                    <span className="num">20</span>
                                </span>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={khaiTruong} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</a>
                                </h3>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={boCtem} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</a>
                                </h3>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={onety} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu </a>
                                </h3>

                            </div>

                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={ntv} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN</a>
                                </h3>

                            </div>

                        </div>

                    </div>
                    <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={review1} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">
                                        Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết</a>
                                </h3>
                                <p className="item__detail">Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám</p>
                            </div>
                            <div className="item__icon">
                                <span className="icon">
                                    <img src={like} />
                                    <span className="num">10</span>
                                </span>
                                <span className="icon">
                                    <img src={comment} />
                                    <span className="num">20</span>
                                </span>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={review2} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">Review: Dinh Thự Oan Khuất (Ghost Of War)</a>
                                </h3>
                                <p className="item__detail">Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!</p>
                            </div>
                            <div className="item__icon">
                                <span className="icon">
                                    <img src={like} />
                                    <span className="num">10</span>
                                </span>
                                <span className="icon">
                                    <img src={comment} />
                                    <span className="num">20</span>
                                </span>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={review3} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh</a>
                                </h3>
                                <p className="item__detail">Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc - nỗi đau gây nhức</p>
                            </div>
                            <div className="item__icon">
                                <span className="icon">
                                    <img src={like} />
                                    <span className="num">10</span>
                                </span>
                                <span className="icon">
                                    <img src={comment} />
                                    <span className="num">20</span>
                                </span>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={review4} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">American Sniper - Chính nghĩa hay phi nghĩa?</a>
                                </h3>
                                <p className="item__detail">American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện phim chậm rãi đưa người</p>
                            </div>
                            <div className="item__icon">
                                <span className="icon">
                                    <img src={like} />
                                    <span className="num">10</span>
                                </span>
                                <span className="icon">
                                    <img src={comment} />
                                    <span className="num">20</span>
                                </span>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={review5} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">Review: Spider-Man: Into The Spider-Vesre</a>
                                </h3>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={review6} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">COVID-19 là bản chính thức của MEV-1 phim contagion (2011)</a>
                                </h3>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={review7} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">[Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao giờ lầy lội và hài hước đến thế</a>
                                </h3>

                            </div>

                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={review8} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">[Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh hùng Valiant</a>
                                </h3>

                            </div>

                        </div>

                    </div>
                    <div class="tab-pane fade" id="khuyen-mai" role="tabpanel" aria-labelledby="khuyen-mai-tab">
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={km1} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">
BHD 59K/VÉ CẢ TUẦN !!!</a>
                                </h3>
                                <p className="item__detail">Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.</p>
                            </div>
                            <div className="item__icon">
                                <span className="icon">
                                    <img src={like} />
                                    <span className="num">10</span>
                                </span>
                                <span className="icon">
                                    <img src={comment} />
                                    <span className="num">20</span>
                                </span>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={km2} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">TIX 1K/VÉ NGẠI CHI GIÁ VÉ</a>
                                </h3>
                                <p className="item__detail">Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga</p>
                            </div>
                            <div className="item__icon">
                                <span className="icon">
                                    <img src={like} />
                                    <span className="num">10</span>
                                </span>
                                <span className="icon">
                                    <img src={comment} />
                                    <span className="num">20</span>
                                </span>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={km3} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX</a>
                                </h3>
                                <p className="item__detail">ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.</p>
                            </div>
                            <div className="item__icon">
                                <span className="icon">
                                    <img src={like} />
                                    <span className="num">10</span>
                                </span>
                                <span className="icon">
                                    <img src={comment} />
                                    <span className="num">20</span>
                                </span>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={km4} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</a>
                                </h3>
                                <p className="item__detail">Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.</p>
                            </div>
                            <div className="item__icon">
                                <span className="icon">
                                    <img src={like} />
                                    <span className="num">10</span>
                                </span>
                                <span className="icon">
                                    <img src={comment} />
                                    <span className="num">20</span>
                                </span>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={km5} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">Beta Cineplex trở lại với hàng loạt ưu đãi lớn</a>
                                </h3>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={km6} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">[123Phim] Thứ 6 Không Đen Tối -  Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu Quái</a>
                                </h3>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={km7} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">[123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư Mù: Ai Chết Giơ Tay</a>
                                </h3>

                            </div>

                        </div>
                        <div className="news__item">
                            <div className="item__img">
                                <a href="#" target="_blank">
                                    <img src={km8} />
                                </a>
                            </div>
                            <div className="item__text">
                                <h3 className="item__title">
                                    <a href="#" target="_blank">[Mega GS] Một đoá hoa thay ngàn lời yêu</a>
                                </h3>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div style={{ clear: "both" }}></div>
        </div>
    )
}
