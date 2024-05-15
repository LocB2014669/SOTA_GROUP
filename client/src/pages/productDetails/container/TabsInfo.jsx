import { useEffect, useRef, useState } from "react";

export const TabsInfo = ({ className, data, isLoading }) => {
  // console.log(dataProductId,"dataproduct");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const tabsData = [
    {
      title: "Thông tin sản phẩm",
      content: data?.motavi,
    },
    {
      title: "Chính sách bảo hành",
      content:
        "Đồng hồ chính hãng khác với đồng hồ Fake ở chỗ là nó luôn đi kèm với 1 chiếc THẺ hoặc 1 SỔ BẢO HÀNH toàn cầu có giá trị bảo hành theo từng thời gian quy định của từng hãng. THẺ hoặc SỔ BẢO HÀNH chính thức này được Ego Helios ghi đầy đủ và chính xác các thông tin của đồng hồ như: mã đồng hồ, nơi bán, ngày mua hàng. Thời gian bảo hành được tính từ ngày mua hàng được ghi trên THẺ hoặc SỔ BẢO HÀNH.",
    },
    {
      title: "Hướng dẫn chọn size",
      content:
        "Nhắc tới Rolex, ta không thể không nhắc tới 3 giá trị cốt lõi tạo nên tên tuổi của thương hiệu là độ chính xác, hiệu suất cao và tính thẩm mỹ. Trong mỗi sản phẩm của mình, Rolex đều rất chú trọng và thể hiện một cách xuất sắc những giá trị này. Ngày hôm nay, Gia Bảo Luxury xin giới thiệu tới quý khách mẫu đồng hồ Rolex Day-Date 36 128349RBR-0006 Mặt Số Đính Kim Cương là minh chứng rõ nhất cho những điều trên. Là một trong những cỗ máy thời gian thuộc bộ sưu tập Day-Date mới, được Rolex cho ra mắt trong năm nay, mẫu Rolex Day-Date 36 128349RBR-0006 sở hữu bộ vỏ từ vàng trắng cao cấp, mặt số tròn và vành bezel được nạm kín kim cương lấp lánh. Không những thế, trên nền mặt số trắng tinh khôi, hệ thống 10 cọc số được trang trí những viên sapphire với những màu sắc khác nhau tạo thành một dải cầu vồng tuyệt đẹp. Chi tiết ô cửa sổ thứ và ngày biểu tượng của dòng Day-Date được sắp xếp cân đối tại vị trí 12 giờ và 3 giờ tạo nên vẻ đẹp hoàn chỉnh cho đồng hồ. Sự chính xác và hiệu suất cao được thể hiện rõ nhất ở bộ máy tự động thế hệ mới - Caliber 3255 mà Rolex trang bị cho đồng hồ Rolex Day-Date 36 128349RBR-0006. Nhờ có bộ máy sở hữu chuẩn chất lượng Chronometer của tổ chức COSC, đi kèm chứng nhận Superative Chronometer của riêng Rolex mà đồng hồ có thể hoạt động liên tục và chính xác trong 70 giờ, giúp người dùng có những trải nghiệm tuyệt vời hơn.",
    },
    {
      title: "Video sản phẩm",
      content:
        "Nhắc tới Rolex, ta không thể không nhắc tới 3 giá trị cốt lõi tạo nên tên tuổi của thương hiệu là độ chính xác, hiệu suất cao và tính thẩm mỹ. Trong mỗi sản phẩm của mình, Rolex đều rất chú trọng và thể hiện một cách xuất sắc những giá trị này. Ngày hôm nay, Gia Bảo Luxury xin giới thiệu tới quý khách mẫu đồng hồ Rolex Day-Date 36 128349RBR-0006 Mặt Số Đính Kim Cương là minh chứng rõ nhất cho những điều trên. Là một trong những cỗ máy thời gian thuộc bộ sưu tập Day-Date mới, được Rolex cho ra mắt trong năm nay, mẫu Rolex Day-Date 36 128349RBR-0006 sở hữu bộ vỏ từ vàng trắng cao cấp, mặt số tròn và vành bezel được nạm kín kim cương lấp lánh. Không những thế, trên nền mặt số trắng tinh khôi, hệ thống 10 cọc số được trang trí những viên sapphire với những màu sắc khác nhau tạo thành một dải cầu vồng tuyệt đẹp. Chi tiết ô cửa sổ thứ và ngày biểu tượng của dòng Day-Date được sắp xếp cân đối tại vị trí 12 giờ và 3 giờ tạo nên vẻ đẹp hoàn chỉnh cho đồng hồ. Sự chính xác và hiệu suất cao được thể hiện rõ nhất ở bộ máy tự động thế hệ mới - Caliber 3255 mà Rolex trang bị cho đồng hồ Rolex Day-Date 36 128349RBR-0006. Nhờ có bộ máy sở hữu chuẩn chất lượng Chronometer của tổ chức COSC, đi kèm chứng nhận Superative Chronometer của riêng Rolex mà đồng hồ có thể hoạt động liên tục và chính xác trong 70 giờ, giúp người dùng có những trải nghiệm tuyệt vời hơn.",
    },
    {
      title: "Đánh giá",
      content:
        "Nhắc tới Rolex, ta không thể không nhắc tới 3 giá trị cốt lõi tạo nên tên tuổi của thương hiệu là độ chính xác, hiệu suất cao và tính thẩm mỹ. Trong mỗi sản phẩm của mình, Rolex đều rất chú trọng và thể hiện một cách xuất sắc những giá trị này. Ngày hôm nay, Gia Bảo Luxury xin giới thiệu tới quý khách mẫu đồng hồ Rolex Day-Date 36 128349RBR-0006 Mặt Số Đính Kim Cương là minh chứng rõ nhất cho những điều trên. Là một trong những cỗ máy thời gian thuộc bộ sưu tập Day-Date mới, được Rolex cho ra mắt trong năm nay, mẫu Rolex Day-Date 36 128349RBR-0006 sở hữu bộ vỏ từ vàng trắng cao cấp, mặt số tròn và vành bezel được nạm kín kim cương lấp lánh. Không những thế, trên nền mặt số trắng tinh khôi, hệ thống 10 cọc số được trang trí những viên sapphire với những màu sắc khác nhau tạo thành một dải cầu vồng tuyệt đẹp. Chi tiết ô cửa sổ thứ và ngày biểu tượng của dòng Day-Date được sắp xếp cân đối tại vị trí 12 giờ và 3 giờ tạo nên vẻ đẹp hoàn chỉnh cho đồng hồ. Sự chính xác và hiệu suất cao được thể hiện rõ nhất ở bộ máy tự động thế hệ mới - Caliber 3255 mà Rolex trang bị cho đồng hồ Rolex Day-Date 36 128349RBR-0006. Nhờ có bộ máy sở hữu chuẩn chất lượng Chronometer của tổ chức COSC, đi kèm chứng nhận Superative Chronometer của riêng Rolex mà đồng hồ có thể hoạt động liên tục và chính xác trong 70 giờ, giúp người dùng có những trải nghiệm tuyệt vời hơn.",
    },
  ];
  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div className={`${className}`}>
      <div className="relative">
        <div className="flex w-full lg:justify-between md:justify-between justify-normal border-b lg:overflow-y-visible overflow-y-auto">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className={`pt-2 p-3 lg:text-nowrap md:text-wrap text-nowrap text-[14px] hover:bg-blueDe hover:text-white px-6 ${
                  idx == activeTabIndex
                    ? "bg-blueDe text-white"
                    : "bg-transparent text-soft"
                }`}
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.title}
              </button>
            );
          })}
        </div>
      </div>
      {!isLoading && (
        <div className="py-4">
          <div className="text-[14px] my-5 text-left leading-[1.5]">
            {tabsData[activeTabIndex].content}
          </div>
        </div>
      )}
    </div>
  );
};
