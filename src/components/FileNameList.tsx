import { useContext } from "react";
import { PlaygroundContext } from "../context/PlaygroundContext";
import "./FileNameList.scss";
import c from "classnames";

export const FileNameList: React.FC = () => {
  const { files, selectedFileName, setSelectedFileName, addFile } = useContext(PlaygroundContext)

  
  return (
    <div className="fileName_list">
      {
        Object.keys(files).map((fileName) => (
          <div
            key={fileName}
            onClick={() => setSelectedFileName(fileName)}
            className = {c({
              selected: selectedFileName === fileName
              }, "fileName_item"
            )}
          >
            {fileName}
          </div>)
        )
      }
      <span className={c("fileName_item", "add")} onClick={() => addFile("Untitled", "javascript")}>+</span>
    </div>
  );
};
