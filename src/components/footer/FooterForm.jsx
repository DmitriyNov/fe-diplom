export default function FooterForm (props) {
    
    const {onSubscriptionSubmit} = props;

    return (
        <div className="footer__form-container">
            <span className="footer__form-label">Будьте в курсе событий</span>
            <form className="footer__form" onSubmit={onSubscriptionSubmit}>
                <input className="footer__form-input" type="text" placeholder="e-mail" />
                <input className="footer__form-button" type="button" value="ОТПРАВИТЬ"/>
            </form>
        </div>
    )
}