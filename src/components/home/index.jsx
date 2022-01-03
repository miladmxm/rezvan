import Header from "../header/header"
import Slider from "../ui/slider/costomSlider"
import "./index.scss"
import LoginView from "./loginView/loginView"
import Servises from "./services/servises"
import Portfolio from "./portfolio/portfolio"
const Index = () => {
    return (
        <>
            <LoginView />
            <Header />
            <div className="container">
                <Slider />
                <Servises />
                <Portfolio />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </>
    )
}
export default Index