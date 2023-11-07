// color design tokens export

export const tokensDark: ColorPalette = {
  grey: {
    "50": "#f5f9fa",
    "100": "#eaf2f4",
    "200": "#dbe8eb",
    "300": "#a9c9d0",
    "400": "#7bacb5",
    "500": "#5a929d",
    "600": "#477782",
    "700": "#3a606a",
    "800": "#335259",
    "900": "#2e464c",
    "950": "#1f2d32", // manually adjusted
  },
  primary: {
    // blue
    "50": "#f2fbfa",
    "100": "#d5f2ef",
    "200": "#aae5df",
    "300": "#78d0cb",
    "400": "#4cb5b2",
    "500": "#339998",
    "600": "#267b7b",
    "700": "#226263",
    "800": "#1f4e50",
    "900": "#1e4143",
    "950": "#0c2527",
  },
  secondary: {
    // yellow
    50: "#f0f0f0", // manually adjusted
    100: "#fff6e0",
    200: "#ffedc2",
    300: "#ffe3a3",
    400: "#ffda85",
    500: "#ffd166",
    600: "#cca752",
    700: "#997d3d",
    800: "#665429",
    900: "#332a14",
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark: ColorPalette): ColorPalette {
  const reversedTokens: ColorPalette = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj: { [key: number]: string } = {};
    for (let i = 0; i < length; i++) {
      reversedObj[parseInt(keys[i])] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode: "light" | "dark") => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[400],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[600],
            },
            background: {
              default: tokensDark.primary[950],
              alt: tokensDark.primary[900],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[900],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[900],
              light: tokensDark.secondary[100],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[50],
              alt: tokensDark.grey[500],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
