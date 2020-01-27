import { combineReducers } from "redux";
import visibility from "./visibility";
import voices from "./voices";

export default combineReducers({
    visibility,
    voices
});
