import { useContext } from "react";
import { PlaygroundContext } from "../context/PlaygroundContext";

export const FileNameList: React.FC = () => {
  const { files, selectedFileName } = useContext(PlaygroundContext)

  
  return (
    <div>
      {
        Object.keys(files).map((fileName) => (
          <div key={fileName}>
          </div>)
        )
      }
    </div>
  )
}
