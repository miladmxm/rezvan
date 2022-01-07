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
const Index = () => {
    return (
        <>
            <LoginView />
            <Header />
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