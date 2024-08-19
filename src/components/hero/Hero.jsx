import React from 'react'
import line from '../../assets/hero/Line1.png'


const Hero = () => {
    return (
        <div className='bg__hero__img bg-no-repeat bg-center pt-[100px]'>
            <div className="kontainer">
                <div className='py-[100px]'>
                    <div className=' max-[450px]:max-w-[200px]'>
                        <p className='font-[400] text-[30px] min-[450px]:text-[60px] min-[900px]:text-[100px] leading-[30px] min-[450px]:leading-[67px] min-[900px]:leading-[74.9px] text-white  '>Хит продаж</p>
                        <div className=' py-[25px] min-[900px]:py-[50px]'>
                            <img src={line} alt="" />
                        </div>
                        <div className='flex flex-col gap-10'>
                            <p className='max-w-[357px]  min-[900px]:max-w-[533px] text-[20px] min-[450px]:text-[30px] min-[900px]:text-[50px] font-[800] leading-[25px] min-[450px]:leading-[38.52px] min-[900px]:leading-[48.2px] text-white    '>Дистиллятор для эфирных масел </p>
                            <div className='flex justify-between max-w-[327px]'>
                                <p className='text-[16px] min-[450px]:text-[24px] min-[900px]:text-[30px] text-white leading-[15px] min-[450px]:leading-[23.14px] min-[900px]:leading-[28.9px]     '>Цена</p>
                                <p className='text-[16px] min-[450px]:text-[24px] min-[900px]:text-[30px] font-[800] leading-[15px] min-[450px]:leading-[23.14px]  min-[900px]:leading-[28.92px] text-white      '>4 906 грн</p>
                            </div>
                            <div className='max-w-[155px] min-[450px]:max-w-[327px] '>
                                <button className='w-full py-[16px] bg-gradient-to-r from-[#5E3928] to-[#E4A16F] text-white text-[18px] font-[800] leading-[17.35px]    '>Купить</button>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero