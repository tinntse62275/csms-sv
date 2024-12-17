import { Carousel } from 'antd';
import Image from 'next/image';

const slideList = [
    {
        src: '/img/banner/banner1.jpg',
        alt: 'slide_01'
    },
    {
        src: '/img/banner/banner2.jpg',
        alt: 'slide02'
    },
    {
        src: '/img/banner/banner3.jpg',
        alt: 'slide03'
    }
];

const Slider = () => {
    return (
        <Carousel autoplay>
            {slideList &&
                slideList.map((slide, index) => {
                    return (
                        <div key={index}>
                            <div className="position-relative" style={{ paddingTop: '40%' }}>
                                <Image src={slide.src} fill alt={slide.alt} />
                            </div>
                        </div>
                    );
                })}
        </Carousel>
    );
};

export default Slider;