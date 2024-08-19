import React, { useEffect, useState } from 'react';
import { LuUser2 } from 'react-icons/lu';
import Union from '../../assets/single/Union.png';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../context/cartSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import EmptyCart from '../empty/EmptyCart';

const BOT_TOKEN = "7479336002:AAE-fiEczU4hqcNKjmeBKZhRtwj_toutzJI";
const CHAT_ID = "-4218604797";

const AnOrderComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();





    const cart = useSelector(state => state.cart.value);

    let sum = cart.reduce((acc, el) => acc + el.quantity * el.price, 0);

    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [deliveryMethod, setDeliveryMethod] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [loading, setLoading] = useState(false);

    const handlePayment = (e) => {
        e.preventDefault();

        if (!name || !firstName || !number || !email || !city || !address || !deliveryMethod || !paymentMethod) {
            toast.error("Iltimos, barcha maydonlarni to'ldiring");
            return;
        }

        setLoading(true);
        let text = "Buyurtma %0A%0A";
        text += `Ismi Familyasi: ${name + ' ' + firstName} %0A`;
        text += `Address: ${address} %0A`;
        text += `Shahar: ${city} %0A`;
        text += `Telefon: ${number} %0A`;
        text += `Email: ${email} %0A`;
        text += `Yetkazib berish usuli: ${deliveryMethod} %0A`;
        text += `To'lov usuli: ${paymentMethod} %0A%0A`;

        let quantity = 1;
        cart?.forEach(el => {
            text += `<b>Maxsulot: ${quantity}</b> %0A%0A`;
            text += `Nomi: ${el.title} %0A`;
            text += `Miqdori: ${el.quantity} %0A`;
            text += `Narxi: ${el.price} $ %0A%0A`;
            quantity++;
        });

        let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.onload = function () {
            setLoading(false); // Set loading to false when message sent successfully
            dispatch(clearCart());
            window.scrollTo(0, 0);
            toast.success("Buyurtma qabul qilindi, tez orada siz bilan bog'lanamiz");
            navigate('/order-thanks');
        };
        api.onerror = function () {
            setLoading(false); // Set loading to false on error
            toast.error("Xatolik yuz berdi, iltimos qayta urinib ko'ring");
        };
        api.send();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (cart.length === 0) {
        return <EmptyCart />;
    }

    return (
        <div className='py-[80px]'>
            <div className="kontainer">
                <div className='grid min-[750px]:flex justify-around pb-[30px]'>
                    <button className='border px-[78px] py-[18px] text-[#A1A1A1]'>Назад к покупкам</button>
                    <h2 className='text-[#031412] text-[30px] min-[500px]:text-[40px] min-[750px]:text-[50px] leading-[52.95px]'>Оформить заказ</h2>
                </div>
                <div className='flex max-[1000px]:flex-col gap-[30px]'>
                    <div>
                        <div className='bg-[#E6E8E7] px-[24px] py-[20px] gap-[15px] flex max-[600px]:flex-col min-[1150px]:grid grid-cols-2'>
                            <div className='flex max-[500px]:flex-col max-[600px]:items-center items-center gap-[22px]'>
                                <div>
                                    <div className='w-[82px] h-[82px] bg-white rounded-[50%] flex justify-center items-center'>
                                        <LuUser2 size={40} />
                                    </div>
                                </div>
                                <div className='text-[#031412] max-[600px]:items-center flex flex-col gap-[13px]'>
                                    <p className='font-[800] max-[600px]:text-center text-[18px] leading-[24px]'>Уже есть аккаунт или хотите зарегистрироваться?</p>
                                    <p className='text-[14px] leading-[18px]'>Войдите в кабинет и получите скидку</p>
                                </div>
                            </div>
                            <div className='grid min-[1150px]:grid-cols-2 gap-5 items-center'>
                                <button className='px-[10px] py-[18px] bg-gradient-to-r from-[#5E3928] to-[#E4A16F] text-white text-[18px] leading-[17px] font-[800]'>Войти</button>
                                <button className='px-[10px] py-[18px] border-[#031412] border font-[800] text-[16px] leading-[16px] text-[#031412]'>Регистрация</button>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-[22px] items-center pt-10'>
                                <p className='w-9 h-9 bg-gradient-to-tr from-[#0B3F37] to-[#CB8D62] flex justify-center items-center text-[30px] font-[800] leading-[29px] text-white'>1</p>
                                <p className='text-[#031412] text-[27px] font-[600] leading-[26px]'>Личные данные</p>
                            </div>
                            <div className='grid min-[550px]:grid-cols-2 gap-[30px] pt-[36px] pb-10'>
                                <input
                                    className='outline-none border py-[17px] px-5'
                                    type="text"
                                    placeholder='Имя'
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    className='outline-none border py-[17px] px-5'
                                    type="text"
                                    placeholder='Фамилия'
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input
                                    className='outline-none border py-[17px] px-5'
                                    type="number"
                                    placeholder='Телефон'
                                    required
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                                <input
                                    className='outline-none border py-[17px] px-5'
                                    type="email"
                                    placeholder='E-mail'
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    className='outline-none border py-[17px] px-5'
                                    type="text"
                                    placeholder='Страна'
                                    required
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                <input
                                    className='outline-none border py-[17px] px-5'
                                    type="text"
                                    placeholder='Город'
                                    required
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <hr />
                        </div>
                        <div>
                            <div className='flex gap-[22px] items-center pt-10'>
                                <p className='w-9 h-9 bg-gradient-to-tr from-[#0B3F37] to-[#CB8D62] flex justify-center items-center text-[30px] font-[800] leading-[29px] text-white'>2</p>
                                <p className='text-[#031412] text-[27px] font-[600] leading-[26px]'>Доставка</p>
                            </div>
                            <div className='flex flex-col gap-8 pt-[30px] pb-[40px]'>
                                <div>
                                    <input
                                        type="radio"
                                        id="delivery1"
                                        value="Самовывоз"
                                        checked={deliveryMethod === "Самовывоз"}
                                        onChange={() => setDeliveryMethod("Самовывоз")}
                                    />
                                    <label className='pl-[17px] text-[20px] font-[800] leading-[20px] text-[#A1A1A1]' htmlFor="delivery1">Самовывоз</label>
                                    <p className='pt-5 text-[#A1A1A1] text-[14px] leading-[19px]'>Вы можете забрать из нашего официального магазина по адресу Бажана 8-Б, Киев, 02132 Украина</p>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="delivery2"
                                        value="Новая почта"
                                        checked={deliveryMethod === "Новая почта"}
                                        onChange={() => setDeliveryMethod("Новая почта")}
                                    />
                                    <label className='pl-[17px] text-[20px] font-[800] leading-[20px] text-[#A1A1A1]' htmlFor="delivery2">Новая почта</label>
                                    <p className='pt-5 text-[#A1A1A1] text-[14px] leading-[19px]'>Вы можете забрать из нашего официального магазина по адресу Бажана 8-Б, Киев, 02132 Украина</p>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="delivery3"
                                        value="Курьер “Новая почта”"
                                        checked={deliveryMethod === "Курьер “Новая почта”"}
                                        onChange={() => setDeliveryMethod("Курьер “Новая почта”")}
                                    />
                                    <label className='pl-[17px] text-[20px] font-[800] leading-[20px] text-[#A1A1A1]' htmlFor="delivery3">Курьер “Новая почта”</label>
                                    <p className='pt-5 text-[#A1A1A1] text-[14px] leading-[19px]'>Вы можете забрать из нашего официального магазина по адресу Бажана 8-Б, Киев, 02132 Украина</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div className='flex gap-[22px] items-center pt-10'>
                                <p className='w-9 h-9 bg-gradient-to-tr from-[#0B3F37] to-[#CB8D62] flex justify-center items-center text-[30px] font-[800] leading-[29px] text-white'>3</p>
                                <p className='text-[#031412] text-[27px] font-[600] leading-[26px]'>Оплата</p>
                            </div>
                            <div className='pt-[30px] flex flex-col gap-5'>
                                <div>
                                    <input
                                        type="radio"
                                        id="payment1"
                                        value="При получении"
                                        checked={paymentMethod === "При получении"}
                                        onChange={() => setPaymentMethod("При получении")}
                                    />
                                    <label className='pl-[17px] text-[20px] font-[800] leading-[20px] text-[#A1A1A1]' htmlFor="payment1">При получении</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="payment2"
                                        value="Онлайн-оплата картой"
                                        checked={paymentMethod === "Онлайн-оплата картой"}
                                        onChange={() => setPaymentMethod("Онлайн-оплата картой")}
                                    />
                                    <label className='pl-[17px] text-[20px] font-[800] leading-[20px] text-[#A1A1A1]' htmlFor="payment2">Онлайн-оплата картой</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col gap-5 h-[250px] overflow-auto'>
                            {cart?.map((el, inx) => (
                                <div key={inx}>
                                    <div className='flex gap-[30px] pb-[20px]'>
                                        <div>
                                            <img className='w-[90px]' src={el.img} alt="" />
                                        </div>
                                        <div className='flex-grow flex flex-col justify-between'>
                                            <p className='text-[#031412] text-[16px] font-[800]'>{el.title}</p>
                                            <div className='flex justify-between w-full'>
                                                <p className='text-[#031412] text-[20px] font-[600]'>{el.quantity} шт.</p>
                                                <p className='text-[#9B0000] text-[20px] font-[800]'>{el.price} грн</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))}
                        </div>
                        <div className='px-[30px] py-[40px]'>
                            <div className='border flex'>
                                <input type="text" className='outline-none py-[20px] pl-[20px] flex-grow' placeholder='Введите прокод' />
                                <button className='bg-gradient-to-r px-[22px] from-[#5E3928] to-[#E4A16F] text-white'>Применить</button>
                            </div>
                            <div className='text-[#031412] py-[30px] flex flex-col gap-5'>
                                <p className='text-[35px] leading-[33px]'>Итого</p>
                                <p className='text-[40px] font-[800] leading-[38px]'>{sum} грн</p>
                            </div>
                            <hr />
                            <div className='flex gap-5 items-center py-[30px]'>
                                <div>
                                    <img src={Union} alt="" />
                                </div>
                                <p className='text-[#A1A1A1] text-[16px] font-[600] leading-[18px]'>У вас бесплатная доставка!</p>
                            </div>
                            <div>
                                <button
                                    onClick={(e) => handlePayment(e)}
                                    className='bg-gradient-to-r font-[800] w-full from-[#5E3928] to-[#E4A16F] text-white py-[17px]'
                                    disabled={loading}
                                >
                                    {loading ? 'Loading...' : 'Оформить заказ'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnOrderComponent;
