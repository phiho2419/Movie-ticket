import React from 'react'
import { Table, Space, Popover, Button } from 'antd';
import moment from 'moment';

const { Column } = Table;

export default function LichSuDatVe(props) {
    const [page, setPage] = React.useState(1);

    console.log('ttdv',props.thongTinDatVe);
    return (
        <div className="thongTinDatVe">
            <Table dataSource={props.thongTinDatVe} bordered="true"   pagination={{ defaultPageSize: 5}}  >
                    <Column align={'center'} title="STT" key="STT" render={(value, item, index) => (page - 1) * 10 + index + 1} />
                    <Column title="Tên phim" dataIndex="tenPhim" key="tenPhim" />
                    <Column title="Ngày đặt"  key="ngayDat"  render={(record,i)=>{
                        return <p>{moment(record.ngayDat).format("DD/MM/YYYY")}</p>
                    }}/>
                    <Column title="Gía vé" dataIndex="giaVe" key="giaVe" />
                    <Column title="Thời lượng phim" dataIndex="thoiLuongPhim" key="thoiLuongPhim" />
                    
                    {/* <Column
                        key="action"
                        render={(text, record) => (
                            <Space size="small">
                                    <Button type="primary" size="small" onClick={() => {
                                          dispatch({
                                            type: 'SET_NGUOI_DUNG',
                                            thongTinNguoiDung: record
                                        })
                                    }} data-toggle="modal" data-target="#EditNguoiDung"><i class="fa fa-edit"></i></Button>
                               <div class="modal fade" id="EditNguoiDung" tabindex="-1" aria-labelledby="EditNguoiDung" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <EditNguoiDung />
                                        </div>
                                    </div>
                                </div>
                                    <Button type="primary" danger size="small" onClick={() => {
                                       dispatch(xoaNguoiDung(record.taiKhoan))
                                        
                                    }}><i class="fa fa-trash-alt"></i></Button>
                            </Space>
                        )}
                    /> */}

                </Table>
        </div>
    )
}
