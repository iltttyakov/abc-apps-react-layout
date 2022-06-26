import boardActionTypes from "./boardActionTypes";


const initialState = {
    listFetchInProgress: true,
    list: [],

    editAccNoteInProcess: false,
}

export default function boardReducer(state = initialState, action) {

    switch (action.type) {

        /** GET **/
        case boardActionTypes.get.start:
            return {
                ...state,
                listFetchInProgress: true
            }
        case boardActionTypes.get.success:
            return {
                ...state,
                list: action.payload.res
            }
        case boardActionTypes.get.finish:
            return {
                ...state,
                listFetchInProgress: false
            }
        /** END GET **/


        /** HIDE **/
        case boardActionTypes.hide.start:
            return {...state}

        case boardActionTypes.hide.success:
            return {...state}

        case boardActionTypes.hide.finish:
            return {...state}
        /** END HIDE **/


        /** EDIT ACC NOTE **/
        case boardActionTypes.editAccNote.start:
            return {...state, editAccNoteInProcess: true}

        case boardActionTypes.editAccNote.success:
            return {...state}

        case boardActionTypes.editAccNote.finish:
            return {...state, editAccNoteInProcess: false}
        /** END EDIT ACC NOTE **/


        default:
            return state
    }

}
