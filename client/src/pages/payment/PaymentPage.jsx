import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlinePayment } from "react-icons/md";
import { ContainerOrderProduct } from "./container/ContainerOrderProduct";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { SelectAddressVN } from "../../components/selectAddressVN/SelectAddressVN";
import { Radio } from "antd";

export const PaymentPage = () => {
  const [httt, setHttt] = useState(null);
  const dataInputClient = [
    {
      type: "input",
      label: "Email",
      brand: "email",
      id: "email",
    },
    {
      type: "input",
      label: "Họ và tên",
      brand: "text",
      id: "hoten",
    },
    {
      type: "inputComponent",
      label: "Số điện thoại",
      brand: "tel",
      id: "phone",
    },
    {
      type: "input",
      label: "Địa chỉ (tùy chọn)",
      brand: "text",
      id: "diachi",
    },
    {
      type: "select",
      label: "",
      brand: "component",
    },
    {
      type: "textarea",
      label: "Ghi chú tùy chọn",
      id: "ghichu",
    },
  ];
  const cartState = useSelector((state) => state.cart);
  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, httt: httt }));
  }, [httt]);

  const onChange = (e) => {
    setHttt(e.target.value);
  };
  // console.log(httt);
  const [formData, setFormData] = useState({
    email: "",
    hoten: "",
    phone: "",
    diachi: "",
    // httt: httt,
    tamtinh: 0,
    tonggia: 0,
    phiship: 0,
    city: "",
    district: "",
    wards: "",
    ghichu: "",
  });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const handlerSubmit = () => {
    console.log(formData, "formData");
    
  };
  return (
    <div className="mx-auto h-screen">
      <div className="flex justify-between gap-x-5 h-full">
        <div className="w-3/4 pl-48 py-10">
          <h2 className="text-3xl font-medium text-[#2a9dcc] pb-3">
            Ego Helios
          </h2>
          <button onClick={handlerSubmit}>CHECKOUT</button>
          <div className="flex justify-between gap-x-5">
            <div className="w-full">
              <h3 className="text-2xl font-medium">Thông tin nhận hàng</h3>
              <div className="w-full">
                {dataInputClient.map((item, index) => (
                  <div key={index} className="relative w-full mb-3">
                    {item.type === "input" && (
                      <div>
                        <input
                          id={item.id}
                          type={item.brand}
                          onChange={handleInputChange}
                          className="rounded px-3 py-2.5 border border-[#d9d9d9] outline-none focus:border-[#66afe9] !focus:shadow-[0 0 0 1px #66afe9] peer w-full"
                        />
                        <label
                          htmlFor={item.id}
                          className={`text-[#999] text-[.84em] absolute text-sm left-3 ease-in-out duration-300 transition-all peer-focus:top-0 ${
                            formData[item.id] ? "top-0" : "top-[10px]"
                          }`}
                        >
                          {item.label}
                        </label>
                      </div>
                    )}
                    {item.type === "inputComponent" && (
                      <div>
                        <PhoneInput
                          country={"vn"}
                          className={
                            "peer !focus:border-[#66afe9] outline-none border border-[#d9d9d9] !focus:shadow-[0 0 0 1px #66afe9]"
                          }
                          value={formData.phone}
                          onChange={(phone) =>
                            setFormData({ ...formData, phone })
                          }
                        />
                      </div>
                    )}
                    {item.type === "select" && (
                      <div>
                        <SelectAddressVN
                          onSelectChange={(type, value) => {
                            setFormData({ ...formData, [type]: value });
                          }}
                          onWardChange={(value) => {
                            setFormData({ ...formData, wards: value });
                          }}
                        />
                      </div>
                    )}
                    {item.type === "textarea" && (
                      <div>
                        <textarea
                          id={item.id}
                          rows={2}
                          onChange={handleInputChange}
                          className="w-full py-4 border border-[#d9d9d9] outline-none px-3 peer focus:border-[#66afe9] focus:shadow-[0 0 0 1px #66afe9]"
                        ></textarea>
                        <label
                          htmlFor={item.id}
                          className={`text-[#999] text-[.84em] absolute left-3 ease-in-out duration-300 transition-all peer-focus:top-0  ${
                            formData[item.id] ? "top-0" : "top-[10px]"
                          }`}
                        >
                          {item.label}
                        </label>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full">
              <div className="w-full">
                <h2 className="text-2xl font-medium">Vận chuyển</h2>
                <div className="bg-[#d1ecf1] w-full rounded-md py-2.5 text-[#0c5460] px-3">
                  <p>Vui lòng nhập thông tin giao hàng</p>
                </div>
              </div>
              <div className="my-16">
                <Radio.Group onChange={onChange} value={httt}>
                  <h2 className="text-2xl font-medium">Thanh toán</h2>
                  <div className="py-3 px-2 flex items-center justify-between gap-x-3 border rounded-t w-full">
                    <Radio value={638}>Thu hộ (COD)</Radio>
                    <MdOutlinePayment />
                  </div>
                  <div className="py-3 px-2 flex items-center justify-between gap-x-3 border rounded-b w-full">
                    <Radio value={639}>Chuyển khoản</Radio>
                    <MdOutlinePayment />
                  </div>
                </Radio.Group>
              </div>
            </div>
          </div>
        </div>
        <ContainerOrderProduct
          dataProductOrder={cartState?.cartInfo}
          dataOrder={formData}
        />
      </div>
    </div>
  );
};
