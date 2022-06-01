import boardActionTypes from "./boardActionTypes";


const initialState = {
    listFetchInProgress: true,
    list: []
}

export default function boardReducer(state = initialState, action) {

    switch (action.type) {

        /** GET **/
        case boardActionTypes.get.start:
            return {...state, listFetchInProgress: true}

        case boardActionTypes.get.success:
            return {...state, list: action.payload.res}

        case boardActionTypes.get.error:
            return state

        case boardActionTypes.get.finish:
            return {...state, listFetchInProgress: false}
        /** END GET **/


        /** HIDE **/
        case boardActionTypes.hide.start:
            return {...state}

        case boardActionTypes.hide.success:
            console.log(action.payload)
            return {...state}

        case boardActionTypes.hide.error:
            return {...state}

        case boardActionTypes.hide.finish:
            return {...state}
        /** END HIDE **/


        default:
            return state
    }

}
