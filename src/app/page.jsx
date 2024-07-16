'use client';
import Navbar from "@/components/Navbar";
import Image from "next/image";
import "@/styles/index.scss";
import ContentHolder from "@/components/ContentHolder";
import { Breadcrumb, Layout, theme } from 'antd';
import PanelDeal from "@/components/PanelDeal";
import Products from "@/components/Products";
import News from "@/components/News";
import Footer from "@/components/Footer";
export default function Home() {
  const { Header, Content } = Layout;
  return (
    <Layout style={{ backgroundColor: 'unset' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          width: '100%',
          display: 'flex',
          backgroundColor: 'white',
          alignItems: 'center',
          padding: '40px 70px'
        }}
      >
        <Navbar />
      </Header>
      <Content
        style={{
          backgroundColor: '#F5F5F5'
        }}
      >
        <div
          style={{
            minHeight: 380,
          }}
        >
          <ContentHolder />
          <PanelDeal />
          <Products />
          <News />
        </div>
      </Content>
      <Footer />

    </Layout>
  );
}
