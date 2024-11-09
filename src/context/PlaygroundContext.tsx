import { createContext } from "react";

export interface File {
  name: string
  value: string
  language: string
}

export interface Files {
  [key: string]: File
}

export interface PlaygroundContext {
  files: Files
  selectedFileName: string
}

export const PlaygroundContext = createContext<PlaygroundContext>({
  selectedFileName: 'App.tsx',
} as PlaygroundContext)