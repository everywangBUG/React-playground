import { Files } from "../context/PlaygroundContext";



export const initFiles: Files = {
  ['main.tsx']: {
    name: 'main.tsx',
    value: 'main',
    language: 'typescriptreact',
  },
  ['App.tsx']: {
    name: 'App.tsx',
    value: App,
    language: 'typescriptreact'
  },
  'App.css': {
    name: 'App.css',
    value: AppCss,
    language: 'css'
  },
  ['import-map.json']: {
    name: 'import-map.json',
    value: importMap,
    language: 'json'
  }
}