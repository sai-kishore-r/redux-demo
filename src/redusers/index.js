import counterReducer from "./counter";
import loggedReduser from "./isLogged";
import { combineReducers } from "redux";
const allRedusers = combineReducers({
    counter : counterReducer,
     isLogged : loggedReduser 
})
export default allRedusers