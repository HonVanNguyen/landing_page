"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Registerchema } from "@/schemas/resgister.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoveRightIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";

const RegisterForm = () => {
  const form = useForm<z.infer<typeof Registerchema>>({
    resolver: zodResolver(Registerchema),
  });

  const onSubmit = (values: z.infer<typeof Registerchema>) => {
    const body = {
      email: values.email,
      password: "values.password",
    };
    fetch("https://api.kiciti.com/api/merchant/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.ok) {
        alert("Đăng ký thành công!");
      } else {
        alert("Đăng ký thất bại!");
      }
    });
  };

  return (
    <div className="flex w-full items-center justify-normal">
      <div className="container flex h-full w-full flex-col items-center justify-center gap-10 p-5 md:gap-20 md:p-20">
        <Text as="h2" size="5xl" className="text-center font-bold">
          Hợp tác cùng KICITI nâng cấp trải nghiệm khách hàng của bạn! 
        </Text>
        <div className="h-full w-full rounded-xl bg-primary px-8 py-12 shadow-md lg:max-w-[920px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="h-12 bg-white"
                        placeholder="Họ và tên [*]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="h-12 bg-white"
                        placeholder="Email [*]"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="h-12 bg-white"
                        placeholder="Số điện thoại [*]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="h-12 bg-white"
                        placeholder="Chức vụ [*]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="h-12 bg-white"
                        placeholder="Tên công ty [*]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="h-12 bg-white"
                        placeholder="Website công ty hoặc fanpgae"
                        type="url"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="h-12 bg-white"
                        placeholder="Dịch vụ quan tâm [*]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyNeeds"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="h-12 bg-white"
                        placeholder="Nhu cầu doanh nghiệp"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="privacyPolicy"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox
                        className="mt-[8px] h-6 w-6 border-gray-500"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>
                      Bằng cách gửi biểu mẫu này, tôi đồng ý với các{" "}
                      <Link className="text-blue-600" href={"/privacy-policy"}>
                        điều khoản và điều khoản riêng tư của KICITI.
                      </Link>
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex w-full items-center justify-center">
                <Button
                  className="mt-10 py-5 font-bold uppercase text-primary"
                  type="submit"
                  variant="outline"
                >
                  Gửi đăng ký <MoveRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
