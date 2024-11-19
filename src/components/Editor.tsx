import MonacoEditor, { OnMount } from '@monaco-editor/react';
import { createATA } from '../utils/ata';
import { File } from '../context/PlaygroundContext';

interface EditorProps {
  file: File
}

export const Editor: React.FC<EditorProps> = (props) => {
  const { value, language } = props.file

  const handleEditorMount: OnMount = (editor, monaco) => {    
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyJ, () => {
      editor.getAction('editor.action.formatDocument')?.run();
    });

    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      esModuleInterop: true, // 设置 esModuleInterop 会在编译的时候自动加上 default 属性。
    });

    const ata = createATA((code, path) => {
      monaco.languages.typescript.typescriptDefaults.addExtraLib(code, `file://${path}`);
    });

    editor.onDidChangeModelContent(() => {
      ata(editor.getValue());
    });

    ata(editor.getValue());
  };

  

  return (
    <MonacoEditor 
      height='100%'
      path={'index.tsx'}
      language={language}
      onMount={handleEditorMount}
      value={value}
      options={{
        fontSize: 18, // 设置字体大小
        scrollBeyondLastLine: false, // 关闭代码超出底部
        minimap: { enabled: false }, // 关闭小地图
        scrollbar: { // 横向纵向滚动宽度
          verticalScrollbarSize: 6, // 设置滚动条宽度
          horizontalScrollbarSize: 6 // 设置滚动条高度
        }
      }}
    />
  );
};


