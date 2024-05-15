import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const BreadCrumbs = ({ dataCrumbs, className }) => {
  const data = [
    {
      title: "Trang chủ",
      href: "/home",
    },
    {
      title: "Trang chủ",
      href: "/home",
    },
    {
      title: "Trang chủ",
      href: "/home",
    },
  ];
  return (
    <div className={``}>
      <ul className="flex items-center gap-x-3 z-[999] my-5">
        {data?.map((item, index) => (
          <div  key={index}  className="flex items-center gap-x-3">
            <li className=" text-sm text-[#777777]">
              <Link to={`${item.href}`} className="hover:text-brown">{item?.title}</Link>
            </li>

            <MdKeyboardDoubleArrowRight />
          </div>
        ))}
      </ul>
    </div>
  );
};
