import { useContext } from "react"
import logo from "../assets/logo.svg"
import { PlaygroundContext } from "../context/PlaygroundContext"
import "./Header.scss"
import { MoonOutlined, ShareAltOutlined, SunOutlined } from "@ant-design/icons"
import copy from "copy-to-clipboard"
import { message } from "antd"

export const Header: React.FC = () => {
  const { theme, setTheme } = useContext(PlaygroundContext)

  return (
    <div className='header'>
      <div className='logo'>
        <img alt='logo' src={logo} style={{color: "#58a6c0"}} />
        <span>React Playground</span>
      </div>
      <div className='theme-switch'>
        {
          theme === "light" &&
          <MoonOutlined
            title='切换为暗色主题'
            onClick={() => setTheme("dark")} 
          />
        }
        {
          theme === "dark" &&
          <SunOutlined
            title='切换为亮色主题'
            onClick={() => setTheme("light")} 
          />
        }
        <ShareAltOutlined
          style={{marginLeft: "10px"}}
          onClick={() => {
            copy(window.location.href)
            message.success("已复制链接")
          }}
        />
      </div>
    </div>
  )
}
