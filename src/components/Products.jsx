import { Button, Layout, Rate } from 'antd';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import product_ex_img from '../assets/images/product_ex_img.png';
import accessory_item_img from '../assets/images/accessory_item_img.png';
import {
    HeartOutlined
} from '@ant-design/icons';
import 'swiper/css';
import 'swiper/css/pagination';
import Countdown from './Countdown';

export default function Products() {

    const products = new Array(12).fill(null).map((_, index) => {
        return (
            <div key={index} className='item-card-product tablet-products'>
                <div className='panel-like'>
                    <Button shape='circle' style={{ border: 'none' }} icon={<HeartOutlined style={{ fontSize: '25px' }} />} />
                </div>
                <div className='panel-img'>
                    <Image
                        style={{ width: '120px' }}
                        className="holder-img-right"
                        src={product_ex_img}
                        alt="Picture of the author"
                    />
                </div>

                <div className='card-content'>
                    <p className='product-name'>Máy tính bảng NextLife 128Gb</p>
                    <div className='button-color'>
                        <Button type="primary" shape="circle">
                        </Button>
                        <Button style={{ background: 'black', marginLeft: 20 }} shape="circle">
                        </Button>
                        <Button style={{ background: 'red', marginLeft: 20 }} shape="circle">
                        </Button>
                        <Button style={{ background: '#22C55E', marginLeft: 20 }} shape="circle">
                        </Button>
                    </div>
                    <div className='price-product'>
                        <span>
                            3.500.000đ
                        </span>
                        <del>
                            7.000.000đ
                        </del>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className='products-container'>
            <Layout style={{
                padding: '40px 70px',
            }}>
                <div className='panel-products'>
                    <div className='header-panel-products'>
                        <div className='title-info'>
                            <span>Khám phá sản phẩm mới</span>
                            <p>Cập Nhật Xu Hướng, Trải Nghiệm Đỉnh Cao</p>
                        </div>
                        <div className='filter-button-groud'>
                            <Button size='large'>Máy tính bảng</Button>
                            <Button size='large'>Tai nghe</Button>
                            <Button size='large'>Sạc dự phòng</Button>
                            <Button size='large'>Dây cáp sạc</Button>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide className='slide-card-product item-card-product'>
                            <Image
                                style={{ width: '250px', marginRight: 30 }}
                                className="holder-img-right"
                                src={product_ex_img}
                                alt="Picture of the author"
                            />
                            <div className='card-content'>
                                <p className='product-name'>Máy tính bảng NextLife 128Gb</p>
                                <div className='button-color'>
                                    <Button style={{ backgroundColor: '#0000FA' }} shape="circle">
                                    </Button>
                                    <Button style={{ background: 'black', marginLeft: 20 }} shape="circle">
                                    </Button>
                                    <Button style={{ background: 'red', marginLeft: 20 }} shape="circle">
                                    </Button>
                                    <Button style={{ background: '#22C55E', marginLeft: 20 }} shape="circle">
                                    </Button>
                                </div>
                                <Rate style={{ padding: '10px 0' }} allowHalf defaultValue={5} />
                                <span className='desciption'>Tốc độ nhanh hơn, chất lượng hình ảnh sắc nét và thời lượng pin lâu hơn, đáp ứng tối đa nhu cầu của bạn</span>
                                <div className='panel-price-product'>
                                    <span>
                                        3.500.000đ
                                    </span>
                                    <del>
                                        7.000.000đ
                                    </del>
                                </div>
                                <span className='free-ship'>Miễn phí giao hàng</span>
                                <Button style={{ backgroundColor: '#0000FA', color: 'white', width: '100%' }} size='large'>
                                    Xem chi tiết
                                </Button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide-card-product item-card-product'>
                            <Image
                                style={{ width: '250px' }}
                                className="holder-img-right"
                                src={product_ex_img}
                                alt="Picture of the author"
                            />
                            <div className='card-content'>
                                <p className='product-name'>Máy tính bảng NextLife 128Gb</p>
                                <div className='button-color'>
                                    <Button style={{ backgroundColor: '#0000FA' }} shape="circle">
                                    </Button>
                                    <Button style={{ background: 'black', marginLeft: 20 }} shape="circle">
                                    </Button>
                                    <Button style={{ background: 'red', marginLeft: 20 }} shape="circle">
                                    </Button>
                                    <Button style={{ background: '#22C55E', marginLeft: 20 }} shape="circle">
                                    </Button>
                                </div>
                                <Rate style={{ padding: '10px 0' }} allowHalf defaultValue={5} />
                                <span className='desciption'>Tốc độ nhanh hơn, chất lượng hình ảnh sắc nét và thời lượng pin lâu hơn, đáp ứng tối đa nhu cầu của bạn</span>
                                <div className='panel-price-product'>
                                    <span>
                                        3.500.000đ
                                    </span>
                                    <del>
                                        7.000.000đ
                                    </del>
                                </div>
                                <span className='free-ship'>Miễn phí giao hàng</span>
                                <Button style={{ backgroundColor: '#0000FA', color: 'white', width: '100%' }} size='large'>
                                    Xem chi tiết
                                </Button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='slide-card-product item-card-product'>
                            <Image
                                style={{ width: '250px' }}
                                className="holder-img-right"
                                src={product_ex_img}
                                alt="Picture of the author"
                            />
                            <div className='card-content'>
                                <p className='product-name'>Máy tính bảng NextLife 128Gb</p>
                                <div className='button-color'>
                                    <Button style={{ backgroundColor: '#0000FA' }} shape="circle">
                                    </Button>
                                    <Button style={{ background: 'black', marginLeft: 20 }} shape="circle">
                                    </Button>
                                    <Button style={{ background: 'red', marginLeft: 20 }} shape="circle">
                                    </Button>
                                    <Button style={{ background: '#22C55E', marginLeft: 20 }} shape="circle">
                                    </Button>
                                </div>
                                <Rate style={{ padding: '10px 0' }} allowHalf defaultValue={5} />
                                <span className='desciption'>Tốc độ nhanh hơn, chất lượng hình ảnh sắc nét và thời lượng pin lâu hơn, đáp ứng tối đa nhu cầu của bạn</span>
                                <div className='panel-price-product'>
                                    <span>
                                        3.500.000đ
                                    </span>
                                    <del>
                                        7.000.000đ
                                    </del>
                                </div>
                                <span className='free-ship'>Miễn phí giao hàng</span>
                                <Button style={{ backgroundColor: '#0000FA', color: 'white', width: '100%' }} size='large'>
                                    Xem chi tiết
                                </Button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='products-next-life'>
                    <div className='header-products-next-life'>
                        <div className='title-info'>
                            <span>Sản phẩm của NextLife</span>
                            <p>Giúp bạn có cảm giác mua hàng an tâm  và thú vị khi tới với chúng tôi</p>
                        </div>
                    </div>
                    <div className='products-nl-container'>
                        <div className='item-product'>
                            <Image
                                style={{ width: '174px', height: '230px' }}
                                className="holder-img-right"
                                src={product_ex_img}
                                alt="Picture of the author"
                            />
                            <div className='content-item-product'>
                                <span className='name-item-pro'>Máy tính bảng NextLife 128Gb</span>
                                <p>Tốc độ nhanh hơn, chất lượng hình ảnh sắc nét và thời lượng pin lâu hơn, đáp ứng tối đa nhu cầu của bạn</p>
                                <Button style={{ backgroundColor: '#0000FA', color: 'white', width: '100%' }} size='large'>
                                    Xem chi tiết
                                </Button>
                            </div>
                        </div>
                        <div className='item-product'>
                            <Image
                                style={{ width: '174px', height: '230px' }}
                                className="holder-img-right"
                                src={product_ex_img}
                                alt="Picture of the author"
                            />
                            <div className='content-item-product'>
                                <span className='name-item-pro'>Máy tính bảng NextLife 128Gb</span>
                                <p>Tốc độ nhanh hơn, chất lượng hình ảnh sắc nét và thời lượng pin lâu hơn, đáp ứng tối đa nhu cầu của bạn</p>
                                <Button style={{ backgroundColor: '#0000FA', color: 'white', width: '100%' }} size='large'>
                                    Xem chi tiết
                                </Button>
                            </div>
                        </div>
                        <div className='item-product'>
                            <Image
                                style={{ width: '174px', height: '230px' }}
                                className="holder-img-right"
                                src={product_ex_img}
                                alt="Picture of the author"
                            />
                            <div className='content-item-product'>
                                <span className='name-item-pro'>Máy tính bảng NextLife 128Gb</span>
                                <p>Tốc độ nhanh hơn, chất lượng hình ảnh sắc nét và thời lượng pin lâu hơn, đáp ứng tối đa nhu cầu của bạn</p>
                                <Button style={{ backgroundColor: '#0000FA', color: 'white', width: '100%' }} size='large'>
                                    Xem chi tiết
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bn-new-products'>
                    <div className='content-new-products'>
                        <div className='title-banner'>
                            <p>Âm nhạc bùng nổ</p>
                            <p>Khoe cá tính mới</p>
                        </div>
                        <Countdown
                            initialDays={1}
                            initialHours={12}
                            initialMinutes={30}
                            initialSeconds={45}
                            classname={{ container: '', item: 'panel-count-down' }}
                        />
                        <Button
                            style={{
                                backgroundColor: '#0000FA',
                                color: 'white',
                                border: 'none',
                                marginTop: 20
                            }}
                            size='large'
                        >
                            Mua ngay
                        </Button>
                    </div>
                </div>

                <div className='tablet-products-container'>
                    <div className='header-products-next-life'>
                        <div className='title-info'>
                            <span>Máy tính bảng của NextLife</span>
                            <p>Cập Nhật Xu Hướng, Trải Nghiệm Đỉnh Cao</p>
                        </div>
                    </div>
                    <div className='tablet-products-panel'>
                        {
                            products
                        }
                        <Button size='large'>Xem thêm</Button>

                    </div>
                </div>
            </Layout>
            <div className='accessory-banner'>
            </div>
            <Layout style={{ padding: '40px 70px', }}>
                <div className='panel-accessory'>
                    <div className='header-panel-products'>
                        <div className='title-info'>
                            <span>Phụ kiện</span>
                            <p>Tùy chỉnh phong cách và tạo đột phá.</p>
                        </div>
                        <div className='filter-button-groud'>
                            <Button size='large'>Ốp lưng</Button>
                            <Button size='large'>Cường lực</Button>
                            <Button size='large'>Túi phụ kiện</Button>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        className="mySwiper"
                    >

                        {
                            new Array(5).fill(null).map((_, index) => {
                                return (
                                    <SwiperSlide key={index} className='slide-card-accessory'>
                                        <Image
                                            style={{ width: '250px', marginRight: 30 }}
                                            className="holder-img-right"
                                            src={accessory_item_img}
                                            alt="Picture of the author"
                                        />
                                        <div className='card-content-accessory'>
                                            <span className='category-title'>Phụ kiện cho máy tính bảng</span>
                                            <span className='accessory-name'>Tai nghe NextLife</span>
                                            <p>Tốc độ nhanh hơn, chất lượng hình ảnh sắc nét và thời lượng pin lâu hơn...</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }


                    </Swiper>
                </div>
            </Layout>

        </div>

    )
}
