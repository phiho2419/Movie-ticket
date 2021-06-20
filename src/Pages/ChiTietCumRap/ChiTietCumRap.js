import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { ChangeRap, LayChiTietRapApiAction } from '../../Redux/Actions/QuanLyRapAction';
import CTRapInTro from './CTRapInTro'
import CTRapList from './CTRapList'

export default function ChiTietCumRap(props) {
    const { chiTietRap } = useSelector(state => state.QuanLyRapReducer);
    const { maRap } = props.match.params;
    const dispatch = useDispatch();

    useEffect(() => {
        // Call API
        dispatch(LayChiTietRapApiAction(maRap));

        // dispatch lấy thông tin đầu tiên
        chiTietRap?.map((ctr) => {
            dispatch(ChangeRap(ctr.lstCumRap[0].tenCumRap, ctr.lstCumRap[0].diaChi));
        })

    }, [])


    return (
        <div>
            <CTRapInTro />
            <CTRapList chiTietRap={chiTietRap} />
            
        </div>
    )
}
