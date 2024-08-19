import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='pt-[180px] pb-[80px]'>
            <div className='kontainer'>
                <div className='flex justify-center items-center'>
                    <img className='w-[400px]' src="https://static.vecteezy.com/system/resources/thumbnails/005/006/007/small/no-item-in-the-shopping-cart-click-to-go-shopping-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" alt="" />
                </div>
                <div className='flex justify-center'>
                    <Link to={"/"}>
                        <button className='bg-gradient-to-r font-[800] px-[35px] from-[#5E3928] to-[#E4A16F] text-white py-[17px]'>Вернуться на главную страницу</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EmptyCart