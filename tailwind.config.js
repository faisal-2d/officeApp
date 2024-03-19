
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3b82f6",
          secondary: "#463AA1",
          accent: "#ca8a04",
          "base-100": "#FFFFFF",
          info: "#93E6FB",
          success: "#86efac",
          warning: "#fef08a",
          error: "#E58B8B",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/aspect-ratio')
  ],
};
