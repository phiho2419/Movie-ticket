import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LayChiTietRapApiAction } from '../../Redux/Actions/QuanLyRapAction';
import CTRapInTro from './CTRapInTro'
import CTRapList from './CTRapList'

export default function ChiTietCumRap(props) {
    const { chiTietRap } = useSelector(state => state.QuanLyRapReducer);
    const { maRap } = props.match.params;
    const dispatch = useDispatch();

    useEffect(() => {
        // Call API
        dispatch(LayChiTietRapApiAction(maRap))
    }, [])

    return (
        <div>
            <CTRapInTro />
            <CTRapList chiTietRap={chiTietRap}/>
        </div>
    )
}
