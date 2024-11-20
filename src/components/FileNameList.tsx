import { useContext } from "react";
import { PlaygroundContext } from "../context/PlaygroundContext";
import "./FileNameList.scss";
import c from "classnames";

export const FileNameList: React.FC = () => {
  const { files, selectedFileName, setSelectedFileName } = useContext(PlaygroundContext)

  
  return (
    <div className="fileName_list">
      {
        Object.keys(files).map((fileName) => (
          <div
            key={fileName}
            className="fileName_item"
            onClick={() => setSelectedFileName(fileName)}
            
          >
            {fileName}
          </div>)
        )
      }
    </div>
  );
};
