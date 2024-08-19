import React from 'react'
import union from "../../assets/about/Union.png"
import hr from "../../assets/about/Line.png"
import imzo from "../../assets/about/imzo.png"
import hero from "../../assets/about/hero.png"

const AboutHero = () => {
    return (
        <div className='bg-[#f5f5f5] pt-[160px] pb-[60px]'>
            <div className='kontainer'>

                <div className='grid min-[650px]:grid-cols-2 gap-[68px] items-center'>
                    <div className='flex flex-col gap-[50px]'>
                        <p className='text-[30px]  min-[400px]:text-[60px] min-[850px]:text-[100px] leading-[22px] min-[400px]:leading-[74.9px] text-[#031412]'>О нас</p>
                        <div>
                            <img src={hr} alt="" />
                        </div>
                        <div className='flex gap-[21px] min-[400px]:gap-[30px] min-[850px]:gap-[39px]'>
                            <div className='flex items-start'>
                                <img src={union} alt="" />
                            </div>
                            <div className='bg-clip-text bg-gradient-to-r from-[rgb(94,57,40)] to-[#E4A16F]'>
                                <p className='text-[20px] min-[400px]:text-[30px] min-[850px]:text-[50px] italic leading-[21px] min-[400px]:leading-[32px] min-[850px]:leading-[48.2px] text-transparent    '>Мы любим все, что сделано из меди</p>
                            </div>
                            <div className='flex items-end'>
                                <img src={union} alt="" />
                            </div>
                        </div>
                        <div className='bg-clip-text bg-gradient-to-r from-[#5E3928] to-[#E4A16F] flex  items-center    '>
                            <p className='text-transparent text-[18px] min-[850px]:text-[30px] font-[900] leading-[28.92px] max-w-[165px]'>Иван Иванов</p>
                            <div>
                                <img src={imzo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={hero} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHero