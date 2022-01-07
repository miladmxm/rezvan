import "./socialMedia.scss";
const SocialMedia = ({ instagram, whatsapp, email, phone, telegram, twitter, youtube }) => {
    return (
        <>
            <ul className="row socialMedia">
                {instagram &&
                    <li>
                        <a href={`https://www.instagram.com/${instagram}`} target={"_blank"}><i className="center fa fa-instagram"></i></a>
                    </li>
                }
                
                {whatsapp &&
                    <li>
                        <a href={`whatsapp://send?phone=${whatsapp}`} target={"_blank"}><i className="center fa fa-whatsapp"></i></a>
                    </li>
                }
                
                {email &&
                    <li>
                        <a href={`mailto:${email}`} target={"_blank"}><i className="center fa fa-envelope"></i></a>
                    </li>
                }
                
                {phone &&
                    <li>
                        <a href={`tel:${phone}`} target={"_blank"}><i className="center fa fa-phone"></i></a>
                    </li>
                }
                
                {telegram &&
                    <li>
                        <a href={telegram} target={"_blank"}><i className="center fa fa-telegram"></i></a>
                    </li>
                }
                
                {twitter &&
                    <li>
                        <a href={twitter} target={"_blank"}><i className="center fa fa-twitter"></i></a>
                    </li>
                }
                
                {youtube &&
                    <li>
                        <a href={youtube} target={"_blank"}><i className="center fa fa-youtube"></i></a>
                    </li>
                }
                
            </ul>
        </>
    )
}
export default SocialMedia