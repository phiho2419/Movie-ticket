import React from 'react'
import { Input, Button } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
export default function AdminThemPhim() {
    const { TextArea } = Input;
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const today = new Date();
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                <div className="col-10">
                        <h1 className="admin_title">Thêm phim</h1>
                    </div>
                    <div className="col-5">
                        <label className="font-weight-bold mt-2">Mã phim</label>
                        <Input placeholder="Nhập mã phim" className="mb-3" />
                        <label className="font-weight-bold mt-2">Tên phim</label>
                        <Input placeholder="Nhập tên phim" className="mb-3" />
                        <label className="font-weight-bold mt-2">Trailer</label>
                        <Input placeholder="Nhập link trailer" className="mb-3" />
                    </div>
                    <div className="col-5">
                        <label className="font-weight-bold mt-2">Ngày khởi chiếu</label>
                        <DatePicker defaultValue={moment(today.toLocaleDateString(), dateFormatList[0])} format={dateFormatList} className="d-block mb-3" />
                        <label className="font-weight-bold mt-2">Đánh giá</label>
                        <Input placeholder="Điểm đánh giá" className="mb-3" />
                        <label className="font-weight-bold mt-2">Hình ảnh</label>
                        <Input type="file" className="mb-3" />
                    </div>
                    <div className="col-10">
                        <label className="font-weight-bold mt-2">Mô tả</label>
                        <TextArea rows={4} placeholder="Thêm mô tả " />
                    </div>
                    <div className="col-10 mt-3">
                        <div className="text-right">
                            <Button type="primary">Thêm phim</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
