import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { NavItem } from "./NavItem";
import { getAllCate } from "../services/categoryAPI";
import { useQuery } from "@tanstack/react-query";
import { getAllBrand } from "../services/productAPI";
import axios from "axios";
import { stable } from "../constants";

export const Header = ({ className }) => {
  const [dataDrop, setDataDrop] = useState([]);
  const [dataBrand, setDataBrand] = useState([]);
  const [checkShowSeasrch, setCheckShowSeasrch] = useState(false);
  const handleShowSearch = () => {
    setCheckShowSeasrch(!checkShowSeasrch);
  };
  useEffect(() => {
    axios
      .get("https://sota-group-thto-5snt84q2t-locb2014669s-projects.vercel.app/backend/api/product_list.php")
      .then((response) => {
        setDataDrop(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://sota-group-thto-5snt84q2t-locb2014669s-projects.vercel.app/backend/api/product_brand.php")
      .then((response) => {
        setDataBrand(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [navIsVisible, setNavIsVisible] = useState(false);
  const hanldermenu = (curTate) => {
    setNavIsVisible(!curTate);
  };
  const [slideNavHader, setSlideNavHader] = useState([
    "0px",
    "-190px",
    "-365px",
  ]);
  const [value, setValue] = useState(0);
  const setDownMLNavItem = (value) => {
    if (value > 2) {
      value = 2;
    }
    setValue(value + 1);
    // setSlideNavHader[value];
  };
  const setPlusMLNavItem = (value) => {
    if (value < 0) {
      value = 0;
    }
    setValue(value - 1);
    // setSlideNavHader[value];
  };
  const navItemInfo = [
    {
      id: "1",
      name: "Trang Chủ",
      check: true,
      type: "link",
    },
    {
      id: "2",
      name: "Thương hiệu nổi bật",
      iconDropDown: <IoChevronDownOutline />,
      type: "dropDown",
      dataDrop: dataBrand.filter((item) => item.noibat != 1),
      check: false,
    },
    {
      id: "3",
      name: "Tin tức",
      check: false,
      type: "link",
    },
    {
      id: "4",
      name: "Hệ thống cửa hàng",
      check: false,
      type: "link",
    },
    {
      id: "5",
      name: "Liên hệ",
      check: false,
      type: "link",
    },
    {
      id: "6",
      name: "Sản phẩm",
      iconDropDown: <IoChevronDownOutline />,
      check: false,
      type: "dropDownRow",
      dataDrop: dataDrop,
    },
    {
      id: "7",
      name: "Chính sách bán hàng",
      check: false,
      type: "link",
    },
    {
      id: "8",
      name: "Hướng dẫn chọn size",
      check: false,
      type: "link",
    },
  ];

  return (
    <section className={`border-b`}>
      <header className={`relative w-full h-full lg:px-0 md:px-3 ${className}`}>
        <nav className="flex items-center justify-between w-full h-full">
          <div className="flex items-center lg:justify-normal md:justify-normal justify-between gap-x-5 h-full w-full">
            <div>
              <img
                className="md:w-32 lg:h-[38px]"
                src={stable.UPLOAD_THUMBS_BANNER + stable.STABLE_LOGO}
                alt=""
              />
            </div>

            <div
              className={`flex-col transition-all duration-500 bg-white lg:bg-transparent md:bg-transparent mt-[0] lg:mt-0 md:mt-0 z-[1000] fixed lg:static md:static justify-start lg:justify-between md:justify-between top-0 bottom-0 flex lg:flex-row md:flex-row  lg:gap-x-5 items-center lg:max-w-[800px] md:max-w-[650px] ${
                navIsVisible ? "left-0 w-4/5" : "-left-full w-full"
              } `}
            >
              <div className="overflow-hidden w-full inline-grid">
                <div className="flex lg:hidden md:hidden w-full text-white font-bold">
                  <button className="w-1/2 bg-[#2a3f50] px-2 py-1">
                    Đăng nhập
                  </button>
                  <button className="w-1/2 bg-[#2a3f50] px-2 py-1">
                    Đăng ký
                  </button>
                </div>

                <div className="relative contents">
                  {/* {!isLoading && ( */}
                  <ul
                    className={`  lg:flex-row md:flex-row flex-col flex lg:items-center md:items-center items-start justify-between gap-x-3 lg:w-[1090px] md:w-[1090px] duration-200 `}
                    style={{ marginLeft: slideNavHader[value] }}
                  >
                    {navItemInfo.map((item) => (
                      <NavItem key={item.id} item={item} />
                    ))}
                  </ul>
                  {/* )} */}
                </div>
              </div>

              <div className="lg:flex md:flex hidden justify-center items-center gap-x-2">
                <button onClick={() => setPlusMLNavItem(value)}>
                  <GoChevronLeft />
                </button>
                <button onClick={() => setDownMLNavItem(value)}>
                  <GoChevronRight />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between lg:gap-x-3 md:gap-x-3 gap-x-5">
            <div className="w-7 h-7 flex items-center justify-center text-white font-semibold rounded-full bg-[#2a3f50]">
              <IoIosSearch onClick={handleShowSearch} />
              <div
                className={`relative duration-200 transition-all ease-in-out ${
                  !checkShowSeasrch
                    ? "invisible w-0 opacity-0"
                    : "visible w-[300px] opacity-100 z-[1000] "
                }`}
              >
                <div className="w-[300px] flex items-center absolute right-[-7px] top-[-18px]">
                  <IoMdClose onClick={handleShowSearch} className="absolute left-2 text-xl z-[500] text-black font-bold" />
                  <input
                    type="text"
                    placeholder="Nhập từ khóa tìm kiếm...."
                    className="py-1 w-[300px] rounded-full pl-10 border border-[#ebebeb] text-black outline-none"
                  />
                  <IoIosSearch  className="absolute right-2 text-xl z-[500] text-black font-bold" />
                </div>
              </div>
            </div>
            <div className="relative group w-7 h-7 lg:flex md:flex hidden items-center justify-center text-white font-semibold rounded-full bg-[#2a3f50]">
              <CiUser />
              <div className="bg-[#fff] text-[#231f20] hidden group-hover:block w-[200px] absolute top-[39px] right-0 z-50 menu_acc">
                <ul className="p-2 text-sm">
                  <li>
                    <a className="hover:text-brown" href="">
                      Đăng nhập
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-brown" href="">
                      Đăng ký
                    </a>
                  </li>

                  <li>
                    <a className="hover:text-brown" href="">
                      Yêu thích
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-7 h-7 flex items-center justify-center text-white font-semibold rounded-full bg-[#2a3f50] relative">
              <span className="absolute top-[1px] -right-2 text-xs bg-[#2a3f50] w-7 h-4 rounded-md text-right pr-1">
                0
              </span>
              <IoBagOutline className="z-40" />
            </div>
            <div className="duration-200 lg:hidden md:hidden">
              {navIsVisible ? (
                <IoMdClose
                  onClick={() => hanldermenu(navIsVisible)}
                  className="w-7 h-7 duration-200"
                />
              ) : (
                <RiMenu3Line
                  onClick={() => hanldermenu(navIsVisible)}
                  className="w-7 h-7 duration-200"
                />
              )}
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
};
