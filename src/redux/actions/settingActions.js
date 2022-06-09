import { SET_THEME } from "../../constants/constants";

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});
