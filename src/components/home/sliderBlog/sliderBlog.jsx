import "./slider.scss"
import Slider from "../../ui/elementSlider/slider"

const SliderBlog = () => {
    return (
        <>
            <Slider>
                <div className="item">
                    <img src="img/15.png" />
                    <h5>تمرینات مخصوص والیبال</h5>
                </div>
                <div className="item">
                    <img src="img/16.png" />
                    <h5>سلامت پوست در خطر است</h5>
                </div>
                <div className="item">
                    <img src="img/17.png" />
                    <h5>مادر تمام ورزش ها ، دویدن</h5>
                </div>
                <div className="item">
                    <img src="img/18.png" />
                    <h5>لباس های خود را ست کنید</h5>
                </div>
            </Slider>
        </>
    )
}
export default SliderBlog;