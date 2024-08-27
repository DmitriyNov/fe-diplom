import Button from "../ui/Button";

export default function FooterForm (props) {
    
    const {onSubscriptionSubmit, button} = props;

    return (
        <div className="footer__form-container">
            <span className="footer__form-label">Будьте в курсе событий</span>
            <form className="footer__form" onSubmit={onSubscriptionSubmit}>
                <input className="footer__form-input" type="text" placeholder="e-mail" />
                <Button props={button}/>
            </form>
        </div>
    )
}