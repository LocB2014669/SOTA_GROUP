import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MainLayout } from "../../components/MainLayout";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { ItemCart } from "../../components/cart/ItemCart";

export const CartPage = () => {
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [dataCartDisplay, setDataCartDisplay] = useState([]);
  const cartState = useSelector((state) => state.cart);
  console.log(cartState?.cartInfo, "dataCart");
  const dispatch = useDispatch();
  useEffect(() => {
    setDataCartDisplay(cartState?.cartInfo);
  }, [cartState?.cartInfo]);
  const addItemPayCart = (price) => {
    setTotalPrice(totalPrice + price);
  };
  const handleRemoveItem = (dataItem, curPrice, quantity) => {
    console.log(curPrice, "curPrice");
    dispatch(removeItem(dataItem.id));
    const priceItem = -quantity * curPrice;
    console.log(priceItem, "priceItem");
    addItemPayCart(priceItem);
  };
  useEffect(() => {
    setBreadCrumbsData([
      {
        name: "Trang Chủ",
        link: "/",
      },
      {
        name: "Giỏ hàng",
        link: "/cart",
      },
    ]);
  }, []);

  return (
    <MainLayout>
      <section className="max-w-6xl mx-auto">
        <BreadCrumbs data={breadCrumbsData} />
        <article>
          <div>
            <div className="w-full">
              <h2 className="text-2xl font-bold my-5">Giỏ hàng</h2>
              <div className="border">
                <div className=" bg-white z-[2000] border py-2 text-base font-bold">
                  <div className="flex items-center justify-between">
                    <span className="block ml-28">Thông tin sản phẩm</span>
                    <span className="ml-56">Đơn giá</span>
                    <span>Số lượng</span>
                    <span>Thành tiền</span>
                  </div>
                </div>
                <div className="overflow-y-auto h-full max-h-[275px] px-2">
                  {dataCartDisplay?.map((item, index) => (
                    <ItemCart
                      data={item}
                      key={index}
                      addItemPayCart={addItemPayCart}
                      remmoveItem={handleRemoveItem}
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-end w-full gap-x-40 mt-5">
                <span>Tổng tiền:</span>
                <span className="text-price font-bold">
                  {totalPrice.toLocaleString()}{" "}
                  <span className="text-xs relative top-[-7px] underline">
                    đ
                  </span>
                </span>
              </div>
              <div className="flex justify-end w-full my-3">
                <button
                  disabled={totalPrice === 0 ? true : false}
                  className="w-1/3  duration-200 px-3 py-2 rounded border-[#516f86] border bg-[#516f86] hover:bg-white hover:text-[#516f86] text-white font-semibold"
                >
                  Thanh Toán
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </MainLayout>
  );
};
