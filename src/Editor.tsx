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
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyJ, () => {
      editor.getAction('editor.action.formatDocument')?.run()
  }); 

    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      esModuleInterop: true, // 设置 esModuleInterop 会在编译的时候自动加上 default 属性。
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


