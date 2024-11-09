import { Editor } from './Editor';
import { FileNameList } from './FileNameList';

export const CodeEditor: React.FC = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <FileNameList />
      <Editor />
    </div>
  );
};
