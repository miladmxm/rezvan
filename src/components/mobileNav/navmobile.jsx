import { Link } from "react-router-dom";
import "./mobile.scss";
const MobileNav = () => {
    return (
        <div className="mobileNav">
            <ul className="row">
                <li><Link to={"#"}><i className="fas fa-phone"></i></Link></li>
                <li><Link to={"#"}><i className="fas fa-shopping-bag"></i></Link></li>
                <li><Link to={"#"}><i className="fas fa-home"></i></Link></li>
                <li><Link to={"#"}><i className="fas fa-blog"></i></Link></li>
                <li><Link to={"#"}><i className="fas fa-exclamation"></i></Link></li>
            </ul>
        </div>
    )
}
export default MobileNav