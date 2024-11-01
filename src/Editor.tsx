import MonacoEditor from '@monaco-editor/react'

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

  return (
    <MonacoEditor 
      height='100%'
      path={'index.tsx'}
      language={'typescript'}
      value={code}
    />
  )
}


