import React from 'react'
import top_ft_img from '../assets/images/top_ft_img.png';
import NEXTLIFE from '../assets/images/NEXTLIFE.png';
import toyar_logo from '../assets/images/toyar_logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Tiktok, Zalo } from '@/assets/svg';
import { Button, Input } from 'antd';


export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='top-footer'>
                <p>Không bỏ lỡ những khuyến mãi khác</p>
                <span>Đăng ký nhận tin nhắn để cập nhật những ưu đãi tuyệt vời và những món quà đặc biệt từ chúng tôi.</span>
                <Image
                    style={{ width: '390px', height: '180px' }}
                    src={top_ft_img}
                    alt="Picture"
                />
                {/* <div style={{ display: 'flex', alignItems: 'center', padding: '20px', width: '550px' }}>
                    <Input placeholder="Vui lòng nhập Email" style={{ borderRadius: '30px 0 0 30px', borderRight: 'none' }} />
                    <Button type="primary" style={{ borderRadius: '0 30px 30px 0', fontSize: '16px' }}>Đăng ký</Button>
                </div> */}
            </div>
            <div className='bottom-footer'>
                <Image
                    src={NEXTLIFE}
                    alt="Picture"
                />
                <p>Mang đến cho khách hàng trải nghiệm mua sắm và sử dụng <br />
                    sản phẩm tốt nhất, góp phần nâng tầm cuộc sống công nghệ của bạn.</p>
                <div className='panel-information'>
                    <div className='infor-item infor-company'>
                        <span className='text-connect'>KẾT NỐI  VỚI CHÚNG TÔI</span>
                        <div className='panel-icon'>
                            <Link href='#'>
                                <Instagram />
                            </Link>
                            <Link href='#'>
                                <Zalo />
                            </Link>
                            <Link href='#'>
                                <Facebook />
                            </Link>
                            <Link href='#'>
                                <Tiktok />
                            </Link>
                        </div>
                        <span >Địa chỉ: 19-21 Tân Cảng, P.25, Bình Thạnh, Thành phố Hồ Chí Minh</span>
                        <span >Bản quyền 2016 NextLife.vn</span>
                        <span style={{ fontWeight: 600 }}>Dự án thuộc Công Ty cổ phần TOYAR INC</span>
                        <Image
                            style={{ marginTop: 10 }}
                            src={toyar_logo}
                            alt="Picture"
                        />
                    </div>
                    <div className='infor-item panel-ft-menu'>
                        <Link href='#' className='link-item'>
                            <span>Trang chủ</span>
                        </Link>
                        <Link href='#' className='link-item'>
                            <span>Về NextLife</span>
                        </Link>
                        <Link href='#' className='link-item'>
                            <span>Sản phẩm</span>
                        </Link>
                        <Link href='#' className='link-item'>
                            <span>Dịch vụ</span>
                        </Link>
                        <Link href='#' className='link-item'>
                            <span>Tin tức</span>
                        </Link>
                        <Link href='#' className='link-item'>
                            <span>Liên hệ</span>
                        </Link>
                    </div>
                    <div className='infor-item' style={{ width: '167px' }}>
                        <Link href='#' className='link-item'>
                            <span style={{ fontWeight: 500, fontSize: 18 }}>Chính sách</span>
                        </Link>
                        <Link href='#' className='link-item'>
                            <span>Chính sách mua hàng</span>
                        </Link>
                        <Link href='#' className='link-item'>
                            <span>Chính sách bảo hành</span>
                        </Link>
                        <Link href='#' className='link-item'>
                            <span>Chính sách đại lý và chiết khấu</span>
                        </Link>
                        <Link href='#' className='link-item'>
                            <span>Chính sách giao hàng</span>
                        </Link>
                    </div>
                    <div className='infor-contact'>
                        <span>THÔNG TIN LIÊN HỆ</span>
                        <span>Hotline : 0903351360</span>
                        <span>Email : info@nextlife.vn</span>
                        <span>Tư vấn bán hàng : sales@nextlife.vn</span>
                        <span>CSKH : cskh@nextlife.vn</span>
                    </div>

                </div>
                <div className='end-footer'>
                    <span>©Nextlife 2024</span>
                    <span>Thuộc bản quyền của công ty Toyar INC</span>
                </div>
            </div>
        </div>
    )
}
