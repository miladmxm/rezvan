import Header from "../header/header"
import Slider from "../ui/slider/costomSlider"
import "./index.scss"
import LoginView from "./loginView/loginView"
import Servises from "./services/servises"
import Portfolio from "./portfolio/portfolio"
import SliderBlog from "./sliderBlog/sliderBlog"
import SpecialServises from "./specialServises/specialServises"
import ShopSlider from "./shopSlider/shopSlider"
import Footer from "../footer/footer"
import { useEffect, useRef } from "react"
import AOS from "aos"
import "aos/dist/aos.css";
import MobileNav from "../mobileNav/navmobile"

const Index = () => {
    const header = useRef(null)
    const goToTopEl = useRef(null)
    const goToLoad = () => {
        window.scrollBy(0, window.innerHeight + (window.innerHeight / 100) * 3);
        // console.log(headerStky.current);
        // headerStky.current.scrollIntoView({ behavior: "smooth" });
    };
    const goToTop = () => {
        header.current.scrollIntoView({ behavior: "smooth" });
    }

    const shopGoToTop = () => {
        goToTopEl.current.style.bottom= "50px"
        goToTopEl.current.style.opacity="0.5"
        
    }
    const hideGoToTop = () => {
        goToTopEl.current.style.bottom= "-50px"
        goToTopEl.current.style.opacity="0"
    }
    useEffect(() => {
        header.current.scrollTo(0, 0)
        AOS.init({
            duration: 600,
            delay: 100,
            offset:200,
            disable:'mobile'
        });

        let lastScrollTop = 0;
        window.addEventListener(
            "scroll",
            function () {
                // or window.addEventListener("scroll"....
                const st = window.pageYOffset || document.documentElement.scrollTop;
                if (st > lastScrollTop) {
                    shopGoToTop()
                    if (window.scrollY < 20) {
                        goToLoad()
                    }
                } else {
                    if (window.scrollY < window.innerHeight) {
                        hideGoToTop()
                    }
                }
                lastScrollTop = st <= 0 ? 0 : st;
            },
            false
        );
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <>
            <LoginView refEl={header} />
            <Header />
            <MobileNav />
            <span className="leftBg"></span>
            <span className="rightBg"></span>
            <span className={'goToTop'} ref={goToTopEl} onClick={goToTop}><i className="center fa fa-angle-up"></i></span>
            <div className="container">
                <Slider />
                <Servises />
                <Portfolio />
                <SliderBlog />
                <SpecialServises />
                <ShopSlider />
            </div>
            <Footer />
        </>
    )
}
export default Index