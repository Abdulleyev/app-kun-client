import React from 'react';

const Inquiry = () => {
    return (
        <div className="Inquiry">
            <div className="container">
                <div className="d-flex align-items-center py-3">
                <div className="line"></div>
                <h4>Kun.uz суриштируви </h4>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="Inquiry-left">
                            <div className="border-aa"><img src="/icons/leftinq.png" alt=""/></div>
                            <h4>Вазир Шерматов ҳақ бўлиб чиқди: мактаб ходимлари ўртасидаги «саботаж» сабаб таълим
                                қурбон бўлмоқда</h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="Inquiry-right">
                            <div className="Inquiry-images">
                                <img src="/icons/inquiryright.png" alt=""/>
                            </div>
                            <h4>Суд Самарқанддаги мунозарали турар жой қурилиши масаласига нуқта қўйди — Бир можаро
                                силсиласи</h4>
                        </div>
                        <div className="Inquiry-right">
                            <div className="Inquiry-images"><img src="/icons/rightinq.png" alt=""/></div>
                            <h4>“Бизни алдаб қишлоққа кўчиришди” — Тошкентдан Қибрайга кўчирилган фуқаролар шикояти</h4>
                        </div>
                        <div className="Inquiry-right">
                            <div className="Inquiry-images"><img src="/icons/rightinqu.png" alt=""/></div>
                            <h4>Ер ҳужжатсиз бериб юборилганми? Андижон марказидаги қурилиш фуқаролар эътирозига сабаб
                                бўлмоқда</h4>
                        </div>
                        <div className="Inquiry-right">
                            <div className="Inquiry-images"><img src="/icons/inqo.png" alt=""/></div>
                            <h4>Қашқадарёча непотизм: тадбиркор ҳокимнинг таниш-билишчилик қилганидан азият чекаётганини
                                айтмоқда</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inquiry;