import { ThemeId } from "@voidpulse/api";

export const colors: Record<
  ThemeId,
  {
    primary: {
      "100": string;
      "200": string;
      "300": string;
      "400": string;
      "500": string;
      "600": string;
      "700": string;
      "800": string;
      "900": string;
      "1000": string;
    };
    accent: {
      "100": string;
      "200": string;
    };
    flair: {
      "100": string;
    };
    chart: {
      "1": string;
      "2": string;
      "3": string;
      "4": string;
      "5": string;
      "6": string;
      "7": string;
    };
  }
> = {
  [ThemeId.default]: {
    primary: {
      "100": "#f1f1f7",
      "200": "#d1d0db",
      "300": "#b7b5c5",
      "400": "#9c9aae",
      "500": "#7d7b92",
      "600": "#626076",
      "700": "#403e54",
      "800": "#343344",
      "900": "#23222e",
      "1000": "#0d0d13",
    },
    accent: { "100": "#355ce9", "200": "#2c3d95" },
    flair: { "100": "#40e4d8" },
    negative: { "100": "#dc5068" },
    chart: {
      "1": "#dc5068",
      "2": "#ef8c34",
      "3": "#f2bf3c",
      "4": "#17b4a1",
      "5": "#00b2ff",
      "6": "#2b46a9",
      "7": "#8c67f6",
    },
  },
  [ThemeId.mysticalFire]: {
    primary: {
      "100": "#eef1f8",
      "200": "#ccd0dc",
      "300": "#aab0c7",
      "400": "#878fb1",
      "500": "#646e9b",
      "600": "#404e76",
      "700": "#1d2f52",
      "800": "#001a3f",
      "900": "#00092c",
      "1000": "#000016",
    },
    accent: { "100": "#184aff", "200": "#0029bd" },
    flair: { "100": "#40e4d8" },
    negative: { "100": "#dc5068" },
    chart: {
      "1": "#fb9bf9",
      "2": "#ef347c",
      "3": "#f2bf3c",
      "4": "#9cd5ce",
      "5": "#c027b0",
      "6": "#6183ff",
      "7": "#4714d3",
    },
  },
  [ThemeId.infiniteVoid]: {
    primary: {
      "100": "#e4e4f6",
      "200": "#c4c2e0",
      "300": "#a19dbd",
      "400": "#736f97",
      "500": "#4e4a78",
      "600": "#3d3a60",
      "700": "#25223f",
      "800": "#1e1d31",
      "900": "#0c0b14",
      "1000": "#040406",
    },
    accent: { "100": "#4d33e1", "200": "#1c0f65" },
    flair: { "100": "#ff3bd8" },
    negative: { "100": "#ce1433" },
    chart: {
      "1": "#c10f5f",
      "2": "#0077ff",
      "3": "#8a2be2",
      "4": "#00219a",
      "5": "#9966cc",
      "6": "#008080",
      "7": "#8a9af7",
    },
  },
  [ThemeId.deepLava]: {
    primary: {
      "100": "#f7f1f3",
      "200": "#dbd1d6",
      "300": "#c5b7bc",
      "400": "#ae9ca2",
      "500": "#927d87",
      "600": "#6e5e6a",
      "700": "#564550",
      "800": "#3e2e38",
      "900": "#281b20",
      "1000": "#16080a",
    },
    accent: { "100": "#e02b6b", "200": "#b90c48" },
    flair: { "100": "#ffaa00" },
    negative: { "100": "#dc5068" },
    chart: {
      "1": "#ff5733",
      "2": "#48acc0",
      "3": "#870485",
      "4": "#2d3b99",
      "5": "#9b5de5",
      "6": "#ffdd6c",
      "7": "#820b2f",
    },
  },
  [ThemeId.electricOcean]: {
    primary: {
      "100": "#dbdff7",
      "200": "#b7bfff",
      "300": "#8d9bfe",
      "400": "#6879fc",
      "500": "#455bff",
      "600": "#2a43ff",
      "700": "#1421dd",
      "800": "#0d02a3",
      "900": "#070165",
      "1000": "#000028",
    },
    accent: { "100": "#13c8e8", "200": "#0094ae" },
    flair: { "100": "#0044ff" },
    negative: { "100": "#dc5068" },
    chart: {
      "1": "#d0ef34",
      "2": "#ffa81c",
      "3": "#fc387d",
      "4": "#fc38e2",
      "5": "#a600ff",
      "6": "#005476",
      "7": "#3dff9e",
    },
  },
};