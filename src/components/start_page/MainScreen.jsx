import Search from "../search/Search";

export default function MainScreen ({props}) {

    const {startSearch, searchData, setSearchData} = props;

    const styles = {
        top: {paddingTop: "58px"},
        bottom: {marginTop: "58px"},
    };
    
    return (
        <div className="main_screen">
            <div className="main_screen__content">
                <div className="main_screen__slogan-container">
                    <span className="main_screen__slogan">
                        Вся жизнь -<br/><span className="main_screen__slogan-bold">путешествие</span>
                    </span>
                </div>
                <div className="main_screen__widget-container">
                    <Search props={{styles: styles, startSearch: startSearch, searchData: searchData, setSearchData: setSearchData}}/>
                </div>
            </div>
        </div>
    )
}