import Link from "next/link"
import { useState } from "react"
import { Container } from "react-bootstrap"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header>
        <nav>
            <Container className="nav-container">
                <div className="menu-box">
                    <h1 className="logo">smart<span>Dev</span></h1>
                    <div onClick={() => setMenuOpen(!menuOpen)} className="menu">
                        <button>menu</button>
                    </div>
                </div>
                <div className={`${menuOpen ? "nav-list-box open" : "nav-list-box"}`}>
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <Link className="nav-link" href={'/'}>
                                works
                            </Link>
                        </li>
                        <li className="nav-list-item">
                            <Link className="nav-link" href={'/'}>
                            blog
                            </Link>
                        </li>
                        <li className="nav-list-item">
                            <Link className="nav-link" href={'/'}>
                                contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    </header>
  )
}

export default Header