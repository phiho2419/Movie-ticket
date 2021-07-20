import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error() {
    return (
        <div className="text-center ">
            <img src="../../../img/BOOST_BLOG_IMAGE_RB_SET_10_404_PAGE_1200x628px_v1_3.jpg" style={{ height: "70vh" }} alt="error" />
            <br />
            <NavLink to="/" className="btn btn-primary mt-5">Quay lại</NavLink>
        </div>
    )
}
