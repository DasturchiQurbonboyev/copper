import React from 'react'
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'
import ProductsSwiper from '../../components/products_swiper/ProductsSwiper'
import CopperPro from '../../components/copperPro/CopperPro'
import ThinkAbout from '../../components/thinkAbout/ThinkAbout'
import ChooseUs from '../../components/chooseUs/ChooseUs'

const Home = () => {
    return (
        <>
            <Hero />
            <Products heroTitle={"Наша продукция"} ds={false} />
            <ProductsSwiper title={"Лучшие продажи"} componentBg="bg-[#F4F5F5]" />
            <ProductsSwiper title={"новинки"} />
            <CopperPro />
            <ProductsSwiper title={"мы рекомендуем  "} componentBg="bg-[#fff]" />
            <ProductsSwiper title={"Скидки  "} componentBg="bg-[#F4F5F5]" />
            <ThinkAbout title="Что думают о нас" positionTitle="text-center" />
            <ChooseUs />
        </>
    )
}

export default Home