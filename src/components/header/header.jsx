
import { Link } from 'react-router-dom'
import "./header.scss";
const Header = () => {
    return (
        <header className="mainHeader">
            <div className="row">
                <div className="logoHeader">
                    <img src="img/logo.png" />
                </div>
                <nav className="navIndex">
                    <ul>
                        <li>
                            <Link to={'/contact-us'}>تماس با ما</Link>
                        </li>
                        <li>
                            <a href="rezvangol.ir" target="_blank">فروشگاه</a>
                        </li>
                        <li>
                            <Link to={"/abaut-us"}>درباره ما</Link>
                        </li>
                        <li>
                            <Link to={"/blog"}>مقالات</Link>
                        </li>
                    </ul>
                </nav>
                <div className="loginAndSearch">
                    <button><i className="fa fa-search"></i></button>
                    <button><i className="fas fa-sign-in-alt"></i></button>
                </div>
            </div>
        </header>
    )
}
export default Header