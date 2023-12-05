import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.unito.it/avvisi/progetto-compiticasa-curare-la-fragilita-educativa-bando-collaborazioni-part-time-studenti-1",
  match: "https://www.unito.it/avvisi/**",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
};
