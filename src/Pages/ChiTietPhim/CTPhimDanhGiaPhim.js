import React, {  useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { Input, Button } from 'antd';
import moment from 'moment'
import { renderIMDb } from '../../Util/services';
const { TextArea } = Input;
const timeElapsed = Date.now();
const today = new Date(timeElapsed);


export default function CTPhimDanhGiaPhim() {
    let dataUser = JSON.parse(localStorage.getItem('userLogin'));
    const dispatch = useDispatch();
    const [numberItem, setNumberItem] = useState(3);

    const cmt = useSelector(state => state.CommentReducer.commentPhim);
    const [danhGia, setDanhGia] = useState({ userName: dataUser.hoTen, thoiGianDanhGia: `${moment(today.toISOString()).format('DD-MM')} ${moment(today).format('LT')}`, diemDanhGia: 0, commentDanhGia: '' });
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const userAreaStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const commitStar = (number) => {
        let star_one = document.getElementById('rate_1');
        let star_two = document.getElementById('rate_2');
        let star_three = document.getElementById('rate_3');
        let star_four = document.getElementById('rate_4');
        let star_five = document.getElementById('rate_5');
        let danhGia = document.getElementById('danhGia');
        if (number === 1) {
            star_one.classList.add('commit_star');
            star_two.classList.remove('commit_star');
            star_three.classList.remove('commit_star');
            star_four.classList.remove('commit_star');
            star_five.classList.remove('commit_star');
            danhGia.innerHTML = 'Cực tệ :((';
        }
        else if (number === 2) {
            star_one.classList.add('commit_star');
            star_two.classList.add('commit_star');
            star_three.classList.remove('commit_star');
            star_four.classList.remove('commit_star');
            star_five.classList.remove('commit_star');
            danhGia.innerHTML = 'Tệ :(';
        }
        else if (number === 3) {
            star_one.classList.add('commit_star');
            star_two.classList.add('commit_star');
            star_three.classList.add('commit_star');
            star_four.classList.remove('commit_star');
            star_five.classList.remove('commit_star');
            danhGia.innerHTML = 'Bình thường :|';

        }
        else if (number === 4) {
            star_one.classList.add('commit_star');
            star_two.classList.add('commit_star');
            star_three.classList.add('commit_star');
            star_four.classList.add('commit_star');
            star_five.classList.remove('commit_star');
            danhGia.innerHTML = 'Hay :)';

        }
        else if (number === 5) {
            star_one.classList.add('commit_star');
            star_two.classList.add('commit_star');
            star_three.classList.add('commit_star');
            star_four.classList.add('commit_star');
            star_five.classList.add('commit_star');
            danhGia.innerHTML = 'Tuyệt vời :D';
        }


    }
    const handleComment = (e) => {
        setDanhGia({ ...danhGia, commentDanhGia: e.target.value })
    }

    const readMore = () => {
        setNumberItem(numberItem + 3);
    }

    const readLess = () => {
        setNumberItem(numberItem - 3);
    }
    const renderComment = () => {
        return [...cmt].reverse().map((bl, index) => {
            if (index < numberItem) {
                return <div className="user_area_cmt mt-3  pt-2" key={index}>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <img alt="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={`https://i.pravatar.cc/150?u=${bl.userName}`} />
                            <p className="d-flex flex-column ml-2">
                                <span style={{ fontWeight: '700' }}>{bl.userName}</span>
                                <span style={{ fontSize: '11px' }}>{bl.thoiGianDanhGia}</span>
                            </p>
                        </div>
                        <div style={{ fontSize: '10px' }} className="danhGia_imbd">
                            <p style={{ fontSize: '15px', marginBottom: '2px', color: 'green', textAlign: 'center', fontWeight: '700' }}>{bl.diemDanhGia}</p>
                            {renderIMDb(bl.diemDanhGia)}
                        </div>
                    </div>
                    <div>
                        <p style={{ fontWeight: '400', textTransform: '' }}>{bl.commentDanhGia}</p>
                    </div>
                    <hr/>
                </div>

            }
            else { return null }

        })
    }
    return (
        <div className="container user_comment">
            <div className="user_area" onClick={openModal}>
                <div >
                    <img alt="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={`https://i.pravatar.cc/150?u=${dataUser.soDT}`} />
                    <span className="yourThink ml-2">Bạn nghĩ gì về phim này ?</span>
                </div>
                <div className="user_star">
                    <i class="fa fa-star yel__star"></i>
                    <i class="fa fa-star yel__star"></i>
                    <i class="fa fa-star yel__star"></i>
                    <i class="fa fa-star yel__star"></i>
                    <i class="fa fa-star yel__star"></i>
                </div>
            </div>
            <Modal isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={userAreaStyle} >
                <div id="modal_comment">
                    <p id="danhGia">Hãy cho mọi người biết cảm nhận của bạn</p>
                    <div id="rating_bar">
                        <span id="rate_1" onClick={() => { commitStar(1); setDanhGia({ ...danhGia, diemDanhGia: 2 }) }}></span>
                        <span id="rate_2" onClick={() => { commitStar(2); setDanhGia({ ...danhGia, diemDanhGia: 4 }) }}></span>
                        <span id="rate_3" onClick={() => { commitStar(3); setDanhGia({ ...danhGia, diemDanhGia: 6 }) }}></span>
                        <span id="rate_4" onClick={() => { commitStar(4); setDanhGia({ ...danhGia, diemDanhGia: 8 }) }}></span>
                        <span id="rate_5" onClick={() => { commitStar(5); setDanhGia({ ...danhGia, diemDanhGia: 10 }) }}></span>
                    </div>
                    <div>
                        <TextArea rows={3} placeholder="Nhận xét ở đây nè" onChange={(e) => { handleComment(e) }} />
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <Button style={{ fontWeight: '700' }} type="primary" danger onClick={() => {
                            console.log('danhGia', danhGia);
                            dispatch({ type: 'COMMENT_PHIM', danhGia: danhGia });
                            closeModal()
                        }}>
                            Đăng
                        </Button>
                    </div>
                </div>
            </Modal>

            {renderComment()}
            <div className=" text-center p-3">
                {numberItem !== 3 ? <button className="less_btn" onClick={readLess}>Rút gọn</button> : null}
                {cmt.length > 3 ? <button className="ml-3 more_btn " onClick={readMore}>Xem thêm</button> : null}
            </div>
        </div>
    )
}

