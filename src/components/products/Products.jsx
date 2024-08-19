import React from 'react';

import ProductsApi from '../../api/ProductsApi';
import { Link } from 'react-router-dom';

const Products = ({ heroTitle }) => {
    const { productsApiSwiper } = ProductsApi()

    return (
        <div className='py-[80px]'>
            <div className="kontainer">
                <div className=''>
                    <p className='text-center pb-[46px] text-[24px]  min-[450px]:text-[40px]  min-[900px]:text-[50px] leading-[37.45px] '>{heroTitle}</p>
                    <div className='grid grid-cols-2 min-[450px]:grid-cols-3 gap-[20px] min-[450px]:gap-[15px] min-[750px]:gap-[31px] justify-center'>
                        {productsApiSwiper?.map((el) => (
                            <div key={el.id} className='relative group overflow-hidden '>
                                <Link to={`/single/${el.id}`}>
                                    <div >
                                        <img className='transform transition-transform duration-300 group-hover:scale-105' src={el.img} alt="" />
                                    </div>
                                    <div className={`absolute h-full bottom-0 w-full bg-gradient-to-t ${el.skidka ? "from-[#072C26]/100" : "from-[#072C26]/40"} to-[#072C26]/0 group-hover:from-[#CB8D62] group-hover:to-transparent group-hover:via-[#CB8D62]/0`}>
                                        <div className={`${el.skidka ? "absolute text-white top-[30px] flex flex-col gap-[9px] left-[55px]" : "hidden"}`} >
                                            <p className='text-[10px] min-[550px]:text-[10px]  min-[700px]:text-[20px] min-[900px]:text-[30px] min-[1200px]:text-[40px]  font-[900] max-[550px]:leading-[10px] min-[550px]:leading-[10px] min-[700px]:leading-[10px]  min-[800px]:leading-[20px] max-[1200px]:leading-[38px]     '>-30 %</p>
                                            <p className='text-[15px] min-[550px]:text-[20px] min-[700px]:text-[40px] min-[900px]:text-[50px] min-[1200px]:text-[70px]  font-[900] max-[550px]:leading-[15px] min-[550px]:leading-[20px] min-[700px]:leading-[40px]  min-[800px]:leading-[30px] max-[1200px]:leading-[67px]  text-end   '>-50 %</p>
                                            <p className='text-[20px] min-[550px]:text-[30px] min-[700px]:text-[50px] min-[900px]:text-[70px] min-[1200px]:text-[100px]  font-[900] max-[550px]:leading-[10px] min-[550px]:leading-[40px] min-[700px]:leading-[50px]  min-[800px]:leading-[40px] max-[1200px]:leading-[96.4px]     '>-80 %</p>
                                        </div>
                                        <div className='absolute bottom-1 min-[500px]:bottom-5 w-full'>
                                            <p className='text-[12px] px-[10px]  min-[450px]:text-[15px] min-[600px]:text-[20px] min-[900px]:text-[30px] font-[600]  max-[900px]:leading-[28.92px] text-white text-center'>{el.title}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Products;
