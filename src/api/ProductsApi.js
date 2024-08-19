
import img1 from '../assets/products/img1.png';
import img2 from '../assets/products/img2.png';
import img3 from '../assets/products/img3.png';
import img4 from '../assets/products/img4.png';
import img5 from '../assets/products/img5.png';


const ProductsApi = () => {


    const productsApiSwiper = [
        {
            id: 0,
            img: img1,
            title: "Для эфирных масел",
            skidka: false,
            price: 1525,
            oldPrice: 15613,
            name: "Медный чайник с фарфоровой ручкой"
        },
        {
            id: 1,
            img: img2,
            title: "Для гидролатов",
            skidka: false,
            price: 1525,
            oldPrice: 15613,
            name: "Медный чайник с фарфоровой ручкой"
        },
        {
            id: 2,
            img: img3,
            title: "Медная посуда",
            skidka: false,
            price: 1525,
            oldPrice: 15613,
            name: "Медный чайник с фарфоровой ручкой"
        },
        {
            id: 3,
            img: img4,
            title: "Аксессуары из меди",
            skidka: false,
            price: 10953,
            oldPrice: 1953,
            name: "Дистиллятор для получения гидролата 8л"
        },
        {
            id: 4,
            img: img5,
            title: "Индивидуальный заказ",
            skidka: false,
            price: 1525,
            oldPrice: 15613,
            name: "Медный чайник с фарфоровой ручкой"
        },
        {
            id: 5,
            img: img3,
            title: "Скидки и предложения",
            skidka: true,
            price: 1525,
            oldPrice: 15613,
            name: "Медный чайник с фарфоровой ручкой"
        },
    ]

    return { productsApiSwiper };
};

export default ProductsApi;