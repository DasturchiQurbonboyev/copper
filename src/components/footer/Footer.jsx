import React from 'react'
import logo from '../../assets/footer/logo.png'
import { useLocation } from 'react-router-dom'


const Footer = () => {

    const { pathname } = useLocation()

    return (
        <div className='footer py-[80px] bg-no-repeat bg-x-center bg-cover  '>
            {
                pathname == "/order" || pathname == "/order-thanks" ?
                    <div className='flex justify-center items-center flex-col gap-4'>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <p className='text-white max-w-[214px] text-center'>© 2021 “Copper Pro”
                            Все права защищенны</p>
                    </div>
                    :
                    <div className="kontainer grid gap-[30px] min-[750px]:gap-0 min-[750px]:grid-cols-2">
                        <div className='text-white flex flex-col gap-[21px]'>
                            <div>
                                <img src={logo} alt="" />
                            </div>
                            <p className='max-w-[214px]'>© 2021 “Copper Pro”  Все права защищенны</p>
                            <p className='underline'>Политика конфиденциальности</p>
                        </div>
                        <div className='grid grid-cols-2 min-[460px]:grid-cols-3 text-white'>
                            <div>
                                <p className='text-[18px] font-[800] leading-[17.35px]   '>Навигация</p>
                                <ul className='flex flex-col gap-[15px] pt-[15px]'>
                                    <li className='text-[14px] leading-[18.82px] hover:underline cursor-pointer   '>Каталог</li>
                                    <li className='text-[14px] leading-[18.82px] hover:underline cursor-pointer   '>Новости</li>
                                    <li className='text-[14px] leading-[18.82px] hover:underline cursor-pointer   '>Доставка</li>
                                    <li className='text-[14px] leading-[18.82px] hover:underline cursor-pointer   '>О нас</li>
                                    <li className='text-[14px] leading-[18.82px] hover:underline cursor-pointer   '>Контакты</li>
                                </ul>
                            </div>
                            <div>
                                <p className='text-[18px] font-[800] leading-[17.35px]   '>Каталог</p>
                                <ul className='flex flex-col gap-[15px] pt-[15px]'>
                                    <li className='text-[14px] leading-[18.82px] hover:underline cursor-pointer   '>Для эфирных масел</li>
                                    <li className='text-[14px] leading-[18.82px] hover:underline cursor-pointer   '>Для гидролатов</li>
                                    <li className='text-[14px] leading-[18.82px] hover:underline cursor-pointer   '>Медная посуда</li>
                                    <li className='text-[14px] leading-[18.82px] hover:underline cursor-pointer   '>Аксессуары из меди</li>
                                    <li className='text-[14px] leading-[18.82px] hover:underline cursor-pointer   '>Индивидуальный заказ</li>
                                    <li className='text-[14px] leading-[18.82px] hover:underline cursor-pointer   '>Скидки и предложения</li>
                                </ul>
                            </div>
                            <div>
                                <p className='text-[18px] font-[800] leading-[17.35px]   '>Контакты</p>
                                <ul className='flex flex-col gap-[15px] pt-[15px]'>
                                    <li className='text-[14px] leading-[18.82px] hover:underline cursor-pointer   '>Бажана 8-Б, Киев,
                                        02132 Украина</li>
                                    <li className='text-[14px] leading-[18.82px] hover:underline cursor-pointer   '>+38 (096) 990 67 56</li>
                                    <li className='text-[14px] leading-[18.82px] hover:underline cursor-pointer   '>a.alambik@gmail.com</li>
                                </ul>
                            </div>
                        </div>

                    </div>
            }
        </div >
    )
}

export default Footer