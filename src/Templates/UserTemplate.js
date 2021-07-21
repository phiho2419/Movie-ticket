import { Fragment } from 'react'
import { Route } from 'react-router'
import Bg from '../assets/img/rap/backapp.jpg'
export const UserTemplate = (props) => {
    return <Route path={props.path} exact render={
        (propsRoute) => {
            return <Fragment>
                <div className="UserTemplate" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="user__content">
                        <props.component {...propsRoute} />
                    </div>
                </div>
            </Fragment>
        }
    } />
}