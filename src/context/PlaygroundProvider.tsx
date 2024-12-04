import { PropsWithChildren, useState } from "react"
import { Files, PlaygroundContext } from "./PlaygroundContext"
import { initFiles } from "../Playground/data"
import { fileNameToLanguage } from "../utils/fileNameToLanguage";

export const PlaygroundProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [files, setFiles] = useState<Files>(initFiles)
  const [selectedFileName, setSelectedFileName] = useState('App.tsx')

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

  const updateFileName = (preFileName: string, fileName: string) => {
    console.log(preFileName, fileName, 'nameOrPre888')
    if (!files[preFileName] || fileName === undefined || fileName === null) return
    const { [preFileName]: value, ...rest } = files
    const newFile = {
      [fileName]: {
        ...value,
        language: fileNameToLanguage(fileName),
        name: fileName,
      },
    }
    setFiles({
      ...rest,
      ...newFile,
    })
  }
  
  return (
    <PlaygroundContext.Provider
      value={{
        files,
        selectedFileName,
        setSelectedFileName,
        updateFileName,
        addFile, 
        setFiles
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  );
};
