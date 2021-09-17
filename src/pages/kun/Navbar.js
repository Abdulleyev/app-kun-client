import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-main">
            <div className="container">
                <a href="#"><img src="/icons/logo.png" alt=""/></a>
                <ul>
                    <li>
                        <NavLink to="/uzb">Ўзбекистон</NavLink>
                    </li>
                    <li>
                        <NavLink to="/jahon">Жаҳон</NavLink>
                    </li>
                    <li>
                        <NavLink to="/iqtisod">Иқтисодиёт</NavLink>
                    </li>
                    <li>
                        <NavLink to="/jamiyat">Жамият</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Фан ва техника</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Спорт</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Light</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Business class</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Аудио</NavLink>
                    </li>
                </ul>
                <div className="uzbgaz">
                    <a href="#"> <img src="/icons/uzbgaz.png" alt=""/></a>
                    <select id="cars">
                        <option value="volvo">Ўзбекча</option>
                        <option value="saab">английский</option>
                        <option value="opel">Русский</option>
                        <option value="audi">английский</option>
                    </select>
                    <span><a href="#"><img src="/icons/new-search-icon.svg" alt=""/></a></span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;