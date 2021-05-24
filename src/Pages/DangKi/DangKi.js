import React from 'react'

export default function DangKi() {
    return (
        <div className="DangKy">
            <div className="DK__content">
                <div className="form-group">
                    <label>Tài Khoản</label>
                    <input className="form-control" />
                </div>
                <div className="form-group">
                    <label>Mật khẩu</label>
                    <input className="form-control" />
                </div>

                <div class="row">
                    <div className="col-6" style={{ paddingLeft: '0' }}>
                        <div className="form-group">
                            <label>Họ Tên</label>
                            <input className="form-control" />
                        </div>
                    </div>
                    <div className="col-6" style={{ paddingRight: '0' }}>
                        <div className="form-group">
                            <label>Nhóm</label>
                            <select className="form-control">
                                <option >GP1</option>
                                <option >GP2</option>
                                <option >GP3</option>
                                <option >GP4</option>
                                <option >GP5</option>
                                <option >GP6</option>
                                <option >GP7</option>
                                <option >GP8</option>
                                <option >GP9</option>
                                <option >GP10</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div className="col-6" style={{ paddingLeft: '0' }}>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" />
                        </div>
                    </div>
                    <div className="col-6" style={{ paddingRight: '0' }}>
                        <div className="form-group">
                            <label>Số điện thoại</label>
                            <input className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="DK__btn">
                    <button type="submit">Submit</button>

                </div>

            </div>
        </div>
    )
}
