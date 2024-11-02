export interface PointToGift {
  title: string;
  description?: string;
  imageUrl: string;
  colSpan: number;
  width?: number;
  height?: number;
}

export const POINTS_TO_GIFTS_DATA: PointToGift[] = [
  {
    title: "Nền tảng Loyalty tiết kiệm, mang tới hiệu quả vượt trội",
    imageUrl: "/assets/points-to-gifts/1.png",
    colSpan: 1,
  },
  {
    title: "Kết nối khách hàng với quà tặng miễn phí, trò chơi hấp dẫn",
    imageUrl: "/assets/points-to-gifts/2.png",
    colSpan: 1,
  },
  {
    title:
      "Bộ công cụ nâng cao giúp phát triển tương tác thị trường với người dùng cuối",
    imageUrl: "/assets/points-to-gifts/3.png",
    colSpan: 1,
  },
  {
    title: "Tăng trưởng tối đa - Quản lý tất cả trong một",
    description:
      "Theo dõi, phân tích và thúc đẩy lòng trung thành của khách hàng với  công cụ quản lý toàn diện",
    imageUrl: "/assets/points-to-gifts/4.png",
    colSpan: 3,
    width: 600,
    height: 300,
  },
];
