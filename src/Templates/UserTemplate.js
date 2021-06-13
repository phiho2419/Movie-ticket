import { Fragment } from 'react'
import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import Bg from '../assets/img/rap/backapp.jpg'
export const UserTemplate = (props) => {
    return <Route path={props.path} exact render={
        (propsRoute) => {
            return <Fragment>
                <div className="UserTemplate" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="user__content">
                        {/* <div className="user__back">
                            <NavLink className="back" to="/"><i class="fas fa-long-arrow-alt-left"></i></NavLink>
                        </div> */}

                        <props.component {...propsRoute} />

                    </div>

                </div>

            </Fragment>
        }
    } />
}