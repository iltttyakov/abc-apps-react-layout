import domainActionTypes from "./domainActionTypes";
import inArray from "../../helpers/inArray";


const initialState = {
    table: [],
    tableFilteredCount: null,
    tableIsLoading: true,
    tableForcedUpdate: false,

    modalIsOpen: false,

    active: null,
    activeIsLoading: false,

    editInProcess: false,

    accs: [],
    accsIsLoading: true,
}


const checkedDomain = (state, failed) => {
    const newTable = state.table
        .sort((a, b) => {
            const aFailed = inArray(failed, parseInt(a.id))
            const bFailed = inArray(failed, parseInt(b.id))

            if (aFailed && bFailed) return 0
            else if (aFailed) return -1
            else return 1
        })
        .map(item => {
            item['failed'] = inArray(failed, parseInt(item.id))
            return item
        })

    return {...state, table: newTable}
}


export default function domainReducer(state = initialState, action) {
    switch (action.type) {

        /** TABLE **/
        case domainActionTypes.table.start:
            return {
                ...state,
                tableIsLoading: true
            }
        case domainActionTypes.table.success:
            return {
                ...state,
                table: action.payload.data,
                tableFilteredCount: action.payload.recordsFiltered,
            }
        case domainActionTypes.table.finish:
            return {
                ...state,
                tableIsLoading: false,
                tableForcedUpdate: false
            }
        /** END TABLE **/

        /** CHECK **/
        case domainActionTypes.check.start:
            return {
                ...state,
                tableIsLoading: true
            }
        case domainActionTypes.check.success:
            return checkedDomain(state, action.payload.failed)
        case domainActionTypes.check.finish:
            return {
                ...state,
                tableIsLoading: false
            }
        /** END CHECK **/


        /** GET **/
        case domainActionTypes.get.start:
            return {
                ...state,
                active: null,
                activeIsLoading: true
            }
        case domainActionTypes.get.success:
            return {
                ...state,
                active: action.payload
            }
        case domainActionTypes.get.finish:
            return {
                ...state,
                activeIsLoading: false
            }
        /** END GET **/


        /** MODAL **/
        case domainActionTypes.modal.open:
            return {
                ...state,
                modalIsOpen: true
            }
        case domainActionTypes.modal.close:
            return {
                ...state,
                modalIsOpen: false,
                active: null
            }
        /** END MODAL **/


        /** EDIT **/
        case domainActionTypes.edit.start:
            return {
                ...state,
                editInProcess: true,
            }
        case domainActionTypes.edit.success:
            return {
                ...state,
                active: null,
                modalIsOpen: false,
                tableForcedUpdate: true,
            }
        case domainActionTypes.edit.finish:
            return {
                ...state,
                editInProcess: false
            }
        /** END EDIT **/


        /** GET ACCS **/
        case domainActionTypes.getAccs.start:
            return {
                ...state,
                accsIsLoading: true
            }
        case domainActionTypes.getAccs.success:
            return {
                ...state,
                accs: action.payload
            }
        case domainActionTypes.getAccs.finish:
            return {
                ...state,
                accsIsLoading: false
            }
        /** END GET ACCS **/


        /** DEL **/
        case domainActionTypes.del.start:
            return {
                ...state,
                editInProcess: true
            }
        case domainActionTypes.del.success:
            return {
                ...state,
                active: null,
                modalIsOpen: false,
                tableForcedUpdate: true,
            }
        case domainActionTypes.del.finish:
            return {
                ...state,
                editInProcess: false
            }
        /** END DEL **/


        default:
            return state
    }
}