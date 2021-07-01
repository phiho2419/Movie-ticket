import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Input, Button, DatePicker, Select } from 'antd';
import moment from 'moment';
import { capNhatPhimAction } from '../../Redux/Actions/AdminAction';


export default function Edit() {
    const { thongTinPhim } = useSelector(state => state.AdminReducer);
    const dispatch = useDispatch();
    const { TextArea } = Input;
    const { Option } = Select;
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const formik = useFormik({
        initialValues: {
            maPhim: thongTinPhim.maPhim,
            tenPhim: thongTinPhim.tenPhim,
            trailer: thongTinPhim.trailer,
            ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
            danhGia: thongTinPhim.danhGia,
            moTa: thongTinPhim.moTa,
            hinhAnh: thongTinPhim.hinhAnh,
            maNhom: thongTinPhim.maNhom,
        },
        enableReinitialize: true,

        onSubmit: (values, actions) => {
            console.log('values', { ...values, ngayKhoiChieu: values.ngayKhoiChieu + 'T00:00:00' });
            let form_data = new FormData();
            for (var key in values) {
                form_data.append(key, values[key])
            }
            dispatch(capNhatPhimAction(form_data));
        }
    })
    const handleChange = (value) => {
        formik.values.maNhom = value;
    }
    return (
        <div>
            <div class="modal-header">
                <h2 style={{ margin: "0" }}>Cập nhật phim</h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">

                        <div className="col-6">
                            <label className="font-weight-bold">Mã phim</label>
                            <Input type="text" value={formik.values.maPhim} className="mb-3 d-block" name='maPhim' onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.maPhim}</p>

                            <label className="font-weight-bold">Tên phim</label>
                            <Input type="text" value={formik.values.tenPhim} className="mb-3 d-block" name="tenPhim" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.tenPhim}</p>

                            <label className="font-weight-bold">Trailer</label>
                            <Input value={formik.values.trailer} className="mb-3 d-block" name="trailer" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.trailer}</p>

                        </div>
                        <div className="col-6">
                            <label className="font-weight-bold">Ngày khởi chiếu</label>

                            {/* <DatePicker onChange={(date,dateString)=>{
                                formik.setFieldValue('ngayKhoiChieu',dateString)
                                }} name="ngayKhoiChieu"  defaultValue={moment(today.toISOString(), dateFormatList[0])} format={dateFormatList}  className="d-block mb-3 " />  */}
                            <DatePicker id="ngayKhoiChieu" name="ngayKhoiChieu" format={dateFormatList} onChange={(value, dateString) => {
                                formik.values.ngayKhoiChieu = dateString
                            }} className="d-block mb-3 " />
                            <p className="text-danger">{formik.errors.ngayKhoiChieu}</p>

                            <label className="font-weight-bold" >Đánh giá</label>
                            <Input value={formik.values.danhGia} className="mb-3 d-block" onChange={formik.handleChange} name="danhGia" />
                            <p className="text-danger">{formik.errors.danhGia}</p>

                            <label className="font-weight-bold">Nhóm</label>
                            <Select defaultValue="GP01" className="mb-3 d-block" style={{ width: "100%" }} onChange={handleChange}>
                                <Option value="GP01">GP01</Option>
                                <Option value="GP02">GP02</Option>
                                <Option value="GP03">GP03</Option>
                                <Option value="GP04">GP04</Option>
                                <Option value="GP05">GP05</Option>
                                <Option value="GP06">GP06</Option>
                                <Option value="GP07">GP07</Option>
                                <Option value="GP08">GP08</Option>
                                <Option value="GP09">GP09</Option>
                                <Option value="GP10">GP10</Option>
                            </Select>
                        </div>
                        <div className="col-12" >
                            <label className="font-weight-bold">Hình ảnh</label>
                            <Input type="file" className="mb-3 d-block" name="hinhAnh" onChange={(event) => { formik.setFieldValue("hinhAnh", event.currentTarget.files[0]) }} />
                            <p className="text-danger">{formik.errors.hinhAnh}</p>
                        </div>
                        <div className="col-12">
                            <label className="font-weight-bold">Mô tả</label>
                            <TextArea value={formik.values.moTa} rows={4} placeholder="Thêm mô tả " onChange={formik.handleChange} name="moTa" className="d-block" />
                            <p className="text-danger">{formik.errors.moTa}</p>

                        </div>

                        <div className="col-12 mt-3">
                            <div className="text-right">
                                <Button type="primary" htmlType="submit" className=" btn btn-primary" >Cập nhật phim</Button>
                            </div>
                        </div>
                    </div>

                </form>


            </div>

        </div>
    )
}
