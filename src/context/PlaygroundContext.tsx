import { createContext } from 'react';

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
  setSelectedFileName: (fileName: string) => void
  addFile: (fileName: string, language: string) => void
  setFiles: (files: Files) => void
}

export const PlaygroundContext = createContext<PlaygroundContext>({
  selectedFileName: 'main.tsx',
} as PlaygroundContext);