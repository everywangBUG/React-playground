import { useContext } from "react"
import logo from "../assets/logo.svg"
import { PlaygroundContext } from "../context/PlaygroundContext"
import "./Header.scss"
import { DownloadOutlined, MoonOutlined, ShareAltOutlined, SunOutlined } from "@ant-design/icons"
import copy from "copy-to-clipboard"
import { message } from "antd"
import { downloadFiles } from "../utils/utils"

export const Header: React.FC = () => {
  const { theme, setTheme, files } = useContext(PlaygroundContext)

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
        <DownloadOutlined
          style={{marginLeft: "10px"}}
          onClick={async () => {
            await downloadFiles(files)
            message.success("下载完成")
          }}
        />
      </div>
    </div>
  )
}
