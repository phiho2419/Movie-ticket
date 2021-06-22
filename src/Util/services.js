import {Fragment} from 'react'

export const renderIMDb = (imdb) => {
    if (imdb <= 2) {
        return <Fragment>
            <i class="fa fa-star yel__star"></i>
            <i class="fa fa-star gray__star"></i>
            <i class="fa fa-star gray__star"></i>
            <i class="fa fa-star gray__star"></i>
            <i class="fa fa-star gray__star"></i>
        </Fragment>
    }
    if (imdb <= 4) {
        return <Fragment>
            <i class="fa fa-star yel__star"></i>
            <i class="fa fa-star yel__star"></i>
            <i class="fa fa-star gray__star"></i>
            <i class="fa fa-star gray__star"></i>
            <i class="fa fa-star gray__star"></i>
        </Fragment>
    }
    if (imdb <= 6) {
        return <Fragment>
            <i class="fa fa-star yel__star"></i>
            <i class="fa fa-star yel__star"></i>
            <i class="fa fa-star yel__star"></i>
            <i class="fa fa-star gray__star"></i>
            <i class="fa fa-star gray__star"></i>
        </Fragment>
    }
    if (imdb <= 8) {
        return <Fragment>
            <i class="fa fa-star yel__star"></i>
            <i class="fa fa-star yel__star"></i>
            <i class="fa fa-star yel__star"></i>
            <i class="fa fa-star yel__star"></i>
            <i class="fa fa-star gray__star"></i>
        </Fragment>
    }
    if (imdb <= 10) {
        return <Fragment>
            <i class="fa fa-star yel__star"></i>
            <i class="fa fa-star yel__star"></i>
            <i class="fa fa-star yel__star"></i>
            <i class="fa fa-star yel__star"></i>
            <i class="fa fa-star yel__star"></i>
        </Fragment>
    }
}
