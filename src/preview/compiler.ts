import { transform } from '@babel/standalone'
import { Files } from '../context/PlaygroundContext'
import { ENTRY_FILE_NAME } from '../Playground/data'

export const babelTransform = (filename: string, code: string, files: Files) => {
  let res = ''
  try {
    res = transform(code, {
      filename,
      presets: ['react', 'typescript'],
      plugins: [customResolver(files)],
      retainLines: true
    }).code!
  } catch (e) {
    console.error(e)
  }
  return res
}

export const getModuleFile = (files: Files, modulePath: string) => {
  let moduleName = modulePath.split('./').pop() || ''
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
        const modulePath = path.node.source.value
        if (modulePath.startWith('.')) {
          const file = getModuleFile(files, modulePath)
          if (!file) {
            return
          }

          if (file.name.endsWith('.css')) {
            path.node.source.value = cssToJs(file)
          }
        }
      }
    }
  }
}

const jsonToJs = (file: File) => {
  return jsonToJs(file)
}

const cssToJs = (file: File) => {

}