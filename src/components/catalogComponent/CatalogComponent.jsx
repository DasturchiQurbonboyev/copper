import React from 'react'
import img1 from '../../assets/products/img1.png'
import img2 from '../../assets/products/img2.png'
import img3 from '../../assets/products/img3.png'
import img4 from '../../assets/products/img4.png'
import search from '../../assets/logo/search.png'
import ProductsApi from '../../api/ProductsApi'
import heart1 from '../../assets/products/heart1.png'
import heart2 from '../../assets/products/heart2.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineShoppingCart, MdShoppingCart } from 'react-icons/md'
import { addToCart } from '../../context/cartSlice'
import { toggleToWishes } from '../../context/wishlistSlice'

const CatalogComponent = () => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.value);
    const wishlist = useSelector(state => state.wishlist.value)
    const { productsApiSwiper } = ProductsApi()

    const catalogApi = [
        {
            img: img1,
            title: "Для эфирных масел",
            deg: 0
        },
        {
            img: img2,
            title: "Для эфирных масел",
            deg: 0
        },
        {
            img: img3,
            title: "Медная посуда",
            deg: 0
        },
        {
            img: img4,
            title: "Аксессуары из меди",
            deg: 90
        },
    ]



    return (
        <div>
            <div className='kontainer'>
                <div className='py-[40px]'>
                    <p className='text-[50px]    leading-[52.95px]  pb-[31px] '>Каталог</p>
                    <div className='grid  grid-cols-2 min-[900px]:grid-cols-4 gap-[30px]'>
                        {
                            catalogApi?.map((el, inx) => (
                                <div key={inx} className='relative max-h-[147px] overflow-hidden group hover:scale-105 transform transition-transform duration-300'>
                                    <div className=' -mt-[40px] min-[600px]:-mt-[100px]  min-[900px]:-mt-[30px] min-[1100px]:-mt-[80px]'>
                                        <img className={`max-[600px]:scale-50 ${el.deg ? "transform min-[600px]:rotate-90" : ""}`} src={el.img} alt="" />
                                    </div>
                                    <div className={`absolute h-full bottom-0 w-full bg-gradient-to-t from-[#072C26]/100" from-[#072C26]/40 to-[#072C26]/0 group-hover:from-[#CB8D62] group-hover:to-transparent group-hover:via-[#CB8D62]/0`}>
                                        <div className='absolute bottom-5 w-full'>
                                            <p className='text-[15px] min-[600px]:text-[20px] font-[800] leading-[10px] min-[600px]:leading-[19.28px] text-white  text-center'>{el.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='border-b'>

                </div>
                <div className='min-[550px]:flex justify-between items-center max-[550px]:pb-[50px] '>
                    <div className='py-[40px]      '>
                        <div className='border-b   flex items-center  max-w-[210px] justify-between '>
                            <input type="text" name="" id="" placeholder='Поиск' className='' />
                            <img src={search} alt="" />
                        </div>
                    </div>
                    <div className='flex items-center gap-[18px] '>
                        <label htmlFor="#">Сортировка:</label>
                        <select className='text-[20px] text-[#031412] font-[800] leading-[19.28px]    ' name="" id="">
                            <option value="">По цене</option>
                            <option value="">По цене</option>
                            <option value="">По цене</option>
                            <option value="">По цене</option>
                            <option value="">По цене</option>
                        </select>
                    </div>
                </div>
                <div className='pb-[100px]'>
                    <div className='grid min-[550px]:grid-cols-2 min-[990px]:grid-cols-3 gap-[31px] justify-center'>
                        {productsApiSwiper?.map((el, inx) => (
                            <div key={inx} >
                                <div className='flex group'>
                                    <div className='relative transition-transform duration-300 ease-in-out group-hover:scale-105'>
                                        <Link to={`/single/${el.id}`}>
                                            <img src={el.img} alt="" />
                                        </Link>
                                        <div onClick={() => dispatch(toggleToWishes(el))} className='bg-white cursor-pointer absolute top-0 right-0 py-4 px-[10px]'>
                                            {
                                                wishlist.some(w => w?.id == el.id) ?
                                                    <img src={heart2} alt="" /> :
                                                    <img src={heart1} alt="" />
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
                                <div className={` flex justify-between items-center max-w-[446px] pt-[30px]`}>
                                    <p className='text-start  max-w-[247px] font-[600] text-[17px] min-[750px]:text-[20px] leading-[19.28px]    '>Медный чайник с фарфоровой ручкой</p>
                                    <p className='text-end text-[19px] min-[750px]:text-[30px] leading-[28.92px] font-[800]     '>1 953 грн</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogComponent