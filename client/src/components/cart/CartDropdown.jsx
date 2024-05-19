import React, { useState } from "react";

export const CartDropdown = () => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (el) => {
    if (el === "giam") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      } else {
        toast.error("Phải chọn ít nhất 1 sản phẩm");
      }
    } else {
      setQuantity(quantity + 1);
    }
  };
  const dataCart = [
    {
      title: "Đồng Hồ Patek Philippe Complications",
      img: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/rose-gold-ladies-complications-38-mm.jpg?v=1705931789290",
      price: 100000,
    },

    {
      title: "Đồng Hồ Patek Philippe Complications",
      img: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/rose-gold-ladies-complications-38-mm.jpg?v=1705931789290",
      price: 100000,
    },
    {
      title: "Đồng Hồ Patek Philippe Complications",
      img: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/rose-gold-ladies-complications-38-mm.jpg?v=1705931789290",
      price: 100000,
    },
    {
      title: "Đồng Hồ Patek Philippe Complications",
      img: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/rose-gold-ladies-complications-38-mm.jpg?v=1705931789290",
      price: 100000,
    },
    {
        title: "Đồng Hồ Patek Philippe Complications",
        img: "https://bizweb.dktcdn.net/thumb/medium/100/508/659/products/rose-gold-ladies-complications-38-mm.jpg?v=1705931789290",
        price: 100000,
      },
  ];
  return (
    <div className="flex flex-col w-[350px] z-[1000] bg-white text-black ">
      <div className="flex flex-col justify-start overflow-auto max-h-[360px]">
        {dataCart?.map((item, index) => (
          <div key={index} className="flex border-b py-2 px-2 ">
            <div>
              <input type="checkbox" />
            </div>
            <div className="w-[40%] ml-5">
              <img className="w-full" src={item?.img} alt="" />
            </div>
            <div className="flex-col w-full">
              <div className="flex justify-between">
                <span className="text-[13px] text-[#231f20] text-wrap w-[160px] line-clamp-2 hover:text-brown">{item.title}</span>
                <button className="border-none outline-none text-base text-[#30656b] hover:text-brown ">Xóa</button>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center border w-[100px] justify-between lg:mr-0 md:mr-0 mr-[320px]">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleQuantity("giam");
                    }}
                    className="px-2 py-2 bg-white text-xs hover:bg-[#2a3f50] w-full"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="w-full outline-none border-none text-center focus:!outline-none focus:!border-none"
                    min={1}
                    defaultValue={quantity}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleQuantity("tang");
                    }}
                    className="px-2 py-2 bg-white text-xs hover:bg-[#2a3f50] w-full"
                  >
                    +
                  </button>
                </div>
                <div className="text-red-500">
                  <span className="text-bas font-bold ">
                    {item?.price.toLocaleString()}
                  </span>
                  <span className="text-xs relative top-[-7px] underline">
                    đ
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-5">
        <div className="flex justify-between px-2">
          <p>Tổng tiền</p>
          <p className="text-2xl text-red-500">0</p>
        </div>
        <div className="w-full flex justify-center items-center pb-2">
          <button className="w-[98%]  rounded-md py-3 bg-blueDe hover:opacity-85 text-white font-semibold">
            Thanh Toán
          </button>
        </div>
      </div>
    </div>
  );
};
