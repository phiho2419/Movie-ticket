import { Fragment } from 'react'
import { Route } from 'react-router'
import Bg from '../assets/img/rap/backapp.jpg';
import { NavLink } from 'react-router-dom'

export const UserTemplate = (props) => {
    return <Route path={props.path} exact render={
        (propsRoute) => {
            return <Fragment>
                <div className="UserTemplate" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="logoUser">
                        <NavLink to='/' style={{ position: 'relative' }}>
                            <img id="logo_circle" style={{ width: '78px', objectFit: 'cover', height: '60px' }} className="navbar-brand header-logo p-0 pr-1 img-fluid" src="../../../img/logoheader.png" alt="logo" />
                            <img style={{ position: 'absolute', top: '-20px', left: '0', width: '85px', objectFit: 'cover', height: '60px' }} className="navbar-brand header-logo p-0 pr-1 img-fluid" src="../../../img/logoheaderA.png" alt="logo" />
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