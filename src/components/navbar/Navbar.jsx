import React, { useState } from 'react'
import logo from '../../assets/logo/logo.png'
import navbarHeart from '../../assets/navbar/heart.png'
import navbarUser from '../../assets/navbar/user.png'
import navbarCart from '../../assets/navbar/shopping-cart.png'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import menu from '../../assets/navbar/menu.png'
import close from '../../assets/navbar/close.png'

const Navbar = () => {
    const wishlist = useSelector(state => state.wishlist.value)
    const cart = useSelector(state => state.cart.value);

    const [menuButton, setMenuButton] = useState(false)
    const { pathname } = useLocation();
    console.log(pathname);


    return (
        <div className='navbar py-[30px] '>
            <div className="kontainer">
                {
                    pathname == "/order" || pathname == "/order-thanks" ? <></> :
                        <div className={` top-0 left-0 fixed transition duration-300   z-50 ${menuButton ? "w-[100%]" : "hidden"}   `} >
                            <div className=' h-[100vh] w-[100%] bg-gradient-to-r from-[#E4A16F] to-[#5E3928] via-[#cf8e70]'>
                                <div className='flex justify-end p-[30px]'>
                                    <img onClick={() => setMenuButton(false)} className='w-[30px] cursor-pointer' src={close} alt="" />
                                </div>
                                <div className='flex justify-center' >
                                    <div className='absolute  flex gap-4 top-7    -mt-[30px] '>
                                        <Link to={"/wishlist"}>
                                            <div className='bg-white relative  px-[10px] pb-[13px] pt-[40px]     '>
                                                <p className='absolute top-2 left-4 text-[25px] font-[900] leading-[24.1px] text-[#E4A16F]   '>
                                                    {wishlist.length == 0 ? "" : wishlist.length}
                                                </p>
                                                <img src={navbarHeart} alt="" />
                                            </div>
                                        </Link>
                                        <div className='bg-white  px-[10px] pb-[12px] pt-[40px]     '><img src={navbarUser} alt="" /></div>
                                        <Link to={"/cart"}>
                                            <div className='bg-white relative  px-[10px] pb-[15px] pt-[40px]     '>
                                                <p className='absolute top-2 left-4 text-[25px] font-[900] leading-[24.1px] text-[#E4A16F]  '>
                                                    {cart.length == 0 ? "" : cart.length}
                                                </p>
                                                <img src={navbarCart} alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className='pt-[50px]'>
                                    <ul className='  flex flex-col items-center  pt-[50px] gap-[] flex-grow justify-around text-white font-[800] text-[30px] leading-[63.27px] '>
                                        <li className=' hover-underline-animation hover:text-transparent bg-clip-text bg-gradient-to-r from-[#5E3928] to-[#E4A16F]'>
                                            <Link onClick={() => setMenuButton(false)} to={"/catalog"}>
                                                Каталог
                                            </Link>
                                        </li>
                                        <li className=' hover-underline-animation hover:text-transparent bg-clip-text bg-gradient-to-r from-[#5E3928] to-[#E4A16F]'>
                                            <Link onClick={() => setMenuButton(false)} to={'/news'}>
                                                Новости
                                            </Link>
                                        </li>
                                        <li className=' hover-underline-animation hover:text-transparent bg-clip-text bg-gradient-to-r from-[#5E3928] to-[#E4A16F]'>
                                            <Link onClick={() => setMenuButton(false)} to={"/delivery"}>
                                                Доставка
                                            </Link>
                                        </li>
                                        <li className=' hover-underline-animation hover:text-transparent bg-clip-text bg-gradient-to-r from-[#5E3928] to-[#E4A16F]'>
                                            <Link onClick={() => setMenuButton(false)} to={"/about"}>
                                                О нас
                                            </Link>
                                        </li>
                                        <li className=' hover-underline-animation hover:text-transparent bg-clip-text bg-gradient-to-r from-[#5E3928] to-[#E4A16F]'>
                                            <Link onClick={() => setMenuButton(false)} to={"/contact"}>
                                                Контакты
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                }
                <div className='relative flex items-center justify-between   '>
                    <div className={`flex gap-[77px] ${(pathname == "/order" || pathname == "/order-thanks") ? "justify-center" : ""} items-center flex-grow  `}>
                        <div className=''>
                            <Link to={"/"}>
                                <img className='w-full' src={logo} alt="" />
                            </Link>
                        </div>
                        {
                            pathname == "/order" || pathname == "/order-thanks" ? <></> :
                                <ul className='max-[900px]:hidden  flex gap-[] flex-grow justify-around text-white font-[800] text-[16px] leading-[15.42px] '>
                                    <li className=' hover-underline-animation hover:text-transparent bg-clip-text bg-gradient-to-r from-[#5E3928] to-[#E4A16F]'>
                                        <Link to={"/catalog"}>
                                            Каталог
                                        </Link>
                                    </li>
                                    <li className=' hover-underline-animation hover:text-transparent bg-clip-text bg-gradient-to-r from-[#5E3928] to-[#E4A16F]'>
                                        <Link to={'/news'}>
                                            Новости
                                        </Link>
                                    </li>
                                    <li className=' hover-underline-animation hover:text-transparent bg-clip-text bg-gradient-to-r from-[#5E3928] to-[#E4A16F]'>
                                        <Link to={"/delivery"}>
                                            Доставка
                                        </Link>
                                    </li>
                                    <li className=' hover-underline-animation hover:text-transparent bg-clip-text bg-gradient-to-r from-[#5E3928] to-[#E4A16F]'>
                                        <Link to={"/about"}>
                                            О нас
                                        </Link>
                                    </li>
                                    <li className=' hover-underline-animation hover:text-transparent bg-clip-text bg-gradient-to-r from-[#5E3928] to-[#E4A16F]'>
                                        <Link to={"/contact"}>
                                            Контакты
                                        </Link>
                                    </li>
                                </ul>
                        }
                    </div>
                    {
                        pathname == "/order" || pathname == "/order-thanks" ? <></> :
                            <div
                                onClick={() => setMenuButton(!menuButton)}
                                className=' min-[450px]:hidden absolute -right-5 cursor-pointer bg-gradient-to-r from-[#5E3928] to-[#E4A16F] via-[#5E3928] w-[50px] pl-[10px] py-[8px] '>
                                <img className='w-[35px]' src={menu} alt="" />
                            </div>
                    }
                    {
                        pathname == "/order" || pathname == "/order-thanks" ? <></> :

                            <div className='max-[450px]:hidden'>
                                <div className='flex gap-4 top-0  -mt-[30px] '>
                                    <Link to={"/wishlist"}>
                                        <div className='bg-white relative  px-[10px] pb-[13px] pt-[40px]     '>
                                            <p className='absolute top-2 left-4 text-[25px] font-[900] leading-[24.1px] text-[#E4A16F]   '>
                                                {wishlist.length == 0 ? "" : wishlist.length}
                                            </p>
                                            <img src={navbarHeart} alt="" />
                                        </div>
                                    </Link>
                                    <div className='bg-white  px-[10px] pb-[12px] pt-[40px]     '><img src={navbarUser} alt="" /></div>
                                    <Link to={"/cart"}>
                                        <div className='bg-white relative  px-[10px] pb-[15px] pt-[40px]     '>
                                            <p className='absolute top-2 left-4 text-[25px] font-[900] leading-[24.1px] text-[#E4A16F]  '>
                                                {cart.length == 0 ? "" : cart.length}
                                            </p>
                                            <img src={navbarCart} alt="" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                    }
                </div>
                {
                    pathname == "/order" || pathname == "/order-thanks" ? <></> :
                        <ul className='hidden  min-[450px]:flex min-[900px]:hidden  pt-[50px] gap-[] flex-grow justify-around text-white font-[800] text-[16px] leading-[15.42px] '>
                            <li className=' hover-underline-animation hover:text-transparent bg-clip-text bg-gradient-to-r from-[#5E3928] to-[#E4A16F]'>
                                <Link to={"/catalog"}>
                                    Каталог
                                </Link>
                            </li>
                            <li className=' hover-underline-animation hover:text-transparent bg-clip-text bg-gradient-to-r from-[#5E3928] to-[#E4A16F]'>
                                <Link to={'/news'}>
                                    Новости
                                </Link>
                            </li>
                            <li className=' hover-underline-animation hover:text-transparent bg-clip-text bg-gradient-to-r from-[#5E3928] to-[#E4A16F]'>
                                <Link to={"/delivery"}>
                                    Доставка
                                </Link>
                            </li>
                            <li className=' hover-underline-animation hover:text-transparent bg-clip-text bg-gradient-to-r from-[#5E3928] to-[#E4A16F]'>
                                <Link to={"/about"}>
                                    О нас
                                </Link>
                            </li>
                            <li className=' hover-underline-animation hover:text-transparent bg-clip-text bg-gradient-to-r from-[#5E3928] to-[#E4A16F]'>
                                <Link to={"/contact"}>
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                }

            </div>
        </div >
    )
}

export default Navbar