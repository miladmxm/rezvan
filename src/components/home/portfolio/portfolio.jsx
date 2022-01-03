import "./portfolio.scss";
const Portfolio = () => {
    return (
        <section className="mainBox">
            <h2>نمونه کار ها</h2>
            <div className="imgController">
                <img src="img/7.png" />
                <img src="img/8.png" />
                <img src="img/9.png" />
                <img src="img/10.png" />
                <img src="img/11.png" />
                <img src="img/12.png" />
                <img src="img/13.png" />
                <img src="img/14.png" />
            </div>
            <div className="center">
                <button className="btn-info" >مشاهده بیشتر نمونه کار</button>
            </div>
        </section>
    )
}
export default Portfolio