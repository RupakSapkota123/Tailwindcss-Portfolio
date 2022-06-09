module.exports = {
  content: [
    "./src/components/**/*.{js,jsx}",
    "./src/styles/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#2BC3CC",
      secondary: "#36AAB1",
      red: "#d14836",
      bluish: "#2779a7",
      blackish: "rgba(49, 49, 49, 1)",
      white: "#ffffff",
      "indigo-950": "#1b1925",
      "indigo-1000": "#100f17",
      "indigo-1100": "#08070f",
    },
    extend: {
      screens: {
        sm: "480px",
      },
      spacing: {
        70: "4.375em",
      },
      padding: {
        160: "10em",
        40: "2.5em",
      },
      height: {
        "60px": "60px",
        "20rem": "20rem",
        "25rem": "25rem",
      },
      maxWidth: {
        "16rem": "16rem",
      },
      minWidth: {
        "15rem": "15rem",
      },
      maxHeight: {
        "90vh": "90vh",
        "80vh": "80vh",
        "70vh": "70vh",
        "85%": "85%",
      },
      minHeight: {
        "10rem": "10rem",
        "18rem": "18rem",
        "24rem": "24rem",
        "80%": "80%",
      },
      width: {
        "20rem": "20rem",
        "30rem": "30rem",
        "40rem": "40rem",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    variants: {
      cursor: ["hover", "focus"],
      backgroundColor: ["hover", "focus", "important", "responsive", "dark"],
      backgroundSize: ["important", "responsive"],
      backgroundRepeat: ["important", "responsive"],
      backgroundPosition: ["important", "responsive"],
      margin: ["first", "responsive"],
      display: ["responsive"],
      padding: ["important", "responsive"],
      borderRadius: ["important", "responsive"],
      textColor: ["important", "group-hover", "hover", "dark"],
      borderColor: ["important", "focus", "hover", "dark"],
      outlineOffset: ["hover"],
      boxShadow: ["responsive", "dark"],
      border: ["hover", "responsive"],
      extend: {
        cursor: ["disabled"],
        opacity: ["disabled", "readonly"],
      },
    },
  },
  plugins: [],
};
