import React from 'react'
import SingleComponent from '../../components/singleComponent/SingleComponent'
import ThinkAbout from '../../components/thinkAbout/ThinkAbout'
import ProductsSwiper from '../../components/products_swiper/ProductsSwiper'

const SinglePage = () => {
    return (
        <>
            <SingleComponent />
            <ThinkAbout />
            <ProductsSwiper title="Вам также будет интересно…" buttonNone="hidden" componentBg="bg-[#F4F5F5]" />
        </>
    )
}

export default SinglePage