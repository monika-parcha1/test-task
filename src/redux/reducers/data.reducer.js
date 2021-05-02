import ActionTypes from "../types";

const initialState = {
    data: [
        {
            id: 1,
            title: "Monika"
        }
    ]
};

/**
 * Data reducers
 * @param {*} state 
 * @param {*} param1 
 * @returns 
 */
export const dataReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_DATA:
            return { ...state, data: payload };
        default:
            return { ...state, data: payload };
    }

}