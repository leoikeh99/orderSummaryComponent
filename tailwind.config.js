module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rhd: ["Red Hat Display"],
      },
      screens: {
        res: "488px",
        xxs: "320px",
      },
      colors: {
        primary: "#382AE1",
        primaryHover: "#766CF1",
        text1: "#1F2E55",
        text2: "#717FA6",
        mainBg: "#E0E8FF",
        bg1: "#FFF",
        bg2: "#F7F9FF",
      },
      width: {
        card: "450px",
      },
      boxShadow: {
        btn: "0px 20px 20px rgba(56, 42, 225, 0.190291);",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
