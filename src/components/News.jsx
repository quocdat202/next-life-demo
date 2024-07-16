import React from 'react'
import { Divider, Layout } from 'antd';
import Image from 'next/image';
import item_news_1 from '../assets/images/item_news_1.png';
import item_news_2 from '../assets/images/item_news_2.png';

export default function News() {
    return (
        <Layout style={{
            padding: '40px 70px',
        }}>
            <div className='news-container'>
                <div className='title-info'>
                    <span>Tin tức cho bạn</span>
                    <p>Tùy chỉnh phong cách và tạo đột phá.</p>
                </div>
                <div className='content-news'>
                    <div className='item-news'>
                        <Image
                            style={{ width: '310px', height: '230px' }}
                            className="holder-img-right"
                            src={item_news_1}
                            alt="Picture"
                        />
                        <span>Sự kiện</span>
                        <Divider style={{ borderTop: '1px solid' }} />
                        <p>Tân binh NextLife đổ thị trường Việt Nam</p>
                        <span>03-07-2024</span>
                    </div>

                    <div className='item-news'>
                        <Image
                            style={{ width: '310px', height: '230px' }}
                            className="holder-img-right"
                            src={item_news_2}
                            alt="Picture"
                        />
                        <span>Tin tức</span>
                        <Divider style={{ borderTop: '1px solid' }} />
                        <p>Đồ gia dụng là gì? Tiêu chí lựa chọn đồ gia dụng hiện tại</p>
                        <span>03-07-2024</span>
                    </div>

                    <div className='item-news'>
                        <Image
                            style={{ width: '310px', height: '230px' }}
                            className="holder-img-right"
                            src={item_news_1}
                            alt="Picture"
                        />
                        <span>Sự kiện</span>
                        <Divider style={{ borderTop: '1px solid' }} />
                        <p>Tân binh NextLife đổ thị trường Việt Nam</p>
                        <span>03-07-2024</span>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
