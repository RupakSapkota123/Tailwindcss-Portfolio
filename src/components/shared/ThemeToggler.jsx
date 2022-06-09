import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { setTheme } from "../../redux/actions/settingActions";

const Input = styled.input.attrs({
  type: "checkbox",
  className: "hidden",
})``;

const ThemeToggler = () => {
  const { theme } = useSelector((state) => state.settings);

  console.log("theme", theme);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const onThemeChange = (e) => {
    if (e.target.checked) {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
  };

  return (
    <>
      <Label
        title={theme === "dark" ? "Toggle Light Theme" : "Toggle Dark Theme"}
      >
        <Input
          checked={theme === "dark"}
          id="theme"
          className=""
          name="theme-switch"
          onChange={onThemeChange}
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="5"
            style={{ fill: `${theme === "dark" ? "#2BC3CC" : "#1b1925"}` }}
          />
          <rect
            x="1"
            y="10.7778"
            width="4.88889"
            height="2.44445"
            rx="1"
            style={{ fill: `${theme === "dark" ? "#2BC3CC" : "#1b1925"}` }}
          />
          <rect
            x="18.1111"
            y="10.7778"
            width="4.88889"
            height="2.44445"
            rx="1"
            style={{ fill: `${theme === "dark" ? "#2BC3CC" : "#1b1925"}` }}
          />
          <rect
            x="3.35757"
            y="18.9139"
            width="4.88889"
            height="2.44445"
            rx="1"
            transform="rotate(-45 3.35757 18.9139)"
            style={{ fill: `${theme === "dark" ? "#2BC3CC" : "#1b1925"}` }}
          />
          <rect
            x="15.457"
            y="6.81454"
            width="4.88889"
            height="2.44445"
            rx="1"
            transform="rotate(-45 15.457 6.81454)"
            style={{ fill: `${theme === "dark" ? "#2BC3CC" : "#1b1925"}` }}
          />
          <rect
            x="3.35758"
            y="5.08608"
            width="2.44445"
            height="4.88889"
            rx="1"
            transform="rotate(-45 3.35758 5.08608)"
            style={{ fill: `${theme === "dark" ? "#2BC3CC" : "#1b1925"}` }}
          />
          <rect
            x="15.457"
            y="17.1855"
            width="2.44445"
            height="4.88889"
            rx="1"
            transform="rotate(-45 15.457 17.1855)"
            style={{ fill: `${theme === "dark" ? "#2BC3CC" : "#1b1925"}` }}
          />
          <rect
            x="10.7778"
            y="1"
            width="2.44445"
            height="4.88889"
            rx="1"
            style={{ fill: `${theme === "dark" ? "#2BC3CC" : "#1b1925"}` }}
          />
          <rect
            x="10.7778"
            y="18.1111"
            width="2.44445"
            height="4.88889"
            rx="1"
            style={{ fill: `${theme === "dark" ? "#2BC3CC" : "#1b1925"}` }}
          />
        </svg>
      </Label>
    </>
  );
};

const Label = styled.label.attrs({
  className: `w-9 h-9 p-2 flex items-center justify-center rounded-full border border-gray-200 dark:border-primary
   hover:bg-indigo-100 dark:hover:bg-indigo-900 dark:border-gray-800 cursor-pointer`,
})``;

export default ThemeToggler;
