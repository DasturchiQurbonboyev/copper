import React, { useEffect } from 'react'
import zakaz from '../../assets/logo/zakaz.png'
import { Link } from 'react-router-dom'

const OrderThanks = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='py-[80px]'>
            <div className="kontainer text-[#031412]">
                <div className='flex justify-center items-center'>
                    <img src={zakaz} alt="" />
                </div>
                <div className='flex flex-col gap-[35px]'>
                    <p className='text-center text-[50px] leading-[52.95px]'>Спасибо за заказ</p>
                    <p className='text-center text-[27px] leading-[26.03px]  '>Мы свяжемся с вами
                        в ближайшее время
                    </p>
                    <div className='flex justify-center '>
                        <Link className='w-full text-center' to={"/"}>
                            <button className='max-w-[445px] w-full bg-gradient-to-r font-[800]  from-[#5E3928] to-[#E4A16F] text-white py-[15px]'>Главная</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderThanks