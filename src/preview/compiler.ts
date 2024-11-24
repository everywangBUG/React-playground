import { transform } from '@babel/standalone'
import { Files } from '../context/PlaygroundContext'
import { ENTRY_FILE_NAME } from '../Playground/data'

export const babelTransform = (filename: string, code: string, files: Files) => {
  let res = ''
  try {
    res = transform(code, {
      filename,
      presets: ['react', 'typescript'],
      plugins: [],
      retainLines: true
    }).code!
  } catch (e) {
    console.error(e)
  }
  return res
}

export const compile = (files: Files) => {
  const main = files[ENTRY_FILE_NAME]
  return babelTransform(ENTRY_FILE_NAME, main.value, files)
}