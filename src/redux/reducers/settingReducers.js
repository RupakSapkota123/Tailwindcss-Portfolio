import { SET_THEME } from "../../constants/constants";
import { setTheme } from "../actions/settingActions";

const initState = {
  theme: "light",
  //*.... More setting
};

const settingReducers = (state = initState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};

export default settingReducers;
