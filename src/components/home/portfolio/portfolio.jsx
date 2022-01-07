import "./portfolio.scss";
const Portfolio = () => {
    return (
        <section className="mainBox">
            <h2>نمونه کار ها</h2>
            <div className="imgController">
                <img data-aos="zoom-in" ata-aos-delay="150" src="img/7.png" />
                <img data-aos="zoom-in" ata-aos-delay="200" src="img/8.png" />
                <img data-aos="zoom-in" ata-aos-delay="250" src="img/9.png" />
                <img data-aos="zoom-in" ata-aos-delay="300" src="img/10.png" />
                <img data-aos="zoom-in" ata-aos-delay="150" src="img/11.png" />
                <img data-aos="zoom-in" ata-aos-delay="200" src="img/12.png" />
                <img data-aos="zoom-in" ata-aos-delay="250" src="img/13.png" />
                <img data-aos="zoom-in" ata-aos-delay="300" src="img/14.png" />
            </div>
            <div className="center">
                <button className="btn-info" >مشاهده بیشتر نمونه کار</button>
            </div>
        </section>
    )
}
export default Portfolio