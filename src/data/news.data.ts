export interface News {
  title: string;
  content: string;
  imageUrl: string;
  tags: string[];
  pushlishDate: Date;
}

export const LIST_NEWS_DATA: News[] = [
  {
    title: "KICiti tiếp tục nâng cao tính năng loyalty tiết kiệm của bạn",
    content:
      "Chúng tôi đã phát triển nhiều tính năng mới cho hệ thống Loyalty tiết kiệm của bạn. Bạn có thể xem chi tiết tại đây.",
    imageUrl: "/assets/news/1.png",
    tags: ["Loyalty", "Tính năng mới"],
    pushlishDate: new Date("2023-08-15"),
  },
  {
    title: "KICiti tiếp tục nâng cao tính năng loyalty tiết kiệm của bạn",
    content:
      "Chúng tôi đã phát triển nhiều tính năng mới cho hệ thống Loyalty tiết kiệm của bạn. Bạn có thể xem chi tiết tại đây.",
    imageUrl: "/assets/news/1.png",
    tags: ["Loyalty", "Tính năng mới"],
    pushlishDate: new Date("2023-08-15"),
  },
  {
    title: "KICiti tiếp tục nâng cao tính năng loyalty tiết kiệm của bạn",
    content:
      "Chúng tôi đã phát triển nhiều tính năng mới cho hệ thống Loyalty tiết kiệm của bạn. Bạn có thể xem chi tiết tại đây.",
    imageUrl: "/assets/news/1.png",
    tags: ["Loyalty", "Tính năng mới"],
    pushlishDate: new Date("2023-08-15"),
  },
];
