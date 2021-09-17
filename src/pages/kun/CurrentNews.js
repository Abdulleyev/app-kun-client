import React from 'react';

const CurrentNews = () => {
    return (
        <div className="current-news">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="big-news">
                            <div>
                                <img src="/icons/current.png" alt=""/>
                                <div className="box">
                                    <span>Жамият</span>
                                </div>
                            </div>
                            <div className="py-2">
                                <h4> «Қўлига қурол олиб, истиқлол учун курашганлар илк марта оқланди» – қатағон
                                    қурбонларининг оқланиши ҳақида тарихчи Баҳром Ирзаев билан суҳбат</h4>
                                <p> Ўзбекистон Олий суди 25 август куни совет даврида қатағон қилинган, бироқ шу кунгача
                                    реабилитация қилинмай қолиб кетган 115 нафар ўзбекистонликни оқлаган эди. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="news">
                                    <div>
                                        <div className="box-images"><img src="/icons/newsone.png" alt=""/></div>
                                        <div className="box">
                                            <span>Жамият</span>
                                        </div>
                                    </div>
                                    <h4>Афғонистон: Манба «Толибон» раҳбарлари ўртасидаги жиддий зиддият ҳақида хабар
                                        бермоқда</h4>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="news">
                                    <div>
                                        <div className="box-images"><img src="/icons/card.png" alt=""/></div>
                                        <div className="box">
                                            <span>Ўзбекистон</span>
                                        </div>
                                    </div>
                                    <h4>Шавкат Мирзиёев ва Владимир Путин Афғонистондаги вазиятни муҳокама қилди</h4>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="news">
                                    <div>
                                        <div className="box-images"><img src="/icons/card2.png" alt=""/></div>
                                        <div className="box">
                                            <span>Жамият</span>
                                        </div>
                                    </div>
                                    <h4>Юнусобод ҳокимлигидан яна бир қонунсизлик. «Снос» учун компенсация тўланмасдан
                                        тадбиркорларнинг дўкони бузилиш арафасида</h4>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="news">
                                    <div>
                                        <div className="box-images"><img src="/icons/card4.png" alt=""/></div>
                                        <div className="box">
                                            <span>Ўзбекистон</span>
                                        </div>
                                    </div>
                                    <h4>Антимонополия қўмитаси раиси UzAuto билан судлашувни давом эттириш бўйича
                                        саволга жавоб қайтарди</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentNews;