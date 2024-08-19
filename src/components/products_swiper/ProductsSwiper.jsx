import React, { useEffect, useState } from 'react'
import img1 from '../../assets/products/img1.png'
import heart1 from '../../assets/products/heart1.png'
import heart2 from '../../assets/products/heart2.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './ProductsSwiper.css'
import 'swiper/css/navigation';

import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import ProductsApi from '../../api/ProductsApi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleToWishes } from '../../context/wishlistSlice';
import { MdOutlineShoppingCart, MdShoppingCart } from 'react-icons/md';
import { addToCart, removeFromCart } from '../../context/cartSlice';

const ProductsSwiper = ({ title, componentBg, buttonNone }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const wishlist = useSelector(state => state.wishlist.value);
    const cart = useSelector(state => state.cart.value);
    const dispatch = useDispatch();
    const { productsApiSwiper } = ProductsApi();

    const getSlidesPerView = () => {
        if (screenWidth < 650) return 1;
        if (screenWidth >= 650 && screenWidth < 950) return 2;
        return 3;
    };

    return (
        <div className={`${componentBg} py-[40px] min-[700px]:py-[80px]`}>
            <div className="kontainer">
                <p className='text-center uppercase text-[24px] min-[500px]:text-[40px]  min-[900px]:text-[50px] leading-[37.45px] font-[400] min-[900px]:pb-[46px]'>
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
                            {productsApiSwiper?.map((el, inx) => (
                                <SwiperSlide className={`${componentBg}`} key={inx}>
                                    <div className={`${componentBg}`}>
                                        <div className={`${componentBg} flex group`}>
                                            <div className={`${componentBg} relative transition-transform duration-300 ease-in-out group-hover:scale-105`}>
                                                <Link to={`/single/${el.id}`}>
                                                    <img src={el.img} alt="" />
                                                </Link>
                                                <div onClick={() => dispatch(toggleToWishes(el))} className='bg-white cursor-pointer absolute top-0 right-0 py-4 px-[10px]'>
                                                    {wishlist.some(w => w?.id === el.id) ?
                                                        <img src={heart2} alt="" /> :
                                                        <img src={heart1} alt="" />
                                                    }
                                                </div>
                                                <div onClick={() => dispatch(addToCart(el))} className='bg-white cursor-pointer absolute top-0 left-0 py-4 px-[10px]'>
                                                    {cart.some(w => w?.id === el.id) ?
                                                        <MdShoppingCart size={30} /> :
                                                        <MdOutlineShoppingCart size={30} />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${componentBg} flex justify-between items-center max-w-[446px] pt-[30px]`}>
                                            <p className='text-start max-w-[200px] font-[600] text-[20px] leading-[19.28px]'>
                                                {el.name}
                                            </p>
                                            <p className='text-start text-[25px] min-[1000px]:text-[30px] leading-[28.92px] font-[800]'>
                                                {el.price} грн
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>

                <div className={`${buttonNone} min-[900px]:pt-[42px] text-center`}>
                    <button className='max-w-[327px] outline-none w-full py-[16px] bg-gradient-to-r from-[#5E3928] to-[#E4A16F] text-white text-[18px] font-[800] leading-[17.35px]'>
                        Перейти в каталог
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductsSwiper;
