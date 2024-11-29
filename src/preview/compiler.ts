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

export const getModuleFile = (files: Files, modulePath: string) => {
  let moduleName = modulePath.split('/').pop() || ''
  if (!moduleName.includes('.')) {
     const realModuleName = Object.keys(files).filter(item => {
       return item.endsWith('.tsx')
         || item.endsWith('.ts')
         || item.endsWith('.jsx')
         || item.endsWith('.js')
     }).find(item => {
        return item.split('.').includes(moduleName)
     })
     if (realModuleName) {
      moduleName = realModuleName
     }
     return files[moduleName]
  }
}

export const compile = (files: Files) => {
  const main = files[ENTRY_FILE_NAME]
  return babelTransform(ENTRY_FILE_NAME, main.value, files)
}

export const customResolver = (files: Files) => {
  return {
    visitor: {
      ImportDeclaration(path) {
        // path.node.source.value = files[path.node.source.value].value
        path.node.source.value = '123456'
      }
    }
  }
}

const josnToJs = (file: File) => {

}