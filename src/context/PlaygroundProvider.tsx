import { PropsWithChildren, useEffect, useState } from "react"
import { Files, PlaygroundContext, Theme } from "./PlaygroundContext"
import { initFiles } from "../playground/data"
import { fileNameToLanguage } from "../utils/fileNameToLanguage"
import { compress, uncompress } from "../utils/utils"

const getFileFromUrl = () => {
  let files: Files | undefined
  try {
    const hash = uncompress(window.location.hash.slice(1))
    files = JSON.parse(hash)
  } catch (error) {
    console.log(error)
  }
  return files
}

export const PlaygroundProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props
  const [files, setFiles] = useState<Files>(getFileFromUrl() || initFiles)
  const [selectedFileName, setSelectedFileName] = useState("App.tsx")
  const [theme, setTheme] = useState<Theme>("dark")


  const addFile = (fileName: string) => {
    setFiles({
      ...files,
      [fileName]: {
        name: fileName,
        value: "",
        language: fileNameToLanguage(fileName)
      }
    })
  }

  const updateFileName = (preFileName: string, newFileName: string) => {
    if (!files[preFileName] || !newFileName) return
    const { [preFileName]: value, ...rest } = files
    const newFile = {
      [newFileName]: {
        ...value,
        language: fileNameToLanguage(newFileName),
        name: newFileName,
      },
    }
    setFiles({
      ...rest,
      ...newFile,
    })
  }

  const removeFile = (fileName: string) => {
    delete files[fileName]
    setFiles({...files})
  }

  useEffect(() => {
    const hash = compress(JSON.stringify(files))
    window.location.hash = hash
  }, [files])

  return (
    <PlaygroundContext.Provider
      value={{
        theme,
        setTheme,
        files,
        selectedFileName,
        setSelectedFileName,
        updateFileName,
        addFile, 
        setFiles,
        removeFile
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  )
}
