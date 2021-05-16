import React from 'react'

export default function CardPhimHotNhat() {
    return (
        <div className="card col-3  " >
            <a className="venobox venobox_trailer" href="https://youtu.be/UxH084HDnDQ" data-vbtype="video">
                <img className="card-img-top card_img_listphim" src="./img/Batman_V_Superman_Dawn_Of_Justice.jpg" alt="Card image cap" />
                <div className="overlay">
                    <span className="icon_play"><i className="fa fa-play"></i> </span>
                </div>
            </a>
            <div className="card-body p-3">
                <p className="card_tenphim"> <span className="tag_phim_c18">C18</span> Batman & Superman</p>
                <div className="card_ngaykhoichieu">
                    <span>Ngày khởi chiếu: </span> <span> 12-03-2020</span>
                </div>
                <p className="card_thoiluong">100 phút</p>
            </div>

        </div>
    )
}
