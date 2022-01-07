import "./slider.scss"
import Slider from "../../ui/elementSlider/slider"
import { Link } from "react-router-dom";

const ShopSlider = () => {
    return (
        <div className="mainBox">
            <h2>فروشگاه ما</h2>
            <Slider responsive={[5, 4, 2, 1]}>
                <div className="column shopItem">
                    <img src="img/20.png" />
                    <h5 className="center">تمرینات مخصوص والیبال</h5>
                </div>
                <div className="column shopItem">
                    <img src="img/21.png" />
                    <h5 className="center">تمرینات مخصوص والیبال</h5>
                </div>
                <div className="column shopItem">
                    <img src="img/22.png" />
                    <h5 className="center">تمرینات مخصوص والیبال</h5>
                </div>
                <div className="column shopItem">
                    <img src="img/23.png" />
                    <h5 className="center">تمرینات مخصوص والیبال</h5>
                </div>
            </Slider>
            <div className="center">
                <Link className="btn-info" to={"/shop"}> همین الان خرید کنید</Link>
            </div>
        </div>
    )
}
export default ShopSlider;