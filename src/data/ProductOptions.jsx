
import { Accessory, BackupCharger, CategoryIcon, ChargingCable, EarphoneIcon, TabletIcon } from "@/assets/svg";
const PRODUCT_OPTIONS = [
  {
    optionName: "Máy tính bảng",
    path: "/laptop",
    icon: () => {
      return <TabletIcon className="pro-list-item-icon" />;
    },
    attributes: [
      {
        name: "Thương hiệu",
        datas: [
          {
            name: "DELL",
            path: "laptop/brand/Dell",
          },
          {
            name: "ASUS",
            path: "laptop/brand/ASUS",
          },
          {
            name: "ACER",
            path: "laptop/brand/Acer",
          },

        ]
      },

      {
        name: "RAM",
        datas: [
          {
            name: "4GB",
            path: "laptop/ram/4"
          },
          {
            name: "8GB",
            path: "laptop/ram/8"
          },
          {
            name: "16GB",
            path: "laptop/ram/16"
          },
          {
            name: "32GB",
            path: "laptop/ram/32"
          },
        ],
      },
      {
        name: "VGA",
        datas: [
          {
            name: "NVIDIA",
            path: "laptop/vga/nvidia"
          },
          {
            name: "AMD",
            path: "laptop/vga/amd"
          },
        ]
      },
      {
        name: "Theo giá",
        datas: [
          {
            name: "Dưới 10 triệu",
            path: "laptop/gia/0/10000000"
          },
          {
            name: "10-15 triệu",
            path: "laptop/gia/10000000/15000000"
          },
          {
            name: "15-20 triệu",
            path: "laptop/gia/15000000/20000000"
          },
          {
            name: "20-30 triệu",
            path: "laptop/gia/20000000/30000000"
          },
          {
            name: "30-50 triệu",
            path: "laptop/gia/30000000/50000000"
          },
          {
            name: "Trên 50 triệu",
            path: "laptop/gia/50000000/999"
          },
        ]
      },

    ]
  },
  {
    optionName: "Tai nghe",
    path: "/pc",
    icon: () => {
      return <EarphoneIcon className="pro-list-item-icon" />;
    },
    attributes: [
      {
        name: "Mainboard",
        datas: [
          {
            name: "ASUS",
            path: "pc/mainboard/asus",
          },
          {
            name: "MSI",
            path: "pc/mainboard/msi"
          },
          {
            name: "Intel",
            path: "pc/mainboard/intel"
          },
          {
            name: "AMD",
            path: "pc/mainboard/amd"
          },
          {
            name: "GIGABYTE",
            path: "pc/mainboard/gigabyte"
          }
        ]
      },
      {
        name: "Thương hiệu cpu",
        datas: [
          {
            name: "Intel",
            path: "pc/cputype/Intel"
          },
          {
            name: "AMD",
            path: "pc/cputype/AMD"
          },
        ]
      },
      {
        name: "RAM",
        datas: [
          {
            name: "4GB",
            path: "pc/ram/4GB"
          },
          {
            name: "8GB",
            path: "pc/ram/8GB"
          },
          {
            name: "16GB",
            path: "pc/ram/16GB"
          },
          {
            name: "32GB",
            path: "pc/ram/32GB"
          },
          {
            name: "64GB",
            path: "pc/ram/64GB"
          }
        ]
      },
      {
        name: "Thương hiệu VGA",
        datas: [
          {
            name: "NVIDIA",
            path: "pc/vgatype/nvidia"
          },
          {
            name: "AMD",
            path: "pc/vgatype/amd"
          },
          {
            name: "ASUS",
            path: "pc/vgatype/asus"
          },
          {
            name: "SamSung",
            path: "pc/vgatype/samsung"
          }
        ]
      }
    ]
  },
  {
    optionName: "Cáp sạc",
    path: "/screen",
    icon: () => {
      return <ChargingCable className="pro-list-item-icon" />;
    },
    attributes: [
      {
        name: "Thương hiệu",
        datas: [
          {
            name: "LG",
            path: "screen/brand/lg"
          },
          {
            name: "DELL",
            path: "screen/brand/dell"
          },
          {
            name: "Acer",
            path: "screen/brand/acer"
          },
          {
            name: "Asus",
            path: "screen/brand/asus"
          },
          {
            name: "LCD",
            path: "screen/brand/lcd"
          }
        ]
      },
    ]
  },
  {
    optionName: "Sạc dự phòng",
    path: "/keyboard",
    icon: () => {
      return <BackupCharger className="pro-list-item-icon" />;
    },
    attributes: [
      {
        name: "Kiểu kết nối",
        datas: [
          {
            name: "Bàn phím có dây",
            path: "keyboard/ketnoi/Bàn phím có dây"
          },
          {
            name: "Bàn phím Không dây",
            path: "keyboard/ketnoi/Bàn phím không dây"
          },
          {
            name: "Đa kết nối",
            path: "keyboard/ketnoi/Đa kết nối"
          }
        ]
      },
      {
        name: "Thương hiệu",
        datas: [
          {
            name: "Dareu",
            path: "keyboard/brand/dareu"
          },
          {
            name: "Royal Kludge",
            path: "keyboard/brand/rk"
          },
          {
            name: "AKKO",
            path: "keyboard/brand/akko"
          },
          {
            name: "Logitech",
            path: "keyboard/brand/logitech"
          },
          {
            name: "HyperX",
            path: "keyboard/brand/hyperx"
          },
          {
            name: "Corsair",
            path: "keyboard/brand/corsair"
          },
          {
            name: "Cooler Master",
            path: "keyboard/brand/coolermaster"
          },
          {
            name: "Dell",
            path: "keyboard/brand/dell"
          },
          {
            name: "Rapoo",
            path: "keyboard/brand/rapoo"
          },
          {
            name: "Phillip",
            path: "keyboard/brand/philip"
          },
          {
            name: "Razer",
            path: "keyboard/brand/razer"
          }
          ,
          {
            name: "Steel Series",
            path: "keyboard/brand/steelseries"
          }
        ]
      },
    ]
  },
  {
    optionName: "Phụ kiện",
    path: "/mouse",
    icon: () => {
      return <Accessory className="pro-list-item-icon" />;
    },
    attributes: [

      {
        name: "Kiểu kết nối",
        datas: [
          {
            name: "Chuột có dây",
            path: "mouse/kieuketnoi/Chuột có dây"
          },
          {
            name: "Chuột không dây",
            path: "mouse/kieuketnoi/Chuột không dây"
          },
        ]
      },
      {
        name: "Kiểu đèn",
        datas: [
          {
            name: "RGB",
            path: "mouse/led/RGB"
          },
          {
            name: "Led đơn",
            path: "mouse/led/len đơn"
          },
          {
            name: "Xanh Lá",
            path: "mouse/led/xanh lá"
          }
        ]
      },
      {
        name: "Kết nối",
        datas: [
          {
            name: "USB 2.0",
            path: "mouse/ketnoi/USB 2.0"
          },
          {
            name: "2.4GHz Wireless",
            path: "mouse/ketnoi/2.4GHz Wireless"
          }
        ]
      },

      {
        name: "Giá",
        datas: [
          {
            name: "Dưới 500.000đ",
            path: "mouse/gia/0/500000"
          },
          {
            name: "500.000đ - 1tr",
            path: "mouse/gia/500000/1000000"
          },
          {
            name: "1-5 tr",
            path: "mouse/gia/1000000/5000000"
          },
          {
            name: "5-10 tr",
            path: "mouse/gia/5000000/10000000"
          },
          {
            name: "Trên 10 triệu",
            path: "mouse/gia/10000000/999"
          },
        ]
      }
    ]
  },

];
export default PRODUCT_OPTIONS;
