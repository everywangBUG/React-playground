import { useContext, useEffect, useState } from "react"
import { PlaygroundContext } from "../context/PlaygroundContext"
import { compile } from './compiler'
import { Editor } from "../components/Editor"

export const Preview: React.FC = () => {
  const {files} = useContext(PlaygroundContext)

  const [compiledCode, setCompiledCode] = useState('')

  useEffect(() => {
    const res = compile(files)
    console.log(res, 'compiledCode')
    setCompiledCode(res)
  }, [files])
  
  return (
    <div style={{height: '100%'}}>
      <Editor file={{
        name: 'dist.js',
        value: compiledCode,
        language: 'javascript'
      }}/>
    </div>
  )
}
