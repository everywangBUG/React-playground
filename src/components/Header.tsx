import logo from "../assets/logo.svg"
import "./Header.scss"

export const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <img alt='logo' src={logo} style={{color: "#58a6c0"}} />
        <span>React Playground</span>
      </div>
    </div>
  )
}
