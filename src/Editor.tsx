import MonacoEditor, { OnMount } from '@monaco-editor/react'

export const Editor: React.FC = () => {
  const code = `
    export default function App() {
      return (
        <div>
          Hello World
          <p>hello world</p>
        </div>
      )
    }
  `

  const handleEditorMount: OnMount = (editor, monaco) => {
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      allowNonTsExtensions: true
    })
  }

  return (
    <MonacoEditor 
      height='100%'
      path={'index.tsx'}
      language={'typescript'}
      onMount={handleEditorMount}
      value={code}
    />
  )
}


