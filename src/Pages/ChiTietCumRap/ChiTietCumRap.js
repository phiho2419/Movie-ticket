import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  LayChiTietRapApiAction } from '../../Redux/Actions/QuanLyRapAction';
import CTRapInTro from './CTRapInTro'
import CTRapList from './CTRapList'

export default function ChiTietCumRap(props) {
    const { chiTietRap } = useSelector(state => state.QuanLyRapReducer);
    const { maCumRap,maHeThongRap } = props.match.params;
    const dispatch = useDispatch();


    //cinestar
    //cgv
    //MegaGS
    //LotteCinima
    //BHDStar
    //Galaxy
    useEffect(() => {
        // Call API
        dispatch(LayChiTietRapApiAction(maHeThongRap));
    }, [])

    console.log('chiTietRap',chiTietRap);

    return (
        <div id="detail">
            <CTRapInTro chiTietRap={chiTietRap} maCumRap={maCumRap}/>
            <CTRapList chiTietRap={chiTietRap} maCumRap={maCumRap} maHeThongRap={maHeThongRap}/>
        </div>
    )
}
