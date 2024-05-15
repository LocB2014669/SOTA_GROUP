import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
export const TitlePopup = ({ hanlderClick }) => {
  const [state, setstate] = useState(true);
  const data = [
    "Đánh giá sản phẩm",
    "Tối ưu SEO",
    "TOPSEO - Công cụ AI hỗ trợ SEO",
    "Mua X tặng Y",
    "Ứng dụng Affiliate",
    "Đa ngôn ngữ",
    "Tính năng Livechat",
  ];
  const hanlderClickClose = () => {
    hanlderClick();
  };
  return (
    <div className="bg-[#2a3f50] p-2 flex flex-col justify-start gap-y-1 absolute top-[-500px] z-[700] w-[300px] text-[#fff] rounded-lg">
      <button onClick={hanlderClickClose} className="flex justify-end w-full">
        <IoMdClose />
      </button>
      <h2 className="text-[17px] font-[700] mb-[10px]">
        Tích hợp sẵn các ứng dụng
      </h2>
      <ul className="list-disc">
        {data?.map((item, index) => (
          <li key={index} className="mb-3 text-[17px] mx-10 ">
            <a href="#" className="hover:opacity-80 cursor-pointer">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-[14px] italic leading-5 pb-5 px-2">
        Lưu ý với các ứng dụng trả phí bạn cần cài đặt và mua ứng dụng này trên
        App store Sapo để sử dụng ngay
      </p>
    </div>
  );
};
