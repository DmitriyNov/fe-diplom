import FooterContacts from "./FooterContacts";
import FooterSubscriptions from "./FooterSubscriptions";

export default function FooterContactsSubscriptions (props) {
    
    const {contacts, subscriptions, onSubscriptionSubmit} = props;

    return (
        <div className="footer__contact_subscription-container">
            <FooterContacts contacts={contacts} />
            <FooterSubscriptions subscriptions={subscriptions} onSubscriptionSubmit={onSubscriptionSubmit} />
        </div>
    )
}
