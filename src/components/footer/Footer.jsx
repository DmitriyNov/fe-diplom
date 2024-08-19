import FooterContactsSubscriptions from "./FooterContactsSubscriptions";
import FooterLogo from "./FooterLogo";

export default function Footer () {
    
    const contacts = [
        {
            icon: "./icons/Phone.svg",
            text: "8 (800) 000 00 00",
        },
        {
            icon: "./icons/Mail.svg",
            text: "inbox@mail.ru",
        },
        {
            icon: "./icons/Skype.svg",
            text: "tu.train.tickets",
        },
        {
            icon: "./icons/Map.svg",
            text: "г. Москва\nул. Московская 27-35\n555 555",
        }
    ];

    const subscriptions = [
        {
            icon: "./icons/YouTube.svg",
            link: "#",
        },
        {
            icon: "./icons/Linkedin.svg",
            link: "#",
        },
        {
            icon: "./icons/Google.svg",
            link: "#",
        },
        {
            icon: "./icons/Facebook.svg",
            link: "#",
        },
        {
            icon: "./icons/X.svg",
            link: "#",
        },
    ];

    function onSubscriptionSubmit (event) {
        event.preventDefault();
        alert("Спасибо за подписку! \n Олег, сделай потом модалку, как-то не серьёзно")
    }
        
    return (
        <footer className="footer">
            <FooterContactsSubscriptions contacts={contacts} subscriptions={subscriptions} onSubscriptionSubmit={onSubscriptionSubmit}/>
            <div className="footer__white_line"></div>
            <FooterLogo />
        </footer>
    )
}
