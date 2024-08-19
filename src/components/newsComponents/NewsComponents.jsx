import React, { useState, useEffect } from 'react';
import img1 from '../../assets/news/img1.png';
import img2 from '../../assets/news/img2.png';
import img3 from '../../assets/news/img3.png';
import img4 from '../../assets/news/img4.png';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './NewsComponents.css';

import { Grid, Pagination } from 'swiper/modules';

const NewsComponents = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const newsApi = [
        { img: img1, data: "27.10.21", title: "Эфирные масла для улучшения сна", description: "Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо строго придерживаться определенных правил...." },
        { img: img2, data: "27.10.21", title: "Эфирные масла для улучшения сна", description: "Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо строго придерживаться определенных правил...." },
        { img: img3, data: "27.10.21", title: "Эфирные масла для улучшения сна", description: "Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо строго придерживаться определенных правил...." },
        { img: img4, data: "27.10.21", title: "Эфирные масла для улучшения сна", description: "Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо строго придерживаться определенных правил...." },
    ];

    const getSlidesPerView = () => {
        if (screenWidth < 750) return 1;
        return 2;
    };

    return (
        <div className='pt-[180px] pb-[80px] news__components'>
            <div className="kontainer text-[#031412]">
                <p className='text-[50px] leading-[52.95px]  pb-[31px] '>Новости</p>
                <div className=''>
                    <Swiper
                        slidesPerView={getSlidesPerView()}
                        grid={{ rows: 1 }}
                        spaceBetween={30}
                        pagination={{ clickable: true, renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>` }}
                        modules={[Grid, Pagination]}
                        className="mySwiper"
                    >
                        {newsApi.map((el, inx) => (
                            <SwiperSlide key={inx}>
                                <div className=''>
                                    <div className='relative '>
                                        <div>
                                            <img src={el.img} alt="" />
                                        </div>
                                        <div className='flex items-center absolute top-0 right-0'>
                                            <p className='bg-gradient-to-r from-[#5E3928] to-[#E4A16F] text-white px-[13px] py-[9px]'>{el.data}</p>
                                        </div>
                                        <p className='absolute text-white bottom-2 min-[500px]:bottom-[26px] left-[28px]'>{el.title}</p>
                                    </div>
                                    <p className='text-[14px] text-start leading-[18.54px] py-[26px]'>{el.description}</p>
                                    <select className='outline-none'>
                                        <option value="">Читать больше</option>
                                        <option value="">Читать больше</option>
                                        <option value="">Читать больше</option>
                                        <option value="">Читать больше</option>
                                        <option value="">Читать больше</option>
                                    </select>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default NewsComponents;
