import { useContext, useEffect, useState } from "react"
import { PlaygroundContext } from "../../context/PlaygroundContext"
import "./FileNameList.scss"
import c from "classnames"
import { FileNameItem } from "./FileNameItem"
import { APP_COMPONENT_FILE_NAME, ENTRY_FILE_NAME, IMPORT_MAP_FILE_NAME } from "../../Playground/data"

export const FileNameList: React.FC = () => {
  const { files, selectedFileName, setSelectedFileName, addFile, updateFileName, removeFile } = useContext(PlaygroundContext)

  const [tabs, setTabs] = useState([""])
  const [creating, setCreating] = useState(false)

  useEffect(() => {
    setTabs(Object.keys(files))
  }, [files])
  
  const handleEditComplete = (name: string, preName: string) => {
    updateFileName(preName, name)
    setSelectedFileName(name)
  }

  const addTab = () => {
    const newFileName = "Comp" + Math.random().toString().slice(2, 6) + ".tsx"
    addFile(newFileName)
    setSelectedFileName(newFileName)
    setCreating(true)
  }

  const handleOnRemove = (fileName: string) => {
    removeFile(fileName)
    setSelectedFileName(ENTRY_FILE_NAME)
  }

  const readonlyFileNames = [ENTRY_FILE_NAME, IMPORT_MAP_FILE_NAME, APP_COMPONENT_FILE_NAME]

  return (
    <div className="fileName_list">
      {
        tabs.map((fileName, index, arr) => (
          <div
            key={index}
            onClick={() => setSelectedFileName(fileName)}
            className = {c({
              selected: selectedFileName === fileName
            }, "fileName_item"
            )}
          >
            <FileNameItem
              onClick={() => setSelectedFileName(fileName)}
              value={fileName}
              readonly={readonlyFileNames.includes(fileName)}
              onEditComplete={(name: string) => handleEditComplete(name, fileName)}
              creating={creating && index === arr.length - 1 }
              onRemove={() => {
                handleOnRemove(fileName)
              }}
            />
          </div>
        ))
      }
      <span className={c("fileName_item", "add")} onClick={addTab}>+</span>
    </div>
  )
}
