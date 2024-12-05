import { useEffect, useRef, useState } from "react"
import styles from './FileNameItem.module.scss'

interface FileNameItemProps {
  value: string;
  onClick: () => void;
  onEditComplete: (name: string) => void;
  creating?: boolean
}

export const FileNameItem: React.FC<FileNameItemProps> = (props) => {
  const { value, onClick, onEditComplete, creating } = props
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
    <div onClick={onClick}>
      {
        editing ? (
          <input
            value={name}
            ref={inputRef}
            onChange={(e) => setName(e.target.value)}
            className={styles['tabs-item-input']}
            onBlur={handleOnBlur}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleOnBlur()
              }
            }}
          />
        ) : (
          <span onDoubleClick={handleDoubleClick}>{value}</span>
        )
      }
    </div>
  )
}
