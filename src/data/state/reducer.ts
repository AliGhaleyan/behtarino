import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { productReducer } from "./product/reducer";
import { AppState } from "./store";

const initialState: AppState = { server: undefined };

export const serverReducer = combineReducers({
    product: productReducer,
});

export const rootReducer = (state: AppState = initialState, action: any) => {
    if (action.type == HYDRATE)
        return { ...state, ...action.payload };
        
    return {
        ...state, 
        server: serverReducer(state.server, action),
    };
};