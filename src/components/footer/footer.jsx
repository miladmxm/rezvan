import { Link } from "react-router-dom";
import SocialMedia from "../ui/socialMedia/socialMedia";
import "./footer.scss";
const Footer = () => {
    return (
        <footer className="footerContainer">
            

            <div className="row footerColumsContainer">
                <div className="column">
                    <h3>باغ گل رضوان</h3>
                    <p className="text-justify">
                        فروشگاه اینترنتی باغ گل رضوان بهترین بستر برای خرید اینترنتی گیاهان مورد نیاز شما در ایران است . “اصل بودن کالا” ،  ” ارسال سریع” و “مشاوره تخصصی” از ویژگی های مهم و اساسی در باغ گل رضوان از نخستین روز تأسیس بوده و تمام سعی خود را کرده تا به آن پایبند باشد . باغ گل رضوان سعی بر آن دارد که روزانه بر تعداد محصولات و تنوع آن بیفزاید تا بتواند نیاز همه ی افراد با هر نوع سلیقه را در خرید محصولات اینترنتی مرتفع کند.

تمامی کالاها و خدمات  و فعالیتهای این سایت تابع قوانین و مقررات جمهوری اسلامی ایران می باشد.
                    </p>
                </div>
                <div className="column">
                    <h3>آخرین مقالات</h3>
                    <ul className="weblogItems">
                        <li>
                            <Link to={"#"}>
                                <img src="img/15.png" />
                                <span>هر آنچه باید درباره والیبال بدانید</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"#"}>
                                <img src="img/16.png" />
                                <span>هر آنچه باید درباره والیبال بدانید</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"#"}>
                                <img src="img/17.png" />
                                <span>هر آنچه باید درباره والیبال بدانید</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"#"}>
                                <img src="img/18.png" />
                                <span>هر آنچه باید درباره والیبال بدانید</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="column">
                    <h3>فروشگاه</h3>
                    <ul className="shopLink">
                        <li>
                            <Link to="#">گیاهان آپارتمانی</Link>
                        </li>
                        <li>
                            <Link to="#">گیاهان فصلی</Link>
                        </li>
                        <li>
                            <Link to="#">درختان و درختچه ها</Link>
                        </li>
                        <li>
                            <Link to="#">گیاهان فصلی</Link>
                        </li>
                        <li>
                            <Link to="#">کاکتوس ها</Link>
                        </li>
                        <li>
                            <Link to="#">کود ها</Link>
                        </li>
                    </ul>
                </div>
                <div className="column">
                    <h3>
                        آدرس
                    </h3>
                    <p>
                        طراحی و اجرای فضای سبز <br />
                        تهران ، بزرگراه رسالت (شرق به غرب) روبروی مصلی امام خمینی (ره) ، نرسیده به مترو مصلی ، ورودی پارکینگ مترو
                    </p>
                    <SocialMedia instagram="miladmxm" whatsapp={"+989109662449"} email="miladmxm12@gmail.com" phone="+989109662449"/>
                </div>
            </div>
            
            <div className="row center footerCopy"><h4>تمام محتویات این وبسایت مطابق با قوانین جمهوری اسلامی و متعلق به رضوان گل میباشد <i>&copy;</i></h4></div>
        </footer>

    )
}
export default Footer