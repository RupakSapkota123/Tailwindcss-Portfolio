import { SET_THEME } from "../../constants/constants";


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
