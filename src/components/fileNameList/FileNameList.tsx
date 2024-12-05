import { useContext, useEffect, useRef, useState } from "react";
import { PlaygroundContext } from "../../context/PlaygroundContext";
import "./FileNameList.scss";
import c from "classnames";
import { FileNameItem } from "./FileNameItem";

export const FileNameList: React.FC = () => {
  const { files, selectedFileName, setSelectedFileName, addFile, updateFileName } = useContext(PlaygroundContext)

  const [tabs, setTabs] = useState([''])
  const [creating, setCreating] = useState(false)

  useEffect(() => {
    setTabs(Object.keys(files))
  }, [files])
  
  const handleEditComplete = (name: string, preName: string) => {
    updateFileName(preName, name)
    setSelectedFileName(name)
  }

  const addTab = () => {
    const newFileName = 'Comp' + Math.random().toString().slice(2, 6) + '.tsx'
    addFile(newFileName)
    setSelectedFileName(newFileName)
    setCreating(true)
  }

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
              onEditComplete={(name: string) => handleEditComplete(name, fileName)}
              creating={creating && index === arr.length - 1 }
            />
          </div>
        ))
      }
      <span className={c("fileName_item", "add")} onClick={addTab}>+</span>
    </div>
  );
};
