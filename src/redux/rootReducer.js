import { combineReducers } from "redux"
import authReducer from "./auth/authReducer";
import boardReducer from "./board/boardReducer";
import appReducer from "./app/appReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    board: boardReducer,
    app: appReducer,
})

export default rootReducer