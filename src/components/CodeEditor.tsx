import { useContext } from "react"
import { Editor } from "./Editor"
import { FileNameList } from "./FileNameList"
import { PlaygroundContext } from "../context/PlaygroundContext"
import { initFiles } from "../Playground/data"

export const CodeEditor: React.FC = () => {
  const { selectedFileName } = useContext(PlaygroundContext)
  
  const file = initFiles[selectedFileName]
  console.log(file, 'file99')
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <FileNameList />
      <Editor file={file}/>
    </div>
  );
};
