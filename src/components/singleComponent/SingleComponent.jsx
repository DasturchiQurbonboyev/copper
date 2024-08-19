import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductsApi from '../../api/ProductsApi';
import cheeked from '../../assets/single/checked.png'
import twitter from '../../assets/single/twitter.png'
import instagram from '../../assets/single/instagram.png'
import facebook from '../../assets/single/facebook.png'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decCart, incCart } from '../../context/cartSlice';

const SingleComponent = () => {
    const dispatch = useDispatch()

    const { id } = useParams()
    const { productsApiSwiper } = ProductsApi()
    let product = productsApiSwiper?.find(el => +el.id === +id)
    const cart = useSelector(state => state.cart.value);

    let res = cart.filter((el) => el.id == id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className='pt-[180px]'>
            <div className='kontainer'>
                <div className=" grid pb-[50px] min-[800px]:grid-cols-2 items-start gap-16 mx-auto max-md:px-2 ">
                    <div className="img flex max-[920px]:flex-col-reverse gap-5">
                        <div className="  flex min-[920px]:flex-col justify-between min-[450px]:gap-4">
                            <div className={` w-[80px] flex justify-center items-center h-[80px] p-[5px] rounded-[15px] cursor-pointer `}>
                                <img className="w-full object-contain " src={product?.img} alt="" />
                            </div>
                            <div

                                className={` w-[80px] flex justify-center items-center h-[80px] p-[5px] rounded-[15px] cursor-pointer`}>
                                <img className="w-full object-cover" src={product?.img} alt="" />
                            </div>
                            <div

                                className={` w-[80px] flex justify-center items-center h-[80px] p-[5px] rounded-[15px] cursor-pointer`}>
                                <img className="w-full object-cover" src={product?.img} alt="" />
                            </div>
                            <div

                                className={` w-[80px] flex justify-center items-center h-[80px] p-[5px] rounded-[15px] cursor-pointer`}>
                                <img className="w-full object-cover" src={product?.img} alt="" />
                            </div>
                        </div >
                        <div className="flex w-full justify-center items-center object-contain  h-full max-lg:mx-auto ">
                            <img
                                src={product?.img}
                                alt="Yellow Tropical Printed Shirt image"
                                className="object-contain w-full "
                            />
                        </div>
                    </div >
                    <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                        <div className="">
                            <p className="uppercase font-[Lighthaus] font-[400] text-[20px] min-[400px]:text-[30px] min-[700px]:text-[40px] leading-[30px] min-[700px]:leading-[42.36px] text-[#031412] ">
                                Дистиллятор для получения гидролата 8л
                            </p>
                            <div className='py-[37px] flex justify-between items-center font-[Mont] text-[16px] leading-[21px] '>
                                <div className='flex  items-center gap-[7px]'>
                                    <div>
                                        <img src={cheeked} alt="" />
                                    </div>
                                    <p className=' font-[800] text-[#4B7159]   '>В наличии</p>
                                </div>
                                <div>
                                    <p>Артикул: <b className='font-[800]'>CP-0803</b></p>
                                </div>
                            </div>
                            <hr />
                            <div className=" py-[37px] text-[16px] font-[Mont] leading-[21.18px] text-[#031412]">
                                <p className=' font-[800] mb-[15px]  '>Описание</p>
                                <p>Медный дистиллятор «Феникс» станет Вашим надёжным помощником и проводником в мир дистилляции и красоты, с которым Вы легко сможете получать свои любимые гидролаты или алкогольные напитки.</p>
                            </div>
                            <hr />
                            <div className='flex  flex-col gap-[30px] py-[30px]'>
                                <div className='flex justify-between items-center font-[Mont] '>
                                    <p className='text-[#031412] font-[600] text-[24px] min-[450px]:text-[35px]  leading-[33.74px] '>Цена</p>
                                    <div className='flex items-end gap-[10px]  min-[950px]:gap-[32px]'>
                                        <p className='text-[#9B0000] text-[24px] min-[450px]:text-[35px] min-[950px]:text-[45px] font-[800] leading-[43.38px] text-[Mont]   '>
                                            {
                                                cart.some((w) => (w.id == product.id)) ?
                                                    `${res[0]?.quantity * product.price} грн` :
                                                    ` ${product.price} грн`
                                            }

                                        </p>
                                        <div className='relative'>
                                            <p className='text-[#031412] z-0 text-[18px] min-[450px]:text-[25px] font-[400] leading-[24.1px]  '><del>1 953 грн</del></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between  gap-[30px]'>
                                    {
                                        cart.some((w) => (w.id == product.id)) ?
                                            <div className='flex'>
                                                <button
                                                    disabled={res[0]?.quantity == 1}
                                                    onClick={() => dispatch(decCart(product))}
                                                    className='w-[50px] h-[50px] flex justify-center items-center cursor-pointer  border '
                                                >-</button>
                                                <p className='h-[50px] flex justify-center items-center cursor-pointer w-[100px]  border '>{res[0].quantity}</p>
                                                <button onClick={() => dispatch(incCart(product))} className='w-[50px] h-[50px] flex justify-center items-center cursor-pointer border '>+</button>
                                            </div> :
                                            <div className='flex-grow '>
                                                <button onClick={() => dispatch(addToCart(product))} className='w-full py-[16px] bg-gradient-to-r from-[#5E3928] to-[#E4A16F] text-white text-[18px] font-[800] leading-[17.35px]    '>Купить</button>
                                            </div>
                                    }
                                </div>
                            </div>
                            <hr />
                            <div className='flex gap-[52px] items-center pt-[30px]  '>
                                <p className='text-[#031412] text-[16px] font-[800] font-[Mont] leading-[21.18px]   '>Поделиться</p>
                                <div className='flex gap-[18px]'>
                                    <img src={twitter} alt="" />
                                    <img src={facebook} alt="" />
                                    <img src={instagram} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <hr />
                <div className='py-[50px]'>
                    <p>Описание</p>
                    <p>Для всех, кто хочет самостоятельно получать гидролат или дистиллят, и быть уверенным в его качестве – у нас есть готовое и удобное решение. Современный дистиллятор «Феникс» станет для Вас отличным помощником. Полностью медный аппарат изготовлен на собственном производстве, на основании многолетнего опыта работы с медными дистилляторами.
                        <br /><br />
                        Гораздо практичней, чем алькитара, и ни в чём ей не уступающий. Даже наоборот, имеет ряд преимуществ, таких как толщина металла, надёжные, сварные швы, и деревянные ручки, которые не так нагреваются, как латунные. Соединение ароматизационной колонны с емкостью герметично и долговечно. Радиатор данного аппарата расходует в 3 раза меньше воды для охлаждения, в сравнении с алькитарой такого же объёма.
                        <br /><br />
                        Замечательный аппарат прослужит для Вас долгие годы и будет радовать своего владельца гидролатом высокого качества. Оцените все преимущества паровой дистилляции и получайте гидролаты, в натуральности которых Вы можете быть уверенны. Аппарат полностью укомплектован и готов к работе. Объём перегонного куба – 8 литров. Объём колонны – 0,8 литра. Аппарат полностью укомплектован и готов к эксплуатации.

                    </p>
                </div>
                <hr />
                <div className='flex max-[550px]:flex-col justify-between mt-[80px] -mb-[120px]'>
                    <p className='text-[40px] leading-[42.36px] text-[#031412] '>Отзывы</p>
                    <div className='max-w-[327px] w-full '>
                        <button className='w-full py-[16px] bg-gradient-to-r from-[#5E3928] to-[#E4A16F] text-white text-[18px] font-[800] leading-[17.35px]    '>Купить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleComponent