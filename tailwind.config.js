/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pattern-stripes": "url('/src/assets/images/pattern-stripes.svg')",
        "pattern-side-nav": "url('/src/assets/images/pattern-side-nav.png')",
        "custom-image":
          "url('https://media.npr.org/assets/img/2022/11/04/gettyimages-1187652065_slide-fef17c844ea0fc3fb5341d6c86636bfc85304671-s1100-c50.jpg')",
      },
      colors: {
        clrPrimary: "#023e4f",
        clrSecondary: "#01789a",
        clrDark: "#2a2e3f",
        clrText: "#828282",
        clrGray: "#858484",
        clrBg: "#f6fbfd",
        clrBorder: "#dfe1e6",
        clrCreateBG: "#F5F5F7",
        clrText2: "#ADABAB",
        clrBGEvent1: "#edfff5",
        clrBGEvent2: "#c9e9fd",
        clrBGEvent3: "#fff0dc",
        clrTEXTEvent1: "#0c8720",
        clrTEXTEvent2: "#023e4f",
        clrTEXTEvent3: "#f08800",
        clrText3: "#857F7F",
        clrBGTrust: "#ffffff8e",
        clrBGNav: "#023e4f70",
      },
    },
  },
  plugins: [],
};
