import React from 'react';

const Interview = () => {
    return (
        <div className="interview">
            <div className="container">
                <div className="block-title">
                    <div className="d-flex align-items-center">
                        <div className="line"></div>
                        <h4>Интервью </h4>
                    </div>
                    <div className="d-flex align-items-center">
                        <a href="#">
                            Интервью
                            <img src="/icons/interyuicons.png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="interview-post">
                            <div className="post-thumbnail"><img src="/icons/inter.png" alt=""/></div>
                            <div className="thumbnail"></div>
                            <span>Интервью</span>
                            <h4>
                                «Дунё илм-фанидан ортда қолиб кетяпмиз» – талабга жавоб бермайдиган дарсликлар ҳақида
                                Нагоя университетининг ўзбек профессори билан суҳбат
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="interview-post">
                            <div className="post-thumbnail"><img src="/icons/interwiev2.png" alt=""/></div>
                            <div className="thumbnail"></div>
                            <span>Интервью</span>
                            <h4>
                                “Тажриба осон йўллар билан қозонилмайди” — Абдукарим Мирзаев билан суҳбат
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="interview-post">
                            <div className="post-thumbnail"><img src="/icons/interwiev3.png" alt=""/></div>
                            <div className="thumbnail"></div>
                            <span>Интервью</span>
                            <h4>

                                “Ишдан четлаштириш бўшатиш дегани эмас” — вакцинага доир янги қонун бўйича мутахассис
                                билан суҳбат
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="interview-post">
                            <div className="post-thumbnail"><img src="/icons/interwiev4.png" alt=""/></div>
                            <div className="thumbnail"></div>
                            <span>Интервью</span>
                            <h4>
                                “Қизларимни яшириб ўтирибман, ёзуғимиз нима, билмайман” — афғонистонлик ота билан суҳбат
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Interview;