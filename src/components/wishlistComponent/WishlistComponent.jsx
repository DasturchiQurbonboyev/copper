import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import heart1 from '../../assets/products/heart1.png'
import heart2 from '../../assets/products/heart2.png'
import { toggleToWishes } from '../../context/wishlistSlice'
import { MdOutlineShoppingCart, MdShoppingCart } from 'react-icons/md'
import { addToCart } from '../../context/cartSlice'
import EmptyWishlist from '../empty/EmptyWishlist'

const WishlistComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const wishlist = useSelector(state => state.wishlist.value)
    const cart = useSelector(state => state.cart.value)
    const dispatch = useDispatch()

    if (wishlist.length == 0) {
        return (<EmptyWishlist />)
    }

    return (
        <div className='pt-[180px] pb-[100px]'>
            <div className="kontainer">
                <p className=' uppercase  text-[30px] min-[500px]:text-[40px] min-[800px]:text-[50px] leading-[37.45px] font-[400] pb-[46px]   '>Нравиться</p>
                <div className='grid justify-center min-[660px]:grid-cols-2 min-[970px]:grid-cols-3 gap-5 '>

                    {
                        wishlist?.map((el, inx) => (
                            <div key={inx}>
                                <div className='flex group'>
                                    <div className='relative transition-transform  duration-300 ease-in-out group-hover:scale-105'>
                                        <Link to={`/single/${el.id}`}>
                                            <img src={el.img} alt="" />
                                        </Link>
                                        <div onClick={() => dispatch(toggleToWishes(el))} className='bg-white cursor-pointer absolute top-0 right-0 py-4 px-[10px]'>
                                            {
                                                wishlist.some(w => (w.id == el.id)) ?
                                                    <img className='' src={heart2} alt="" /> :
                                                    <img className='' src={heart1} alt="" />
                                            }
                                        </div>
                                        <div onClick={() => dispatch(addToCart(el))} className='bg-white cursor-pointer absolute top-0 left-0 py-4 px-[10px]'>
                                            {
                                                cart.some(w => w?.id == el.id) ?
                                                    <MdShoppingCart className='size=[25px]' size={30} />
                                                    :
                                                    <MdOutlineShoppingCart className='size=[25px]' size={30} />
                                            }
                                        </div>

                                    </div>
                                </div>
                                <div className={`$ flex justify-between items-center max-w-[446px] pt-[30px]`}>
                                    <p className='text-start  max-w-[257px] font-[600] text-[16px] min-[500px]:text-[20px] leading-[19.28px]    '>Медный чайник с фарфоровой ручкой</p>
                                    <p className='text-start text-[18px] min-[500px]:text-[30px] leading-[28.92px] font-[800]     '>1 953 грн</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WishlistComponent