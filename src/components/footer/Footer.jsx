import FooterContactsSubscriptions from "./FooterContactsSubscriptions";
import FooterLogo from "./FooterLogo";
import { Phone, Mail, Skype, Marker, YouTube, Linkedin, Google, Facebook, Twitter } from "../icons/Icons";

export default function Footer () {
    
    const contacts = [
        {
            icon: <Phone />,
            text: "8 (800) 000 00 00",
        },
        {
            icon: <Mail />,
            text: "inbox@mail.ru",
        },
        {
            icon: <Skype />,
            text: "tu.train.tickets",
        },
        {
            icon: <Marker />,
            text: "г. Москва\nул. Московская 27-35\n555 555",
        }
    ];

    const subscriptions = [
        {
            icon: <YouTube />,
            link: "#",
        },
        {
            icon: <Linkedin />,
            link: "#",
        },
        {
            icon: <Google />,
            link: "#",
        },
        {
            icon: <Facebook />,
            link: "#",
        },
        {
            icon: <Twitter />,
            link: "#",
        },
    ];

    function onSubscriptionSubmit (event) {
        event.preventDefault();
        alert("Спасибо за подписку! \n Олег, сделай потом модалку, как-то не серьёзно")
    }

    const button = {
        size: "button-medium",
        decor: "button-simple",
        text: "ОТПРАВИТЬ"
    };
        
    return (
        <footer id="footer" className="footer">
            <FooterContactsSubscriptions contacts={contacts} subscriptions={subscriptions} onSubscriptionSubmit={onSubscriptionSubmit} button={button}/>
            <FooterLogo />
        </footer>
    )
}
