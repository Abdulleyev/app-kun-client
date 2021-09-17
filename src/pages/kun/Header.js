import React, {useEffect, useState} from 'react';
import axios from "axios";

const Header = () => {



    const [data, setData] = useState({})
    const [dataContent, setDataContent] = useState([])



    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(res => {
                setData(res.data)
                console.log(res)

            })
            .catch(err =>{
                console.log(err)
            })




        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                setDataContent(res.data)
                console.log(res)

            })
            .catch(err =>{
                console.log(err)
            })



    }, [])
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="header-news">
                            <div className="header-news-child">
                                <a href="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="header-news-child-left">
                                                <img src="/icons/headerleft.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="header-news-child-right">
                                                <div className="top-right-text">
                                                    <img src="/icons/calendar.svg" alt=""/>
                                                    17:25/16.09.25
                                                </div>
                                                {/*<h4>Тошкентнинг «ўгай болалари». Талабалар нега ижарага қўйилмайди?</h4>*/}
                                                {/*<p>Таълим оламан, келажагимни қураман деб ҳар йили вилоятлардан минглаб*/}
                                                {/*    ёшлар азим пойтахтни қора тортиб келади. Олийгоҳга қабул қилинганини*/}
                                                {/*    эшитган талабанинг кайфи чоғ, ахир у камида вазир бўлишни ният*/}
                                                {/*    қилади-да. Aммо Тошкент бўлажак вазирларни кулиб қарши олмайди,*/}
                                                {/*    талаба буни тунашга бошпана тополмаган илк кунидаёқ ҳис*/}
                                                {/*    қилади...</p>*/}
                                                <h4>{data.title}</h4>
                                                <p>{data.body}</p>


                                            </div>
                                        </div>


                                        {
                                            dataContent.slice(0, 4).map(item => (
                                                <div className="col-md-6 d-flex">
                                                    <div className="left-news-images">
                                                        <img src="/icons/card4.png" alt=""/>
                                                    </div>
                                                    <div className="top-news-box">
                                                        <div className="top-right-text">
                                                            <img src="/icons/calendar.svg" alt=""/>
                                                            17:25/16.09.25
                                                        </div>
                                                        <h4>
                                                            {
                                                                item.title
                                                            }
                                                        </h4>
                                                        <hr/>
                                                    </div>
                                                </div>
                                            ))
                                        }


                                        {/*<div className="col-md-6 d-flex">*/}
                                        {/*    <div className="left-news-images">*/}
                                        {/*        <img src="/icons/card4.png" alt=""/>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="top-news-box">*/}
                                        {/*        <div className="top-right-text">*/}
                                        {/*            <img src="/icons/calendar.svg" alt=""/>*/}
                                        {/*            17:25/16.09.25*/}
                                        {/*        </div>*/}
                                        {/*        <h4>Президент, шифокор, тарихчи ва икки иқтисодчи. Президентликка кимлар*/}
                                        {/*            номзод бўлди?*/}
                                        {/*        </h4>*/}
                                        {/*        <hr/>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="col-md-6 d-flex">*/}
                                        {/*    <div className="left-news-images">*/}
                                        {/*        <img src="/icons/headerimages.png" alt=""/>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="top-news-box">*/}
                                        {/*        <div className="top-right-text">*/}
                                        {/*            <img src="/icons/calendar.svg" alt=""/>*/}
                                        {/*            17:25/16.09.25*/}
                                        {/*        </div>*/}
                                        {/*        <h4>«Дунё илм-фанидан ортда қолиб кетяпмиз» – талабга жавоб бермайдиган*/}
                                        {/*            дарсликлар ҳақида Нагоя университетининг ўзбек профессори билан*/}
                                        {/*            суҳбат*/}
                                        {/*        </h4>*/}
                                        {/*        <hr/>*/}
                                        {/*    </div>*/}

                                        {/*</div>*/}
                                        {/*<div className="col-md-6 d-flex">*/}
                                        {/*    <div className="left-news-images">*/}
                                        {/*        <img src="/icons/headerimage.png" alt=""/>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="top-news-box">*/}
                                        {/*        <div className="top-right-text">*/}
                                        {/*            <img src="/icons/calendar.svg" alt=""/>*/}
                                        {/*            17:25/16.09.25*/}
                                        {/*        </div>*/}
                                        {/*        <h4>«Ҳузурни ҳоким кўриб, узрни мухбир сўрасин»: фактчекинг ҳақида*/}
                                        {/*            гапираётган пойтахт ҳокимияти ўзи ундан қочмоқда*/}
                                        {/*        </h4>*/}
                                        {/*        <hr/>*/}
                                        {/*    </div>*/}

                                        {/*</div>*/}
                                        {/*<div className="col-md-6 d-flex">*/}
                                        {/*    <div className="left-news-images">*/}
                                        {/*        <img src="/icons/headimages.png" alt=""/>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="top-news-box">*/}
                                        {/*        <div className="top-right-text">*/}
                                        {/*            <img src="/icons/calendar.svg" alt=""/>*/}
                                        {/*            17:25/16.09.25*/}
                                        {/*        </div>*/}
                                        {/*        <h4>Вазир Шерматов ҳақ бўлиб чиқди: мактаб ходимлари ўртасидаги*/}
                                        {/*            «саботаж» сабаб таълим қурбон бўлмоқда*/}
                                        {/*        </h4>*/}
                                        {/*        <hr/>*/}
                                        {/*    </div>*/}

                                        {/*</div>*/}




                                    </div>
                                    <div className="row">
                                        <div className="d-flex align-items-center my-3">
                                            <div className="line"></div>
                                            <h4>Муҳаррир танлови</h4>
                                        </div>
                                    </div>

                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="header-right-news">
                            <div className="d-flex align-items-center mb-3 mt-2">
                                <div className="line"></div>
                                <h4>Сўнгги янгиликлар</h4>
                            </div>
                            <h5> Фармацевтика таълим ва тадқиқот институти абитуриентларни ўқишга таклиф қилади</h5>
                        </div>
                        <hr/>
                        <div className="header-right-news">
                            <div className="top-right-text mb-2">
                                <img src="/icons/calendar.svg" alt=""/>
                                <span>08:32</span>
                            </div>
                            <h5> Навоийда олтин маъданларни қазиб олиш ва қайта ишлаш комплекси қурилади</h5>

                        </div>
                        <hr/>
                        <div className="header-right-news">
                            <div className="top-right-text mb-2">
                                <img src="/icons/calendar.svg" alt=""/>
                                <span>08:32</span>
                            </div>
                            <h5> Навоийда олтин маъданларни қазиб олиш ва қайта ишлаш комплекси қурилади</h5>

                        </div>
                        <hr/>
                        <div className="header-right-news">
                            <div className="top-right-text mb-2">
                                <img src="/icons/calendar.svg" alt=""/>
                                <span>08:32</span>
                            </div>
                            <h5> Навоийда олтин маъданларни қазиб олиш ва қайта ишлаш комплекси қурилади</h5>

                        </div>
                        <hr/>
                        <div className="header-right-news">
                            <div className="top-right-text mb-2">
                                <img src="/icons/calendar.svg" alt=""/>
                                <span>08:32</span>
                            </div>
                            <h5> Навоийда олтин маъданларни қазиб олиш ва қайта ишлаш комплекси қурилади</h5>

                        </div>
                        <hr/>
                        <div className="main-btn-v2">
                            <a href="#">
                                <span>
                                    Кўпроқ янгилик
                                </span>
                                <img src="/icons/silver-arrow-right.svg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;