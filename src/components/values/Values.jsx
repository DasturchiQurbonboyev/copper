import React from 'react'
import copperImg from '../../assets/about/copperImg.png'
import page1 from '../../assets/about/Page-1.png'
import page2 from '../../assets/about/Page-2.png'
import page3 from '../../assets/about/Page-3.png'

const Values = () => {
    return (
        <div className='py-[80px]'>
            <div className='kontainer grid min-[700px]:grid-cols-2 min-[850px]:items-center gap-[31px]'>
                <div>
                    <img src={copperImg} alt="" />
                </div>
                <div className='text-[#031412]'>
                    <p className='max-[700px]:text-center text-[20px] min-[400px]:text-[40px] min-[700px]:text-[50px] leading-[52.95px]   '>Наши ценности</p>
                    <p className='max-[700px]:text-center text-[16px] min-[500px]:text-[20px] leading-[24.98px] py-[40px]  '>Наше производство находится в Украине, но клиенты из более чем 50 стран радуются товарам, приобретенным в нашем магазине. </p>
                    <div className='flex flex-col gap-[40px]'>
                        <div className='flex items-center gap-[30px]'>
                            <div >
                                <img src={page1} alt="" />
                            </div>
                            <p className=' text-[16px] min-[500px]:text-[20px] min-[700px]:text-[25px] leading-[24.1px] font-[600]  '>Оперативность</p>
                        </div>
                        <div className='flex items-center gap-[30px]'>
                            <div >
                                <img src={page2} alt="" />
                            </div>
                            <p className=' text-[16px] min-[500px]:text-[20px] min-[700px]:text-[25px] leading-[24.1px] font-[600]  '>Качественный товар и сервис</p>
                        </div>
                        <div className='flex items-center gap-[30px]'>
                            <div >
                                <img src={page3} alt="" />
                            </div>
                            <p className=' text-[16px] min-[500px]:text-[20px] min-[700px]:text-[25px] leading-[24.1px] font-[600]  '>Гибкость</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Values