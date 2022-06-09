import { useSelector } from "react-redux";

const withTheme = (Component) => {
  return (props) => {
    const theme = useSelector((state) => state.settings.theme);
    return <Component {...props} theme={theme} />;
  };
};

export default withTheme;
