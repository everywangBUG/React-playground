import { Files } from "../context/PlaygroundContext"
import App from "../template/App?raw"
import AppCss from "../template/App.css?raw"
import ImportMap from "../template/import-map.json?raw"
import { fileNameToLanguage } from "../utils/fileNameToLanguage"
import Main from "../template/main?raw"


export const APP_COMPONENT_FILE_NAME = "App.tsx"

export const IMPORT_MAP_FILE_NAME = "import-map.json"

export const ENTRY_FILE_NAME = "main.tsx"

export const initFiles: Files = {
  [ENTRY_FILE_NAME]: {
    name: ENTRY_FILE_NAME,
    value: Main,
    language: fileNameToLanguage(ENTRY_FILE_NAME),
  },
  [APP_COMPONENT_FILE_NAME]: {
    name: APP_COMPONENT_FILE_NAME,
    value: App,
    language: fileNameToLanguage(APP_COMPONENT_FILE_NAME),
  },
  "App.css": {
    name: "App.css",
    value: AppCss,
    language: "css"
  },
  [IMPORT_MAP_FILE_NAME]: {
    name: IMPORT_MAP_FILE_NAME,
    value: ImportMap,
    language: fileNameToLanguage(IMPORT_MAP_FILE_NAME),
  }
}