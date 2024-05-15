import React from "react";
import { MainLayout } from "../../components/MainLayout";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { SlidePhotoProduct } from "./container/SlidePhotoProduct";
import { InfoProduct } from "./container/InfoProduct";
import { TabsInfo } from "./container/TabsInfo";
import { InfoExtra } from "./container/InfoExtra";
import { ProductRelate } from "./container/ProductRelate";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { getPhotoGallery, getProductById } from "../../services/productAPI";

export const ProductDetailPage = () => {
  const { productId } = useParams();
  const { data: dataProductId, isLoading } = useQuery({
    queryFn: () => getProductById({ productId }),
    queryKey: ["productById", productId],
    onSuccess: (data) => {},
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  const { data: dataPhotoGallery, isLoading: isLoadingGallery } = useQuery({
    queryFn: () => getPhotoGallery({ productId }),
    queryKey: ["photoGallery", productId],
    onSuccess: (data) => {},
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  // console.log(dataOuts, "dataoust");
  console.log(dataProductId, "ddddddddddd");
  const navigate = useNavigate();
  return (
    <MainLayout>
      <section className="max-w-6xl mx-auto">
        <article>
          <BreadCrumbs dataCrumbs={""} />
          <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-x-5">
            <SlidePhotoProduct
              data={dataPhotoGallery}
              isLoading={isLoadingGallery}
            />
            <InfoProduct data={dataProductId} isLoading={isLoading} />
          </div>
        </article>
        <article className="flex lg:flex-row md:flex-row flex-col justify-between gap-x-5 my-10">
          <TabsInfo
            className={"lg:w-2/3 md:w-2/3 w-full"}
            data={dataProductId}
            isLoading={isLoading}
          />
          <InfoExtra className={"lg:w-1/3 md:w-1/3 w-full"} />
        </article>
        <article className="my-10">
          <ProductRelate data={dataProductId} isLoading={isLoading} />
        </article>
      </section>
    </MainLayout>
  );
};
