import { Fragment } from 'react'
import { Route } from 'react-router'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
export const HomeTemplate = (props) => {
    return <Route path={props.path} exact render={
        (propsRoute) => {
            return <Fragment>
                
                        <Header />
                        <props.component {...propsRoute} />
                        <Footer />
                    

            </Fragment>
        }
    } />
}