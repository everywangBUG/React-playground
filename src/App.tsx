import { ReactPlayground } from "./playground/ReactPlayground"
import { PlaygroundProvider } from "./context/PlaygroundProvider"
import "./App.scss"

export const App: React.FC = () => {
  return (
    <PlaygroundProvider>
      <ReactPlayground />
    </PlaygroundProvider>
  )
}
