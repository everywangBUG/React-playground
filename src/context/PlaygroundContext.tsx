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
  updateFileName: (preFileName: string, fileName: string) => void
  addFile: (fileName: string) => void
  setFiles: (files: Files) => void
  removeFile: (fileName: string) => void
}

export const PlaygroundContext = createContext<PlaygroundContext>({
  selectedFileName: 'main.tsx',
} as PlaygroundContext);