import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="kun-footer">
                <div className="container">
                    <div className="footer-top">
                        <ul>
                            <li><a href="#">Сайт ҳақида</a></li>
                            <li><a href="#">RSS</a></li>
                            <li><a href="#">Алоқа</a></li>
                            <li><a href="#">Реклама</a></li>
                            <li><a href="#">Kun.uz жамоаси</a></li>
                        </ul>
                        <a href="#"><img src="../icons/img.png" alt=""/></a>
                    </div>

                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-text">
                        «KUN.UZ» сайтида эълон қилинган материаллардан нусха кўчириш, тарқатиш ва бошқа шаклларда
                        фойдаланиш
                        фақат таҳририят ёзма розилиги билан амалга оширилиши мумкин. <br/>Гувоҳнома: №0987. Берилган
                        санаси:
                        22.06.2015 йил. Муассис: «WEB EXPERT» МЧЖ. Таҳририят манзили: 100043, Тошкент шаҳри, К. Ёрматов
                        кўчаси, 12-уй. Электрон манзил: info@kun.uz. <br/> Сайтда эълон қилинаётган муаллифлик
                        мақолаларида
                        келтирилган фикрлар муаллифга тегишли ва улар Kun.uz таҳририяти нуқтаи назарини ифода этмаслиги
                        мумкин. <br/>Ⓣ - мақола ва материалларда қўйилган мазкур белги уларнинг тижорат ва реклама
                        ҳуқуқлари
                        асосида эълон қилинганлигини билдиради.
                    </div>
                    <div className="footer-images">
                        <a href="#"><img src="/icons/youtube.png" alt=""/></a>
                        <a href="#"><img src="/icons/telegram.png" alt=""/></a>
                        <a href="#"><img src="/icons/facebook.png" alt=""/></a>
                        <a href="#"><img src="/icons/tvitter.png" alt=""/></a>
                        <a href="#"><img src="/icons/instagram.png" alt=""/></a>
                        <a href="#"><img src="/icons/wfi.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;