import { MouseEventHandler, useEffect, useRef, useState } from "react"
import styles from "./FileNameItem.module.scss"
import { Popconfirm } from "antd"

interface FileNameItemProps {
  value: string;
  onClick: () => void;
  onEditComplete: (name: string) => void;
  creating?: boolean;
  onRemove: () => void;
  readonly: boolean
}

export const FileNameItem: React.FC<FileNameItemProps> = (props) => {
  const { value, onClick, onEditComplete, creating, onRemove, readonly } = props
  const [name, setName] = useState(value)
  const [editing, setEditing] = useState(creating)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDoubleClick = () => {
    setEditing(true)
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }
  
  const handleOnBlur = () => {
    setEditing(false)
    onEditComplete(name)
  }

  useEffect(() => {
    if (creating) {
      inputRef.current?.focus()
    }
  }, [creating])
  
  return (
    <div onClick={onClick} className={styles["tabs-item"]}>
      {
        editing ? (
          <input
            value={name}
            ref={inputRef}
            onChange={(e) => setName(e.target.value)}
            className={styles["tabs-item-input"]}
            onBlur={handleOnBlur}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleOnBlur()
              }
            }}
          />
        ) : (
          <>
            <span onDoubleClick={!readonly ? handleDoubleClick : () => {}}>{value}</span>
            {
              !readonly ?
                (
                  <Popconfirm
                    title="确定删除该文件吗"
                    okText="确定"
                    cancelText="取消"
                    onConfirm={
                      (e) => {
                        e?.stopPropagation()
                        onRemove()
                      }
                    }
                  >
                    <span style={{ marginLeft: 5, display: "flex" }} >
                      <svg width='12' height='12' viewBox="0 0 24 24">
                        <line stroke='#999' x1='18' y1='6' x2='6' y2='18'></line>
                        <line stroke='#999' x1='6' y1='6' x2='18' y2='18'></line>
                      </svg>
                    </span>
                  </Popconfirm>
                )
                :
                null
            }
          </>
        )
      }
    </div>
  )
}
