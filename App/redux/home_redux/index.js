import { get_carousel_data, get_card_data, get_feed_data } from "./actionType";
const initState = {
    carouselData: {},
    cardData: {}, 
    feedData: {},
}

export default function (state = initState, action) {
    switch (action.type) {
        case get_carousel_data: {
            return {
                ...state,
                carouselData: action.data
            }
        }
        case get_card_data: {
            return {
                ...state,
                cardData: action.data
            }
        }
        case get_feed_data: {
            return {
                ...state,
                feedData: action.data
            }
        }
        default: return state;
    }
}