import React, { useState } from "react";
import { PiEyeLight } from "react-icons/pi";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { getPhotoGallery, getProductById } from "../../services/productAPI";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { stable } from "../../constants";

export const ModalProductDetails = ({ productId }) => {
  const [quantity, setQuantity] = useState(1);
  // console.log(quantity, "quantity");
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
  const { data, isLoading, isFetching } = useQuery({
    queryFn: () => getProductById({ productId }),
    queryKey: ["productById", productId],
    onSuccess: (data) => {},
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  // const {
  //   data: dataPhotoGallery,
  //   isLoading: isLoadingGallery,
  //   isFetching,
  // } = useQuery({
  //   queryFn: () => getPhotoGallery({ productId }),
  //   queryKey: ["photoGallery", productId],
  //   onSuccess: (data) => {
  //     // Xử lý dữ liệu thành công
  //     console.log(data, "dataPhotoGallery");
  //   },
  //   onError: (error) => {
  //     toast.error(error.message);
  //     console.log(error);
  //   },
  // });

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        {!isLoading && !isFetching && (
          <div className="modal-box !max-w-[60rem]">
            <div className="flex items-center justify-between">
              <div>
                <img src={stable.UPLOAD_THUMBS_PRODUCT + data?.photo} alt="" />
              </div>
              <div>
                <h1>{data?.tenvi}</h1>
                <div className="flex items-center gap-x-3">
                  <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center gap-x-3 px-4">
                    {data?.gia && data.gia !== 0 ? (
                      <div className="text-[#8C8C8C] text-base">
                        <span className="line-through">
                          {data.gia.toLocaleString()}
                        </span>
                        <span className="text-xs relative top-[-7px] underline">
                          đ
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="text-red-700 font-semibold">
                      {data?.giamoi && data.giamoi !== "" ? (
                        <span className="relative">
                          <span className="text-3xl font-bold">
                            {data.giamoi.toLocaleString()}
                          </span>
                          <span className="text-xs relative top-[-7px] underline">
                            đ
                          </span>
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <form action="/" className=" w-full">
                  <div className="flex flex-col gap-y-2 w-full my-5">
                    <div className="flex items-center border w-[100px] justify-between lg:mr-0 md:mr-0 mr-[320px]">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleQuantity("giam");
                        }}
                        className="px-2 py-2 bg-white text-2xl hover:bg-[#2a3f50] w-full"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="w-full outline-none border-none text-center focus:!outline-none focus:!border-none"
                        min={1}
                        value={quantity}
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleQuantity("tang");
                        }}
                        className="px-2 py-2 bg-white text-2xl hover:bg-[#2a3f50] w-full"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between lg:gap-y-0 md:gap-y-0 gap-y-2 gap-x-5">
                      <div className="w-full lg:w-auto md:w-auto">
                        <button
                          type="button
            "
                          className="lg:w-auto md:w-auto w-full uppercase text-base font-bold bg-[#FF3E3E] hover:opacity-85 text-white px-10 py-3 rounded-lg"
                        >
                          mua ngay
                        </button>
                      </div>

                      <div className="flex items-center justify-center lg:w-auto md:w-auto w-full">
                        <button
                          type="submit
            "
                          className="lg:w-auto md:w-auto w-full uppercase text-base font-bold bg-[#2a3f50] hover:opacity-90 text-white lg:px-16 rounded-lg"
                        >
                          thêm vào giỏ
                          <p className="font-normal text-[10px] uppercase">
                            Thêm trước thanh toán sau
                          </p>
                        </button>
                      </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <button className="w-full text-center text-white bg-[#2a3f50] font-bold rounded-lg py-2 hover:opacity-85">
                        MUA QUA FUNFIN
                        <p className="font-normal text-base">
                          Đeo trước trả sau miễn lãi
                        </p>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
};
