module.exports = {
    content: [
      './src/**/*.{html,js,ts,jsx,tsx}', // or add your specific path here
      './pages/**/*.{html,js,ts,jsx,tsx}', // Make sure to include pages folder if applicable
    ],
    theme: {
      extend: {
        colors: {
          primary: "hsl(210, 75%, 57%)",  // Custom primary color
          "primary-foreground": "#fff",  // Custom text color for primary
          secondary: "#facc15",  // Custom secondary color
          // Add other colors as needed
        },
      },
    },
    plugins: [],
  }
  