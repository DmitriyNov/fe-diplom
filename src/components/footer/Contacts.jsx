export default function Contacts (props) {
    
    const {contacts} = props;

    return (
        <div className="footer__contacts-container">
            <div className="footer__contacts-image_container">
                <img className="footer__contacts-image" src={contacts.icon}/>
            </div>
            <span className="footer__contacts-info">{contacts.text}</span>
        </div>
    )
}