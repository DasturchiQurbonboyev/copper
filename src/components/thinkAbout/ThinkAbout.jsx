import React, { useEffect, useState } from 'react';
import img1 from '../../assets/thinkAbout/nick.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../products_swiper/ProductsSwiper.css';
import 'swiper/css/navigation';

import { FreeMode, Pagination, Navigation } from 'swiper/modules';

const ThinkAbout = ({ title, positionTitle }) => {
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

    const thinkAbouts = [
        // Ma'lumotlar ro'yxati shu yerda qoladi
        {
            id: 0,
            img: img1,
            title: "Наше оборудование прозводится вручную...",
            data: "20.10.21"
        },
        {
            id: 1,
            img: img1,
            title: "Наше оборудование прозводится вручную...",
            data: "20.10.21"
        },
        {
            id: 1,
            img: img1,
            title: "Наше оборудование прозводится вручную...",
            data: "20.10.21"
        },
        {
            id: 1,
            img: img1,
            title: "Наше оборудование прозводится вручную...",
            data: "20.10.21"
        },
        {
            id: 1,
            img: img1,
            title: "Наше оборудование прозводится вручную...",
            data: "20.10.21"
        },
        {
            id: 1,
            img: img1,
            title: "Наше оборудование прозводится вручную...",
            data: "20.10.21"
        },
        // Boshqa elementlar ham shu tarzda
    ];

    const getSlidesPerView = () => {
        if (screenWidth < 650) return 1;
        if (screenWidth >= 650 && screenWidth < 950) return 2;
        return 3;
    };

    return (
        <div className="py-[80px]">
            <div className="kontainer">
                <p className={`${positionTitle} uppercase text-[50px] leading-[37.45px] font-[400] pb-[46px]`}>
                    {title}
                </p>

                <div id='bestSellingProducts'>
                    <Swiper
                        slidesPerView={getSlidesPerView()}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <div className='max-w-[1180px]'>
                            {thinkAbouts.map((el, inx) => (
                                <SwiperSlide key={inx}>
                                    <div className='hover:scale-105 transition duration-500 px-[30px] py-[21px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                                        <div className='group'>
                                            <div className='transition-transform duration-300 w-[63px] ease-in-out group-hover:scale-105'>
                                                <img className='w-[63px]' src={img1} alt="" />
                                            </div>
                                        </div>
                                        <div className='max-w-[446px] pt-[30px] flex flex-col gap-[18px]'>
                                            <p className='text-start font-[600] text-[25px] leading-[24.1px]'>Иван Иванов</p>
                                            <p className='text-start text-[14px] italic leading-[18.2px]'>{el.title}</p>
                                            <p className='text-start text-[14px] leading-[18.82px] font-[800]'>{el.data}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ThinkAbout;
