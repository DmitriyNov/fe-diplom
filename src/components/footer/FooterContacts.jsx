import Contacts from "./Contacts";

export default function FooterContacts (props) {
      
    const {contacts} = props;

    return (
        <div className="footer__contacts">
            <span className="foter_title footer__contacts-text">Свяжитесь с нами</span>
            {contacts.map((item, i) => (
                <Contacts key={i} contacts={item} />
            ))}
        </div>
    )
}
