import { useEffect, useRef } from "react"
import "./slider.scss"
const Slider = () => {
    const interval = useRef(null)
    const sliderWraper = useRef(null)
    useEffect(()=>{
        const inputs = sliderWraper.current.getElementsByTagName("input")
        inputs[0].checked = true;
        let cunt = 1
        interval.current = setInterval(() => {
            if(cunt < inputs.length){
                inputs[cunt-1].checked =false
                inputs[cunt].checked = true
                cunt=cunt+1;
            }else{
                inputs[inputs.length-1].checked = false
                cunt = 1;
                inputs[0].checked = true
            }
        }, 3000);
        return()=>{
            clearInterval(interval.current)
        }
    },[])
    return (
        <>
            <div ref={sliderWraper} className="wraperSlider">
                <input type="radio" name="slide" id="one" />
                <input type="radio" name="slide" id="two" />
                <input type="radio" name="slide" id="three" />
                <input type="radio" name="slide" id="four" />
                <input type="radio" name="slide" id="five" />
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