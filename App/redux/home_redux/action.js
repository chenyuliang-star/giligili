import axios from 'axios';
import { get_carousel_data } from "./actionType";


export function getCarouselData () {
    return (dispatch, getState) => {
        axios.get("http://localhost:9000/home/api/getCarouselData").then((data) => {
            dispatch({
                type: get_carousel_data,
                data: data.data
            })
        }).catch((err) =>{

        })
    }
}