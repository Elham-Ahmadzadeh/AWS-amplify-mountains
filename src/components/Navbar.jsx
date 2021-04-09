import React, {useState} from 'react'

const Navbar = () => {
  //destructuring
  const [navLinkOpen,navLinkToggle] = useState(false)

  const handleNavLinksToggle = () => {
    navLinkToggle(!navLinkOpen)
  }
  const renderClasses = () => {
    let classes = "navlinks"
    if(navLinkOpen) {
      classes += " active"
    }
    return classes
  }
  return (
    <nav>
      <div className="logo">
        <i className="fas fa-mountain"></i>
      <h4>Mountains</h4>
      </div>
      <ul className={renderClasses()}>
    <li className="link"><a href="#/">Home</a></li>
    <li className="link"><a href="#/">About</a></li>
    <li className="link"><a href="#/">Services</a></li>
    <li className="link"><a href="#/">Contact us</a></li>
      </ul>
<div onClick={handleNavLinksToggle} className="hamburger">
  <i className="fas fa-bars fa.lg"></i>
  </div>
    </nav>
  )

}

export default Navbar

