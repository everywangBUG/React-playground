import { useRef, useState } from "react"
import styles from './FileNameItem.module.scss'

interface FileNameItemProps {
  value: string;
  onClick: () => void;
  onEditComplete: (name: string) => void;
}

export const FileNameItem: React.FC<FileNameItemProps> = (props) => {
  const { value, onClick, onEditComplete } = props
  const [name, setName] = useState(value)
  const [editing, setEditing] = useState(false)
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
                setEditing(false)
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
