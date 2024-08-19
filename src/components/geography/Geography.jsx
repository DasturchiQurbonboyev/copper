import React from 'react'
import location from '../../assets/about/location.png'

const Geography = () => {
    return (
        <div className='py-[30px] min-[400px]:py-[80px] bg-[#f5f5f5]'>
            <div className='kontainer flex max-[850px]:flex-col gap-[15px] min-[400px]:gap-[30px] min-[850px]:gap-[70px] items-center'>
                <div className='text-[#031412]'>
                    <p className='text-[20px] min-[400px]:text-[40px] min-[850px]:text-[50px] min-[850px]:leading-[52.95px] max-[850px]:text-center  min-[850px]:max-w-[310px] '>Наша география</p>
                    <p className='text-[16px] min-[850px]:text-[20px] leading-[24.98px] max-[850px]:text-center min-[850px]:max-w-[365px] pt-[38px]   '>Наше производство находится в Украине, но клиенты из более чем 50 стран радуются товарам, приобретенным в нашем магазине. </p>
                </div>
                <div>
                    <img src={location} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Geography