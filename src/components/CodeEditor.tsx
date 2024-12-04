import { useContext } from "react"
import { Editor } from "./Editor"
import { FileNameList } from "./fileNameList/FileNameList"
import { PlaygroundContext } from "../context/PlaygroundContext"
import { initFiles } from "../Playground/data"
import { debounce } from "lodash-es"

export const CodeEditor: React.FC = () => {
  const { files, setFiles, selectedFileName } = useContext(PlaygroundContext)
  
  const file = initFiles[selectedFileName]

  const onEditChange = debounce((value?: string) => {
    files[file.name].value = value!
    setFiles({...files})
  }, 500)

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <FileNameList />
      <Editor file={file} onChange={onEditChange}/>
    </div>
  );
};
