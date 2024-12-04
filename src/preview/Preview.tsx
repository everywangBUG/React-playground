import { useContext, useEffect, useState } from "react"
import { PlaygroundContext } from "../context/PlaygroundContext"
import { compile } from './compiler'
import iframeHtml from './iframe.html?raw'
import { IMPORT_MAP_FILE_NAME } from "../Playground/data"

export const Preview: React.FC = () => {
  const {files} = useContext(PlaygroundContext)

  const [compiledCode, setCompiledCode] = useState('')

  useEffect(() => {
    const res = compile(files)
    setCompiledCode(res)
  }, [files])

  const getIframeUrl = () => {
    let res = iframeHtml.replace(
      '<script type="importmap"></script>',
      `<script type="importmap">${files[IMPORT_MAP_FILE_NAME].value}</script>`
    ).replace(
      '<script type="module" id="appSrc"></script>',
      `<script type="module" id="appSrc">\n${compiledCode}\n</script>`
    )
    return URL.createObjectURL(new Blob([res], {type: 'text/html'}))
  }

  const [iframeUrl, setIframeUrl] = useState(getIframeUrl())

  useEffect(() => {
    setIframeUrl(getIframeUrl())
  }, [files[IMPORT_MAP_FILE_NAME].value, compiledCode])
  
  return (
    <div style={{height: '100%'}}>
      {/* <Editor file={{
        name: 'dist.js',
        value: compiledCode,
        language: 'javascript'
      }}/> */}
      <iframe
        src={iframeUrl}
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
      />
    </div>
  )
}
