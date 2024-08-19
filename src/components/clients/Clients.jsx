import React from 'react'
import sum from '../../assets/about/sum.png'


const Clients = () => {
    return (
        <>
            <div className='kontainer'>
                <div className='grid max-[850px]:gap-[50px] min-[850px]:grid-cols-2 py-[100px]'>
                    <div>
                        <p className='max-[850px]:text-center text-[#031412]  text-[20px] min-[400px]:text-[40px] min-[850px]:text-[50px] font-[400] leading-[52.95px]  min-[850px]:max-w-[310px]  '>Наши клиенты</p>
                        <p className='max-[850px]:text-center  text-[#031412] text-[16px] min-[400px]:text-[20px] leading-[24.98px] min-[850px]:max-w-[517px] pt-[23px]  '>Мы требовательны к себе, чтобы каждый день становится лучше для наших клиентов и находить лучшие решения для каждого из них</p>
                    </div>
                    <div className='bg-gradient-to-r from-[#5E3928] to-[#E4A16F] bg-clip-text'>
                        <p className='max-[850px]:text-center text-transparent text-[18px] min-[400px]:text-[30px] min-[850px]:text-[50px] font-[900]  '>Счетчик клиентов</p>
                        <div className='pt-[25px] max-[850px]:flex max-[850px]:justify-center'>
                            <img src={sum} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients