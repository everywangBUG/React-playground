import { useContext, useEffect, useRef, useState } from "react";
import { PlaygroundContext } from "../../context/PlaygroundContext";
import "./FileNameList.scss";
import c from "classnames";
import { FileNameItem } from "./FileNameItem";

export const FileNameList: React.FC = () => {
  const { files, selectedFileName, setSelectedFileName, addFile, updateFileName } = useContext(PlaygroundContext)

  const [tabs, setTabs] = useState([''])

  useEffect(() => {
    setTabs(Object.keys(files))
  }, [files])
  
  const handleEditComplete = (name: string, preName: string) => {
    updateFileName(preName, name)
    setSelectedFileName(name)
  }

  return (
    <div className="fileName_list">
      {
        tabs.map((fileName, index) => (
          <div
            key={index}
            onClick={() => setSelectedFileName(fileName)}
            className = {c({
              selected: selectedFileName === fileName
              }, "fileName_item"
            )}
          >
            <FileNameItem onClick={() => setSelectedFileName(fileName)} value={fileName} onEditComplete={(name: string) => handleEditComplete(name, fileName)} />
          </div>
        ))
      }
      <span className={c("fileName_item", "add")} onClick={() => addFile("Untitled", "javascript")}>+</span>
    </div>
  );
};
