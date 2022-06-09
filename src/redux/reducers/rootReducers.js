import { combineReducers } from "redux";
import settingReducers from "./settingReducers";

const rootReducers = combineReducers({
  settings: settingReducers,
});

export default rootReducers;
