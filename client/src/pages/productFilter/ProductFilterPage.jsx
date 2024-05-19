import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../../services/productAPI";
import toast from "react-hot-toast";
import { AriticelsTabs } from "../home/container/Tabs/contentTabs/AriticelsTabs";
import { BiFilterAlt } from "react-icons/bi";
import { TbLayoutGrid } from "react-icons/tb";
import { GoColumns } from "react-icons/go";
import { AriticelCol } from "../../components/AriticelCol";
import { Slider, Switch } from "antd";
import { BsSliders } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
export const ProductFilterPage = () => {
  const [checkMenuFilter, setCheckMenuFilter] = useState(false);
  const [breadCrumbsData, setBreadCrumbsData] = useState([]);
  const handleDisplayFilters = () => {
    setCheckMenuFilter(!checkMenuFilter);
  };
  const [checkView, setCheckView] = useState(false);
  const hanldeChangeView = () => {
    setCheckView(!checkView);
  };

  const { data: dataProductFilter, isLoading: isLoadingProductFilter } =
    useQuery({
      queryFn: () => getAllProduct({}),
      queryKey: ["productFilter"],
      onSuccess: (data) => {},
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });
  useEffect(() => {
    setBreadCrumbsData([
      {
        name: "Trang Chủ",
        link: "/",
      },
      {
        name: "Sản phẩm",
        link: "/products",
      },
    ]);
  }, []);
  const dataFilter = [
    {
      title: "Thương Hiệu",
      type: "checkbox",
      items: [
        "Apple",
        "Casio",
        "Citizen",
        "Hublot",
        "Patek Philippe",
        "Xiaomi",
        "Zenith",
      ],
    },

    {
      title: "Tìm Theo Loại",
      type: "checkbox",
      items: ["Chạy pin", "Máy Automatic", "Máy cơ"],
    },
    {
      title: "Theo Khoảng Giá",
      type: "rangePrice",
    },
    {
      title: "Chức Năng Nổi Bật",
      type: "checkbox",
      items: [
        "Chống nước",
        "Chống va đập",
        "Thể thao mạnh",
        "Nghe gọi",
        "Nhắn tin",
        "Tích hợp GPS",
        "Sử dụng AI",
      ],
    },
    {
      title: "Theo Kích Cỡ",
      type: "checkboxRow",
      items: ["32mm", "32mm", "32mm", "32mm", "32mm", "32mm", "32mm"],
    },
  ];
  const dataRaio = ["Hàng mới", "Giá thấp đến cao", "Giá cao xuống thấp"];
  return (
    <MainLayout checkFloat={checkMenuFilter}>
      <section className="max-w-6xl mx-auto my-10">
        <BreadCrumbs data={breadCrumbsData} />
        <article className="w-full lg:flex md:flex lg:gap-[20px] md:gap-[20px]">
          <div
            className={`lg:w-1/4 md:w-1/4 lg:bg-transparent md:bg-transparent bg-white z-[200] lg:top-auto md:top-auto top-0  lg:static md:static fixed transition-all duration-500 ease-in-out ${
              checkMenuFilter ? "right-0 w-4/5 p-3" : "-right-full w-full"
            }`}
          >
            <div>
              <h2 className="text-2xl font-bold uppercase">Bộ lọc sản phẩm</h2>
              <p className="text-nowrap text-sm text-gray-500">
                giúp lọc nhanh sản phẩm tìm kiếm
              </p>
            </div>
            {dataFilter?.map((item, index) => (
              <div key={index} className="my-5">
                <h2 className="text-lg font-bold">{item.title}</h2>
                {item.type === "checkbox" ? (
                  <div>
                    {item.items.map((el, indexSub) => (
                      <div key={indexSub} class="flex items-center my-3">
                        <input
                          id={`checked-checkbox_${el}_${indexSub}`}
                          type="checkbox"
                          name={`${el}`}
                          value=""
                          class="w-4 h-4 text-blue-600 border-black rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <label
                          for={`checked-checkbox_${el}_${indexSub}`}
                          class="ms-4 text-sm font-medium text-gray-900"
                        >
                          {el}
                        </label>
                      </div>
                    ))}
                  </div>
                ) : item.type === "checkboxRow" ? (
                  <div className="flex w-full  flex-wrap gap-2">
                    {item.items.map((el, indexSub) => (
                      <div key={indexSub} class="flex items-center">
                        <label
                          for={`checked_size_${indexSub}`}
                          class="text-sm font-medium text-gray-900 border rounded-md pr-3"
                        >
                          <input
                            id={`checked_size_${indexSub}`}
                            name="checkSize"
                            type="checkbox"
                            value=""
                            className="!border-none boxCheck_Size"
                          />

                          {el}
                        </label>
                      </div>
                    ))}
                  </div>
                ) : (
                  //   <div className="flex relative">
                  //     <span className="left_ranger w-7 h-7 bg-red-500 rounded-full block"></span>
                  //     <div className="w-full h-[3px] bg-[#930d18] before:bg-price before:w-full before:h-0 before:absolute">
                  //       <span className="right_ranger"></span>
                  //     </div>
                  //     <span className="left_ranger w-7 h-7 bg-red-500 rounded-full block"></span>
                  //   </div>
                  <div>
                    <Slider
                      range={{
                        draggableTrack: true,
                      }}
                      defaultValue={[0, 90000000]}
                      max={90000000}
                      step={10}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div
            className={`fixed duration-500 ease-in-out transition-all z-[200] ${
              checkMenuFilter ? "right-[80%]" : "right-0"
            }`}
          >
            <button
              className="bg-blueDe text-2xl p-2 text-white font-bold lg:hidden md:hidden "
              onClick={handleDisplayFilters}
            >
              {checkMenuFilter ? <IoMdClose /> : <BsSliders />}
            </button>
          </div>

          <div className="lg:w-3/4 md:w-3/4 w-full">
            <div className="w-full">
              <h2 className="text-3xl font-semibold">Sản phẩm bán chạy</h2>
              <div className="flex items-center gap-x-3 justify-between py-4 border-b mb-5 ">
                <div className="flex items-center gap-x-3 text-base">
                  <BiFilterAlt />
                  <span>Sắp xếp theo</span>
                  <div className="items-center gap-x-3 lg:flex hidden">
                    {dataRaio?.map((item, index) => (
                      <div key={index} class="flex items-center">
                        <div class="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                          <input
                            aria-labelledby="label1"
                            type="radio"
                            name="radio"
                            class="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none cus_radio"
                          />
                          <div class="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"></div>
                        </div>
                        <label
                          id="label1"
                          class="ml-2 leading-4 font-normal text-gray-800"
                        >
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-x-3">
                  <span className="text-base">Xem</span>
                  <div className="flex w-full items-center">
                    <button
                      onClick={hanldeChangeView}
                      className={`flex items-center border px-3 py-2  rounded-lg hover:text-brown hover:border-brown gap-x-2 ${
                        checkView === false && "text-brown border-brown"
                      }`}
                    >
                      Lưới <TbLayoutGrid className="text-xl" />{" "}
                    </button>
                  </div>
                  <div className="flex w-full items-center">
                    <button
                      onClick={hanldeChangeView}
                      className={`flex items-center border px-3 py-2  rounded-lg hover:text-brown hover:border-brown gap-x-2 ${
                        checkView === true && "text-brown border-brown"
                      }`}
                    >
                      Cột <GoColumns className="rotate-90 text-xl" />
                    </button>
                  </div>
                </div>
              </div>
              {!isLoadingProductFilter && !checkView && (
                <AriticelsTabs
                  data={dataProductFilter}
                  className={"lg:w-[24%] md:w-[24%] w-1/2 border"}
                />
              )}
              {!isLoadingProductFilter && checkView && (
                <AriticelCol
                  data={dataProductFilter}
                  className={"w-full  border border-[#f5f5f6]"}
                />
              )}
            </div>
          </div>
        </article>
        <article></article>
      </section>
    </MainLayout>
  );
};
