import React from "react";
import { stable } from "../../../constants";

export const ArticlesNews = ({ data }) => {
  // console.log(data, "datanew");
  return (
    <div>
      <div>
        <div className="w-full">
          <img
            src={stable.UPLOAD_THUMBS_NEWS + data?.photo}
            className="w-full"
            alt=""
          />
        </div>
        <div>
          <span className="text-[#8C8C8C] text-[14px]">
            {/* {data.ngaytao} */}
            {new Date(data.ngaytao).toLocaleDateString("vi-VN", {
              weekday: "short",
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
          <h2 className="text-sm font-semibold">{data?.title}</h2>
        </div>
      </div>
    </div>
  );
};
