import { PropsWithChildren, useState } from "react"
import { Files, PlaygroundContext } from "./PlaygroundContext"
import { initFiles } from "../Playground/data"

export const PlaygroundProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [files, setFiles] = useState<Files>(initFiles)
  const [selectedFileName, setSelectedFileName] = useState('App.tsx')
  
  return (
    <PlaygroundContext.Provider
      value={{
        files,
        selectedFileName,
        setSelectedFileName
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  )
}
