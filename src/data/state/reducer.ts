import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { productReducer, ProductState } from "./product/reducer";
import { AppState } from "./store";

const initialState: AppState = {product: undefined};

export const serverReducer = combineReducers({
    product: productReducer,
});

export const rootReducer = (state: AppState = initialState, action: any): AppState => {
    if (action.type == HYDRATE)
        return { ...state, ...action.payload };
        
    return {
        ...state,
        ...serverReducer(state, action)
    };
};