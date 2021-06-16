import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Input, Button, DatePicker } from 'antd';
import moment from 'moment';
import { capNhatPhimAction } from '../../Redux/Actions/AdminAction';


export default function Edit() {
    const { thongTinPhim } = useSelector(state => state.AdminReducer);
 const dispatch = useDispatch();
 const { TextArea } = Input;

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
        maNhom:thongTinPhim.maNhom,
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
    return (
        <div>
            <div class="modal-header">
                <h2>Cập nhật phim</h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
            <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                       
                        <div className="col-5">
                            <label className="font-weight-bold mt-2">Mã phim</label>
                            <Input type="text" value={formik.values.maPhim} className="mb-3 d-block" name='maPhim' onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.maPhim}</p>

                            <label className="font-weight-bold mt-2">Tên phim</label>
                            <Input type="text" value={formik.values.tenPhim} className="mb-3 d-block" name="tenPhim" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.tenPhim}</p>

                            <label className="font-weight-bold mt-2">Trailer</label>
                            <Input value={formik.values.trailer} className="mb-3 d-block" name="trailer" onChange={formik.handleChange} />
                            <p className="text-danger">{formik.errors.trailer}</p>

                        </div>
                        <div className="col-5">
                            <label className="font-weight-bold mt-2">Ngày khởi chiếu</label>

                            {/* <DatePicker onChange={(date,dateString)=>{
                                formik.setFieldValue('ngayKhoiChieu',dateString)
                                }} name="ngayKhoiChieu"  defaultValue={moment(today.toISOString(), dateFormatList[0])} format={dateFormatList}  className="d-block mb-3 " />  */}
                            <DatePicker  id="ngayKhoiChieu" name="ngayKhoiChieu" format={dateFormatList} onChange={(value, dateString) => {
                                formik.values.ngayKhoiChieu = dateString
                            }} className="d-block mb-3 " />
                            <p className="text-danger">{formik.errors.ngayKhoiChieu}</p>

                            <label className="font-weight-bold mt-2" >Đánh giá</label>
                            <Input value={formik.values.danhGia} className="mb-3 d-block" onChange={formik.handleChange} name="danhGia" />
                            <p className="text-danger">{formik.errors.danhGia}</p>

                            <label className="font-weight-bold mt-2">Hình ảnh</label>
                            <Input  type="file" className="mb-3 d-block" name="hinhAnh" onChange={(event) => { formik.setFieldValue("hinhAnh", event.currentTarget.files[0]) }} />
                            <p className="text-danger">{formik.errors.hinhAnh}</p>

                        </div>
                        <div className="col-10">
                            <label className="font-weight-bold mt-2">Mô tả</label>
                            <TextArea value={formik.values.moTa} rows={4} placeholder="Thêm mô tả " onChange={formik.handleChange} name="moTa" className="d-block" />
                            <p className="text-danger">{formik.errors.moTa}</p>

                        </div>
                        <div className="col-12" >
                                <label>Nhóm</label>
                                <select value={formik.values.maNhom} name="maNhom" onChange={formik.handleChange} >
                                    <option >GP01</option>
                                    <option >GP02</option>
                                    <option >GP03</option>
                                    <option >GP04</option>
                                    <option >GP05</option>
                                    <option >GP06</option>
                                    <option >GP07</option>
                                    <option >GP08</option>
                                    <option >GP09</option>
                                    <option >GP10</option>
                                </select>
                        </div>
                        <div className="col-10 mt-3">
                            <div className="text-right">
                                <Button type="primary" htmlType="submit" className=" btn btn-primary" >Cập nhật phim</Button>
                            </div>
                        </div>
                    </div>

                </form>
        

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    )
}
