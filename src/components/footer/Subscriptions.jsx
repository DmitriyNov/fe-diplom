export default function Subscriptions (props) {
    
    const {subscriptions} = props;

    return (
        <a href={subscriptions.link}>
            <div className="footer__subscriptions-image_container">
                {subscriptions.icon}
            </div>
        </a>
    )
}