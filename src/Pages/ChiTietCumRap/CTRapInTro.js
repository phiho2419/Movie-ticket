import React from 'react'
import Rap from '../../assets/img/rap/rap.jpg'
import lotte_cinema from '../../assets/img/rap/lotte-cinema.jpg'
import { Progress, Rate } from 'antd';
import { useSelector } from 'react-redux';
export default function CTRapInTro() {
    const { tenRap,diaChiRap } = useSelector(state => state.QuanLyRapReducer);


    return (
        <div className="Ctr__InTro" style={{ backgroundImage: `url(${Rap})` }}>
            <div className="bgBlack"></div>
            <div className="Ctr__content row">
                <div className="col-12 col-sm-8">
                    <div className="ctr__img">
                        <img src={lotte_cinema} />
                    </div>
                    <div className="ctr__text">
                        <h2>{tenRap}</h2>
                        <p>{diaChiRap}</p>
                        <button><a href="#listCumRap">Mua Vé</a> </button>
                    </div>
                </div>
                <div className="col-4 rate">
                    <Progress
                        type="circle"
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={90}
                    />
                    <br />
                    <div className="star">
                    <Rate disabled defaultValue={4.0} />

                    </div>
                </div>
            </div>
        </div>
    )
}
