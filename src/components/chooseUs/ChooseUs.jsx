import React from 'react'
import img1 from '../../assets/chooseUs/img1.png'
import img2 from '../../assets/chooseUs/img2.png'
import img3 from '../../assets/chooseUs/img3.png'
import img4 from '../../assets/chooseUs/img4.png'
import img5 from '../../assets/chooseUs/img5.png'
import img6 from '../../assets/chooseUs/img6.png'
import img7 from '../../assets/chooseUs/img7.png'
import img8 from '../../assets/chooseUs/img8.png'

const ChooseUs = () => {


    const choose = [
        {
            img: img1,
            title: "Аутентичность",
            description: "Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен."
        },
        {
            img: img2,
            title: "Изысканность",
            description: "Наши изделия из меди являются очень практичными. В то же время они наполнят особой магией ваш дом или рабочее...."
        },
        {
            img: img3,
            title: "Честная оплата",
            description: "Мы стремимся предоставить лучший товар по лучшей цене с сервисом высокого уровня. Но все начинается c...."
        },
        {
            img: img4,
            title: "Большой ассортимент",
            description: "У нас есть все от миниатюрных настольных паровых дистилляторов эфирных масел до крупногабаритного оборудования..."
        },
        {
            img: img5,
            title: "Доставка по всему миру",
            description: "Вы можете получить нашу продукцию в кратчайшие сроки в любую точку земного шара."
        },
        {
            img: img6,
            title: "Гарантия качества",
            description: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. "
        },
        {
            img: img7,
            title: "Удобство в использовании",
            description: "Наши изделия из меди имеют уникальный дизайн, который разрабатывался нами с целью получения максимальной..."
        },
        {
            img: img8,
            title: "Забота об окружающей среде",
            description: "От 2 до 5% от стоимости каждого приобретенного товара в нашем магазине мы направляем на защиту...."
        },

    ]



    return (
        <div className='bg-[#f5f5f5] pt-[80px]'>
            <div className='kontainer'>
                <p className='text-[24px] min-[500px]:text-[40px] min-[900px]:text-[50px] leading-[37.45px] text-center   '>Почему выбирают нас</p>
                <div className='grid grid-cols-2 min-[700px]:grid-cols-3 min-[1000px]:grid-cols-4 gap-[30px] pb-[80px]  pt-[50px]  '>
                    {
                        choose?.map((el, inx) => (
                            <div key={inx}>
                                <div className='bg-[linear-gradient(278.32deg,#0B3F37_-7.03%,#CB8D62_136.33%)] w-[50px] min-[500px]:w-[76px] h-[50px] min-[500px]:h-[76px] flex justify-center items-center   '><img src={el.img} alt="" /></div>
                                <p className='pt-[24px] pb-[18px] text-[16px] min-[500px]:text-[20px] font-[800] leading-[19.28px] text-[#031412]     '>{el.title}</p>
                                <p className='text-[#031412] text-[12px] min-[500px]:text-[14px]  leading-[18.82px]   '>{el.description}</p>
                                <select className='bg-clip-text text-[14px] min-[500px]:text-[16px]  outline-none bg-[linear-gradient(65.81deg,#5E3928_-24.09%,#E4A16F_104.02%)] ' name="" id="">
                                    <option value="">Читать больше</option>
                                    <option value="">Читать больше</option>
                                    <option value="">Читать больше</option>
                                    <option value="">Читать больше</option>
                                    <option value="">Читать больше</option>
                                    <option value="">Читать больше</option>
                                </select>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ChooseUs