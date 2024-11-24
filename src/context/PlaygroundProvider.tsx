import { PropsWithChildren, useState } from "react"
import { Files, PlaygroundContext } from "./PlaygroundContext"
import { initFiles } from "../Playground/data"

export const PlaygroundProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [files, setFiles] = useState<Files>(initFiles)
  const [selectedFileName, setSelectedFileName] = useState('main.tsx')

  const addFile = (fileName: string, language: string) => {
    setFiles({
      ...files,
      [fileName]: {
        name: fileName,
        value: '',
        language
      }
    })
  }
  
  return (
    <PlaygroundContext.Provider
      value={{
        files,
        selectedFileName,
        setSelectedFileName,
        addFile, 
        setFiles
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  );
};
