import Banner from "@/components/home/banner";
import Blogs from "@/components/home/blogs";
import News from "@/components/home/news";
import OurSolutions from "@/components/home/our-solutions";
import PointsToGifts from "@/components/home/points-to-gifts";
import RegisterForm from "@/components/home/register-form";
import TopPartner from "@/components/home/top-partner";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopPartner />
      <PointsToGifts />
      <OurSolutions />
      <Blogs />
      <News />
      <RegisterForm />
    </div>
  );
}
