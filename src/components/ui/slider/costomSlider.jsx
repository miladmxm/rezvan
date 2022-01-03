import "./slider.scss"
const Slider = () => {
    return (
        <>
            <div className="wraperSlider">
                <input type="radio" name="slide" id="one" checked/>
                <input type="radio" name="slide" id="two" checked/>
                <input type="radio" name="slide" id="three" checked/>
                <input type="radio" name="slide" id="four" checked/>
                <input type="radio" name="slide" id="five" checked/>
                <div className="img img-1">
                    <img src="img/1.png" />
                </div>
                <div className="img img-2">
                    <img src="img/2.png" />
                </div>
                <div className="img img-3">
                    <img src="img/3.png" />
                </div>
                <div className="img img-4">
                    <img src="img/8.png" />
                </div>
                <div className="img img-5">
                    <img src="img/4.png" />
                </div>
                <div className="sliders">
                    <label htmlFor="one" className="one"></label>
                    <label htmlFor="two" className="two"></label>
                    <label htmlFor="three" className="three"></label>
                    <label htmlFor="four" className="four"></label>
                    <label htmlFor="five" className="five"></label>
                </div>
            </div>
        </>
    )
}

export default Slider