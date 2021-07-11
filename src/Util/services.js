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
export const handleSttGhe = (stt) => {
    if(stt <= 16 ){
        let soGhe = `A${stt}`
        return soGhe.replace('A0','A')
    }
    else if(stt > 16 && stt <= 32){
        return `B${stt - 16}`
    }
    else if(stt > 32 && stt <= 48){
        return `C${stt - 32}`
    }
    else if(stt > 48 && stt <= 64){
        return `D${stt - 48}`
    }
    else if(stt > 64 && stt <= 80){
        return `E${stt - 64}`
    }
    else if(stt > 80 && stt <= 96){
        return `F${stt - 80}`
    }
    else if(stt > 96 && stt <= 112){
        return `G${stt - 96}`
    }
    else if(stt > 112 && stt <= 128){
        return `H${stt - 112}`
    }
    else if(stt > 128 && stt <= 144){
        return `I${stt - 128}`
    }
    else if(stt > 144 && stt <= 160){
        return `J${stt - 144}`
    }
}