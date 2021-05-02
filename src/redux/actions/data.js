import ActionTypes from "../types"

/**
 * Get data to render test data
 * @returns GET_DATA action
 */
export const getData = () => {
    return dispatch => {
        fetch(`https://api.spacexdata.com/v3/launches`)
            .then(res => {
                dispatch({
                    type: ActionTypes.GET_DATA,
                    payload: res
                });
            })
            .catch(err => {
                throw new Error('Invalid Request');
            });
    };
}