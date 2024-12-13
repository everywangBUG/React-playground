import { Allotment } from "allotment"
import "allotment/dist/style.css"
import { Header } from "../components/Header"
import { Preview } from "../preview/Preview"
import { CodeEditor } from "../components/CodeEditor"
import "./ReactPlayground.scss"
import { useContext } from "react"
import { PlaygroundContext } from "../context/PlaygroundContext"

import "./index.css"

export const ReactPlayground: React.FC = () => {
  const { theme, setTheme } = useContext(PlaygroundContext)
  
  return (
    <div style={{height: "100vh"}} className={theme}>
      <Header />
      <Allotment defaultSizes={[100, 100]}>
        <Allotment.Pane minSize={500}>
          <CodeEditor />
        </Allotment.Pane>
        <Allotment.Pane minSize={0}>
          <Preview />
        </Allotment.Pane>
      </Allotment>
    </div>
  )
}
