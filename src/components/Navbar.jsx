import React from 'react'
import { CategoryIcon, HotLine, Logo } from '@/assets/svg'
import { SearchOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';

export default function Navbar() {

    return (
        <div className='navbar-container  flex justify-between w-full '>
            <div className='flex justify-between items-center mr-8'>
                <div className='logo mr-8'>
                    <Logo />
                </div>
                <Button className='bg-gray-100 border-none mr-8 text-sm' size='large' icon={<CategoryIcon />}>Danh Mục</Button>
                <Input className='text-sm' style={{ width: '400px' }} size="large" placeholder="Bạn cần tìm gì?" prefix={<SearchOutlined style={{ color: '#dddddd' }} />} />
            </div>
            <div className='flex items-center'>
                <div className='flex items-center mr-8'>
                    <HotLine />
                    <span className='ml-4 text-sm'> Hotline <br />0903351360</span>
                </div>
                <Button size='large' type='primary' ghost className='text-custom-blue border-custom-blue text-sm' >Đăng ký trở thành đại lý</Button>
            </div>

        </div>
    )
}
