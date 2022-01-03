import { Link } from 'react-router-dom'
const LoginView = () => {
    return (
        <div className="loginView">

        <div className="row">
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
            <div className="logo">
                <img className="bglogo" src="img/shape.png" />
                <img className="logoimg" src="img/lo2.png" alt="main logo" />
            </div>
        </div>
        <div className="column">
            <h1>
                طراحی و اجرای فضای سبز باغ گل رضوان
            </h1>
            <p className="description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
        </div>

        <div className="imgBack"></div>
    </div>
    )
}

export default LoginView