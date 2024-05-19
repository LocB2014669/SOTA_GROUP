import React from "react";

export const OrderProfile = ({ data }) => {
  const dataTableHead = [
    {
      id: 1,
      title: "Đơn hàng",
    },
    {
      id: 2,
      title: "Ngày",
    },
    {
      id: 3,
      title: "Địa chỉ",
    },
    {
      id: 4,
      title: "Giá trị đơn hàng",
    },
    {
      id: 5,
      title: "TT thanh toán",
    },
    {
      id: 6,
      title: "TT vận chuyển",
    },
    {
      id: 7,
      title: "Mua hàng tại",
    },
  ];
  return (
    <div>
      <h2>Đơn hàng của bạn</h2>
      <table className="text-left w-full border">
        <thead className="bg-brown flex text-white w-full text-center">
          <tr className="flex w-full">
            {dataTableHead?.map((item) => (
              <th
                key={item?.id}
                className=" w-1/4 border-r border-hard text-sm"
              >
                {item?.title}
              </th>
            ))}

            {/* <th className=" w-1/4 border-r border-hard">One</th>
            <th className=" w-1/4 border-r border-hard">One</th>
            <th className=" w-1/4 border-r border-hard">One</th>
            <th className=" w-1/4 border-r border-hard">One</th>
            <th className=" w-1/4 border-r border-hard">One</th>
            <th className=" w-1/4">Four</th> */}
          </tr>
        </thead>

        <tbody className="bg-grey-light flex flex-col items-center justify-between w-full max-h-96">
          {/* <tr className="flex w-full mb-4 text-center">
            <td className=" w-1/4">Dogs</td>
            <td className=" w-1/4">Cats</td>
            <td className=" w-1/4">Birds</td>
            <td className=" w-1/4">Fish</td>
            <td className=" w-1/4">Fish</td>
            <td className=" w-1/4">Fish</td>
            <td className=" w-1/4">Fish</td>
          </tr> */}
          {data.length === 0 && (
            <tr className="flex w-full justify-center py-5">
              <td className=" w-1/4 col-span-7 ">Không có đơn hàng nào</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
