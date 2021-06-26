import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button, DatePicker } from 'antd';
import moment from 'moment';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { themPhimAction } from '../../Redux/Actions/AdminAction';
export default function AdminThemPhim() {
    const { TextArea } = Input;

    const dispatch = useDispatch();

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const today = new Date();

    const formik = useFormik({
        initialValues: {
            maPhim: 0,
            tenPhim: '',
            trailer: '',
            ngayKhoiChieu: '',
            danhGia: 0,
            moTa: '',
            hinhAnh: '',
            maNhom:'Gp01',
        },
        validationSchema: Yup.object().shape({
            maPhim: Yup.number().moreThan(0),
            tenPhim: Yup.string().required('Required !'),
            trailer: Yup.string().required('Required !'),
            ngayKhoiChieu: Yup.string().required('Required !'),
            danhGia: Yup.number().lessThan(11).moreThan(0),
            moTa: Yup.string().required('Required !'),
            hinhAnh: Yup.string().required('Required !'),

        }),
        onSubmit: (values, actions) => {
            console.log('values', { ...values, ngayKhoiChieu: values.ngayKhoiChieu + 'T00:00:00' });
            let form_data = new FormData();
            for (var key in values) {
                form_data.append(key, values[key])
            }
            dispatch(themPhimAction(form_data));
        }
    })




    //dateFormatList và today dùng để lấy ngày hiện tại

    return (
        <div>
            <div className="container">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row mt-5">
                        <div className="col-10">
                            <h1 className="admin_title">Thêm phim</h1>
                        </div>
                        <div className="col-5">
                            <label className="font-weight-bold mt-2">Mã phim</label>
                            <Input type="text" placeholder="Nhập mã phim" className="mb-3 d-block" name='maPhim' onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.maPhim}</p>

                            <label className="font-weight-bold mt-2">Tên phim</label>
                            <Input type="text" placeholder="Nhập tên phim" className="mb-3 d-block" name="tenPhim" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.tenPhim}</p>

                            <label className="font-weight-bold mt-2">Trailer</label>
                            <Input placeholder="Nhập link trailer" className="mb-3 d-block" name="trailer" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.trailer}</p>

                        </div>
                        <div className="col-5">
                            <label className="font-weight-bold mt-2">Ngày khởi chiếu</label>

                            {/* <DatePicker onChange={(date,dateString)=>{
                                formik.setFieldValue('ngayKhoiChieu',dateString)
                                }} name="ngayKhoiChieu"  defaultValue={moment(today.toISOString(), dateFormatList[0])} format={dateFormatList}  className="d-block mb-3 " />  */}
                            <DatePicker id="ngayKhoiChieu" name="ngayKhoiChieu" format={dateFormatList} onChange={(value, dateString) => {
                                formik.values.ngayKhoiChieu = dateString
                            }} className="d-block mb-3 " />
                            <p className="text-danger">{formik.errors.ngayKhoiChieu}</p>

                            <label className="font-weight-bold mt-2" >Đánh giá</label>
                            <Input placeholder="Điểm đánh giá" className="mb-3 d-block" onChange={formik.handleChange} name="danhGia" />
                            <p className="text-danger">{formik.errors.danhGia}</p>

                            <label className="font-weight-bold mt-2">Hình ảnh</label>
                            <Input type="file" className="mb-3 d-block" name="hinhAnh" onChange={(event) => { formik.setFieldValue("hinhAnh", event.currentTarget.files[0]) }} />
                            <p className="text-danger">{formik.errors.hinhAnh}</p>

                        </div>
                        <div className="col-10">
                            <label className="font-weight-bold mt-2">Mô tả</label>
                            <TextArea rows={4} placeholder="Thêm mô tả " onChange={formik.handleChange} name="moTa" className="d-block" />
                            <p className="text-danger">{formik.errors.moTa}</p>

                        </div>
                        <div className="col-12" >
                                <label>Nhóm</label>
                                <select name="maNhom" onChange={formik.handleChange} >
                                <option value="GP01" >GP01</option>
                                <option value="GP02" >GP02</option>
                                <option value="GP03" >GP03</option>
                                <option value="GP04" >GP04</option>
                                <option value="GP05" >GP05</option>
                                <option value="GP06" >GP06</option>
                                <option value="GP07" >GP07</option>
                                <option value="GP08" >GP08</option>
                                <option value="GP09" >GP09</option>
                                <option value="GP10" >GP10</option>
                                </select>
                        </div>
                        <div className="col-10 mt-3">
                            <div className="text-right">
                                <Button type="primary" htmlType="submit" className=" btn btn-primary" >Thêm phim</Button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
