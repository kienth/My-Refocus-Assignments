import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTiktok,
    faTwitter,
    faWhatsapp,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="footer">
            <div className="follow-us">
                <p style={{ fontSize: 12, textAlign: "start" }}>Follow Us</p>
                <div className="footer-websites">
                    <FontAwesomeIcon
                        icon={faLinkedinIn}
                        size="lg"
                        style={{
                            backgroundColor: "#192140",
                            padding: 5,
                            borderRadius: 50,
                        }}
                    />
                    <FontAwesomeIcon
                        icon={faInstagram}
                        size="lg"
                        style={{
                            backgroundColor: "#192140",
                            padding: 5,
                            borderRadius: 50,
                        }}
                    />
                    <FontAwesomeIcon
                        icon={faFacebookF}
                        size="lg"
                        style={{
                            backgroundColor: "#192140",
                            padding: 5,
                            borderRadius: 50,
                        }}
                    />
                    <FontAwesomeIcon
                        icon={faTwitter}
                        size="lg"
                        style={{
                            backgroundColor: "#192140",
                            padding: 5,
                            borderRadius: 50,
                        }}
                    />
                    <FontAwesomeIcon
                        icon={faWhatsapp}
                        size="lg"
                        style={{
                            backgroundColor: "#192140",
                            padding: 5,
                            borderRadius: 50,
                        }}
                    />
                    <FontAwesomeIcon
                        icon={faTiktok}
                        size="lg"
                        style={{
                            backgroundColor: "#192140",
                            padding: 5,
                            borderRadius: 50,
                        }}
                    />
                    <FontAwesomeIcon
                        icon={faYoutube}
                        size="lg"
                        style={{
                            backgroundColor: "#192140",
                            padding: 5,
                            borderRadius: 50,
                        }}
                    />
                </div>
            </div>
            <div className="footer-faq">Privacy Policy . Terms of Use</div>
        </div>
    );
};

export default Footer;
