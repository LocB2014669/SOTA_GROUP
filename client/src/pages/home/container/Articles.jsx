import React, { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { PiEyeLight } from "react-icons/pi";
import { SlBag } from "react-icons/sl";
import stable from "../../../constants/Stable";
import { Link } from "react-router-dom";
import { ModalProductDetails } from "../../../components/product/ModalProductDetails";

export const Articles = ({ className, data }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const handleOpenModal = (productId) => {
    setSelectedProductId(productId);
    document.getElementById("my_modal_1").showModal();
  };
  return (
    <div
      className={`bg-white item relative rounded-lg cursor-pointer py-4 group ${className}`}
    >
      {data?.giakm != "" && (
        <div className="absolute flex items-center justify-center top-4 left-3 p-4 rounded-full bg-[#eb0000] text-white font-bold z-10">
          <span className="absolute block">{data?.giakm}%</span>
        </div>
      )}

      <div className="flex flex-col">
        <div className="overflow-hidden rounded-lg bg-transparent h-[200px] relative w-full">
          <img
            className=" object-cover hover:scale-110 duration-500 ease-in-out w-full h-full"
            src={data?.photo ? stable.UPLOAD_THUMBS_PRODUCT + data?.photo : ""}
            alt=""
          />
          <div
            style={{ height: "calc(100% - 20px)" }}
            className="flex duration-500 inset-y-full group-hover:inset-y-12 ease-in-out flex-col item-center absolute text-2xl right-7 gap-2"
          >
            <div className="w-8 h-8 p-2 flex justify-center items-center rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:bg-[#b61615] hover:text-white duration-200 bg-white">
              <GrFavorite />
            </div>
            {/* modal */}
            <div
              onClick={() => handleOpenModal(data?.id)}
              className="w-8 h-8 p-2 flex justify-center items-center rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:bg-[#b61615] hover:text-white duration-200 bg-white"
            >
              <PiEyeLight />
            </div>
            {selectedProductId && (
              <ModalProductDetails productId={selectedProductId} />
            )}

            <div className="w-8 h-8 p-2 flex justify-center items-center rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:bg-[#b61615] hover:text-white duration-200 bg-white">
              <SlBag />
            </div>
          </div>
        </div>
        <div className="text-center px-4 h-[50px] ">
          <Link
            to={`/product/${data?.id}`}
            className="font-normal text-base line-clamp-2"
          >
            {data?.tenvi}
          </Link>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-center gap-x-3 px-4">
          {data?.gia && data.gia !== 0 ? (
            <div className="text-[#8C8C8C] text-xs">
              <span className="line-through">{data.gia.toLocaleString()}</span>
              <span className="text-xs relative top-[-7px] underline">đ</span>
            </div>
          ) : (
            ""
          )}
          {/* gia */}
          <div className="text-red-700 font-semibold">
            {data?.giamoi && data.giamoi !== "" ? (
              <span className="relative">
                <span className="text-md">{data.giamoi.toLocaleString()}</span>
                <span className="text-xs relative top-[-7px] underline">đ</span>
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
