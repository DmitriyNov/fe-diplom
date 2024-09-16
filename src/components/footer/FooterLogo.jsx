import { Up } from "../icons/Icons";

export default function FooterLogo () {
      
    return (
        <div className="footer__logo-container">
            <div className="footer__white_line"></div>
            <div className="footer__logo">
                <span className="logo footer__logo-text">Лого</span>
                <a href="#">
                    <div className="footer__logo-image_container">
                        <Up />
                    </div>
                </a>
                <span className="footer__logo-sign">2024 WEB</span>
            </div>
        </div>
        
    )
}
