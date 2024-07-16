import React from 'react'
import Image from 'next/image';
import product_ex_img from '../assets/images/product_ex_img.png';
import { Button, Rate } from 'antd';
import {
    HeartOutlined
} from '@ant-design/icons';
import Countdown from './Countdown';
import { Container } from 'postcss';
export default function PanelDeal() {

    return (
        <div className='panel-deal cover-img'>
            <div className='deal-countdown cover-img'>
                <span>Kết thúc sau </span>
                <Countdown initialDays={1} initialHours={12} initialMinutes={30} initialSeconds={45} classname={{ container: '', item: 'panel-count-down' }} />
            </div>
            <div className='product-deal '>
                <div className='item-card-product'>
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
                    </div>
                </div>
                <div className='item-card-product'>
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
                    </div>
                </div>
                <div className='item-card-product'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
