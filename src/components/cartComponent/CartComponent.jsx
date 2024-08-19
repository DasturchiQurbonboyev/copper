import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart, MdShoppingCart } from 'react-icons/md';
import { decCart, incCart, removeFromCart } from '../../context/cartSlice';
import EmptyCart from '../empty/EmptyCart';

const CartComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const wishlist = useSelector(state => state.wishlist.value)
    const cart = useSelector(state => state.cart.value);
    const dispatch = useDispatch()

    let sum = cart.reduce((acc, el) => {
        return acc += el.quantity * el.price
    }, 0)

    if (cart.length == 0) {
        return (
            <EmptyCart />
        )
    }

    return (
        <div className='pt-[180px] pb-[80px]'>
            <div className="kontainer">
                <div className='flex justify-between items-center bg-clip-text pb-[46px] bg-gradient-to-r from-[#5E3928] to-[#E4A16F]'>
                    <p className=' uppercase  text-[30px] min-[500px]:text-[40px] min-[700px]:text-[50px] leading-[37.45px] font-[400]    '>Корзина</p>
                    <p className=' text-[20px] min-[500px]:text-[30px] min-[700px]:text-[40px] text-transparent  font-[400] '>{sum} грн</p>
                </div>
                <div className=' flex flex-col gap-[15px]'>

                    {
                        cart?.map((el, inx) => (
                            <div key={inx}>
                                <div className=' grid grid-cols-2 gap-[20px] min-[680px]:grid-cols-4 justify-between items-center'>
                                    <div className='w-[100px]'>
                                        <Link to={`/single/${el.id}`}>
                                            <img src={el.img} alt="" />
                                        </Link>
                                    </div>
                                    <div>
                                        <p className='text-[25px] font-[600]'>{el.price} грн</p>
                                    </div>
                                    <div>
                                        <div className='flex'>
                                            <button onClick={() => dispatch(incCart(el))} className='w-[50px] h-[50px] border flex justify-center items-center'>+</button>
                                            <p className='w-[50px] h-[50px] border flex justify-center items-center'>{el.quantity}</p>
                                            <button disabled={el.quantity == 1} onClick={() => dispatch(decCart(el))} className='w-[50px] h-[50px] border flex justify-center items-center'>-</button>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-[25px] font-[600]'>{el.price * el.quantity} грн</p>
                                    </div>
                                </div>
                                <p className='text-[25px]'>{el.title}</p>
                            </div>
                        ))
                    }
                </div>
                <div className={` pt-[42px] text-end `}>
                    <Link to={'/order'}>
                        <button className='max-w-[327px]  outline-none    w-full py-[16px] bg-gradient-to-r from-[#5E3928] to-[#E4A16F] text-white text-[18px] font-[800] leading-[17.35px]    '>Оформить заказ</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartComponent