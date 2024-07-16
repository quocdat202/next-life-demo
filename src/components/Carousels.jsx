import React from 'react';
import { Carousel } from 'antd';
import banner1 from '../assets/images/banner1.png';
import banner2 from '../assets/images/banner2.png';
import banner3 from '../assets/images/banner3.png';
import banner4 from '../assets/images/banner4.png';
import Image from 'next/image';

const contentStyle = {
    width: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const Carousels = (props) => {
    return (
        <Carousel autoplay>
            {/* {
                props?.items.length > 0 && props?.items.map((item, index) => (
                    <div key={index} style={contentStyle}>
                        <img src={item.src} />
                    </div>
                ))
            } */}
            <div>
                <Image
                    style={contentStyle}
                    src={banner1}
                    alt="Picture of the author"
                />
            </div>
            <div>
                <Image
                    style={contentStyle}
                    src={banner2}
                    alt="Picture of the author"
                />
            </div>
            <div>
                <Image
                    style={contentStyle}
                    src={banner3}
                    alt="Picture of the author"
                />
            </div>
            <div>
                <Image
                    style={contentStyle}
                    src={banner4}
                    alt="Picture of the author"
                />
            </div>
        </Carousel>
    )
}
export default Carousels;