import FooterForm from "./FooterForm";
import Subscriptions from "./Subscriptions";

export default function FooterSubscriptions (props) {
      
    const {subscriptions, onSubscriptionSubmit} = props;

    return (
        <div className="footer__subscription">
            <span className="foter_title footer__subscription_form-text">Подписка</span>
            <FooterForm onSubscriptionSubmit={onSubscriptionSubmit}/>
            <span className="foter_title footer__subscription-text">Подписывайтесь на нас</span>
            <div className="footer__subscription-container">
                {subscriptions.map((item, i) => (
                    <Subscriptions key={i} subscriptions={item} />
                ))}
            </div>
        </div>
    )
}