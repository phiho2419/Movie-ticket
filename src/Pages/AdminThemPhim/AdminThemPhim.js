import React from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button, DatePicker } from 'antd';
// import moment from 'moment';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { themPhimAction } from '../../Redux/Actions/AdminAction';
export default function AdminThemPhim() {
    const { TextArea } = Input;

    const dispatch = useDispatch();

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    // const today = new Date();

    const formik = useFormik({
        initialValues: {
            maPhim: 0,
            tenPhim: '',
            trailer: '',
            ngayKhoiChieu: '',
            danhGia: 0,
            moTa: '',
            hinhAnh: '',
            maNhom: 'Gp01',
        },
        validationSchema: Yup.object().shape({
            maPhim: Yup.number().moreThan(0),
            // tenPhim: Yup.string().required('Required !'),
            // trailer: Yup.string().required('Required !'),
            ngayKhoiChieu: Yup.string().required('Required !'),
            danhGia: Yup.number().lessThan(11).moreThan(0),
            // moTa: Yup.string().required('Required !'),
            // hinhAnh: Yup.string().required('Required !'),

        }),
        onSubmit: (values, actions) => {
            console.log(values);
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
            <div style={{marginTop:'40px'}}>
                <div className="admin__title text-center">
                    <h1 className="font-weight-bold">Thêm phim</h1>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">

                        <div className="col-6">
                            <label className="font-weight-bold ">Mã phim</label>
                            <Input required type="text" placeholder="Nhập mã phim" className="mb-3 d-block" name='maPhim' onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.maPhim}</p>

                            <label className="font-weight-bold ">Tên phim</label>
                            <Input required type="text" placeholder="Nhập tên phim" className="mb-3 d-block" name="tenPhim" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.tenPhim}</p>

                            <label className="font-weight-bold ">Trailer</label>
                            <Input required placeholder="Nhập link trailer" className="mb-3 d-block" name="trailer" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.trailer}</p>

                        </div>
                        <div className="col-6">
                            <label className="font-weight-bold ">Ngày khởi chiếu</label>
                            <DatePicker  id="ngayKhoiChieu" name="ngayKhoiChieu" format={dateFormatList} onChange={(value, dateString) => {
                                formik.values.ngayKhoiChieu = dateString
                            }} className="d-block mb-3 " />
                            <p className="text-danger m-0">{formik.errors.ngayKhoiChieu}</p>

                            <label className="font-weight-bold " >Đánh giá</label>
                            <Input required placeholder="Điểm đánh giá" className="mb-3 d-block" onChange={formik.handleChange} name="danhGia" />
                            <p className="text-danger m-0">{formik.errors.danhGia}</p>

                            <label className="font-weight-bold ">Hình ảnh</label>
                            <Input required type="file" className="mb-3 d-block" name="hinhAnh" onChange={(event) => { formik.setFieldValue("hinhAnh", event.currentTarget.files[0]) }} />
                            <p className="text-danger m-0">{formik.errors.hinhAnh}</p>

                        </div>
                     
                        <div className="col-12" >
                            <label className="font-weight-bold ">Mã Nhóm</label>
                            <select className="form-control" name="maNhom" onChange={formik.handleChange} >
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
                        <div className="col-12">
                            <label className="font-weight-bold mt-3">Mô tả</label>
                            <TextArea rows={4} placeholder="Thêm mô tả " onChange={formik.handleChange} name="moTa" className="d-block" />
                            <p className="text-danger">{formik.errors.moTa}</p>
                        </div>
                        <div className="col-12 mt-3">
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
