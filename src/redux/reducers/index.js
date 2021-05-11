import { combineReducers } from "redux"
import blogs from "./blogs.reducer"


const rootReducer = combineReducers({ blogs })

export default rootReducer