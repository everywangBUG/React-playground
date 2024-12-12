import React, { useEffect, useState } from "react"
import s from "./Message.module.scss"
import c from "classnames"

interface MessageProps {
  type: "error" | "warn"
  content: string
}


export const Message: React.FC<MessageProps> = (props) => {
  const { type, content } = props
  const [visible, setVisible] = useState(false)

  console.log(content, "content")

  useEffect(() => {
    setVisible(!!content)
  }, [content])

  return (
    <>
      {
        visible ?
          (
            <div className={c(s.msg, s[type])}>
              <pre dangerouslySetInnerHTML={{ __html: content }}></pre>
              <button className={s.dismiss} onClick={() => setVisible(false)}>x</button>
            </div>
          ) : null
      }
    </>
  )
}
