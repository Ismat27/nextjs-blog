import Link from "next/link"
import { Container } from "react-bootstrap"

const Header = () => {
  return (
    <header>
        <nav>
            <Container>
                <div className="nav-list-box">
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