import React,{useState} from 'react'
import ModalVideo from 'react-modal-video';

export default function CardPhimSapChieu(props) {

    const [isOpen, setOpen] = useState(false);
    const {phim} = props;

    let handleTrailerString = (string) => {
        return string.substr(string.lastIndexOf('/') + 1,string.length)
    }

    return (
        <div className="card col-3  " >
            <div className="overlay_link">

                <img style={{objectFit:'cover'}} className="card-img-top card_img_listphim" src={phim.hinhAnh} alt="Card image cap" />
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={handleTrailerString(phim.trailer)} onClose={() => setOpen(false)} />
                
                <div className="overlay" onClick={() => setOpen(true)} >
                    <span className="icon_play" ><i className="fa fa-play"></i> </span>
                </div>
            </div>
            <div className="card-body p-3">
                <p className="card_tenphim"> <span className="tag_phim_c18">C18</span> {phim.tenPhim}</p>
                <div className="card_ngaykhoichieu">
                    <span>Ngày khởi chiếu: </span> <span> {phim.ngayKhoiChieu.substr(0,10)}</span>
                </div>
                <p className="card_mota">{phim.moTa.substr(0,25) + "..."}</p>
            </div>

        </div>
    )
}
