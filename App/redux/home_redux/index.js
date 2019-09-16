import { get_carousel_data } from "./actionType";
const initState = {
    carouselData: {},
}

export default function (state = initState, action) {
    switch (action.type) {
        case get_carousel_data: {
            return {
                ...state,
                carouselData: action.data
            }
        }
        default: return state;
    }
}