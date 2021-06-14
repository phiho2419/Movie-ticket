import React from 'react'
import { useSelector } from 'react-redux';

export default function Edit() {
    const { maPhim } = useSelector(state => state.AdminReducer);
console.log(maPhim);
    return (
        <div>
{maPhim}
        </div>
    )
}
