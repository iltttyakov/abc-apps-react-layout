import appActionTypes from "./appActionTypes";


const initialState = {
    table: []
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {

        /** TABLE **/
        case appActionTypes.table.start:
            return {...state}

        case appActionTypes.table.success:
            return {...state, table: action.payload.res.data}

        case appActionTypes.table.error:
            return {...state}

        case appActionTypes.table.finish:
            return {...state}
        /** END TABLE **/

        default:
            return state

    }
}