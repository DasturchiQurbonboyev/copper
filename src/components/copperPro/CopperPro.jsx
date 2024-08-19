import React from 'react'
import copperImg from '../../assets/homeCopper/copperImg.png'
import group1 from '../../assets/homeCopper/group1.png'

const CopperPro = () => {
    return (
        <div className={`home-Copper  py-[80px] relative max-w-[1500px] mx-auto`}>
            <div className='kontainer grid max-[720px]:gap-3 min-[720px]:grid-cols-2'>
                <div className='z-[1] text-white flex flex-col gap-[20px] min-[900px]:gap-[50px] '>
                    <p className='text-[45px] min-[500px]:text-[90px] min-[720px]:text-[80px] min-[1200px]:text-[140px] font-[400] leading-[104.86px]    '>1 + 1 = 3</p>
                    <p className='max-w-[300px] min-[900px]:max-w-[530px] text-[20px] min-[900px]:text-[30px] font-[600] leading-[33.74px]      '>Закажите два товара и получите третий бесплатно</p>
                    <div className=' pt-[42px] '>
                        <button className='max-w-[327px]  outline-none    w-full py-[16px] bg-gradient-to-r from-[#5E3928] to-[#E4A16F] text-white text-[18px] font-[800] leading-[17.35px]    '>Перейти в каталог</button>
                    </div>
                </div>
                <div>
                    <img className='h-full z-[2]' src={group1} alt="" />
                </div>
            </div>
            <div className='text-end absolute top-0   left-0 bottom-0    '>
                <img className=' object-cover   h-full ' src={copperImg} alt="" />
            </div>
        </div>
    )
}

export default CopperPro