import React from 'react';

const FooterPage = () => {
    return (
        <div className="footer-pages container">
                <div className="footer-pages-child">
                    <div className="pages-logo"><a href="#"><img src="/icons/kun.png" alt=""/></a></div>
                    <div className="b-text">
                        <div className="title">Ҳар доим хабардор бўлинг!</div>
                        <div className="desk">kun.uz мобил иловаларини кўчириб олинг ва барча янгиликлар сиз билан</div>
                    </div>
                    <div className="store-btns">
                        <a href="#" className="mr-2"><img src="/icons/applestore.png" alt=""/></a>
                        <a href="#"><img src="/icons/googleplay.png" alt=""/></a>
                    </div>
                </div>

        </div>
    );
};

export default FooterPage;