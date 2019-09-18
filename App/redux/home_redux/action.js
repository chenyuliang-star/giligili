import axios from 'axios';
import { get_carousel_data, fetch_error, get_card_data, get_feed_data } from "./actionType";


export function getCarouselData () {
    return (dispatch, getState) => {
        axios.get("http://localhost:9000/home/api/getCarouselData").then((data) => {
            dispatch({
                type: get_carousel_data,
                data: data.data
            })
        }).catch((err) =>{
            dispatch({
                type: fetch_error,
                data: err
            })
        })
    }
}

export function getCardData () {
    return (dispatch, getState) => {
        axios.get("http://localhost:9000/home/api/getCardData").then((data) => {
            dispatch({
                type: get_card_data,
                data: data.data
            })
        }).catch((err) =>{
            dispatch({
                type: fetch_error,
                data: err
            })
        })
    }
}

export function getFeedData () {
    return (dispatch, getState) => {
        axios.get("http://localhost:9000/home/api/getFeedData").then((data) => {
            dispatch({
                type: get_feed_data,
                data: data.data
            })
        }).catch((err) =>{
            dispatch({
                type: fetch_error,
                data: err
            })
        })
    }
}