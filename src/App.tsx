import { transform } from "@babel/standalone"
import { useRef } from "react"

export const App: React.FC = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const onClick = () => {
    if (!textAreaRef.current) {
      return
    }

    const res = transform(textAreaRef.current.value, {
      presets: ["react", "typescript"],
      filename: "index.tsx",
    })
    console.log(res.code, 'placeholder')
  }

  const code = `import { useEffect, useState } from "react";
    const App = () => {
      const [count, setCount] = useState(0);
      useEffect(() => {
        setCount(1);
      }, []);
      return <div onClick={() => setCount(preNum => preNum + 1)}>{count}</div>;
    };

    export default App;
  `
  
  return (
    <div>
      <textarea ref={textAreaRef} style={{ width: '500px', height: '300px'}} defaultValue={code}></textarea>
      <button onClick={onClick}>编译</button>
    </div>
  )
}
