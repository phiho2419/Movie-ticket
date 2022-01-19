import { Fragment } from 'react'
import { Route } from 'react-router'
import Bg from '../assets/img/rap/backapp.jpg';
import { NavLink } from 'react-router-dom'
import LogoHeader from '../assets/publicImg/logoHeader.png';
import LogoCircle from '../assets/publicImg/logoCircle.png';
export const UserTemplate = (props) => {
    return <Route path={props.path} exact render={
        (propsRoute) => {
            return <Fragment>
                <div className="UserTemplate" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="logoUser">
                        <NavLink to='/' style={{ position: 'relative' }}>
                            <img id="logo_circle" style={{ width: '78px', objectFit: 'cover', height: '60px' }} className="navbar-brand header-logo p-0 pr-1 img-fluid" src={LogoCircle} alt="logo" />
                            <img style={{ position: 'absolute', top: '-20px', left: '0', width: '85px', objectFit: 'cover', height: '60px' }} className="navbar-brand header-logo p-0 pr-1 img-fluid" src={LogoHeader} alt="logo" />
                        </NavLink>
                    </div>
                    <div className="user__content">
                        <props.component {...propsRoute} />
                    </div>
                </div>
            </Fragment>
        }
    } />
}