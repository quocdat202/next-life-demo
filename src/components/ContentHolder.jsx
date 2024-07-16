import React from 'react';
import { Flex, Layout } from 'antd';
import PRODUCT_OPTIONS from '@/data/ProductOptions';
import Carousels from './Carousels';
import holder1 from '../assets/images/holder1.png';
import holder2 from '../assets/images/holder2.png';
import holder3 from '../assets/images/holder3.png';
import holder4 from '../assets/images/holder4.png';
import holder5 from '../assets/images/holder5.png';
import { ArowRight } from '@/assets/svg';
import Image from 'next/image';
const { Header, Footer, Sider, Content } = Layout;

const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    color: '#fff',
    marginLeft: '20px',
};
const siderStyle = {
    textAlign: 'center',
    color: '#fff',
    background: '#F5F5F5'
};

export default function ContentHolder() {
    const LoadingSelectPanelCenter = (item, index) => {
        return (
            <div className="select-panel-col" key={index}>
                <a key={index} to="" className="select-panel-col-item select-panel-col-title">{item.name}</a>
                {item.datas.map((data, index) => <a to={data.path} className="select-panel-col-item" key={index}>{data.name}</a>)}
            </div>
        )
    }
    const LoadingSelectPanel = (item, index) => {
        return (
            <div className="select-panel container12Col" key={index}>
                <div className="row-12-no-margin select-panel-row">
                    <div className="select-panel-center col-no-padding c-9">
                        {item.attributes.map((attribute, index) => LoadingSelectPanelCenter(attribute, index))}
                    </div>
                    {/* <div className="select-panel-right col-no-padding c-3">
                        <img src="${URL}/Images/UserAvatar/quocdatavatar.png" className="select-panel-right-img" />
                        <p className="dat-said">Nhìn lol gì !!</p>
                    </div> */}
                </div>
            </div>
        )
    }
    const LoadingProductOptions = (item, index) => {
        return (
            <div className="menu-list-item" key={index}>
                <div className='panel-pro-item'>
                    <a className="pro-list-item" to={item.path}>
                        {item.icon()}
                        <p className="pro-list-item-text">{item.optionName}</p>
                    </a>
                    <ArowRight />
                </div>
                {
                    item.attributes ? LoadingSelectPanel(item, index) : <div></div>
                }
            </div>)
    }

    return (
        <Layout style={{
            padding: '40px 70px',
        }}>
            <Layout >
                <Content style={siderStyle}>
                    <div className="col-no-padding main-panel-menu">
                        <div className="main-panel-menu-list">
                            {
                                PRODUCT_OPTIONS.map((PRODUCT_OPTION, index) => LoadingProductOptions(PRODUCT_OPTION, index))
                            }
                        </div>
                    </div>
                </Content>
                <Sider width="70%" style={contentStyle}>
                    <Carousels />
                </Sider>
            </Layout>
            <Layout style={{ textAlign: 'center', marginTop: '80px' }}>
                <div className='holder-text'>
                    <span>Trải nghiệm mua sắm đỉnh cao</span>
                    <p>iPad phiên bản giới hạn với thiết kế sang trọng, tông màu xanh tinh tế và đầy đủ tính năng cần thiết cho trải nghiệm hoàn hảo.</p>
                </div>
                <div className='holder-card'>
                    <div className='card-content-left card-item'>
                        <div className='card-desciption'>
                            <span>Máy tính bảng</span>
                            <p>Nâng Tầm Trải Nghiệm Cùng iPad Đẳng Cấp</p>
                        </div>
                        <Image
                            className="holder-img-left"
                            src={holder1}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='card-content-right'>
                        <div className='content-righ-top'>
                            <div className='item-card-right-top card-item'>
                                <div className='card-desciption'>
                                    <span>Sạc dự phòng</span>
                                    <p>Năng Lượng Mọi Lúc, Mọi Nơi</p>
                                </div>
                                <Image
                                    className="holder-img-right"
                                    src={holder2}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div style={{ marginLeft: '30px' }} className='item-card-right-top card-item'>
                                <Image
                                    className="img-format-top"
                                    src={holder3}
                                    alt="Picture of the author"
                                />
                                <div className='card-desciption-bottom'>
                                    <span>Tai nghe</span>
                                    <p>Âm Thanh Hoàn Hảo, Trải Nghiệm Tuyệt Vời</p>
                                </div>

                            </div>
                        </div>
                        <div className='content-righ-bottom'>
                            <div className='item-card-right-bottom card-item'>
                                <Image
                                    className="img-format-top"
                                    src={holder4}
                                    alt="Picture of the author"
                                />
                                <div className='card-desciption-bottom'>
                                    <span>Cáp sạc</span>
                                    <p>Kết Nối Nhanh, Bền Bỉ</p>
                                </div>
                            </div>
                            <div style={{ marginLeft: '30px' }} className='item-card-right-bottom card-item card-img-right'>
                                <div className='card-desciption-accessory'>
                                    <span>Phụ kiện</span>
                                    <p>Hoàn Thiện Phong Cách, Tối Ưu Hiệu Suất</p>
                                </div>
                                <Image
                                    className="holder-img-right"
                                    src={holder5}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </Layout>
    )
}