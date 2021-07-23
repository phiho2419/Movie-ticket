import { Fragment } from 'react'
import { Route } from 'react-router'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { BackTop } from 'antd';
export const HomeTemplate = (props) => {
    return <Route path={props.path} exact render={
        (propsRoute) => {
            return <Fragment>
                <BackTop style={{ right: "25px" }} />
                <Header />
                <div>
                    <props.component {...propsRoute} />
                </div>
                <Footer />
            </Fragment>
        }
    } />
}