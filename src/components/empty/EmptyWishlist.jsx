import React from 'react'
import { Link } from 'react-router-dom'

const EmptyWishlist = () => {
    return (
        <div className='py-[80px]'>
            <div className="kontainer">
                <div className='flex justify-center items-center'>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-wishlist-11941567-9741055.png" alt="" />
                </div>
                <div className={` pt-[42px] text-center `}>
                    <Link to={"/"}>
                        <button className='max-w-[327px]  outline-none    w-full py-[16px] bg-gradient-to-r from-[#5E3928] to-[#E4A16F] text-white text-[18px] font-[800] leading-[17.35px]    '>Вернуться на главную страницу</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EmptyWishlist