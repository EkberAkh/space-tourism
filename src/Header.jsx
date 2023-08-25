import logo from "./assets/shared/logo.svg"
import hamburger from "./assets/shared/icon-hamburger.svg"
import close from "./assets/shared/icon-close.svg"
import { Link} from 'react-router-dom'
import { useState } from "react"

const Header = ()=>{
  const [selectedNav,setSelectedNav] = useState('link-home')
  const [navActive,setNavActive] = useState(false)
  const navSelection = (e)=>{
if (e.target.classList.contains('link-home')) {
  setSelectedNav('link-home')
}
if (e.target.classList.contains('link-destination')) {
  setSelectedNav('link-destination')
}
if (e.target.classList.contains('link-crew')) {
  setSelectedNav('link-crew')
}
if (e.target.classList.contains('link-tech')) {
  setSelectedNav('link-tech')
}
  }
  const navClick = (e)=>{
if (e.target.classList.contains('open-menu')) {
  setNavActive(true)
}
if (e.target.classList.contains('close-menu')) {
  setNavActive(false)
}
  }
return(
    <>
    <header>
  <div className="container">
  <img className="logo" src={logo} alt="Site Logo"/>
  <div className="line"></div>
  <nav className={`${navActive?'active':''}`}>
  <img onClick={navClick} src={close} className="close-menu" alt="fe"/>
    <ul>
      <li className={`${selectedNav==='link-home'?'active':""}`} ><Link onClick={navSelection} className="text-link link-home" to={'/'}><b>00</b>Home</Link></li>
      <li className={`${selectedNav==='link-destination'?'active':""}`}><Link  onClick={navSelection} className="text-link link-destination"  to={'/destination'}><b>01</b>Destination</Link></li>
      <li className={`${selectedNav==='link-crew'?'active':""}`} ><Link  onClick={navSelection} className="text-link link-crew" to={'/crew'}><b>02</b>Crew</Link></li>
      <li className={`${selectedNav==='link-tech'?'active':""}`}><Link  onClick={navSelection} className="text-link link-tech" to={'/technology'}><b>03</b>Technology</Link></li>
     
      
    </ul>
  </nav>
  <img onClick={navClick} className="open-menu" src={hamburger} alt="hamburger"/>

  </div>
  <div className="blurry-back"></div>
</header>
    </>
)
}


export default Header;