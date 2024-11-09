import { PropsWithChildren, useState } from "react"
import { Files, PlaygroundContext } from "./PlaygroundContext"

export const PlaygroundProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [files, setFiles] = useState<Files>({})
  const [selectedFileName, setSelectedFileName] = useState('App.tsx')
  
  return (
    <PlaygroundContext.Provider
      value={{
        files,
        selectedFileName
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  )
}
