import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllProduct } from "../../services/productAPI";
import { MainLayout } from "../../components/MainLayout";
import stable from "../../constants/Stable";

export const TestPage = () => {
  const { data } = useQuery({
    queryFn: () => getAllProduct({}),
    queryKey: ["product"],
    onSuccess: (data) => {},
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  return (
    <div>
      <h1>TEsttttttttttttttt</h1>
      <div>
        {data?.map((item, index) => (
          <div key={index}>
            <img src={stable.UPLOAD_THUMBS_PRODUCT + item?.photo} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
