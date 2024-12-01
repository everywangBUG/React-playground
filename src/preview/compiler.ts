import { transform } from '@babel/standalone'
import { Files, File } from '../context/PlaygroundContext'
import { ENTRY_FILE_NAME } from '../Playground/data'
import { PluginObj } from '@babel/core'

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


/**
 * 自定义bable解析器
 * @param files Files文件
 * @returns PluginObj
 */
export const customResolver = (files: Files): PluginObj => {
  return {
    visitor: {
      ImportDeclaration(path) {
        const modulePath = path.node.source.value
        console.log(modulePath, '222')
        if (modulePath.startsWith('.')) {
          const file = getModuleFile(files, modulePath)
          if (!file) {
            return
          }

          if (file.name.endsWith('.css')) {
            path.node.source.value = cssToJs(file)
          } else if (file.name.endsWith('.json')) {
            path.node.source.value = jsonToJs(file)
          } else {
            path.node.source.value = URL.createObjectURL(
              new Blob([babelTransform(file.name, file.value, files)], {
                type: 'application/javascript'
              })
            )
          }
        }
      }
    }
  }
}

/**
 * 转换json文件为js文件
 * @param file json文件
 * @returns blobUrl
 */
const jsonToJs = (file: File) => {
  const js = `export default ${file.value}`
  return URL.createObjectURL(new Blob([js], { type: 'application/javascript' }))
}

/**
 * css to js 转换css为js
 * @param file css文件
 * @returns blobUrl
 */
const cssToJs = (file: File) => {
  const randomId = new Date().getTime()
  const js = `
    (() => {
      const styleSheet = document.createElement('style')
      styleSheet.setAttribute('id', 'style_${randomId}_${file.name}')
      document.head.appendChild(styleSheet)

      const styles = document.createTextNode($('${file.value}')
      styleSheet.innerText = ''
      styleSheet.appendChild(styles)
    })())
  `
  return URL.createObjectURL(new Blob([js], { type: 'application/javascript' }))
}

