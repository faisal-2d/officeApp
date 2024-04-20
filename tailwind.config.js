module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0b6cdb",
          "secondary": "#7a11bf",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "success" : "#36c769",
          "error" : "#f04366",
          "warning" : "#dbba14",
         },
      },   
    ],
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/aspect-ratio')
  ],
};
