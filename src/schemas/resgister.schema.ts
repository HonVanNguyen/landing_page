import { z } from "zod";

export const Registerchema = z.object({
  name: z.string().min(1, "Vui lòng nhập Họ và tên"),
  email: z.string().email("Vui lòng nhập đúng định dạng email"),
  phone: z.string().min(10, "Vui lòng nhập số điện thoại"),
  position: z.string().min(1, "Vui lòng nhập chức vụ"),
  companyName: z.string().min(1, "Vui lòng nhập tên công ty"),
  companyUrl: z
    .string()
    .min(1, "Vui lòng nhập địa chỉ website hoặc fanpage công ty"),
  service: z.string().min(1, "Vui lòng chọn dịch vụ quan tâm"),
  companyNeeds: z.string().min(1, "Vui lòng mô tả nhu cầu của công ty"),
  privacyPolicy: z.boolean().refine((value) => value === true, {
    message: "Vui lòng đồng ý với điều khoản và điều kiện",
  }),
});
