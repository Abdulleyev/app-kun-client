import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import FooterPage from "./FooterPage";
import VideoNews from "./VideoNews";

import Article from "./Article";
import Inquiry from "./Inquiry";
import Interview from "./Interview";
import CurrentNews from "./CurrentNews";
import Header from "./Header";
import NavbarBottom from "./NavbarBottom";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <NavbarBottom/>
            <Header/>
            <CurrentNews/>
            <Interview/>
            <Inquiry/>
            <Article/>
            <VideoNews/>
            <FooterPage/>
            <Footer/>
        </div>
    );
};

export default Main;